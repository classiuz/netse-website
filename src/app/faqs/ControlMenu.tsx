'use client'
import { useContext } from 'react'
import { FaqsContext } from './FaqsContext'
import clsx from 'clsx'

export default function ControlMenu() {
  const { allCategories, currentCategory, setCurrentCategory, setIsAllOpen } = useContext(FaqsContext)

  const handleClick = (id: number) => {
    setCurrentCategory(id)
  }

  const handleExpandAll = () => {
    setIsAllOpen(true)
  }

  const handleCollapseAll = () => {
    setIsAllOpen(false)
  }

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <ul className="flex gap-4 text-sm lg:gap-6 lg:text-base">
        {allCategories.map(({ id, category }) => {
          return (
            <li
              key={id}
              onClick={() => handleClick(id)}
              className={clsx('cursor-pointer hover:text-primary', {
                'text-primary': currentCategory === id,
                'text-neutral-600 ': currentCategory !== id,
              })}
              role="button"
              aria-label={`Seleccionar la categoría ${category}`}
            >
              {category}
            </li>
          )
        })}
      </ul>
      <ul className="flex gap-4 text-xs text-neutral-500 lg:text-sm">
        <li onClick={handleExpandAll} className="cursor-pointer hover:text-primary">
          Expandir todas
        </li>
        <li onClick={handleCollapseAll} className="cursor-pointer hover:text-primary">
          Colapsar todas
        </li>
      </ul>
    </div>
  )
}
