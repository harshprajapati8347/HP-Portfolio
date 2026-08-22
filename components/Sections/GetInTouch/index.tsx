'use client'

import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiGithubFill, RiCopyrightLine } from 'react-icons/ri'
import { site } from 'config/site'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  const shouldReduceMotion = useReducedMotion()

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        as="h2"
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {site.contact.heading}{' '}
        <Text as="span" fontSize="2xl" variant="emphasis" aria-hidden="true">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={
              inView && !shouldReduceMotion ? ['shake', 'jump'] : false
            }
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        {site.contact.bodyBefore}{' '}
        <Link href={`mailto:${site.email}`} rel="noreferrer">
          {site.contact.emailLabel}
        </Link>{' '}
        {site.contact.bodyAfter}
      </Text>

      <Box
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href={site.githubProfile}
          target="_blank"
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            {site.footer.line} <Icon as={RiHeartPulseFill} aria-hidden /> <br />
            {site.footer.name} <Icon as={RiCopyrightLine} aria-hidden />{' '}
            {site.copyrightYear}
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
