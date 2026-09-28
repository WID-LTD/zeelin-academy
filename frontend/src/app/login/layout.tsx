import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learner Sign In',
  description: 'Sign in to continue your Zeelin Academy job-readiness pathway.',
  robots: { index: false, follow: false },
}

export default function LoginLayout({children}:{children:React.ReactNode}){return children}
