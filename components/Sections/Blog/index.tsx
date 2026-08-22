'use client'

import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { site } from 'config/site'
import { blogPosts } from 'config/blog'

const Blog = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="section"
      aria-labelledby="blog-heading"
    >
      <Heading
        as="h2"
        id="blog-heading"
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {site.blog.heading}
      </Heading>
      <Text variant="description">{site.blog.intro}</Text>
      {blogPosts.length === 0 ? (
        <Text variant="description">{site.blog.empty}</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
          {blogPosts.map((item) => (
            <Link
              aria-label={item.title}
              target="_blank"
              rel="noreferrer"
              key={`${item.url}-${item.title}`}
              href={item.url}
              color="currentcolor"
              _hover={{ textDecoration: 'none' }}
              transition="all 0.5s ease"
              role="group"
            >
              <Stack
                spacing={3}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="1em"
                padding={{ base: '1em', '2xl': '1.5em' }}
                height="100%"
                transition="all 0.2s ease-in-out"
                backgroundColor={bg}
                _hover={{
                  background: alphaHover,
                }}
                as="article"
              >
                <Heading as="h3" fontSize="larger" paddingX={2}>
                  {item.title}
                </Heading>
                <Divider borderColor="#A6A6A6" width="95%" />
                <Text
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                  {item.topic}
                  {item.platform ? ` · ${item.platform}` : ''}
                </Text>
              </Stack>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </Stack>
  )
}

export default memo(Blog)
