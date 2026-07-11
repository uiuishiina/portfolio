import { useState } from "react";

interface Props{
    src : string | null;
    alt : string;
    className? : string;
    fallback : React.ReactNode;
}

export default function SafeImage({src, alt, className, fallback} : Props) {
    const [failed, setFailed] = useState(false)
    if(!src || failed) return <span>{fallback}</span>
    return(
        <img 
            src={src || undefined} 
            alt={alt} 
            className={className}
            onError={() => setFailed(true)}
        />
    )
}