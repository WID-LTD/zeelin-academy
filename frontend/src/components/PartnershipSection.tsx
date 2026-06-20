'use client'

import AnimatedSection from '@/components/AnimatedSection'

const partners = [
  'BCS',
  'The Chartered Institute for IT',
  'APMG International',
  'IIBA',
]

export default function PartnershipSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--text-core)' }}>
              Trusted{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Partners</span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We work with leading certification bodies to deliver recognised Business Analysis qualifications
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((name) => (
              <div
                key={name}
                className="rounded-2xl border p-8 flex items-center justify-center h-28 transition-all duration-300 grayscale hover:grayscale-0 hover:shadow-lg hover:border-[var(--brand-gold)]"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <span className="font-display text-lg font-bold text-center" style={{ color: 'var(--text-muted)' }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
