export interface Project {
    idx: number
    title: string
    src: string
    description: string
    ctaUrl: string
    githubUrl?: string
    objectPosition?: string
}

const projects: Project[] = [
    {
        idx: 1,
        title: 'Curiomart',
        src: 'https://curiomart.iamharsh.in/assets/logo-DXsWE0_a.png',
        description:
            "A scalable multi-vendor e-commerce CMS built using the MERN stack. Features include role-based authentication, real-time chat with Socket.IO, Stripe payment integration, and a responsive admin dashboard. Deployed on AWS EC2 for production scalability.",
        ctaUrl: 'https://curiomart.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/CurioMart-Ecommerce',
        objectPosition: 'right 20%',
    },
    {
        idx: 2,
        title: 'WealthFox',
        src: 'https://res.cloudinary.com/cloudwithharsh/image/upload/v1767337005/WealthFOX/logow_original_b48e5t.png',
        description:
            'A production-grade financial advisory platform built with Next.js and Tailwind CSS. Integrated GA4 via GTM, Google Places reviews with MongoDB TTL caching, SEO optimization, and automated lead capture synced with Odoo CRM.',
        ctaUrl: 'https://wealthfox.in',
    },
    {
        idx: 3,
        title: 'Trimly',
        src: 'https://ik.imagekit.io/harshprajapati/HP/trimly-logo.png',
        description:
            'A modern URL Shortener with Analytics built using React, shadcn/ui, and Supabase. Trimly allows users to create short URLs, track clicks, and view link performance through a clean dashboard. This project was built to explore modern React UI patterns, Supabase BaaS, and shadcn component design.',
        ctaUrl: 'https://trimly.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/trimly-url-shortner',
    },
    {
        idx: 4,
        title: 'AgriCom',
        src: 'https://agricom.onrender.com/static/media/AgriComLogoHome.c976c4e8f90a1f667bb9.png',
        description:
            'AgriCom is my final-year BTech project, an information-focused platform for farmers combining agri news, government schemes, learning resources, and IoT insights. Built on the MERN stack with a full admin dashboard and clean, modern UI.',
        ctaUrl: 'https://agricom.onrender.com',
        githubUrl: 'https://github.com/harshprajapati8347/AgriComm-Agriculture-Ecommerce-Website',
    },
    {
        idx: 5,
        title: 'iamharsh.in',
        src: '/logo.svg',
        description:
            'Designed and developed a personal portfolio using Next.js, TypeScript, and Chakra UI, highlighting projects in full-stack development, analytics engineering, and cloud deployments.',
        ctaUrl: 'https://www.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/HP-Portfolio',
    },
    {
        idx: 6,
        title: 'CreatorForge',
        src: '/creatorforge.png',
        description:
            'A client-side YouTube thumbnail generator powered by Gemini AI. Your API key, images, and prompts never leave the browser — no accounts, no cloud storage, just fast local generation.',
        ctaUrl: 'https://creatorforge.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/creatorforge-ai',
    },
]

export default projects