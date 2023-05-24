import Icon, { IconName } from '../Icon'

interface Props {
  text: string
  iconName: IconName
}

export default function HeaderCard({ text, iconName }: Props) {
  return (
    <li className="group mx-auto flex cursor-default items-center gap-4 transition-transform hover:-translate-y-4 lg:flex-col">
      <span className="text-2xl text-neutral-700 group-hover:text-primary md:text-3xl lg:text-4xl">
        <Icon iconName={iconName} />
      </span>
      <p className="text-sm text-neutral-500 group-hover:text-primary lg:text-base">{text}</p>
    </li>
  )
}
