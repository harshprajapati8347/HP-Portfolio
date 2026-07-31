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
        title: "NotebookLM Clone",
        src: "/notebooklm-icon.png",
        description: "A multi-notebook RAG research assistant — add PDFs, URLs, YouTube videos, or transcripts as sources, then get streamed, grounded answers with click-through citations that jump to the exact page, timestamp, or paragraph they came from.",
        ctaUrl: "https://notebooklm.iamharsh.in",
        githubUrl: "https://github.com/harshprajapati8347/NotebookLM-Clone",
    },
    {
        idx: 3,
        title: 'CreatorForge',
        src: '/creatorforge.png',
        description:
            'A client-side YouTube thumbnail generator powered by Gemini AI. Your API key, images, and prompts never leave the browser — no accounts, no cloud storage, just fast local generation.',
        ctaUrl: 'https://creatorforge.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/creatorforge-ai',
    },
    {
        idx: 4,
        title: 'WealthFox',
        src: 'https://res.cloudinary.com/cloudwithharsh/image/upload/v1767337005/WealthFOX/logow_original_b48e5t.png',
        description:
            'A production-grade financial advisory platform built with Next.js and Tailwind CSS. Integrated GA4 via GTM, Google Places reviews with MongoDB TTL caching, SEO optimization, and automated lead capture synced with Odoo CRM.',
        ctaUrl: 'https://wealthfox.in',
    },
    {
        idx: 5,
        title: 'Trimly',
        src: 'https://ik.imagekit.io/harshprajapati/HP/trimly-logo.png',
        description:
            'Trimly was built to explore Supabase and shadcn/ui in a real project. It\'s a URL shortener with a clean analytics dashboard where users can create short links, track clicks, and view link performance.',
        ctaUrl: 'https://trimly.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/trimly-url-shortner',
    },
    {
        idx: 7,
        title: 'iamharsh.in',
        src: '/logo.svg',
        description:
            'Designed and developed a personal portfolio using Next.js, TypeScript, and Chakra UI, highlighting projects in full-stack development, analytics engineering, and cloud deployments.',
        ctaUrl: 'https://www.iamharsh.in',
        githubUrl: 'https://github.com/harshprajapati8347/HP-Portfolio',
    },

]

export default projects