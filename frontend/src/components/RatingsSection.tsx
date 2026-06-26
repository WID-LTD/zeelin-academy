'use client'

import AnimatedSection from '@/components/AnimatedSection'
import SafeImage from '@/components/SafeImage'
import { Star, MessageSquare } from 'lucide-react'

const ratingDistribution = [
  { stars: 5, percentage: 72, count: 360 },
  { stars: 4, percentage: 20, count: 100 },
  { stars: 3, percentage: 6, count: 30 },
  { stars: 2, percentage: 1.5, count: 8 },
  { stars: 1, percentage: 0.5, count: 2 },
]

const totalReviews = 500
const averageRating = 4.9

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'BCS Foundation Graduate',
    company: 'Barclays',
    avatar: '/avatar_1.png',
    rating: 5,
    text: 'The structured roadmap made all the difference. I passed my BCS Foundation exam on the first attempt while working full-time. The weekly check-ins kept me accountable and the visual summaries made complex topics easy to grasp.',
  },
  {
    name: 'James Okafor',
    role: 'Core Pathway Graduate',
    company: 'Deloitte',
    avatar: '/avatar_2.png',
    rating: 5,
    text: 'The live sessions and personal coaching kept me accountable. I finally understand requirements engineering after years of confusion. Zeelin\'s approach made everything click into place, and I am now leading requirements workshops at work.',
  },
  {
    name: 'Amara Kalu',
    role: 'Practitioner Pathway Graduate',
    company: 'HSBC',
    avatar: '/avatar_3.png',
    rating: 5,
    text: 'Zeelin Academy transformed my career. The visual summaries and mock quizzes were exactly what I needed to pass my practitioner exams. Within 3 months of graduating, I secured a Senior BA role with a 40% salary increase.',
  },
  {
    name: 'David Nkosi',
    role: 'Oral Exam Graduate',
    company: 'KPMG',
    avatar: '/avatar_4.png',
    rating: 5,
    text: 'The oral exam prep was incredible. The mock sessions built my confidence and I walked into the exam room ready to succeed. The personalised feedback on my presentation style was invaluable for passing the oral examination.',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Foundation & Core Graduate',
    company: 'PwC',
    avatar: '/avatar_5.png',
    rating: 5,
    text: 'I joined Zeelin as a complete beginner and within 12 weeks I had passed both my Foundation and Core exams. The progressive pathway design kept me motivated and the support team was always there when I needed help.',
  },
]

export default function RatingsSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              What Our{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Students Say</span>
            </h2>
            <p className="text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
              Real stories from real graduates who transformed their careers
            </p>
          </div>
        </AnimatedSection>

        {/* Overall Rating & Distribution */}
        <AnimatedSection delay={150}>
          <div
            className="max-w-[1280px] mx-auto mb-10 p-6 md:p-8 rounded-2xl border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Overall Rating */}
              <div className="text-center md:text-left">
                <div className="text-5xl font-black" style={{ color: 'var(--brand-gold)' }}>{averageRating}</div>
                <div className="flex gap-1 my-2 justify-center md:justify-start">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: i < Math.round(averageRating) ? 'var(--brand-gold)' : 'var(--border)' }} />
                  ))}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  <MessageSquare className="w-3.5 h-3.5 inline mr-1" />
                  {totalReviews}+ reviews
                </div>
              </div>

              {/* Distribution Bars */}
              <div className="md:col-span-2 space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-xs font-bold w-6 text-right" style={{ color: 'var(--text-muted)' }}>{item.stars}★</span>
                    <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${item.percentage}%`,
                          background: 'linear-gradient(90deg, var(--brand-gold), var(--brand-gold-dark))',
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium w-12" style={{ color: 'var(--text-muted)' }}>{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1280px] mx-auto">
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
                    <p className="text-[10px]" style={{ color: 'var(--brand-gold)' }}>{review.company}</p>
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
