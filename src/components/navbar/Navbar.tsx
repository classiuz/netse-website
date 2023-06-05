'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Icon from '../Icon'
import NavLinks from './NavContent'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-40 flex w-full select-none items-center justify-between border-b bg-surface p-4 lg:justify-around">
      <Link href="/" className="h-fit w-[139.5px] lg:w-[159px]">
        <Image src="/logotype.webp" width={219} height={42} alt={'Netse generando vínculos'} priority />
      </Link>

      <div className="flex lg:hidden">
        <button
          type="button"
          className="block select-none text-3xl text-neutral-600 transition-all lg:hidden"
          onClick={handleMenuToggle}
        >
          <Icon iconName={isMenuOpen ? 'xmark' : 'menu'} />
        </button>
        <ul
          className={clsx(
            'absolute left-0 flex w-full flex-col gap-6 overflow-hidden border-b border-inherit bg-surface px-9 py-6 text-lg text-neutral-600 transition-height ease-open',
            {
              'visible top-[63px] z-30 max-h-96': isMenuOpen,
              'invisible max-h-0': !isMenuOpen,
            }
          )}
        >
          <NavLinks />
        </ul>
      </div>

      <div className="hidden gap-6 text-lg lg:flex">
        <NavLinks />
      </div>
    </nav>
  )
}
