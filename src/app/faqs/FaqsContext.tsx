'use client'
import { createContext, useState } from 'react'
import useFilter from './useFilter'
import { type FaqsData } from '@/resources/types/faqs'

type AllCategories = Omit<FaqsData, 'questions'>
type FilteredQuestion = Omit<FaqsData, 'category'>

interface FaqsValues {
  allCategories: AllCategories[]
  currentCategory: number
  setCurrentCategory: Function
  searchQuery: string
  setSearchQuery: Function
  isAllOpen: boolean
  setIsAllOpen: Function
  filteredQuestion: FilteredQuestion[]
}

const initialValues = {
  allCategories: [{
    id: 1,
    category: '',
  }],
  currentCategory: 1,
  setCurrentCategory: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  isAllOpen: false,
  setIsAllOpen: () => {},
  filteredQuestion: [
    {
      id: 1,
      questions: [
        {
          id: 1,
          category: '',
          title: '',
          sortTitle: '',
          content: '',
          path: '',
        },
      ],
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
  const filteredQuestion = useFilter(data, searchQuery)

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
        isAllOpen,
        setIsAllOpen,
        searchQuery,
        setSearchQuery,
        filteredQuestion,
      }}
    >
      {children}
    </FaqsContext.Provider>
  )
}
