import { type FaqsData } from '@/resources/types/faqs'
import { useMemo } from 'react'

export default function useFilter(data: FaqsData[], searchQuery: string) {
  return useMemo(() => {
    return data.map(({ questions, id }) => {
      return {
        id,
        questions: questions.filter(({ title, content }) => {
          return title.toLowerCase().includes(searchQuery.toLowerCase()) || content.toLowerCase().includes(searchQuery.toLowerCase())
        }),
      }
    })
  }, [searchQuery, data])
}
