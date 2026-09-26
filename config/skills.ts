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
  SiExpress,
  SiFastapi,
  SiShadcnui,
  SiLangchain,
  SiRedis,
  SiNextdotjs,
  SiMaterialdesign,
  SiNodedotjs,
  SiSocketdotio,
  SiAircall,
  SiVectorlogozone,
} from 'react-icons/si'
import { BsQuestionSquare } from 'react-icons/bs'
import { FaAws } from 'react-icons/fa'
import { PiQueue, PiMemory, PiGraph } from 'react-icons/pi'

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'database'
  | 'cloud_devops'
  | 'analytics'
  | 'languages'
  | 'css_frameworks'
  | 'mobile'
  | 'ai_genai'

export type Skill = {
  name: string
  icon: IconType
}

export const featuredSkills: Skill[] = [
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'AWS', icon: FaAws },
  { name: 'LangChain', icon: SiLangchain },
  { name: 'RAG & Generative AI', icon: SiAircall },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
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
  ai_genai: 'AI & Generative AI',
}

export const Skills: Record<SkillCategory, Skill[]> = {
  ai_genai: [
    { name: 'LangChain', icon: SiLangchain },
    { name: 'LangGraph', icon: PiGraph },
    { name: 'RAG (Retrieval-Augmented Generation)', icon: SiAircall },
    { name: 'Vector Databases (Pinecone)', icon: SiVectorlogozone },
    { name: 'Prompt Engineering', icon: SiAircall },
    { name: 'Mem0', icon: PiMemory },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'LangChain', icon: SiLangchain },
    { name: 'Zod (Schema Validation)', icon: BsQuestionSquare },
    { name: 'REST APIs', icon: BsQuestionSquare },
    { name: 'Redis', icon: SiRedis },
    { name: 'GraphQL APIs', icon: BsQuestionSquare },
    { name: 'Socket.IO', icon: SiSocketdotio },
    { name: 'FastAPI', icon: SiFastapi },
  ],
  frontend: [
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Redux Toolkit', icon: SiRedux },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  cloud_devops: [
    { name: 'AWS EC2, S3, Lambda, CloudWatch', icon: FaAws },
    { name: 'Docker', icon: SiDocker },
    { name: 'GitHub Actions (CI/CD)', icon: SiGithubactions },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
  ],
  css_frameworks: [
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Shadcn/UI', icon: SiShadcnui },
    { name: 'Material UI', icon: SiMaterialdesign },
  ],
  analytics: [
    { name: 'Google Analytics 4 (GA4)', icon: SiGoogleanalytics },
    { name: 'Google Tag Manager', icon: SiGoogletagmanager },
    { name: 'Tealium', icon: BsQuestionSquare },
  ],
  languages: [
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
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
