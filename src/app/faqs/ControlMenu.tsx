import { type Faqs } from '@/utils/faqs'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  categories: Faqs[]
  currentCategory: number
  changeCategory: Dispatch<SetStateAction<number>>
}

export default function ControlMenu({ categories, currentCategory, changeCategory }: Props) {
  const handleClick = (id: number) => {
    changeCategory(id)
  }

  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <ul className="flex gap-4 text-sm lg:gap-6 lg:text-base">
        {categories.map(({ name, id }) => {
          return (
            <li
              key={id}
              onClick={() => handleClick(id)}
              className={clsx('cursor-pointer hover:text-primary', {
                'text-primary': currentCategory === id,
                'text-neutral-600 ': currentCategory !== id,
              })}
              role="button"
              aria-label={`Seleccionar la categoría ${name}`}
            >
              {name}
            </li>
          )
        })}
      </ul>
      <ul className="flex gap-4 text-xs text-neutral-500 lg:text-sm">
        <li className="cursor-pointer hover:text-primary">Expandir todas</li>
        <li className="cursor-pointer hover:text-primary">Colapsar todas</li>
      </ul>
    </div>
  )
}
