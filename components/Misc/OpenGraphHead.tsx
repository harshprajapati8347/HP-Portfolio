import Head from 'next/head'

const OpenGraphHead = () => (
  <Head>
    {/* Primary SEO */}
    <title>
      Harsh Prajapati | Software Engineer | MERN & Next.js Developer
    </title>
    <meta
      name="description"
      content="Harsh Prajapati is a Software Engineer specializing in MERN stack, Next.js, scalable web applications, analytics engineering (GA4, GTM), cloud deployment, and AI-ready web platforms."
    />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="Harsh Prajapati | Software Engineer | MERN & Next.js"
    />
    <meta property="og:site_name" content="Harsh Prajapati" />
    <meta property="og:url" content="https://www.iamharsh.in" />
    <meta
      property="og:description"
      content="Software Engineer specializing in end-to-end web application development using MERN stack, Next.js, cloud deployment, analytics engineering, and AI-ready architectures."
    />
    <meta property="og:type" content="profile" />
    <meta property="og:image" content="https://www.iamharsh.in/logo.svg" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Harsh Prajapati | Software Engineer | MERN & Next.js"
    />
    <meta
      name="twitter:description"
      content="Full-stack Software Engineer focused on MERN stack, Next.js, analytics engineering, cloud deployment, and AI-ready web applications."
    />
    <meta name="twitter:image" content="https://www.iamharsh.in/logo.svg" />
  </Head>
)

export default OpenGraphHead
