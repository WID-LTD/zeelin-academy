require('dotenv').config({ path: '../.env.local' })

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*' }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BACKEND_URL ? `${process.env.BACKEND_URL}/api/:path*` : 'http://127.0.0.1:3030/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
