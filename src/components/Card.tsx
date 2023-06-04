import clsx from 'clsx'

interface GenericProps {
  children: JSX.Element[] | string
  className?: string
}

export default function Card({ children, className }: GenericProps) {
  return (
    <div
      className={clsx('flex flex-col', {
        [className!]: className,
      })}
    >
      {children}
    </div>
  )
}

export function Title({ children, className }: GenericProps) {
  return (
    <h1
      className={clsx('text-6xl font-bold text-neutral-700', {
        [className!]: className,
      })}
    >
      {children}
    </h1>
  )
}

export function SubTitle({ children, className }: GenericProps) {
  return (
    <h3
      className={clsx('text-lg tracking-widest text-primary', {
        [className!]: className,
      })}
    >
      {children}
    </h3>
  )
}

export function Content({ children, className }: GenericProps) {
  return (
    <p
      className={clsx('neutral-500 text-xl', {
        [className!]: className,
      })}
    >
      {children}
    </p>
  )
}