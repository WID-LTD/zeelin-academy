import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import {
  Sparkles,
  Map,
  HeartHandshake,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Eye,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Zeelin Academy | Our Story & Mission',
  description:
    'Discover the story, mission, and values behind Zeelin Academy. Founded by Dr. Franklin Kalu to make Business Analysis learning simple, structured, and achievable.',
}

const transformations = [
  { from: 'Confused', to: 'Clear', desc: 'No more guessing. We translate complex jargon into simple, actionable concepts.' },
  { from: 'Overwhelmed', to: 'Structured', desc: 'Follow a clear step-by-step pathway designed for busy schedules.' },
  { from: 'Afraid of exams', to: 'Exam-ready', desc: 'Gain confidence with real-world practice questions and mock exam prep.' },
  { from: 'Theory-only learning', to: 'Practical understanding', desc: 'Connect coursework directly to corporate Business Analysis environments.' },
]

const values = [
  {
    icon: <Sparkles className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Clarity',
    desc: 'We explain difficult topics in simple language.',
  },
  {
    icon: <Map className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Structure',
    desc: 'We give learners a clear path to follow.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Support',
    desc: 'We do not leave learners to struggle alone.',
  },
  {
    icon: <Award className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Confidence',
    desc: 'We help learners believe they can pass and grow.',
  },
  {
    icon: <BookOpen className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Practical learning',
    desc: 'We connect theory to real business examples.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1 – About Zeelin Academy */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection delay={0}>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl uppercase tracking-wide leading-none">
                <span style={{ color: '#ffffff' }}>About </span>
                <span style={{ color: 'var(--brand-gold)' }}>Zeelin Academy</span>
              </h1>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section A – Why Zeelin Academy Exists */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top — heading + text */}
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <AnimatedSection delay={0}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-center"
                style={{ color: 'var(--text-core)' }}>
                Why Zeelin Academy Exists
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="text-lg leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
                Many people want to move into Business Analysis, gain certification, or improve their career, but
                they are often blocked by confusion, fear, lack of time, and overwhelming study materials.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="p-6 rounded-2xl border font-bold text-lg text-center"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border)',
                  color: 'var(--brand-gold)',
                }}>
                Zeelin Academy exists to remove that confusion and guide you systematically.
              </div>
            </AnimatedSection>
          </div>

          {/* Two-column — description + CTAs (left) / image (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Zeelin Academy was created to make Business Analysis learning simpler, clearer, and more accessible
                  for busy people.
                </p>
                <p className="text-base leading-relaxed mt-3" style={{ color: 'var(--text-muted)' }}>
                  We understand that many learners are not full-time students. They are parents, workers, career
                  changers, professionals, and beginners trying to study while managing real-life responsibilities.
                  That is why our training is designed to be practical, structured, visual, and supportive.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/courses" className="btn-gold px-8 py-4 text-base font-bold inline-block text-center">
                    Explore Courses
                  </Link>
                  <Link href="/enroll" className="btn-outline-gold px-8 py-4 text-base font-bold inline-block text-center">
                    Start Your Learning Journey
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right" delay={150} duration={700}>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <SafeImage
                  src="/learning_experience.png"
                  alt="Business Analysis learning at Zeelin Academy"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom — transformation cards */}
          <div>
            <AnimatedSection delay={50}>
              <p className="text-center font-display text-2xl font-bold mb-10" style={{ color: 'var(--text-core)' }}>
                We help learners move from:
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {transformations.map((t, idx) => (
                <AnimatedSection key={idx} delay={200 + idx * 80}>
                  <div
                    className="p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-1 opacity-85"
                        style={{ color: '#ef4444' }}>
                        <XCircle className="w-4 h-4 shrink-0" /> {t.from}
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
                      <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-1"
                        style={{ color: '#22c55e' }}>
                        <CheckCircle2 className="w-4 h-4 shrink-0" /> {t.to}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed font-semibold" style={{ color: 'var(--text-muted)' }}>
                      {t.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section B – Founder Story */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <AnimatedSection direction="right" delay={0} duration={700}>
              <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <SafeImage src="/pic.jpg" alt="Dr. Franklin Kalu" fill className="object-cover" />
              </div>
            </AnimatedSection>

            {/* Right - Content */}
            <div className="space-y-6">
              <AnimatedSection delay={100}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                  The Story Behind{' '}
                  <span style={{ color: 'var(--brand-gold)' }}>the Academy</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Zeelin Academy was founded by <strong>Dr Franklin Kalu</strong>, a Business Analysis professional,
                    educator, and transformation-focused leader who understands the pressure of learning while balancing
                    work, family, and personal responsibilities.
                  </p>
                  <p>
                    After using a structured micro-learning approach to successfully complete Business Analysis studies,
                    Franklin recognized that many learners struggle not because they lack ability, but because they lack
                    structure, support, and clarity.
                  </p>
                  <p>
                    This realization inspired the creation of Zeelin Academy — a learning platform designed to help busy
                    learners study effectively, stay accountable, and achieve certification success without feeling
                    overwhelmed.
                  </p>
                </div>
              </AnimatedSection>

              {/* Featured Quote */}
              <AnimatedSection delay={250}>
                <div className="relative p-6 rounded-xl border shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'rgba(223,186,107,0.2)',
                  }}>
                  <span className="font-display text-6xl leading-none absolute -top-1 left-4"
                    style={{ color: 'var(--brand-gold)' }}>
                    &ldquo;
                  </span>
                  <p className="text-lg italic pl-8 pr-2 leading-relaxed" style={{ color: 'var(--text-core)' }}>
                    Success becomes achievable when learning is structured, practical, and designed for real life.
                  </p>
                  <p className="text-sm font-bold pl-8 mt-2" style={{ color: 'var(--brand-gold)' }}>
                    &mdash; Dr Franklin Kalu
                  </p>
                </div>
              </AnimatedSection>

              {/* Credentials */}
              <AnimatedSection delay={300}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {[
                    { label: 'PhD', desc: 'Doctorate Degree' },
                    { label: 'MBCS', desc: 'British Computer Society' },
                    { label: 'PRINCE2', desc: 'Certified Practitioner' },
                    { label: 'AgilePM', desc: 'Agile Certified' },
                  ].map((cred) => (
                    <div key={cred.label} className="p-4 rounded-xl border text-center"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border)',
                      }}>
                      <div className="font-display font-bold text-xl" style={{ color: 'var(--brand-gold)' }}>
                        {cred.label}
                      </div>
                      <div className="text-xs mt-1 font-bold" style={{ color: 'var(--text-muted)' }}>
                        {cred.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section C – Mission Statement */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, var(--brand-gold), transparent 70%)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={100}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: 'var(--text-core)' }}>
              Making{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Success Achievable</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="p-8 md:p-10 rounded-2xl border shadow-lg max-w-3xl mx-auto"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{
                  backgroundColor: 'rgba(223,186,107,0.1)',
                  border: '1px solid rgba(223,186,107,0.2)',
                }}>
                <Zap className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our mission is to make Business Analysis training simple, structured, and achievable for busy learners.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section D – Vision Statement */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <AnimatedSection delay={0}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--text-core)' }}>
                  Building Confident Business Analysis{' '}
                  <span style={{ color: 'var(--brand-gold)' }}>Professionals</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <div className="p-6 rounded-xl border shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: 'rgba(223,186,107,0.1)',
                      border: '1px solid rgba(223,186,107,0.2)',
                    }}>
                    <Eye className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                  </div>
                  <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Our vision is to become a trusted academy for practical Business Analysis education, helping
                    learners gain confidence, certification, and career direction.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Image */}
            <AnimatedSection direction="right" delay={100} duration={700}>
              <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <SafeImage
                  src="/achievement_business_analysts.png"
                  alt="Business Analysis career achievement"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section E – Our Values */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-core)' }}>
                The Principles That Guide{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Everything We Do</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={200 + i * 80}>
                <div
                  className="p-8 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-between h-full"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                      style={{
                        backgroundColor: 'rgba(223,186,107,0.1)',
                        border: '1px solid rgba(223,186,107,0.2)',
                      }}>
                      {v.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--text-core)' }}>
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-muted)' }}>
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA – Dark Section */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--black)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, var(--brand-gold), transparent 70%)' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: '#ffffff' }}>
              Ready to Start Your Business Analysis{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Journey</span>?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#9ca3af' }}>
              Join a growing community of learners building confidence, gaining certification, and creating new career
              opportunities through structured Business Analysis education.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses" className="btn-gold px-10 py-4 text-base font-bold inline-block hover:scale-105 transition-transform">
                Explore Courses
              </Link>
              <Link
                href="/enroll"
                className="border text-base font-bold px-10 py-4 rounded-lg inline-block transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--brand-gold)',
                  color: 'var(--brand-gold)',
                }}>
                Enroll Today
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
