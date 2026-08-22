'use client'

import { memo, useState } from 'react'
import { useColorMode, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'
import { site } from 'config/site'
import OptimizedImage from 'components/OptimizedImage'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const shouldReduceMotion = useReducedMotion()
  const size = isMobile ? 30 : 50

  return (
    <AnimatePresence>
      <Link href="/" aria-label={`${site.name} home`}>
        <motion.span
          className={!isMobile ? styles.logo : undefined}
          style={{ display: 'inline-flex' }}
          variants={simpleOpacity}
          initial={shouldReduceMotion ? false : 'initial'}
          animate={isLogoLoaded || shouldReduceMotion ? 'animate' : 'initial'}
        >
          <OptimizedImage
            src={site.logo}
            alt={`${site.name} logo`}
            width={size}
            height={size}
            style={{
              objectFit: 'cover',
              width: size,
              height: size,
              filter: colorMode === ThemeMode.Light ? 'none' : undefined,
            }}
            onLoad={() => setLogoLoaded(true)}
          />
        </motion.span>
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
