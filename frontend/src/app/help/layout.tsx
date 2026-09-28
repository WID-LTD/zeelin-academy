import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Answers about Zeelin job-readiness packages, training, work-experience projects, mentorship and job acquisition.',
  alternates: { canonical: '/help' },
}

export default function RouteLayout({children}:{children:React.ReactNode}){return children}
