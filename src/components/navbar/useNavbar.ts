import { useEffect, useState } from 'react'

const BREAKPOINT = 1024

export default function useNavbar() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false)
  const [isDesktopWidth, setIsDesktopWidth] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 63) return setIsBackgroundVisible(true)
      setIsBackgroundVisible(false)
    }

    const checkScreenWidth = () => {
      setIsDesktopWidth(window.innerWidth >= BREAKPOINT)
    }

    changeBackground()
    window.addEventListener('scroll', changeBackground)
    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    return () => {
      window.removeEventListener('scroll', changeBackground)
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  return { isBackgroundVisible, isDesktopWidth }
}
