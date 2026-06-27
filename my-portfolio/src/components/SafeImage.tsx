import { useState } from "react"

interface Props{
    src: string | null
    alt: string
    className?: string
    fallback: string
}

export default function SafeImage
    ({src,alt,className,fallback}: Props){

        //  読み込み処理
        const [failed,setFaled]= useState(false)

        //  srcがnullまたは読み込みに失敗したらファールバックを表示する
        if(!src || failed)return <span>{fallback}</span>

        return (
            <img
                src={src}
                alt={alt}
                className={className}
                onError={() => setFaled(true)}
            />
        )
}