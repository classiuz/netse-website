import icons from '@/data/IconsList'
import clsx from 'clsx'

export type IconName = keyof typeof icons

interface Props {
  iconName: IconName
  text?: string
  iconPosition?: 'left' | 'right'
  className?: string
}

export default function Icon({ text, iconName, iconPosition = 'left', className }: Props) {
  const foundIcon = icons[iconName] || icons.question

  return text ? (
    <p
      className={clsx('flex items-center gap-2', {
        'flex-row': iconPosition === 'left',
        'flex-row-reverse justify-end': iconPosition === 'right',
        [className!]: className,
      })}
    >
      <span>{foundIcon}</span>
      <span>{text}</span>
    </p>
  ) : (
    foundIcon
  )
}
