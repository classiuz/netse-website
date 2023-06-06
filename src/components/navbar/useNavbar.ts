import { useState } from 'react'

export default function useNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleIsHover = {
    onMouseEnter: () => {
      setIsHover(true)
    },
    onMouseLeave: () => {
      setIsHover(false)
    },

    onClick: () => {
      setIsHover(!isHover)
    },
  }

  return { isMenuOpen, handleMenuToggle, isHover, handleIsHover }
}
