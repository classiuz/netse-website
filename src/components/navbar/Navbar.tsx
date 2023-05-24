'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useNavbar from './useNavbar'
import NavDropDown from './NavDropDown'
import NavLinks from './NavLinks'
import Icon from '../Icon'
import clsx from 'clsx'

export default function Navbar() {
  const { isDesktopWidth, isBackgroundVisible } = useNavbar()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuToggle = useCallback(() => {
    if (isDesktopWidth) return false
    setIsMenuOpen((prevState) => !prevState)
  }, [setIsMenuOpen, isDesktopWidth])

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 flex w-full select-none items-center justify-between border-b p-4 backdrop-blur-sm lg:justify-around',
        {
          'border-outline bg-surface': isMenuOpen === true,
          'border-outline bg-neutral-200/60': isBackgroundVisible === true,
          'border-transparent bg-transparent': isBackgroundVisible === false && isMenuOpen === false,
        }
      )}
    >
      <Link href="/" className="h-fit w-[139.5px] lg:w-[159px]">
        <Image src={'/logotype.webp'} width={219} height={42} alt={'Netse generando vínculos'} priority />
      </Link>

      <button type="button" className="block text-3xl text-neutral-600 transition-all lg:hidden" onClick={handleMenuToggle}>
        <Icon iconName={isMenuOpen ? 'xmark' : 'menu'} />
      </button>

      <ul
        className={clsx('text-lg text-neutral-600', {
          'flex flex-row gap-6': isDesktopWidth === true,
          'absolute left-0 top-[63px] flex w-full flex-col gap-4 border-b border-inherit bg-inherit px-4 pb-12 pt-4':
            isMenuOpen === true && isDesktopWidth === false,
          hidden: isMenuOpen === false && isDesktopWidth === false,
        })}
      >
        <NavLinks text="Inicio" href="/" />
        <NavDropDown
          title="Productos y servicios"
          list={[
            { name: 'Internet Inalámbrico', href: '/internet-inalambrico' },
            { name: 'Internet Fibra Óptica', href: '/internet-fibra-optica' },
            { name: 'Conectividad Satelital', href: '/conectividad-satelital' },
          ]}
        />
        <NavLinks text="Contacto" href="/contacto" />
        <NavLinks text="FAQs" href="/faqs" />
        <NavDropDown
          title="Portal Clientes"
          list={[
            { name: 'Clientes Inalámbrico', href: 'http://netseportal.com/', externaNavigation: true },
            { name: 'Clientes Fibra Óptica', href: 'http://fiber.netseportal.com/', externaNavigation: true },
            { name: 'No estoy seguro', href: '/faqs?tab=general#queserviciosoy' },
          ]}
        />
      </ul>
    </nav>
  )
}
