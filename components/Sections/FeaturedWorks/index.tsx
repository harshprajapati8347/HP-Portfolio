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
        A selection of production-ready platforms and systems I’ve built across
        full-stack engineering, analytics, and cloud deployments.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Curiomart"
            src="https://curiomart.iamharsh.in/assets/logo-DXsWE0_a.png"
            description="A scalable multi-vendor e-commerce CMS built using the MERN stack. Features include role-based authentication, real-time chat with Socket.IO, Stripe payment integration, and a responsive admin dashboard. Deployed on AWS EC2 for production scalability."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://curiomart.iamharsh.in"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="WealthFox"
            src="https://res.cloudinary.com/cloudwithharsh/image/upload/v1767337005/WealthFOX/logow_original_b48e5t.png"
            description="A production-grade financial advisory platform built with Next.js and Tailwind CSS. Integrated GA4 via GTM, Google Places reviews with MongoDB TTL caching, SEO optimization, and automated lead capture synced with Odoo CRM."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://wealthfox.in"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="AgriCom"
            src="https://agricom.onrender.com/static/media/AgriComLogoHome.c976c4e8f90a1f667bb9.png"
            description="AgriCom is my final-year BTech project, an information-focused platform for farmers combining agri news, government schemes, learning resources, and IoT insights. Built on the MERN stack with a full admin dashboard and clean, modern UI."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://agricom.onrender.com"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
