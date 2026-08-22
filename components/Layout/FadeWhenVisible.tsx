'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'
import { fadeInUpSlower } from 'config/animations'

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const shouldReduceMotion = useReducedMotion()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (shouldReduceMotion || inView) {
      controls.start('animate')
    }
  }, [controls, inView, shouldReduceMotion])

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial={shouldReduceMotion ? 'animate' : 'initial'}
      variants={fadeInUpSlower}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
