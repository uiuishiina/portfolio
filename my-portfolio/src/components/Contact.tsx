import type { ReactNode } from "react";
import { profile } from "../data/PortFolio"
import { FaGithub } from "react-icons/fa";


export default function Contact(){

    const links:{label:string; icon:ReactNode;href:string}[]=[
        {label:'Github',icon:<FaGithub/>,href: profile.links.github},
   ]

    return(
        <section className = "section" id = "contact">
            <div className = "conotiner">
                <div contact-inner>
                    <h2 className = "section-title">
                        <span>Contact</span>
                    </h2>
                    <p className = "section-sub">連絡先</p>

                    <p className = "contact-desc">
                        連絡先はこちら
                    </p>
                    <div className = "contact-link">
                        {links
                            .filter((link):link is typeof link
                            & {href:string}=>link.href !== null)
                            .map((link)=>(
                            <a 
                                key = {link.label}
                                href = {link.href}
                                className = "cocntact-link-item"
                                target={link.href.startsWith('mailto')?
                                undefined:'_brank'} 
                                rel = "noreferror"
                            >
                                <span className = "contact-link-icom">
                                    {link.icon}
                                </span>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}