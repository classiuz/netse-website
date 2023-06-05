import Link from 'next/link'
import clsx from 'clsx'

interface NavLinkProps {
  label: string
  to: string
  className?: string
}

export default function NavLink({ label, to, className }: NavLinkProps) {
  return (
    <Link href={to} className={clsx('hover:text-primary', [className])}>
      {label}
    </Link>
  )
}
