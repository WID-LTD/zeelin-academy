import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zeelin Academy | Master International Business Analysis',
  description: 'Master International Business Analysis and Build a Global Career with Zeelin Academy. Industry-focused training, real-world case studies, and expert mentorship.',
  metadataBase: new URL('https://zeelinacademy.com'),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'Zeelin Academy | Master International Business Analysis',
    description: 'Transform your career with Zeelin Academy - Pioneered by Dr. Franklin Kalu. Structured, practical Business Analysis education.',
    url: 'https://zeelinacademy.com',
    siteName: 'Zeelin Academy',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased relative" suppressHydrationWarning>
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center z-[-1]">
          <img src="/logo.png" alt="" className="object-contain p-20 w-full h-full max-w-[800px]" />
        </div>
        <ThemeProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
