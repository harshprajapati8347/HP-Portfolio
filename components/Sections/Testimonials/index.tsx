'use client'

import { Heading, Text, Stack, SimpleGrid, Box } from '@chakra-ui/react'
import { testimonials } from 'config/testimonials'
import { site } from 'config/site'
import FadeInLayout from 'components/Layout/FadeWhenVisible'

const Testimonials = () => {
  if (!testimonials.length) {
    return null
  }

  return (
    <FadeInLayout>
      <Box
        id="testimonials"
        className="contentRow"
        paddingTop={{ base: 0, lg: 20, xl: 20 }}
        paddingBottom={{ base: 12, lg: 10 }}
        paddingX={0}
      >
        <Stack
          width={{ base: '99%', lg: '60%', xl: '75%' }}
          spacing={{ base: 6, xl: 8 }}
          as="section"
          aria-labelledby="testimonials-heading"
        >
          <Heading
            as="h2"
            id="testimonials-heading"
            size="2xl"
            style={{ fontVariantCaps: 'small-caps' }}
          >
            {site.testimonials.heading}
          </Heading>
          <Text variant="description">{site.testimonials.intro}</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {testimonials.map((item) => (
              <Box
                key={`${item.author}-${item.quote.slice(0, 16)}`}
                borderWidth="1px"
                borderRadius="1em"
                padding={6}
              >
                <Text variant="description" as="blockquote">
                  “{item.quote}”
                </Text>
                <Text fontSize="sm" paddingTop={3} fontWeight="bold">
                  {item.author}
                  {item.role || item.company
                    ? ` — ${[item.role, item.company].filter(Boolean).join(', ')}`
                    : ''}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </FadeInLayout>
  )
}

export default Testimonials
