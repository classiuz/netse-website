import Link from 'next/link'

interface Props {
  text: string
  href: string
}

export default function NavLinks({ text, href }: Props) {
  return (
    <Link className="rounded-md hover:text-primary" href={href}>
      {text}
    </Link>
  )
}
