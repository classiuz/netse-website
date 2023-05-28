'use client'
import { useContext, useState } from 'react'
import { FaqsContext } from './FaqsContext'
import Icon from '@/components/Icon'
import clsx from 'clsx'

interface Props {
  title: string
  children: JSX.Element
}

export default function QuestionCard({ title, children }: Props) {
  const { isAllOpen } = useContext(FaqsContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(() => !isOpen)
  }

  return (
    <article className="flex flex-col">
      <div
        onClick={handleIsOpen}
        className={clsx(
          'flex cursor-pointer items-center justify-between border-outline bg-surface px-4 py-2 text-neutral-600 lg:px-8',
          {
            'rounded-md border-b-2': !isAllOpen || !isOpen,
            'rounded-t-md border-none': isAllOpen || isOpen,
          }
        )}
      >
        <p className="select-none text-base lg:text-lg">{title}</p>
        <span className="text-xl">
          <Icon iconName={isOpen ? 'arrowUp' : 'arrowDown'} />
        </span>
      </div>
      <div
        className={clsx('overflow-hidden rounded-b-md transition-height ease-open', {
          'max-h-0': !isAllOpen || !isOpen,
          'max-h-[9999rem] border-b-2 border-primary/40 bg-surface': isAllOpen || isOpen,
        })}
      >
        <div
          className={clsx('article h-full px-8 py-6 text-sm lg:px-12 lg:text-base', {
            '-translate-y-full': !isAllOpen || !isOpen,
            'translate-y-0': isAllOpen || isOpen,
          })}
        >
          {children}
        </div>
      </div>
    </article>
  )
}
