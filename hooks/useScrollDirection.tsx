'use client'

import { useEffect, useState } from 'react'

export enum ScrollDirection {
  Initial,
  Down,
  Up,
}

const AVATAR_PADD_OFFSET = 100

const useScrollDirection = (
  isMobileOnly = false,
  isMobile = false,
  belowAvatar = true
) => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.Initial)

  useEffect(() => {
    const avatarContainer = document.querySelector('#hpAvatar') as HTMLElement
    const avatarScrollY =
      avatarContainer?.offsetTop +
      avatarContainer.clientHeight -
      AVATAR_PADD_OFFSET
    const threshold = 10
    let lastScrollY = window.scrollY || 0

    let ticking = false
    const updateScrollDir = () => {
      const scrollY = window.scrollY || 0

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      const isBelowAvatar =
        !isMobileOnly && belowAvatar ? scrollY > avatarScrollY : true
      let currentScrollDirection = ScrollDirection.Initial

      // Used to tell if menu will show or not
      if (scrollY > lastScrollY && isBelowAvatar) {
        currentScrollDirection = ScrollDirection.Down
      } else if (isBelowAvatar && !isMobile) {
        currentScrollDirection = ScrollDirection.Down
      } else {
        currentScrollDirection = ScrollDirection.Up
      }

      if (currentScrollDirection !== scrollDir) {
        setScrollDir(
          scrollY > lastScrollY ? ScrollDirection.Down : ScrollDirection.Up
        )
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    if ((isMobileOnly && isMobile) || !isMobileOnly) {
      window.addEventListener('scroll', onScroll)
    }

    const frame = window.requestAnimationFrame(() => {
      if (!isMobile && lastScrollY > avatarScrollY) {
        setScrollDir(ScrollDirection.Down)
      }
    })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrollDir, isMobileOnly, isMobile, belowAvatar])
  return scrollDir
}

export default useScrollDirection
