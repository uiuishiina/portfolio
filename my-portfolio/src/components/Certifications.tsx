import { certifications, type CerStatus, type Certification } from "../data/PortFolio"

const STATUS_CONFIG :
Record<CerStatus,{color:string;bg:string;border:string}>={
    '取得済み':{
        color:'#4ADE80',
        bg:'rgba(74,222,128,0.1)',
        border:'rgba(74,222,128,0.3)'
    },
    '受験予定':{
        color:'#4a77eaf5',
        bg:'rgba(74,222,128,0.1)',
        border:'rgba(74,222,128,0.3)'
    },
    '取得予定':{
        color:'#e8d44e',
        bg:'rgba(74,222,128,0.1)',
        border:'rgba(74,222,128,0.3)'
    },
    '学習中':{
        color:'#de744a',
        bg:'rgba(74,222,128,0.1)',
        border:'rgba(74,222,128,0.3)'
    }
}

{/*ステータスを文字に変換する*/}
function StatusBadge({status}:{status:CerStatus}){

    const cfg = STATUS_CONFIG[status]
    return (
        <span 
            className = "cert-status"
            style = {{color:cfg.color,
                background:cfg.bg,
                border:cfg.border
            }}>
            {status}
        </span>
    )
}

function CertRow({cert}:{cert:Certification}){
    return(
        <div className = "cert-row">
            <div className = "cert-icon"></div>
            <div className = "cert-main">
                <div className = "cert-name-row">
                    <p className = "cert-name">{cert.name}</p>
                    {cert.score && <span className = "cert-score">{cert.score}</span>}
                </div>
                <p className = "cret-data">{cert.date}</p>
            </div>

            <div className = "cert-meta">
                <span className = "cert-category">{cert.category}</span>
            </div>

            <StatusBadge status = {cert.status}/>
        </div>
    )
}

export default function Certifications(){

    return (
        <section className = "section" id = "certifications">
            <div className = "container">
                <h2 className = "sectoin-title">
                    <span>Certificatons</span>
                </h2>
                <p className = "section-sub">資格・実績</p>

                <div className = "cert-list">
                    {certifications.length > 0 && 
                        certifications.map((cert,i)=>(
                            <CertRow key = {i} cert = {cert}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}