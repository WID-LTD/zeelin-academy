'use client'

import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  {
    name: 'Sarah',
    role: 'BCS Foundation Certificate Student',
    text: 'I was a complete beginner and had never studied Business Analysis before. Zeelin Academy made everything so easy to follow. The visual summaries and step-by-step roadmap helped me build confidence from day one. I passed my BCS Foundation exam in just 6 weeks!',
  },
  {
    name: 'James',
    role: 'Career Changer',
    text: 'After 8 years in retail management, I wanted to transition into Business Analysis. Zeelin\u2019s structured pathway and live coaching calls gave me the practical skills and certification I needed. I landed my first BA role within 3 months of completing the programme.',
  },
  {
    name: 'Aisha',
    role: 'Busy Professional',
    text: 'Working 9\u20135 as a project coordinator, I struggled to find study time. Zeelin\u2019s flexible self-paced programme and micro-learning format allowed me to study during my commute and lunch breaks. I completed my certification without sacrificing work or family time.',
  },
  {
    name: 'David',
    role: 'Parent with Limited Time',
    text: 'With two young children at home, I needed a programme that respected my limited availability. The weekly check-ins and accountability system kept me on track without overwhelming my schedule. I passed my Practitioner exam on the first attempt.',
  },
  {
    name: 'Priya',
    role: 'BCS Practitioner Candidate',
    text: 'I had already tried studying with traditional textbooks but felt overwhelmed by the volume of information. Zeelin\u2019s mock quizzes and exam readiness system helped me identify gaps and approach my BCS Practitioner exam with genuine confidence.',
  },
  {
    name: 'Michael',
    role: 'Visual Learner',
    text: 'I always struggled with dense reading materials and lengthy textbooks. Zeelin\u2019s structured visual summaries and diagram-based explanations transformed complex BA concepts into clear, memorable visuals that finally clicked for me.',
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--brand-gold)' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 3xl:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black leading-tight" style={{ color: 'var(--text-core)' }}>
              What Our{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Students Say</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 3xl:gap-8 max-w-[1200px] mx-auto">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={item.name} delay={100 + idx * 80} duration={600}>
              <div
                className="p-6 border transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:border-[rgba(212,175,55,0.3)] group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--brand-gold)' }}>
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg" style={{ color: 'var(--text-core)' }}>
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--brand-gold)' }}>
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{item.text}&rdquo;
                </p>

                <StarRating />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
