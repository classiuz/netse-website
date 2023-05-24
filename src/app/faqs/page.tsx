'use client'
import { useState } from 'react'
import useFilter from './useFilter'
import SearchBar from './SearchBar'
import QuestionCard from './QuestionCard'
import ControlMenu from './ControlMenu'
import faqs from '@/data/faqs.json'

export const metadata = {
  title: 'FAQs | NetSE',
  description: 'Description - FAQs',
}

export default function FAQs() {
  const [currentCategory, setCurrentCategory] = useState(faqs[0]?.id || 1)
  const [query, setQuery] = useState('')
  const filteredFaqs = useFilter(query)

  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-11/12 flex-col gap-12 py-20 lg:w-9/12 lg:py-24 xl:w-6/12">
      <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-between">
        <p className="text-center text-4xl font-bold text-neutral-700 lg:text-left">Preguntas Frecuentes</p>
        <SearchBar changeQuery={setQuery} />
      </div>
      <div className="mx-auto flex w-11/12 flex-col gap-8">
        <ControlMenu categories={faqs} currentCategory={currentCategory} changeCategory={setCurrentCategory} />
      </div>

      {filteredFaqs.map(({ articles, id }) =>
        id === currentCategory ? (
          <section key={id} className="flex flex-col gap-4" role="tabpanel" aria-labelledby={`category-${id}`}>
            {articles.length === 0 ? (
              <p className="text-neutral-600">No se encontraron resultados para la busqueda &quot;{query}&quot;.</p>
            ) : (
              articles.map(({ title, body, id }) => {
                return <QuestionCard key={id} title={title} body={body} />
              })
            )}
          </section>
        ) : null
      )}
    </main>
  )
}
