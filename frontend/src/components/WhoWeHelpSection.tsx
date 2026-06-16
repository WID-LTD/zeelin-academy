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

export default function WhoWeHelpSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                Who Zeelin Academy <span style={{ color: 'var(--brand-gold)' }}>helps</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ul className="space-y-3">
                {audiences.map((item, i) => (
                  <AnimatedSection key={item} delay={200 + i * 60}>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(223,186,107,0.15)' }}>
                        <Check className="w-3.5 h-3.5" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <span className="text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Column - 2x2 Image Grid */}
          <AnimatedSection direction="right" delay={200} duration={700} className="w-full">
            <div className="grid grid-cols-2 gap-3 h-[300px] sm:h-[400px] md:h-[480px]">
              {[
                { src: '/learning_experience.png', alt: 'Learning journey at Zeelin Academy' },
                { src: '/business_analysis_course.png', alt: 'Business Analysis course' },
                { src: '/achievement_business_analysts.png', alt: 'BA professional achievement' },
                { src: '/diverse-student-group.jpg', alt: 'Diverse group of learners' },
              ].map((img, i) => (
                <div key={img.src}
                  className="relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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
