
const CATEGORY_LABELS: Record<string, string> = {
  all: 'すべて',
  game: 'ゲーム',
  web: 'Web',
  language: '言語',
}

interface LevelConfig {
  max: number
  label: string
  color: string
}

const LEVEL_CONFIG: LevelConfig[] = [
  { max: 40,  label: '学習中', color: '#888' },
  { max: 60,  label: '基礎あり', color: '#60a5fa' },
  { max: 80,  label: '実践可',   color: '#a78bfa' },
  { max: 100, label: '得意',     color: '#f472b6' },
]

export default function Skills(){
    
}