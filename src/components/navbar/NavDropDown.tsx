import React, { useState } from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import clsx from 'clsx'

interface Props {
  title: string
  list: {
    name: string
    href: string
    externaNavigation?: boolean
  }[]
}

export default function DropDown({ title, list }: Props) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const handleClick = () => {
    setIsHover(!isHover)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className="group relative">
      <Icon className="cursor-pointer hover:text-primary" iconName="arrowDown" text={title} iconPosition="right" />
      <ul
        className={clsx(
          'absolute left-0 z-50 w-full overflow-hidden whitespace-nowrap rounded-md border border-surface bg-white text-base shadow-md lg:w-auto',
          {
            visible: isHover,
            invisible: !isHover,
          }
        )}
      >
        {list.map(({ name, href, externaNavigation = false }, index) => {
          const key = `${name}-${index}`
          return externaNavigation ? (
            <Link key={key} href={href} className="block w-full px-4 py-2 hover:bg-primary/20 hover:text-primary">
              {name}
            </Link>
          ) : (
            <a key={key} href={href} className="block w-full px-4 py-2 hover:bg-primary/20 hover:text-primary">
              {name}
            </a>
          )
        })}
      </ul>
    </div>
  )
}
