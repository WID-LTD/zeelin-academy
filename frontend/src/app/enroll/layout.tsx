import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enroll in a Job Readiness Package',
  description: 'Choose and enroll in a Zeelin career-category package covering training, practical work experience, mentorship, assessment and job acquisition.',
  alternates: { canonical: '/enroll' },
  robots: { index: false, follow: true },
}

export default function EnrollLayout({children}:{children:React.ReactNode}){return children}
