'use client'

import {
  Stack,
  Heading,
  Text,
  Button,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import { site } from 'config/site'

const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text)
const MotionStack = motion.create(Stack)
const MotionButton = motion.create(Button)
const MotionBox = motion.create(Box)

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionBox
      initial={shouldReduceMotion ? false : 'initial'}
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      />
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText
            variants={fadeInUp}
            transition={{ delay: shouldReduceMotion ? 0 : 1 }}
            variant="accent"
            fontWeight="light"
          >
            {site.hero.greeting}
          </MotionText>
          <MotionHeading
            as="h1"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          >
            {site.firstName}
          </MotionHeading>
          <MotionHeading
            as="p"
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            {site.lastName}
          </MotionHeading>

          <MotionHeading
            as="p"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            {site.role}
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            {site.hero.body[0]}
            <br />
            {site.hero.body[1]}
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            variants={simpleOpacity}
            onClick={() => {
              window.location.href = `mailto:${site.email}`
            }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          >
            {site.hero.ctaLabel}
          </MotionButton>

          <MotionBox display="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
