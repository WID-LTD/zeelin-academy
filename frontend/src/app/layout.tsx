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
import { defaultDescription, siteName, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Zeelin Academy | Job Readiness System',
    template: '%s | Zeelin Academy',
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    'job readiness training',
    'career training',
    'business analysis training',
    'work experience projects',
    'career change training',
    'job acquisition support',
    'business analyst training',
    'data analyst training',
    'product analyst training',
    'technical business analyst training',
    'Zeelin Academy',
  ],
  authors: [{ name: 'Zeelin Academy', url: siteUrl }],
  creator: 'Zeelin Academy',
  publisher: 'Zeelin Academy',
  category: 'education',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName,
    title: 'Zeelin Academy | Job Readiness System',
    description: defaultDescription,
    images: [{
      url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=85',
      width: 1200,
      height: 630,
      alt: 'Professionals collaborating as part of the Zeelin job readiness journey',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeelin Academy | Job Readiness System',
    description: defaultDescription,
    images: ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteName,
    url: siteUrl,
    logo: siteUrl + '/logo-light.png',
    founder: { '@type': 'Person', name: 'Dr Franklin Kalu' },
    description: defaultDescription,
    sameAs: [
      'https://www.linkedin.com/company/zeelin-academy',
      'https://www.youtube.com/@zeelinacademy',
      'https://www.instagram.com/zeelinacademy',
    ],
  }

  return (
    <html lang="en-GB" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
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
