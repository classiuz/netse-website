import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string
  to?: string
  className?: string
}

export default function Button({ children, to, className, ...rest }: Props) {
  return to ? (
    <Link
      href={to}
      className={clsx('w-fit rounded-md bg-primary/90 px-8 py-2 hover:bg-primary hover:shadow-lg', {
        [className!]: className,
      })}
    >
      {children}
    </Link>
  ) : (
    <button
      {...rest}
      className={clsx('w-fit rounded-md bg-primary/90 px-8 py-2 hover:bg-primary hover:shadow-lg', {
        [className!]: className,
      })}
    >
      {children}
    </button>
  )
}
