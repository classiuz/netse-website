'use client'
import { createContext, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import useFilter from './useFilter'
import { type Path, type FaqsData } from '@/types/faqs'

type AllCategories = Omit<FaqsData, 'questions'>
type FilteredQuestion = Omit<FaqsData, 'category'>
type QuestionPath = Omit<Path, 'full'>

interface FaqsValues {
  allCategories: AllCategories[]
  currentCategory: number
  setCurrentCategory: Function
  searchQuery: string
  setSearchQuery: Function
  getIfPathMatch: (questionPath: QuestionPath) => boolean
  isAllOpen: boolean
  setIsAllOpen: Function
  filteredQuestions: FilteredQuestion[]
}

const initialValues = {
  allCategories: [
    {
      id: 1,
      category: '',
    },
  ],
  currentCategory: 1,
  setCurrentCategory: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  getIfPathMatch: () => false,
  isAllOpen: false,
  setIsAllOpen: () => {},
  filteredQuestions: [
    {
      id: 1,
      questions: [],
    },
  ],
}

export const FaqsContext = createContext<FaqsValues>(initialValues)

interface Props {
  data: FaqsData[]
  children: React.ReactNode
}

export function FaqsProvider({ data, children }: Props) {
  const [currentCategory, setCurrentCategory] = useState(initialValues.currentCategory)
  const [searchQuery, setSearchQuery] = useState(initialValues.searchQuery)
  const [isAllOpen, setIsAllOpen] = useState(initialValues.isAllOpen)
  const filteredQuestions = useFilter(data, searchQuery)

  const pathname = useSearchParams()
  const getIfPathMatch = (questionPath: QuestionPath) => {
    const searchPath = {
      category: pathname.get('category'),
      question: pathname.get('question'),
    }
    const pathMatch = searchPath.category === questionPath.category && searchPath.question === questionPath.question
  
    return pathMatch
  }

  const allCategories = data.map(({ id, category }) => {
    return {
      id,
      category,
    }
  })

  return (
    <FaqsContext.Provider
      value={{
        allCategories,
        currentCategory,
        setCurrentCategory,
        getIfPathMatch,
        isAllOpen,
        setIsAllOpen,
        searchQuery,
        setSearchQuery,
        filteredQuestions,
      }}
    >
      {children}
    </FaqsContext.Provider>
  )
}
