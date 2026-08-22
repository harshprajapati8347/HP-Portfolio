'use client'

import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoMdOpen } from 'react-icons/io'
import { featuredSkills } from 'config/skills'
import { site } from 'config/site'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const midpoint = Math.ceil(featuredSkills.length / 2)
  const columns = [
    featuredSkills.slice(0, midpoint),
    featuredSkills.slice(midpoint),
  ]

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
      aria-labelledby="about-heading"
    >
      <Heading
        as="h2"
        id="about-heading"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {site.about.heading}
      </Heading>

      {site.about.paragraphs.map((paragraph) => (
        <Text key={paragraph.slice(0, 24)} variant="description">
          {paragraph}
        </Text>
      ))}

      <SimpleGrid columns={2} spacing={4}>
        {columns.map((col) => (
          <List key={col[0]?.name} spacing={3}>
            {col.map((skill) => (
              <ListItem
                key={skill.name}
                fontSize="small"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={skill.icon} color={emphasis} fontSize="2em" />
                {skill.name}
              </ListItem>
            ))}
          </List>
        ))}
        <Box>
          <Box
            as="button"
            type="button"
            onClick={onOpen}
            textAlign="left"
            color={emphasis}
            fontSize="smaller"
          >
            {site.about.skillsCta} <Icon as={IoMdOpen} aria-hidden />
          </Box>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
