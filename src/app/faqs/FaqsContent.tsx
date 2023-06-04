'use client'
import { useContext } from 'react'
import { FaqsContext } from './FaqsContext'
import QuestionCard from './QuestionCard'
import Markdown from 'markdown-to-jsx'

export default function FaqsContent() {
  const { filteredQuestions, currentCategory, searchQuery } = useContext(FaqsContext)

  return (
    <>
      {filteredQuestions.map(({ id, questions }) =>
        id === currentCategory ? (
          <section key={id} className="flex flex-col gap-4" role="tabpanel" aria-labelledby={`category-${id}`}>
            {questions.length === 0 ? (
              <p className="text-neutral-600">No se encontraron resultados para la busqueda &quot;{searchQuery}&quot;.</p>
            ) : (
              questions.map(({ id, title, path: { category, question }, content }) => {
                return (
                  <QuestionCard key={id} title={title} questionPath={{ category, question }}>
                    <Markdown>{content}</Markdown>
                  </QuestionCard>
                )
              })
            )}
          </section>
        ) : null
      )}
    </>
  )
}
