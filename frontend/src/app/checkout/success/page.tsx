'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

function SuccessContent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-[5%]">
      <div className="max-w-[600px] mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
          style={{ backgroundColor: 'rgba(212,160,42,0.1)' }}>
          <CheckCircle className="w-10 h-10" style={{ color: 'var(--brand-gold)' }} />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black" style={{ color: 'var(--text-core)' }}>
          Payment <span style={{ color: 'var(--brand-gold)' }}>Successful!</span>
        </h1>
        <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
          Thank you for your payment. Your enrollment is now confirmed and you will receive a confirmation email shortly.
        </p>
        <Link href="/"
          className="inline-block px-10 py-4 rounded-lg font-bold text-base uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
          style={{ backgroundColor: '#0D1B2A', color: '#ffffff' }}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
