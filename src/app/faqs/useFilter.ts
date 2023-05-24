import { useMemo } from 'react'
import faqs from '@/data/faqs.json'

export default function useFilter(query: string) {
  return useMemo(() => {
    return faqs.map(({ articles, id }) => {
      return {
        id,
        articles: articles.filter(({ title, body }) => {
          return title.toLowerCase().includes(query.toLowerCase()) || body.toLowerCase().includes(query.toLowerCase())
        }),
      }
    })
  }, [query])
}
