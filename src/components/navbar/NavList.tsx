'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Icon from '../Icon'

interface Props {
  label: string
  children: JSX.Element[]
}

export default function NavList({ label, children }: Props) {
  const [isHover, setIsHover] = useState(false)

  const handleIsHover = {
    onMouseEnter: () => {
      setIsHover(true)
    },
    onMouseLeave: () => {
      setIsHover(false)
    },

    onClick: () => {
      setIsHover(!isHover)
    },
  }

  return (
    <div {...handleIsHover} className="group relative w-fit">
      <Icon className="cursor-pointer rounded-t-md group-hover:text-primary" iconName="caretDown" text={label} iconPosition="right" />
      <ul
        className={clsx(
          'absolute left-1/2 z-50 mt-[2px] flex w-fit -translate-x-1/2 flex-col overflow-hidden whitespace-nowrap rounded-md text-base transition-height ease-open',
          {
            'max-h-0': !isHover,
            'max-h-96 border border-outline bg-white shadow-md': isHover,
          }
        )}
      >
        {children.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>
        })}
      </ul>
    </div>
  )
}
