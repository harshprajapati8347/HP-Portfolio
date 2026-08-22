'use client'

import { Heading, Text, Button, Container, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { site } from 'config/site'

export default function NotFound() {
  return (
    <Container as="main" py={32} textAlign="center">
      <Stack spacing={6} align="center">
        <Heading as="h1" size="2xl">
          404
        </Heading>
        <Text variant="description">This page does not exist.</Text>
        <Button as={NextLink} href="/" variant="outline" borderRadius={0}>
          Back to {site.name}
        </Button>
      </Stack>
    </Container>
  )
}
