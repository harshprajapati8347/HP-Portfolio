'use client'

import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
  Text,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import {
  Skill,
  Skills,
  skillSectionTitles,
  splitSkills,
  SkillCategory,
} from 'config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="h3" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}

const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const categories = Object.keys(Skills) as SkillCategory[]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Full Skill Set List</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          {categories.map((category) => {
            const items = Skills[category]
            if (!items.length) {
              return null
            }
            return (
              <SkillList
                key={category}
                title={skillSectionTitles[category]}
                columns={splitSkills(items)}
              />
            )
          })}
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*Some micro frameworks not included</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
