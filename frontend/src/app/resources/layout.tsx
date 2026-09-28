import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Resources & Job Readiness Guides',
  description: 'Explore Zeelin career maps, project templates, portfolio evidence guides and job acquisition resources.',
  alternates: { canonical: '/resources' },
}

export default function RouteLayout({children}:{children:React.ReactNode}){return children}
