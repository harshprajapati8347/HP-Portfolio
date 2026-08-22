'use client'

import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { avatarAnimation } from 'config/animations'
import { site } from 'config/site'
import OptimizedImage from 'components/OptimizedImage'

const MotionBox = motion.create(Box)

const Avatar = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      <MotionBox
        id="hpAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial={shouldReduceMotion ? false : 'initial'}
        animate="animate"
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
        position="relative"
      >
        <OptimizedImage
          src={site.avatar}
          alt={`${site.name} avatar`}
          width={250}
          height={250}
          sizes="(max-width: 992px) 160px, 250px"
          style={{ margin: 'auto', width: '100%', height: 'auto' }}
          placeholder="empty"
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
