import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zeelin Support Center',
  description: 'Get support with Zeelin packages, enrollment, learner access, mentorship and technical issues.',
  alternates: { canonical: '/support' },
}

export default function RouteLayout({children}:{children:React.ReactNode}){return children}
