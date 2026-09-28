import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Sitemap',
  description: 'Browse the public pages and seven job-readiness package pathways available from Zeelin Academy.',
  alternates: { canonical: '/sitemap' },
}

export default function RouteLayout({children}:{children:React.ReactNode}){return children}
