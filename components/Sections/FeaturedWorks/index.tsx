import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
import projects from 'config/projects'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>

      <Text variant="description">
        A selection of production-ready platforms and systems I've built across
        full-stack engineering, analytics, and cloud deployments.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {projects.map((project) => (
          <MotionGridItem key={project.idx} colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={project.idx}
              title={project.title}
              src={project.src}
              description={project.description}
              height={{ base: '130px', md: '225px', '2xl': '300px' }}
              ctaUrl={project.ctaUrl}
              githubUrl={project.githubUrl}
              objectPosition={project.objectPosition}
              isMobile={isMobile}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
