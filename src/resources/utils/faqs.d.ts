export type Faqs = {
  id: number
  name: string
  articles: {
    id: number
    title: string
    body: string
  }[]
}
