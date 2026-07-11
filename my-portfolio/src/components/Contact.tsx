
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/PortFolio";

export default function Contact() {
    const links : {label : string; icon : ReactNode; href : string | null}[]=[
        {label : "GitHub", icon : <FaGithub/>, href : profile.links.github},
    ]

    return (
        <section className = "section" id = "contact">
            <div className = "container">
                <div className = "contact-inner">
                    <h2 className = "section-title">
                        <span>Contact</span>
                    </h2>
                    <p className = "section-sub">連絡先</p>
                    <p className = "contact-desc">
                        スカウト・インターンの募集など、
                        お気軽にご連絡ください。
                        <br/>
                        学生の身のため返信にお時間をいただく場合がございます。
                        <br/>
                        ご了承ください。
                    </p>
                    <div className = "contact-links">
                        { links
                        .filter( (link): link is typeof link & {href : string} => link.href !== null)
                        .map( (link) => (
                            <a key = {link.label}
                            href = {link.href}
                            className = "contact-link-item"
                            target = {link.href.startsWith('mailto:') ? undefined : "_blank"}
                            rel = "noreferrer"
                        >
                            <span className = {`contact-link-icon ${link.icon}`}/>
                            {link.label}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}