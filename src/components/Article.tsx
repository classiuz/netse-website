import clsx from 'clsx'

interface Props {
  fullWidth?: boolean
  className?: string
  children: JSX.Element | JSX.Element[]
}

export default function Article({ fullWidth = false, className, children }: Props) {
  return (
    <article
      className={clsx('flex h-[calc(100vh-10em)] items-center', {
        'mx-auto w-9/12': !fullWidth,
        'w-full': fullWidth,
        [className!]: className,
      })}
    >
      {children}
    </article>
  )
}
