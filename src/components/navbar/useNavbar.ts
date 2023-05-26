import { useEffect, useState } from 'react'

export default function useNavbar() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false)
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

  const handleWindowResize = () => {
    if (window.scrollY >= 63) return setIsBackgroundVisible(true)
    setIsBackgroundVisible(false)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('scroll', handleWindowResize)
    return () => {
      window.removeEventListener('scroll', handleWindowResize)
    }
  }, [])

  return { isBackgroundVisible, isMenuOpen, handleMenuToggle, isHover, handleIsHover }
}
