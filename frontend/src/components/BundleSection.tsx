'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function BundleSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* 3D Book Bundle */}
          <AnimatedSection delay={100} duration={800}>
            <div className="relative flex items-end justify-center h-72 md:h-80 w-72 md:w-80">
              {/* Book 3 - back right */}
              <div className="absolute bottom-0 right-0 w-36 md:w-40 h-48 md:h-52 rotate-[12deg] rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[8deg] z-[1]"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <img src="/book3.png" alt="Business Analysis Book" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              {/* Book 2 - middle */}
              <div className="absolute bottom-0 right-8 md:right-10 w-36 md:w-40 h-48 md:h-52 rotate-[6deg] rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[3deg] z-[2]"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <img src="/book2.png" alt="Business Analysis Book" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              {/* Book 1 - front left */}
              <div className="absolute bottom-0 left-0 w-36 md:w-40 h-48 md:h-52 -rotate-[6deg] rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[-3deg] z-[3]"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <img src="/book1.png" alt="Business Analytics Book" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 rounded-full opacity-20 blur-md"
                style={{ backgroundColor: 'var(--brand-gold)' }} />
            </div>
          </AnimatedSection>

          {/* Content + CTA */}
          <AnimatedSection delay={200} duration={800} className="text-center lg:text-left">
            <h3 className="font-display text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Get the Complete{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Book Bundle</span>
            </h3>
            <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Master Business Analysis with our curated collection of essential textbooks. 
              Perfect for BCS Diploma preparation and professional development.
            </p>
            <Link
              href="/enroll"
              className="btn-gold px-10 py-4 text-base font-bold inline-block hover:scale-105 transition-transform shadow-lg"
            >
              Order Now!
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
