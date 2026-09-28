import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Pathway Finder',
  description: 'Use the Zeelin Pathway Finder to identify the job-readiness package that best matches the kind of work and career direction you want to pursue.',
  alternates: { canonical: '/pathway-finder' },
}

export default function PathwayFinderLayout({children}:{children:React.ReactNode}){return children}
