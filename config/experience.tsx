import { Link } from '@chakra-ui/react'

export type Company = 'Merkle' | 'Blackcoffer' | 'Fleeguide'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Merkle: {
    name: 'Merkle',
    longName: 'Merkle - A Dentsu Company',
    subDetail: 'Adverstising & Analytics',
    url: 'https://www.merkle.com/',
    position: 'Software Developer & Analyst',
    duration: 'Jun 2023 - Present',
    logo: {
      light:
        'https://assets.merkle.com/is/content/merkle/merkle-full-logo-dt?ts=1765460889463&dpr=off',
      dark: 'https://assets.merkle.com/is/content/merkle/merkle-full-logo-dt?ts=1765460889463&dpr=off',
    },
    roles: [
      <>
        Led end-to-end full-stack and analytics implementations using MERN stack
        and Next.js, delivering scalable web applications with optimized REST
        APIs, database architecture, and AWS deployments.
      </>,
      <>
        Delivered advanced analytics engineering across GA4, GTM, GMP APIs, and
        media platforms, including audits, custom API-driven integrations, and
        best-practice enforcement to improve data accuracy and business
        outcomes.
      </>,
      <>
        Built automation scripts using JavaScript and Python for GTM and GA4
        data extraction, metric anomaly alerts, and reporting workflows,
        improving system reliability and operational efficiency.
      </>,
      <>
        Provided technical consulting for global clients, implementing tracking
        architecture, web and mobile tagging, cookie and CSP compliance, and
        complex integrations—contributing to Merkle’s Analytics Agency of the
        Year 2024 recognition.
      </>,
    ],
  },

  Blackcoffer: {
    name: 'Blackcoffer',
    longName: 'Blackcoffer',
    subDetail: 'Information Technology & Services',
    url: 'https://blackcoffer.com/',
    position: 'Software Engineer',
    duration: 'Jan 2023 - Jun 2023',
    logo: {
      light:
        'https://blackcoffer.com/_next/static/media/Blackcoffer-logo.9257d004.svg',
      dark: 'https://blackcoffer.com/_next/static/media/Blackcoffer-logo.9257d004.svg',
    },
    roles: [
      <>
        Spearheaded development of an AI-powered contract management system
        using TypeScript, React, Chakra UI, Node.js, and AWS, delivering a
        production-ready enterprise application.
      </>,
      <>
        Led UI revamp and streamlined complex TypeScript codebases, integrated
        backend services, and designed REST APIs to ensure scalability and
        maintainability.
      </>,
      <>
        Collaborated with cross-functional teams and global clients, supervising
        frontend development and accelerating delivery timelines.
      </>,
    ],
  },

  Fleeguide: {
    name: 'Fleeguide',
    longName: 'Fleeguide',
    subDetail: 'Travel Arrangements',
    url: 'https://fleeguide.com/',
    position: 'Web Development Intern',
    duration: 'May 2022 - Nov 2022',
    logo: {
      light:
        'https://s3.ap-south-1.amazonaws.com/fleeguide.com/images/utils/new+white.png',
      dark: 'https://s3.ap-south-1.amazonaws.com/fleeguide.com/images/utils/new+white.png',
    },
    roles: [
      <>
        Enhanced a MERN-based tour and travel platform by implementing new
        features, refining the codebase, and improving overall performance and
        scalability.
      </>,
      <>
        Worked extensively with React.js, Node.js, and GitHub, contributing to
        faster releases and improved user experience.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Merkle,
  Experiences.Blackcoffer,
  Experiences.Fleeguide,
]
