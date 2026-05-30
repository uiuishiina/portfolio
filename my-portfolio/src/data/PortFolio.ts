//プロフィール情報定義
export interface Profile{
    name: string            //名前(漢字)
    nameEn: string          //名前(ローマ字)
    role: string            //ロール
    school: string          //学校名
    department: string      //専攻名
    graduationYear: string  //卒業年度
    bio: string             //自己紹介文
    motto: string           //座右の銘
    avater: string          //顔写真等
    links:{
        github:string       //GitHubリンク
        twitter:string|null //Xリンク
    }
}
 
//スキル
export interface Skill{
    name:string             //名前
    version:string          //バージョン
    level:number            //スキルレベル
    category:string         //カテゴリ－
    capabilities:string     //できること
    note:string|null        //実装経験
}
 
//詳細情報
export interface Venue{
    name:string             //名前
    date:string             //日時
}
 
//作品パート
export interface Work{
    id: number              //連番
    title:string            //タイトル
    gener:string            //ジャンル
    category:string         //カテゴリー
    thumbnail:string        //サムネ
    screenshots:string[]    //スクリーンショット
    tags:string[]           //タグ
    platform:string[]       //プラットフォーム
    period:string           //期間
    team:string             //作成チーム情報    
    role:string             //担当箇所
    github:string           //GitHubリンク
    link:string             //公開リンク
    venues:Venue[]          //出展・公開先
    techPoints:string|null  //ポイント
    designNotes:string|null //工夫
    implmntationTheme:string|null   //テーマ
    troublesooting:string|null      //問題・解決
    perfformance:string|null        //パフォーマンス工夫
}
 
export interface GameJam{
    name:string             //名前
    date:string             //日時
    theme:string            //情報
    description:string      //作品詳細
    platform:string         //プラットフォーム
    role:string             //担当箇所
    team:string             //チーム情報
    result:string|null      //結果
    url:string|null         //リンク
    reflection:string       //学び
}
 
export type CerStatus="取得済み"|"受験予定"|"取得予定"|"学習中";
 
//資格情報
export interface Certification{
    name:string
    date:string
    category:string
    score:string
    status:CerStatus
}
 
export interface TimeLineItem{
    year:string
    event:string
}
 
export const profile:Profile = {
    name: "林 煌之介",
    nameEn: "KOunosuke Hayashi",
    role: "プログラマー",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーAI＆テクノロジー科",
    graduationYear: "2028年3月予定",
    bio: "反省と改善を常に続けながら前に進んでいくプログラマーです。具体例としてオブジェクトを反射する挙動を作成した際に、期待していた反射の挙動と実際の挙動が食い違っていたことがありました。速度パラメーターの修正や反射する際の計算処理の調整を繰り返し、最終的に想定していた挙動に近い動きが出来たことにとても達成感を感じました。それ以降、自分には困難なことでも少しづつ前に進んでいくことができるようになりました。最近はDirectX12の描画にいたるまでのプロセスや描画に必要なリソース・昨今のシェーダーの工夫などを通して、ゲーム体験における描画の理解を深めています。常に最適な設計を模索し、新たな知見を広げていくプログラマーです。",
    motto: "反省と後悔は一生の苦しみ。前に進む義務とそのための力を与える",
    avater: "",
    links: {
        github: "https://github.com/uiuishiina",
        twitter: null
    }
    }
 
export const skills:Skill[]=[
    {
    name: "c++",
    version: "c++20",
    level: 70,
    category: "",
    capabilities: "WinAPIの基礎,DirectX12の基礎,ポリモーフィズムやテンプレートを意識した設計",
    note: null
    }
]
 
export const venues:Venue[]=[
    {
    name: "",
    date: ""
    }
]
 
export const works:Work[]=[
    {
        id: 0,
    title: "ぱすふれっくす",
    gener: "パズルゲーム",
    category: "",
    thumbnail: "",
    screenshots: [],
    tags: [],
    platform: ["wiondos"],
    period: "3か月",
    team: "",
    role: "オブジェクトの反射挙動、予測線、他のプログラマーとの連携機能",
    github: "https://github.com/Momiji25315/pazuhurekkusu.git",
    link: "",
    venues: [],
    techPoints: null,
    designNotes: null,
    implmntationTheme: null,
    troublesooting: null,
    perfformance: null
    }
]
 
export const gamejams:GameJam[]=[
    {
    name: "",
    date: "",
    theme: "",
    description: "",
    platform: "",
    role: "",
    team: "",
    result: null,
    url: null,
    reflection: ""
    }
]
 
 
export const certifications:Certification[]=[
    {
    name: "",
    date: "",
    category: "",
    score: "",
    status: "取得済み"
    }
]
 
export const timelineitems:TimeLineItem[]=[
    {
    year: "",
    event: ""
    }
]
 