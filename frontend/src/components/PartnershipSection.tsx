'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { Award, ShieldCheck, Users, Star, BookOpen } from 'lucide-react'

const partners = [
  { name: 'BCS', logo: '/bcs.png' },
  { name: 'APMG International', logo: '/apmg.png' },
  { name: 'IIBA', logo: '/iiba.jpg' },
  { name: 'WID LTD', logo: '/wid-ltd.png' },
  { name: 'Career Code', logo: '/careercode.jpg' },
]

const accreditations = [
  {
    icon: Award,
    name: 'BCS – The Chartered Institute for IT',
    description: 'BCS accreditation ensures our curriculum meets the highest industry standards for Business Analysis education. As a BCS-aligned provider, your certification carries the weight of one of the most respected IT professional bodies in the world.',
    benefit: 'Globally recognised qualification',
  },
  {
    icon: ShieldCheck,
    name: 'APMG International',
    description: 'APMG is a globally recognised examination institute that accredits training providers across multiple disciplines. APMG endorsement guarantees that your certification is valued by employers worldwide and adheres to strict quality standards.',
    benefit: 'Internationally validated certification',
  },
  {
    icon: Users,
    name: 'IIBA – International Institute of Business Analysis',
    description: 'IIBA is the global voice of the Business Analysis profession. Our alignment with IIBA standards means our courses map to globally accepted BA best practices, preparing you for roles that demand IIBA-aligned competency.',
    benefit: 'Industry-standard competency framework',
  },
  {
    icon: BookOpen,
    name: 'WID LTD – Approved Training Partner',
    description: 'Our partnership with WID LTD ensures quality assurance and professional standards across all programme delivery. This accreditation guarantees that your learning experience meets rigorous quality benchmarks.',
    benefit: 'Quality-assured learning experience',
  },
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

        {/* Why These Accreditations Matter */}
        <AnimatedSection delay={300}>
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl md:text-3xl font-black mb-3" style={{ color: 'var(--text-core)' }}>
                Why These{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Accreditations Matter</span>
              </h3>
              <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Every partnership is carefully chosen to ensure your certification holds real value in the job market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accreditations.map((acc, idx) => {
                const Icon = acc.icon
                return (
                  <AnimatedSection key={acc.name} delay={300 + idx * 80} duration={600}>
                    <div
                      className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl h-full flex flex-col group"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <h4 className="font-display text-base font-bold mb-3" style={{ color: 'var(--text-core)' }}>
                        {acc.name}
                      </h4>
                      <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
                        {acc.description}
                      </p>
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(212,175,55,0.1)',
                          color: 'var(--brand-gold)',
                        }}
                      >
                        <Star className="w-3 h-3" />
                        {acc.benefit}
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
