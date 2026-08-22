import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'curiomart.iamharsh.in' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'blackcoffer.com' },
      { protocol: 'https', hostname: 's3.ap-south-1.amazonaws.com' },
    ],
  },
}

export default nextConfig
