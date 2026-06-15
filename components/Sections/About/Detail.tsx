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
import {
  SiTypescript,
  SiReact,
  SiMongodb,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
} from 'react-icons/si'
import { IoMdOpen } from 'react-icons/io'
import { FaAws } from "react-icons/fa";


type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

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
        Hey, I'm Harsh — a <b>Software Developer</b> based in <b>Surat, India</b>, with <b>3+ years</b> of professional experience building <b>web applications</b> that are fast, maintainable, and built to last.
        I currently work at <b>Merkle (Dentsu)</b>, where I build production-grade applications, automation workflows, and analytics solutions for global enterprise clients. My core stack is <b>JavaScript, TypeScript, React.js, Next.js, and Node.js</b> — and I'm comfortable owning a product from <b>database design all the way through to deployment</b>.
      </Text>

      <Text variant="description">
        I enjoy solving problems that sit somewhere between frontend polish and backend logic — whether it’s designing an API, optimizing a database query, or building a smooth user-facing feature. I’m especially interested in working with teams that value clean code, long-term ownership, and the kind of end-to-end development that makes a product feel cohesive and reliable.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMongodb} color={emphasis} fontSize="2em" />
            MongoDB
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaAws} color={emphasis} fontSize="2em" />
            AWS
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            Next.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javscript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLangchain} color={emphasis} fontSize="2em" />
            Langchain
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
