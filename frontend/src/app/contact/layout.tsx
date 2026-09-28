import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Zeelin Academy',
  description: 'Contact Zeelin Academy for package guidance, enrollment support, partnerships or help using the Job Readiness System.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({children}:{children:React.ReactNode}){return children}
