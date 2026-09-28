import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zeelin Learner Community',
  description: 'Learn how Zeelin community spaces support project delivery, accountability, peer learning and professional development.',
  alternates: { canonical: '/community' },
}

export default function RouteLayout({children}:{children:React.ReactNode}){return children}
