'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { Check } from 'lucide-react'

const audiences = [
  'Complete beginners',
  'Career changers',
  'Busy 9–5 professionals',
  'Parents with limited study time',
  'People preparing for BCS Business Analysis exams',
  'People who feel overwhelmed by big textbooks',
  'Visual learners',
  'Professionals who want practical BA confidence',
]

const photos = [
  { src: '/IMG-20260605-WA0031.jpg', alt: 'BA professional at work' },
  { src: '/IMG-20260605-WA0032.jpg', alt: 'Business analysis team collaboration' },
  { src: '/IMG-20260605-WA0035.jpg', alt: 'Student success at Zeelin Academy' },
  { src: '/IMG-20260605-WA0036.jpg', alt: 'Professional learning environment' },
]

export default function WhoWeHelpSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: 'var(--text-core)' }}>
                Who Zeelin Academy{' '}
                <span style={{ color: 'var(--brand-gold)' }}>helps</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ul className="space-y-4">
                {audiences.map((item, i) => (
                  <AnimatedSection key={item} delay={200 + i * 60}>
                    <li className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(223,186,107,0.15)' }}>
                        <Check className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <span className="text-lg md:text-xl font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Column - Photo Grid */}
          <AnimatedSection direction="right" delay={200} duration={700} className="w-full">
            <div className="grid grid-cols-2 gap-4 h-[400px] sm:h-[500px] md:h-[600px]">
              {photos.map((img, i) => (
                <div key={img.src}
                  className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${i === 0 ? 'row-span-2' : ''}`}
                  style={{ backgroundColor: 'var(--bg-card)' }}>
                  <SafeImage src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
