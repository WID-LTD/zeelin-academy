import type { Metadata } from 'next'
import './globals.css'
import './job-readiness-secondary.css'
import './job-readiness-forms.css'
import './marketing-revamp.css'
import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Wakeup from '@/components/Wakeup'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'Zeelin Academy | Job Readiness System',
  description: 'Choose a career package and move through training, real-world project experience, mentorship, assessment and job acquisition in one connected system.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Wakeup />
          <Header />
          <main className="jr-main">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
