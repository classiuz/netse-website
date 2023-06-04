import { useEffect, useState } from 'react'

export default function useNavbar() {
  const storageIsBackgroundVisible = localStorage.getItem('IsBackgroundVisible')

  const [isBackgroundVisible, setIsBackgroundVisible] = useState(storageIsBackgroundVisible === 'true')
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

  const handleWindowsScroll = () => {
    if (window.scrollY >= 63) {
      localStorage.setItem('IsBackgroundVisible', 'true')
      return setIsBackgroundVisible(true)
    }
    localStorage.setItem('IsBackgroundVisible', 'false')
    setIsBackgroundVisible(false)
  }

  useEffect(() => {
    handleWindowsScroll()
    window.addEventListener('scroll', handleWindowsScroll)
    return () => {
      window.removeEventListener('scroll', handleWindowsScroll)
    }
  }, [])

  return { isBackgroundVisible, isMenuOpen, handleMenuToggle, isHover, handleIsHover }
}
