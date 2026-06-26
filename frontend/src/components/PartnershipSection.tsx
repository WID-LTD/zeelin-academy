'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'

const partners = [
  { name: 'BCS', logo: '/bcs.png' },
  { name: 'APMG International', logo: '/apmg.png' },
  { name: 'IIBA', logo: '/iiba.jpg' },
  { name: 'WID LTD', logo: '/wid-ltd.png' },
  { name: 'Career Code', logo: '/careercode.jpg' },
]

export default function PartnershipSection() {
  const allPartners = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
          <div className="overflow-hidden relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            }}>
            <div className="flex gap-8 animate-marquee-right hover:[animation-play-state:paused]">
              {allPartners.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 w-56 rounded-2xl border p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 grayscale hover:grayscale-0 hover:shadow-lg hover:border-[var(--brand-gold)]"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div className="relative w-full h-24">
                    <SafeImage
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-center leading-tight" style={{ color: 'var(--text-muted)' }}>
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
