import { Link, Meta, Navigate, useParams } from "react-router-dom";
import { works } from "../data/PortFolio";
import SafeImage from "../components/SafeImage";
import type { ReactNode } from "react";


function Section({title,children}:{title:string;children:ReactNode}){

    return (
        <div className = "wd-section">
            <h2 className = "wd-section-title">{title}</h2>
            <div className ="wd-section-body">{children}</div>
        </div>
    )
}

function MetaRow({label,value}:{label:string;value:string | undefined}){
    return (
        <div className = "wd-meta-row">
            <dt className = "wd-meta-label">{label}</dt>
            <dd className = "wd-meta-value">{value}</dd>
        </div>
    )
}

export default function WorkDetail(){

    const {id} = useParams()
    const work = works.find((w)=>w.id === Number(id))

    {/*存在しないならトップへ戻す*/}
    if(!work)return <Navigate to="/" replace/>

    return (
        <div className = "wd-page">
            <div className  = "container">
                <Link to = "/#works" className = "wd-back">
                ←作品一覧に戻る
                </Link>

                <div className = "wd-hero">
                    <div className = "thumbnail">
                        <SafeImage 
                        src = {work.thumbnail}
                        alt = {work.title}
                        fallback = "No Image..."
                    />
                    </div>

                    <div className = "wd-hero-info">
                        <p className = "work-category-badge">
                            {work.gener}
                        </p>
                        <h1 className = "wd-title">{work.title}</h1>
                        <p className = "wd-desctiption">{work.designNotes}</p>
                    </div>
                </div>

                <section title="基本情報">
                    <dl className  = " wd-meta-grid">
                        <MetaRow label = "製作期間" value = {work.period}/>
                        <MetaRow label = "チーム構成" value = {work.team}/>
                        <MetaRow label = "担当箇所" value = {work.role}/>
                        <MetaRow label = "プラットフォーム"
                         value = {work.platform?.join(' / ')}/>
                    </dl>
                </section>

                <div className = "wd-tech-grid">
                    {work.techPoints && (
                        <section title ="こだわった技術ポイント">
                            <p className = "wd-text">{work.techPoints}</p>
                        </section>
                    )}
                    {work.designNotes && (
                        <section title ="設計上の工夫">
                            <p className = "wd-text">{work.designNotes}</p>
                        </section>
                    )}
                    {work.implmntationTheme && (
                        <section title ="実装解説">
                            <p className = "wd-text">{work.implmntationTheme}</p>
                        </section>
                    )}
                    {work.troublesooting && (
                        <section title ="詰まった問題と技術解決">
                            <p className = "wd-text">{work.troublesooting}</p>
                        </section>
                    )}
                    {work.perfformance && (
                        <section title ="パフォーマンス改善の工夫">
                            <p className = "wd-text">{work.perfformance}</p>
                        </section>
                    )}
                    
                </div>
            </div>
        </div>
    )
}