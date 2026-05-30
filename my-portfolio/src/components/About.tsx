import { profile, timelineitems } from "../data/PortFolio";

export default function About(){
    return(
        <section className = "section" id = "about">
            <div className = "container">
                <h2 className = "section-title">
                    <span>About</span>
                </h2>

                <p className = "section-sub">自己紹介</p>
                <div className = "about-grid">
                    <div className = "avout-card">
                        <h3>Profile</h3>
                        <p className = "about-bio">
                        {profile.bio}
                        </p>

                        <dl className = "profile-school">
                            <div className = "profile-school-row">
                                <dt>学校</dt>
                                <dd>{profile.school}</dd>
                            </div>

                            <div className = "profile-school-row">
                                <dt>学科</dt>
                                <dd>{profile.department}</dd>
                            </div>

                            <div className = "profile-school-row">
                                <dt>卒業</dt>
                                <dd className = "profile-graduation">{profile.graduationYear}</dd>
                            </div>
                
                        </dl>
                    </div>  
                    <div className = "about-card">
                        <h3>TimeLine</h3>
                        <ul className = "timeline">
                            {timelineitems.map((item,index)=>
                            <li key = {index}>
                                <p className = "timeline-year">
                                    {item.year}
                                </p>
                                <p className = "timeline-event">
                                    {item.event}
                                </p>
                            </li>
                            )}                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}