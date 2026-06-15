import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import { 
  Sparkles, 
  Map, 
  HeartHandshake, 
  Award, 
  BookOpen, 
  Eye, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  XCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Zeelin Academy | Our Story & Mission',
  description: 'Discover the story, mission, and values behind Zeelin Academy. Founded by Dr. Franklin Kalu to make Business Analysis learning simple, structured, and achievable.',
}

const transformations = [
  { from: 'Confused', to: 'Clear', desc: 'No more guessing. We translate complex jargon into simple, actionable concepts.' },
  { from: 'Overwhelmed', to: 'Structured', desc: 'Follow a clear step-by-step pathway designed for busy schedules.' },
  { from: 'Afraid of exams', to: 'Exam-ready', desc: 'Gain confidence with real-world practice questions and mock exam prep.' },
  { from: 'Theory-only learning', to: 'Practical understanding', desc: 'Connect coursework directly to corporate Business Analysis environments.' },
]

const values = [
  { 
    icon: <Sparkles className="w-6 h-6 text-[color:var(--brand-gold)]" />, 
    title: 'Clarity', 
    desc: 'We explain difficult and complex Business Analysis topics in simple, everyday language.' 
  },
  { 
    icon: <Map className="w-6 h-6 text-[color:var(--brand-gold)]" />, 
    title: 'Structure', 
    desc: 'We map out a clear, step-by-step pathway to guide you from start to finish without getting lost.' 
  },
  { 
    icon: <HeartHandshake className="w-6 h-6 text-[color:var(--brand-gold)]" />, 
    title: 'Support', 
    desc: 'We do not leave learners to struggle alone. Our ecosystem offers guidance at every step of your study.' 
  },
  { 
    icon: <Award className="w-6 h-6 text-[color:var(--brand-gold)]" />, 
    title: 'Confidence', 
    desc: 'We build your belief in yourself so you can confidently pass your exams and excel in your professional role.' 
  },
  { 
    icon: <BookOpen className="w-6 h-6 text-[color:var(--brand-gold)]" />, 
    title: 'Practical Learning', 
    desc: 'We connect theory directly to actual business cases, simulations, and real corporate templates.' 
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-[color:var(--bg-secondary)]">
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-gold)]" />
              About Zeelin Academy
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-6 text-[color:var(--text-core)]">
              Simplifying Business Analysis for <span className="gold">Busy People</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
              We understand that many learners are not full-time students. They are parents, workers, career changers, professionals, and beginners trying to study while managing real-life responsibilities.
            </p>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              That is why our training is designed to be practical, structured, visual, and highly supportive. We fit around your busy schedule to help you achieve your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-[color:var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--text-core)]">
                Why Zeelin Academy <span className="gold">Exists</span>
              </h2>
              <p className="text-secondary leading-relaxed text-lg">
                Many people want to move into Business Analysis, gain certification, or improve their career, but they are often blocked by confusion, fear, lack of time, and overwhelming study materials.
              </p>
              <div className="p-6 rounded-2xl bg-[color:var(--bg-secondary)] border border-[color:var(--border)] font-bold text-[color:var(--text-accent)] text-lg">
                Zeelin Academy exists to remove that confusion and guide you systematically.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {transformations.map((t, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all duration-300 shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold uppercase tracking-wider text-red-500 line-through opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <XCircle className="w-4 h-4 shrink-0" /> {t.from}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wider text-green-600 dark:text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 shrink-0" /> {t.to}
                      </span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed font-semibold">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[color:var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="p-10 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-[color:var(--brand-gold)]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--text-core)]">
                Our <span className="gold">Mission</span>
              </h2>
              <p className="text-secondary leading-relaxed text-lg font-medium">
                Our mission is to make Business Analysis training simple, structured, and achievable for busy learners.
              </p>
            </div>

            <div className="p-10 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[color:var(--brand-gold)]" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-[color:var(--text-core)]">
                Our <span className="gold">Vision</span>
              </h2>
              <p className="text-secondary leading-relaxed text-lg font-medium">
                Our vision is to become a trusted academy for practical Business Analysis education, helping learners gain confidence, certification, and career direction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[color:var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-[color:var(--text-core)]">
              Zeelin Academy <span className="gold">Values</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
              The foundational pillars that guide how we support our students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] hover:border-[color:var(--brand-gold)] transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)] flex items-center justify-center mb-6">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-[color:var(--text-core)]">{v.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed font-semibold mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-[color:var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-xl" style={{ backgroundColor: 'var(--bg-card)' }}>
              <SafeImage src="/pic.jpg" alt="Dr. Franklin Kalu" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
                Founder & Transformation Leader
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[color:var(--text-core)]">
                The Story Behind the <span className="gold">Academy</span>
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed text-lg">
                <p className="font-medium">
                  Zeelin Academy was founded by <strong>Dr Franklin Kalu</strong>, a business analysis professional, educator, and transformation-focused leader who understands the pressure of learning while balancing work, family, and personal responsibilities.
                </p>
                <p>
                  After using a structured micro-learning method to complete Business Analysis study successfully, Franklin created Zeelin Academy to help other busy learners do the same.
                </p>
                <p className="text-base text-muted">
                  With a PhD, British Computer Society membership (MBCS), and certifications in PRINCE2 and AgilePM, Dr. Kalu bridges theoretical standards and hands-on professional workflows to present concepts in their clearest form.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {[
                  { label: 'PhD', desc: 'Doctorate Degree' },
                  { label: 'MBCS', desc: 'British Computer Society' },
                  { label: 'PRINCE2', desc: 'Certified Practitioner' },
                  { label: 'AgilePM', desc: 'Agile Certified' },
                ].map((cred) => (
                  <div key={cred.label} className="p-4 rounded-xl border bg-[color:var(--bg-card)] border-[color:var(--border)] text-center">
                    <div className="font-display font-bold text-xl gold">{cred.label}</div>
                    <div className="text-xs mt-1 text-muted font-bold">{cred.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[color:var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[color:var(--text-core)]">
            Ready to Accelerate Your <span className="gold">Career</span>?
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
            Join hundreds of busy career changers, parents, and professionals who have transitioned to Business Analysis with Zeelin Academy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/enroll" className="btn-gold px-10 py-4 text-lg inline-block font-bold">Enroll Now</Link>
            <Link href="/courses/modules" className="btn-outline-gold px-10 py-4 text-lg inline-block font-bold">View Modules</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
