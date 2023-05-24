import { useState } from 'react'
import Icon from '@/components/Icon'
import clsx from 'clsx'

interface Props {
  title: string
  body: string
}

export default function QuestionCard({ title, body }: Props) {
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
            'rounded-t-md border-none': isOpen,
            'rounded-md border-b-2': !isOpen,
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
          'max-h-0': !isOpen,
          'max-h-96 border-b-2 border-outline bg-surface': isOpen,
        })}
      >
        <div
          className={clsx('px-7 py-4 text-sm lg:px-9 lg:py-6 lg:text-base', {
            '-translate-y-full': !isOpen,
            'translate-y-0': isOpen,
          })}
        >
          {body}
        </div>
      </div>
    </article>
  )
}
