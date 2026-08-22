import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiDocker,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiGithubactions,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiPython,
  SiGithub,
  SiFirebase,
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiShadcnui,
  SiLangchain,
  SiRedis,
  SiNextdotjs,
  SiMaterialdesign,
  SiNodedotjs,
  SiSocketdotio,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { FaAws } from 'react-icons/fa'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'cloud_devops'
  | 'analytics'
  | 'languages'
  | 'css_frameworks'
  | 'mobile'

export type Skill = {
  name: string
  icon: IconType
}

export const featuredSkills: Skill[] = [
  { name: 'React.js', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'AWS', icon: FaAws },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'LangChain', icon: SiLangchain },
]

export const skillSectionTitles: Record<SkillCategory, string> = {
  frontend: 'Frontend Engineering',
  css_frameworks: 'CSS Frameworks',
  backend: 'Backend Engineering',
  database: 'Databases & Data Stores',
  cloud_devops: 'Cloud & DevOps',
  analytics: 'Analytics Engineering',
  languages: 'Languages',
  mobile: 'Mobile Engineering',
}

export const Skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Redux Toolkit', icon: SiRedux },
  ],
  css_frameworks: [
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Shadcn/UI', icon: SiShadcnui },
    { name: 'Chakra UI', icon: BsQuestionSquare },
    { name: 'Material UI', icon: SiMaterialdesign },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'LangChain', icon: SiLangchain },
    { name: 'Zod (Schema Validation)', icon: BsQuestionSquare },
    { name: 'REST APIs', icon: BsQuestionSquare },
    { name: 'GraphQL APIs', icon: BsQuestionSquare },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Socket.IO', icon: SiSocketdotio },
    { name: 'Redis', icon: SiRedis },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Vector Databases', icon: BsQuestionSquare },
  ],
  cloud_devops: [
    { name: 'AWS EC2, S3, Lambda, CloudWatch', icon: FaAws },
    { name: 'Docker', icon: SiDocker },
    { name: 'GitHub Actions (CI/CD)', icon: SiGithubactions },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
  ],
  analytics: [
    { name: 'Google Analytics 4 (GA4)', icon: SiGoogleanalytics },
    { name: 'Google Tag Manager', icon: SiGoogletagmanager },
    { name: 'Tealium', icon: BsQuestionSquare },
    { name: 'GMP APIs', icon: SiGooglecloud },
  ],
  languages: [
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'C++', icon: SiCplusplus },
  ],
  mobile: [{ name: 'React Native', icon: SiReact }],
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

  const temporary: Skill[][] = []
  for (let i = 0; i < srcArray.length; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
