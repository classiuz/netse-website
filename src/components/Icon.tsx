import icons from '@/data/IconsList'
import clsx from 'clsx'

export type IconName = keyof typeof icons

interface Props {
  iconName: IconName
  text?: string
  iconSize?: number
  iconPosition?: 'left' | 'right'
  className?: string
}

export default function Icon({ text, iconName, iconSize, iconPosition = 'left', className }: Props) {
  const foundIcon = icons[iconName] || icons.question

  return text ? (
    <p
      className={clsx('flex items-center gap-2', {
        'flex-row': iconPosition === 'left',
        'flex-row-reverse justify-end': iconPosition === 'right',
        [className!]: className,
      })}
    >
      <span style={{ fontSize: iconSize ? `${iconSize}px` : 'inherit' }}>{foundIcon}</span>
      <span>{text}</span>
    </p>
  ) : (
    <span style={{ fontSize: iconSize ? `${iconSize}px` : 'inherit' }}>{foundIcon}</span>
  )
}
