import { profile } from "../data/PortFolio";

{/* -- 自己紹介 -- */}
export default function Hero(){

    return (
        <section className = "hero section" id = "hero">
            <div className = "container">
                {/* -- アイコン -- */}
                <div className = "avatar-placeholder"></div>
                {/* -- タイトル -- */}
                <p className = "hero-eyebrow">my_PortFolio</p>
                {/* -- 名前 -- */}
                <h1 className = "hero-name">
                    <span className = "gradient">{profile.name}</span>
                    <span className = "hero-name-en">{profile.nameEn}</span>
                </h1>
                {/* -- 役職 -- */}
                <p className = "hero-role">{profile.role}</p>
                {/* -- モットー -- */}
                {profile.motto && (
                    <blockquote className = "hero-motto">
                        <span className = "hero-motto-mark">"</span>
                        {profile.motto}
                        <span className = "hero-motto-mark">"</span>
                    </blockquote>
                )}
                {/* -- 導線 -- */}
                <div className = "hero-actions">
                    <a href = "#work" className = "btn btn-primary">制作物を見る ➡</a>
                    <a href = "#contact" className = "btn btn-outline">連絡先はこちら ➡</a>
                </div>
            </div>
            <div className = "hero-scroll">Scroll</div>
        </section>
    )
}