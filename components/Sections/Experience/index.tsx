'use client'

import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
import { site } from 'config/site'

const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
    as="section"
    aria-labelledby="experience-heading"
  >
    <Heading
      as="h2"
      id="experience-heading"
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      {site.experience.heading}
    </Heading>
    <Text variant="description">
      {site.experience.introBefore}{' '}
      <Link
        href={site.experience.currentCompanyUrl}
        target="_blank"
        rel="noreferrer"
      >
        {site.experience.currentCompanyName}
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
