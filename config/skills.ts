import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiDocker,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiSocketDotIo,
  SiMaterialUi,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiTailwindcss,
  SiAmazonaws,
  SiGithubactions,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiPython,
  SiGithub,
  SiFirebase,
  SiCplusplus,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'cloud_devops'
  | 'analytics'
  | 'languages'
  | 'productivity'
  | 'css_frameworks'
  | 'mobile'
  | 'games'
  | 'desktop'
  | 'cicd'
  | 'mobile'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  frontend: [
    {
      name: 'React.js',
      icon: SiReact,
    },
    {
      name: 'Next.js',
      icon: SiNextDotJs,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
  ],

  css_frameworks: [
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Chakra UI',
      icon: BsQuestionSquare,
    },
    {
      name: 'Material UI',
      icon: SiMaterialUi,
    },
    {
      name: 'Styled Components',
      icon: SiStyledComponents,
    },
  ],

  backend: [
    {
      name: 'Node.js',
      icon: SiNodeDotJs,
    },
    {
      name: 'Zod (Schema Validation)',
      icon: BsQuestionSquare,
    },
    {
      name: 'REST APIs',
      icon: BsQuestionSquare,
    },
    {
      name: 'Socket.IO',
      icon: SiSocketDotIo,
    },
  ],

  database: [
    {
      name: 'MongoDB',
      icon: SiMongodb,
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'Vector Databases',
      icon: BsQuestionSquare,
    },
  ],

  cloud_devops: [
    {
      name: 'AWS EC2, S3, Lambda. CloudWatch',
      icon: SiAmazonaws,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GitHub Actions (CI/CD)',
      icon: SiGithubactions,
    },
  ],

  analytics: [
    {
      name: 'Google Analytics 4 (GA4)',
      icon: SiGoogleanalytics,
    },
    {
      name: 'Google Tag Manager',
      icon: SiGoogletagmanager,
    },
    {
      name: 'Tealium',
      icon: BsQuestionSquare,
    },
    {
      name: 'GMP APIs',
      icon: SiGooglecloud,
    },
  ],

  languages: [
    {
      name: 'JavaScript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'C++',
      icon: SiCplusplus,
    },
  ],

  productivity: [
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'GitHub',
      icon: SiGithub,
    },
    {
      name: 'VS Code',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
  ],
  games: [],
  desktop: [],
  cicd: [],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
