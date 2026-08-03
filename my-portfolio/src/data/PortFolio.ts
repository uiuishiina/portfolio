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
    capabilities:string[]     //できること
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
    genre:string            //ジャンル
    category:string         //カテゴリー
    thumbnail:string        //サムネ
    screenshots:string[]    //スクリーンショット
    description:string      //作品概要
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
    nameEn: "Kounosuke Hayashi",
    role: "プログラマー",
    school: "京都デザイン&テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月見込み",
    bio: "反省と改善を常に続けながら前に進んでいくプログラマーです。最近はDirectX12の描画にいたるまでのプロセスや描画に必要なリソース・昨今のシェーダーの工夫などを通して、ゲーム体験における描画の関わり方を勉強しています。",
    motto: "座右の銘[ 反省は一生の糧,改善は永遠の成長 ]",
    avater: "",
    links: {
        github: "https://github.com/uiuishiina",
        twitter: null
    }
    }
 
export const skills:Skill[]=[
    {
    name: "C++",
    version: "C++20",
    level: 80,
    category: "language",
    capabilities: ["ConceptsでTemplateの制限やコンパイル時型制限ができる"],
    note: null  //実装経験
    },
    {
    name: "C#",
    version: "",
    level: 50,
    category: "language",
    capabilities: ["ゲーム開発ができる","Unityでの使用経験もあり"],
    note: null  //実装経験
    },
    {
    name: "HLSL",
    version: "",
    level: 60,
    category: "language",
    capabilities: ["基礎的なコードが書ける","DirectXで利用できる","Unityでの使用経験もあり"],
    note: null  //実装経験
    },
    {
    name: "html",
    version: "",
    level: 20,
    category: "language",
    capabilities: ["web上に文字を表示できる"],
    note: null  //実装経験
    },
    {
    name: "Unity",
    version: "6.3",
    level: 70,
    category: "Engine",
    capabilities: ["ゲーム開発ができる","基礎的なシェーダーを扱える"],
    note: null  //実装経験
    },
    {
    name: "Github",
    version: "",
    level: 70,
    category: "web",
    capabilities: ["Githubで制作物のバージョン管理ができる"],
    note: null  //実装経験
    },
    {
    name: "SourceTree",
    version: "",
    level: 70,
    category: "Application",
    capabilities: ["GitのGUIツールとして利用できる"],
    note: null  //実装経験
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
    title: "自作描画エンジン",
    genre: "自作エンジン",
    category: "Engine",
    thumbnail: "",
    screenshots: [],
    description:"ゲームグラフィックスに興味を持ち、自分で学習しながら制作するための基盤となるプログラム", 
    tags: ['DirectX','C++20',`HLSL`],
    platform: ['Windows'],
    period: "2025年6月~現在",
    team: "個人製作",
    role: "プログラマー",
    github: "https://github.com/uiuishiina/PortFolio-DirectX",
    link: "",
    venues: [],
    techPoints: '今後別のプラットフォームでも利用したいことを考えて、ポリモーフィズムを生かして機能作成することを目指す。',
    designNotes: 'デザインパターンを参考に、[描画フローを一目で確認できること][改造と拡張のしやすさ]の両立を目指した',
    implmntationTheme: 'DrawPassクラスに実際の描画コマンド等を設定できるように実装したため、初期化時に必要な要素の作成とDrawPassの設定だけで描画ができるように',
    troublesooting: '全体で使いやすい設計と今後の活用,発展,改造を見据えた変更に耐えうる設計の両立が非常に難しくいまだに苦戦中。現在はクラスを小さく作り一つ一つを組み合わせて作ることで、変更の容易さと拡張のしやすさをとることにしている',
    perfformance: 'レンダリングループ内での大きな処理負荷は今のところ確認していないが、今後の拡張しだいでは問題が起きる可能性がある'
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
    name: "Microsoft Excel (Office 2019)",
    date: "",
    category: "",
    score: "",
    status: "取得済み"
    }
]
 
export const timelineitems:TimeLineItem[]=[
    {
    year: "2005年",
    event: "生誕"
    },
    {
    year: "2021年 4月",
    event: "京都府立鴨折高等学校入学"
    },
    {
    year: "2021年 12月",
    event: "精神的不調のため高校中退,N高等学校入学"
    },
    {
    year: "2024年 3月",
    event: "N高等学校卒業"
    },
    {
    year: "2024年 4月",
    event: "京都デザイン＆テクノロジー専門学校入学"
    },
    {
    year: "2025年 9月",
    event: "プログラムの面白さ、奥深さを知る"
    },
    {
    year: "2026年 3月",
    event: "自作の描画エンジンを作成する計画を開始"
    }
]
 