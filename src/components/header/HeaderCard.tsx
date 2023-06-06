import Icon, { IconName } from '../Icon'

interface Props {
  text: string
  iconName: IconName
}

export default function HeaderCard({ text, iconName }: Props) {
  return (
    <li className="group mx-auto flex cursor-default items-center gap-4 rounded-2xl bg-surface p-8 shadow-lg transition-transform hover:-translate-y-4 lg:flex-col">
      <span className="text-2xl text-neutral-700 md:text-3xl lg:text-4xl">
        <Icon iconName={iconName} iconSize={42} />
      </span>
      <p className="text-sm text-neutral-500 lg:text-base">{text}</p>
    </li>
  )
}
