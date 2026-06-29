'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTimeLeft, COUNTDOWN_DATE } from '@/lib/constants'

export default function FlashSaleSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setIsMounted(true)
    setTimeLeft(getTimeLeft(new Date(COUNTDOWN_DATE)))
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(COUNTDOWN_DATE)))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-10 lg:py-12">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(212,160,42,0.12), transparent 70%)'
          }} />
          <div className="relative p-6 sm:p-12 md:p-16 text-center" style={{ backgroundColor: 'rgba(223,186,107,0.06)' }}>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Start Your <span style={{ color: 'var(--brand-gold)' }}>Journey</span> Today
            </h2>

            {/* Pricing */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">£499</span>
              <div className="px-3 py-1 rounded-lg text-sm sm:text-base font-bold animate-pulse-gold whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white' }}>
                Save 40%
              </div>
              <span className="text-4xl sm:text-5xl font-black" style={{ color: 'var(--brand-gold)' }}>£299</span>
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label} className="text-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--brand-gold)', border: '1px solid var(--border)' }}>
                    {isMounted ? String(unit.value).padStart(2, '0') : '00'}
                  </div>
                  <div className="text-[0.6rem] sm:text-[0.65rem] mt-1.5 text-muted font-bold uppercase tracking-wider">{unit.label}</div>
                </div>
              ))}
            </div>

            <p className="text-lg font-semibold mb-8 max-w-xl mx-auto text-secondary">
              Join thousands of successful graduates. Enroll now at the discounted rate and start your Business Analysis journey.
            </p>

            <Link href="/enroll" className="btn-gold px-10 py-4 text-lg font-bold inline-block hover:scale-105 transition-transform">
              Enroll Now — £299
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
