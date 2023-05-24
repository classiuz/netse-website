import Icon, { IconName } from '../Icon'

interface Props {
  href: string
  iconName: IconName
  text: string
}

export default function FooterLinks({ href, iconName, text }: Props) {
  return (
    <a className="hover:text-primary" href={href}>
      <Icon iconName={iconName} text={text} />
    </a>
  )
}
