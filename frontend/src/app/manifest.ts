import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zeelin Academy Job Readiness System',
    short_name: 'Zeelin Academy',
    description: 'Training, work experience, mentorship, assessment and job acquisition in one connected career system.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#071b33',
    icons: [{ src: '/favicon.png', sizes: 'any', type: 'image/png' }],
  }
}
