import React from 'react'
import Link from 'next/link'
import Icon from '../Icon'
import clsx from 'clsx'
import useNavbar from './useNavbar'

export default function NavLinks() {
  return (
    <>
      <NavLink label="Inicio" to="/" />
      <NavList label="Productos y servicios">
        <NavLink label="Servicio Internet Inalámbrico" to="/internet-inalambrico" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Servicio Internet Fibra Óptica" to="/internet-fibra-optica" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Servicio Conectividad Satelital" to="/conectividad-satelital" className="px-4 py-2 hover:bg-primary/20" />
      </NavList>
      <NavLink label="Contacto" to="/contacto" />
      <NavLink label="FAQs" to="/faqs" />
      <NavList label="Portal Clientes">
        <NavLink label="Clientes Inalámbrico" to="http://netseportal.com/" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="Clientes Fibra Óptica" to="http://fiber.netseportal.com/" className="px-4 py-2 hover:bg-primary/20" />
        <NavLink label="No estoy seguro" to="/faqs?tab=general#queserviciosoy" className="px-4 py-2 hover:bg-primary/20" />
      </NavList>
    </>
  )
}

interface NavLinkProps {
  label: string
  to: string
  className?: string
}

function NavLink({ label, to, className }: NavLinkProps) {
  return (
    <Link href={to} className={clsx('hover:text-primary', [className])}>
      {label}
    </Link>
  )
}

interface NavListProps {
  label: string
  children: JSX.Element[]
}

function NavList({ label, children }: NavListProps) {
  const { isHover, handleIsHover } = useNavbar()

  return (
    <div {...handleIsHover} className="group relative w-fit">
      <Icon className="cursor-pointer rounded-t-md group-hover:text-primary" iconName="caretDown" text={label} iconPosition="right" />
      <ul
        className={clsx(
          'absolute left-1/2 z-50 mt-[2px] flex w-fit -translate-x-1/2 flex-col overflow-hidden whitespace-nowrap rounded-md text-base transition-height ease-open',
          {
            'max-h-0': !isHover,
            'max-h-96 border border-outline bg-white shadow-md': isHover,
          }
        )}
      >
        {children.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>
        })}
      </ul>
    </div>
  )
}
