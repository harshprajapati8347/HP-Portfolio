export const site = {
  name: 'Harsh Prajapati',
  firstName: 'Harsh',
  lastName: 'Prajapati',
  role: 'Full Stack Developer (MERN + Next.js)',
  email: 'harshprajapati0123@gmail.com',
  url: 'https://www.iamharsh.in',
  locale: 'en_US',
  copyrightYear: 2026,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-WVR8KDZ',
  resumeUrl:
    'https://drive.google.com/drive/folders/14X1zywbbfk8TZzuJqrnm164d4Zy_9HMp?usp=sharing',
  githubProfile: 'https://github.com/harshprajapati8347',
  linkedIn:
    'https://www.linkedin.com/in/harsh-prajapati-developer/',
  instagram: 'https://www.instagram.com/harsh.prajapati.26/',
  ogImage: '/og.jpg',
  avatar: '/logo_big.webp',
  logo: '/logo.svg',
  seo: {
    title: 'Harsh Prajapati | Software Engineer | MERN & Next.js Developer',
    description:
      'Harsh Prajapati is a Software Engineer specializing in MERN stack, Next.js, scalable web applications, analytics engineering (GA4, GTM), cloud deployment, and AI-ready web platforms.',
    ogTitle: 'Harsh Prajapati | Software Engineer | MERN & Next.js',
    ogDescription:
      'Software Engineer specializing in end-to-end web application development using MERN stack, Next.js, cloud deployment, analytics engineering, and AI-ready architectures.',
    twitterTitle: 'Harsh Prajapati | Software Engineer | MERN & Next.js',
    twitterDescription:
      'Full-stack Software Engineer focused on MERN stack, Next.js, analytics engineering, cloud deployment, and AI-ready web applications.',
  },
  hero: {
    greeting: 'Hey there! I am',
    ctaLabel: 'Get in touch!',
    body: [
      "Hey! Glad you're here.",
      'I build and ship complete web applications — reliable backend systems, clean REST APIs, and functional frontends that are properly optimized and maintainable. Currently doing that full-time at Dentsu. Looking to go deeper on backend systems and cloud infrastructure in my next role.',
    ],
  },
  about: {
    heading: 'What I do.',
    paragraphs: [
      "Hey, I'm Harsh — a Full Stack Developer with 3+ years of experience shipping production web applications. I'm most confident on the backend — REST API design, Node.js, PostgreSQL, MongoDB, AWS, Docker, and CI/CD. I've built systems from schema design through to cloud deployment, and I care about code that's well-structured and built to scale.",
      "On the frontend I work with React.js, Next.js, and TypeScript — as an engineer, not a designer. State management, performance optimization, clean API integration. Currently at Dentsu, shipping backend tooling and web solutions for global enterprise clients. Next, I'm looking to go deeper on backend systems and cloud infrastructure.",
    ],
    skillsCta: 'See my full arsenal',
  },
  experience: {
    heading: "Places I've worked.",
    introBefore:
      'Since 2023, I have had the privilege to work with several companies that enabled me to hone my skills and talents. These companies will always have a special place in my heart. Currently I am working with',
    currentCompanyName: 'Dentsu',
    currentCompanyUrl: 'https://www.dentsu.com/in/en',
  },
  works: {
    heading: 'Some of my works.',
    intro:
      "A selection of production-ready platforms and systems I've built across full-stack engineering, analytics, and cloud deployments.",
  },
  blog: {
    heading: 'Writing.',
    intro: 'Articles and notes I have published across different platforms.',
    empty: 'No posts listed yet.',
  },
  testimonials: {
    heading: 'Kind words.',
    intro: 'A few notes from people I have worked with.',
  },
  contact: {
    heading: 'Say hi!',
    bodyBefore:
      "I'm always happy to connect and discuss development, analytics, product ideas, or collaboration opportunities. Feel free to reach out via social media or",
    bodyAfter: "—I'll get back as soon as I can.",
    emailLabel: 'email',
  },
  footer: {
    line: 'Designed and Made with',
    name: 'Harsh Prajapati',
  },
  nav: [
    { id: 'about', label: 'About', href: '#aboutMe', external: false },
    { id: 'experience', label: 'Experience', href: '#jobs', external: false },
    { id: 'works', label: 'Works', href: '#works', external: false },
    { id: 'blog', label: 'Blog', href: '#blog', external: false },
    { id: 'contact', label: 'Contact', href: '#contact', external: false },
    {
      id: 'resume',
      label: 'Resume',
      href: 'https://drive.google.com/drive/folders/14X1zywbbfk8TZzuJqrnm164d4Zy_9HMp?usp=sharing',
      external: true,
    },
  ],
} as const

export type NavItem = (typeof site.nav)[number]
