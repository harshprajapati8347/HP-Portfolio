export type CompanyId = 'Dentsu' | 'Blackcoffer' | 'Fleeguide'

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
  Dentsu: {
    name: 'Dentsu',
    longName: 'Dentsu',
    subDetail: 'Advertising Services',
    url: 'https://www.dentsu.com/in/en',
    position: 'Software Developer',
    duration: 'Jun 2023 - Present',
    logo: {
      light: '/dentsu-light-theme.jpeg',
      dark: '/dentsu-dark-theme.png',
    },
    roles: [
      'Designed and delivered full-stack MERN features across multiple client projects — owning Node.js/Express.js backend API architecture, React.js/Next.js frontend components, and PostgreSQL/MongoDB database schema, reducing feature delivery cycles through modular, reusable service design.',
      'Built a real-time data pipeline integrating GA4, GTM, and GMP APIs — automating custom event tagging, data extraction, and alerting workflows that eliminated manual analyst effort and improved reporting accuracy for clients.',
      'Led production debugging and root cause analysis for critical incidents; implemented performance fixes and stabilised data pipelines, consistently maintaining deployment reliability across multi-client environments.',
      'Optimised REST API response times and frontend load performance through query optimisation, indexing strategies, and React lazy-loading — delivering measurable improvements in application scalability and end-user experience.',
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
  Experiences.Dentsu,
  Experiences.Blackcoffer,
  Experiences.Fleeguide,
]
