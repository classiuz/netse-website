export type FaqsData = {
  id: number
  category: string
  questions: Question[]
}

export type Question = {
  id: number
  category: string
  title: string
  sortTitle: string
  content: string
  path: Path
}

export type Path = {
  full: string
  category: string
  question: string
}