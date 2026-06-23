require('dotenv').config({ path: '../.env.local' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production' ? 'https://zeelin-academy.onrender.com' : 'http://localhost:3030')}/api/:path*`
      }
    ]
  }
}

module.exports = nextConfig
