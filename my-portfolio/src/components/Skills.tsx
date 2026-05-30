import { useState } from "react"
import { skills, type Skill } from "../data/PortFolio"

const CATEGORY_LEVELS:Record<string,string>={
    all:'すべて',
    game:'ゲーム'
}

interface LevelConfig{
    max:number
    label:string
    color:string
}

const LEVEL_CONFIG:LevelConfig[]=[
    {max:40,label:'学習中',color:'#888'}
]

function getlevelconfig(level:number):LevelConfig{
    return LEVEL_CONFIG.find((l) => level < l.max)??LEVEL_CONFIG.at(-1)!
}

function SkillCrad({skill}:{skill:Skill}){
    const config = getlevelconfig(skill.level);
    return (
        <div className = "skill-card">
            <div className = "skill-card-title-header">
                <div className = "skill-card-title-row">
                    <span className = "skill-card-name">(skill.name)</span>
                    <span className = "skill-card-name">(skill.version)</span>
                </div>
            </div>
        </div>
    )
}

export default function Skills(){

    const [active,setActiveCategory] = useState('all')
    const categories = ['all', ...new Set(skills.map((s)=>(
        s.category
    )))]

    const filtered = active === 'all'
    ?skills:skills.filter((s)=>s.category === active);

    return(
        <section className = "section" id ="skills">
            <div className = "continer">
                <h2 className = "section-title">
                    <span>Skills</span>
                </h2>
            </div>
            <p className = "section-sub">技術スタック</p>
            <div className = "skills-categories">
                {categories.map((cat)=> (
                    <button key = {cat}
                    className = {`skill-filter-btn
                        ${active === cat ? "active":""}`
                    }
                    onClick={()=>setActiveCategory(cat)}>

                    {CATEGORY_LEVELS[cat]??cat}
                    </button>
                ))}
            </div>

            <div className = "Skill-grad">
                {filtered.map((skill) => (
                    <SkillCrad key = {skill.name} skill= {skill}/>
                ))}
            </div>
        </section>
    )
}