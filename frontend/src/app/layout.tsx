import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Wakeup from '@/components/Wakeup'

export const metadata: Metadata = {
  title: 'Zeelin Academy | Diploma in Business Analysis',
  description: 'Transform your career with Zeelin Academy - Pioneered by Dr. Franklin Kalu. Structured, practical Business Analysis education.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' }
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
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <div className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: 'url("/office.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.5,
          }} />
        <ThemeProvider>
          <Wakeup />
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
