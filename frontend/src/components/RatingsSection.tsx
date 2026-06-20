'use client'

import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    role: 'BCS Foundation Graduate',
    avatar: '/avatar_1.png',
    rating: 5,
    text: 'The structured roadmap made all the difference. I passed my BCS Foundation exam on the first attempt while working full-time.',
  },
  {
    name: 'James O.',
    role: 'Core Pathway Graduate',
    avatar: '/avatar_2.png',
    rating: 5,
    text: 'The live sessions and personal coaching kept me accountable. I finally understand requirements engineering after years of confusion.',
  },
  {
    name: 'Amara K.',
    role: 'Practitioner Pathway Graduate',
    avatar: '/avatar_3.png',
    rating: 5,
    text: 'Zeelin Academy transformed my career. The visual summaries and mock quizzes were exactly what I needed to pass my practitioner exams.',
  },
  {
    name: 'David N.',
    role: 'Oral Exam Graduate',
    avatar: '/avatar_4.png',
    rating: 5,
    text: 'The oral exam prep was incredible. The mock sessions built my confidence and I walked into the exam room ready to succeed.',
  },
]

export default function RatingsSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              What Our{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Students Say</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              Real stories from real graduates who transformed their careers
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <AnimatedSection key={review.name} delay={100 + idx * 80} duration={600}>
              <div
                className="p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--brand-gold)' }} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <SafeImage src={review.avatar} alt={review.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--text-core)' }}>{review.name}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
