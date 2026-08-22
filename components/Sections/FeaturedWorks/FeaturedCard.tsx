'use client'

import {
  Box,
  ResponsiveValue,
  Divider,
  Text,
  SimpleGrid,
  Button,
  Container,
  Stack,
  useColorModeValue,
  GridItem,
} from '@chakra-ui/react'
import { motion, backOut, useReducedMotion } from 'framer-motion'
import styles from './styles.module.css'
import { easing, DURATIONS } from 'config/animations'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import OptimizedImage from 'components/OptimizedImage'

export type FeaturedCardProps = {
  height: string | ResponsiveValue<string>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl: string
  githubUrl?: string
  isMobile?: boolean
}

const variants = {
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: backOut,
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  githubUrl,
  isLeft,
}: {
  idx?: number
  title: string
  description: string
  ctaUrl: string
  githubUrl?: string
  isLeft: boolean
}) => (
  <Container
    paddingX={5}
    paddingY={1}
    display="flex"
    alignItems="center"
    justifyContent="space-around"
    flexDirection="column"
  >
    <Stack spacing={1} width="100%">
      <Text
        fontSize={{ base: 'md', md: 'large', '2xl': 'x-large' }}
        fontWeight="bold"
        letterSpacing={2}
        width="90%"
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
        textTransform="uppercase"
        as="span"
      >
        <Text variant="accentAlternative" fontSize="md" as="span">
          #{String(idx).padStart(2, '0')}{' '}
        </Text>
        {title}
      </Text>
      <Divider
        borderColor="#A6A6A6"
        width="90%"
        marginLeft={0}
        alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      />
    </Stack>
    <Text
      fontSize={{ base: 'sm', md: 'md', '2xl': 'lg' }}
      variant="accentAlternative"
      width="90%"
      alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      wordBreak="break-word"
      paddingY={{ base: 3, md: 0 }}
    >
      {description}
    </Text>
    <Stack
      direction={isLeft ? 'row-reverse' : 'row'}
      spacing={{ base: 3, md: 4 }}
      alignSelf={isLeft ? 'flex-end' : 'flex-start'}
      alignItems="center"
      paddingY={{ base: 3, md: 4 }}
    >
      <Button
        as="a"
        href={ctaUrl}
        target="_blank"
        rel="noreferrer"
        size="sm"
        fontWeight="medium"
        fontSize={{ base: 'sm', '2xl': 'md' }}
        colorScheme="teal"
        rightIcon={<ExternalLinkIcon />}
        _hover={{ textDecoration: 'none' }}
      >
        Live
      </Button>
      {githubUrl && (
        <Button
          as="a"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          size="sm"
          fontWeight="medium"
          fontSize={{ base: 'sm', '2xl': 'md' }}
          variant="outline"
          rightIcon={<ExternalLinkIcon />}
          _hover={{ textDecoration: 'none' }}
        >
          View Code
        </Button>
      )}
    </Stack>
  </Container>
)

const MotionBox = motion.create(Box)

const FeaturedCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  githubUrl,
  isMobile,
}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const shouldReduceMotion = useReducedMotion()

  return (
    <Box
      height="auto"
      bg={bg}
      borderRadius="1em"
      className={styles.featureCard}
      borderColor={bg}
      borderWidth="1px"
    >
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 3, md: 0 }}
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column-reverse', md: 'initial' }}
      >
        {isLeftImage && (
          <GridItem colSpan={1}>
            <MotionBox
              opacity={0.75}
              whileHover={shouldReduceMotion ? undefined : variants.hover}
              whileTap={shouldReduceMotion ? undefined : variants.tap}
            >
              <OptimizedImage
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                wrapperHeight={height}
                style={{ objectPosition }}
              />
            </MotionBox>
          </GridItem>
        )}
        <GridItem colSpan={2}>
          <ProjectDescription
            idx={idx}
            title={title}
            description={description}
            ctaUrl={ctaUrl}
            githubUrl={githubUrl}
            isLeft={isLeftImage}
          />
        </GridItem>
        {!isLeftImage && (
          <GridItem colSpan={1}>
            <MotionBox
              opacity={0.75}
              whileHover={shouldReduceMotion ? undefined : variants.hover}
              whileTap={shouldReduceMotion ? undefined : variants.tap}
            >
              <OptimizedImage
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                wrapperHeight={height}
                style={{ objectPosition }}
              />
            </MotionBox>
          </GridItem>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default FeaturedCard
