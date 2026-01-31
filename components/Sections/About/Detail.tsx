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
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiDocker,
  SiMongodb,
  SiAmazonaws,
  SiGoogleanalytics,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I’m a <b>Software Developer & Analyst</b> with over <b>3+ years</b> of
        professional experience, currently working at <b>Merkle (Dentsu)</b>. I
        specialize in building <b>scalable full-stack web applications</b> using
        JavaScript, TypeScript, the MERN stack, and Next.js, with a strong focus
        on clean architecture, APIs, and long-term maintainability.
      </Text>

      <Text variant="description">
        Alongside application development, I work extensively on{' '}
        <b>analytics engineering</b>, implementing and optimizing{' '}
        <b>GA4, GTM, and GMP APIs</b> to enable accurate data collection and
        insight-driven decision-making. I am also capable of building{' '}
        <b>AI-ready web applications</b>, integrating LLM-based workflows and
        modern AI services, and I actively explore new technologies to
        continuously evolve my skill set.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMongodb} color={emphasis} fontSize="2em" />
            MongoDB
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAmazonaws} color={emphasis} fontSize="2em" />
            AWS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGoogleanalytics} color={emphasis} fontSize="2em" />
            Google Analytics
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
