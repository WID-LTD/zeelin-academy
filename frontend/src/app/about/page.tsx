import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import { Zap, Eye, ShieldCheck, Globe, HeartHandshake, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Zeelin Academy',
  description: 'Learn about Zeelin Academy, our mission, our founder Dr. Franklin Kalu, and our commitment to Business Analysis education.',
}

const timeline = [
  { year: '2018', title: 'Zeelin Consulting Founded', desc: 'Dr. Franklin Kalu establishes Zeelin Consulting in the UK, providing business transformation and strategic advisory services.' },
  { year: '2020', title: 'Online Training Launch', desc: 'Zeelin begins offering specialized Business Analysis training programs, quickly gaining recognition for practical, industry-aligned content.' },
  { year: '2022', title: 'Zeelin Academy Born', desc: 'The Academy is formally launched as a dedicated learning platform, expanding the curriculum to include diploma-level programs.' },
  { year: '2024', title: 'Global Expansion', desc: 'Zeelin Academy reaches students in over 20 countries, with a 95% satisfaction rate and growing industry partnerships.' },
  { year: '2026', title: 'AI-Powered Learning', desc: 'The Academy integrates AI-driven tools for personalized learning paths, automated progress tracking, and scalable student support.' },
]

const values = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Practical Excellence', desc: 'We believe in learning by doing. Every concept is reinforced with real-world case studies and hands-on exercises that prepare students for actual BA roles.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Global Perspective', desc: 'Business Analysis knows no borders. Our curriculum reflects international standards and best practices, preparing students for opportunities worldwide.' },
  { icon: <HeartHandshake className="w-6 h-6" />, title: 'Community-Driven', desc: 'Learning is better together. We foster a supportive community where students, alumni, and instructors collaborate and grow.' },
  { icon: <Award className="w-6 h-6" />, title: 'Lifetime Access', desc: 'Education should be a lasting investment. All purchased content comes with lifetime access and free updates to keep your skills current.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-gold)' }} />
              Our Story
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-6 text-[color:var(--text-core)]">
              Empowering the Next Generation of <span className="gold">Business Analysts</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Zeelin Academy was founded with a single mission: to bridge the gap between aspiring professionals
              and global career opportunities in Business Analysis through structured, practical, and accessible education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <div className="w-14 h-14 rounded-xl gold-bg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">Our <span className="gold">Mission</span></h2>
              <p className="text-secondary leading-relaxed">
                To provide world-class Business Analysis education that is practical, accessible, and globally recognized.
                We equip our students with the skills, confidence, and credentials needed to excel in the international job market.
              </p>
            </div>
            <div className="p-10 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
              <div className="w-14 h-14 rounded-xl gold-bg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">Our <span className="gold">Vision</span></h2>
              <p className="text-secondary leading-relaxed">
                To be the leading global platform for Business Analysis education, recognized for producing highly skilled,
                certification-ready professionals who drive meaningful change in organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Our <span className="gold">Values</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do at Zeelin Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
                <div className="w-12 h-12 rounded-lg gold-bg flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-[color:var(--text-core)]">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Our <span className="gold">Journey</span>
            </h2>
            <p className="text-xl text-secondary">From consulting to global academy — our story so far.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[31px] top-0 bottom-0 w-px bg-[color:var(--border)]" />
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-[62px] h-[62px] rounded-full gold-bg flex items-center justify-center font-bold text-sm text-[color:var(--text-core)]">
                  {item.year}
                </div>
                <div className="p-6 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)]">
                  <h3 className="font-display text-xl font-bold mb-2 text-[color:var(--text-core)]">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-[400px] h-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: 'var(--bg-card)' }}>
              <SafeImage src="/pic.jpg" alt="Dr. Franklin Kalu" fill className="object-cover" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
                Founder & Principal Consultant
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-[color:var(--text-core)]">
                Meet <span className="gold">Dr. Franklin Kalu</span>
              </h2>
              <p className="mb-6 leading-relaxed text-secondary text-lg">
                Dr. Franklin Kalu is the founder of Zeelin Consulting and Zeelin Academy. He is a UK-based business
                transformation consultant, strategic advisor, and professional training leader with a passion for
                developing the next generation of Business Analysis talent.
              </p>
              <p className="mb-6 leading-relaxed text-secondary">
                With a PhD, membership in the British Computer Society (MBCS), and certifications in PRINCE2 and AgilePM,
                Dr. Kalu brings decades of practical experience to the classroom. His teaching philosophy centers on
                simplifying complex BA concepts into memorable, actionable knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'PhD', desc: 'Doctorate Degree' },
                  { label: 'MBCS', desc: 'British Computer Society' },
                  { label: 'PRINCE2', desc: 'Certified Practitioner' },
                  { label: 'AgilePM', desc: 'Agile Certified' },
                ].map((cred) => (
                  <div key={cred.label} className="p-4 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center">
                    <div className="font-display font-bold text-xl gold">{cred.label}</div>
                    <div className="text-xs mt-1 text-muted">{cred.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Students Trained' },
              { value: '95%', label: 'Satisfaction Rate' },
              { value: '20+', label: 'Countries' },
              { value: '50+', label: 'Case Studies' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)]">
                <div className="font-display text-4xl sm:text-5xl font-bold mb-2 gold">{stat.value}</div>
                <div className="text-sm font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
            Ready to Start Your <span className="gold">Journey</span>?
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Join 500+ students from 20+ countries who have transformed their careers through Zeelin Academy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/enroll" className="btn-gold px-10 py-4 text-lg inline-block">Enroll Now</Link>
            <Link href="/courses/modules" className="btn-outline-gold px-10 py-4 text-lg inline-block">View Modules</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
