export type CompanyId = 'Merkle' | 'Blackcoffer' | 'Fleeguide'

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
  roles: string[]
}

export const Experiences: Record<CompanyId, CompanyDetail> = {
  Merkle: {
    name: 'Merkle',
    longName: 'Merkle',
    subDetail: 'Advertising Services',
    url: 'https://www.merkle.com/en.html',
    position: 'Software Developer',
    duration: 'Jun 2023 - Present',
    logo: {
      light: '/merkle-light-theme.png',
      dark: '/merkle-logo.svg',
    },
    roles: [
      'Planned and built REST APIs end-to-end - architecture, development, QA, and staging-to-production rollout - coordinating with external client teams to scope requirements; led a domain-wide chatbot integration (AWS Lambda CRUD functions, Postman QA, CloudWatch monitoring) for Q&A and lead generation to secure additional SOW and revenue.',
      'Architected server-side GTM implementations, including Google Tag Gateway setups for multiple clients to improve first-party data accuracy, and used AI-assisted audits to optimize GTM and Tealium tagging, driving notable CWV score improvement across client sites; leveraged GTM for dynamic GA4 and media pixel tracking to eliminate redundancy, and designed nonce-ready architectures to harden against XSS attacks.',
      'Earned Braze Developer Certification and led Braze integrations for client platforms - building automated remarketing flows based on custom user behavior, data ingestion pipelines, push notifications, in-app messages, and content cards, contributing to significant improvement in engagement and conversion.',
      "Integrated Tealium, an enterprise customer data orchestration solution, across client accounts - including custom dataLayer implementations, Enhanced Ecommerce tracking, and Measurement Protocol setups; handled AI-assisted audits of custom script ingestions, leveraging Tealium's pre-built tag library to accelerate custom tagging and reduce XSS injection risk.",
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
      light: 'https://ik.imagekit.io/harshprajapati/HP/bc-logo-light.png',
      dark: 'https://blackcoffer.com/_next/static/media/Blackcoffer-logo.2a3ff65b.svg',
    },
    roles: [
      'Developed responsive frontend interfaces using React.js and Chakra UI for a B2B contract management platform, improving UI consistency and reducing design-to-dev handoff friction.',
      'Integrated RESTful APIs into frontend components, implementing error handling, loading states, and data normalization for seamless user experience.',
      'Collaborated with design and backend teams in an agile workflow to ship features on schedule.',
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
      light: 'https://ik.imagekit.io/harshprajapati/HP/fg-white-light.png',
      dark: 'https://s3.ap-south-1.amazonaws.com/fleeguide.com/images/utils/new+white.png',
    },
    roles: [
      'Built and enhanced a MERN stack travel platform, delivering key frontend features including dynamic carousels, itinerary pages, and booking flows using React.js.',
      'Contributed to a faster product launch by owning frontend module delivery and coordinating with backend on API contracts.',
    ],
  },
}

export const ExperiencesList: CompanyDetail[] = [
  Experiences.Merkle,
  Experiences.Blackcoffer,
  Experiences.Fleeguide,
]
