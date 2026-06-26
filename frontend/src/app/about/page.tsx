import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import BundleSection from '@/components/BundleSection'
import {
  Sparkles,
  Map,
  HeartHandshake,
  Award,
  BookOpen,
  ArrowRight,
  Eye,
  Target,
  Users,
  TrendingUp,
  Star,
  Globe,
  GraduationCap,
  Trophy,
  Shield,
  CheckCircle,
  Clock,
  Calendar,
  Play,
  Briefcase,
  Zap,
  BarChart3,
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
    examples: [
      'Breaking down BABOK® concepts into digestible daily lessons',
      'Using real-world business scenarios to illustrate theory',
      'Providing plain-English glossaries for technical BA terminology',
    ],
  },
  {
    icon: <Map className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Structure',
    desc: 'We give learners a clear path to follow.',
    examples: [
      'A step-by-step curriculum mapped to BCS certification requirements',
      'Weekly study plans designed to fit around full-time work schedules',
      'Progress tracking with milestone checkpoints and feedback loops',
    ],
  },
  {
    icon: <HeartHandshake className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Support',
    desc: 'We do not leave learners to struggle alone.',
    examples: [
      '1-to-1 mentoring sessions with certified BA practitioners',
      'Community forums with peer support and tutor responses within 24 hours',
      'Dedicated success coordinators who monitor your progress',
    ],
  },
  {
    icon: <Award className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Confidence',
    desc: 'We help learners believe they can pass and grow.',
    examples: [
      'Mock exams with detailed feedback to eliminate exam-day anxiety',
      'Success stories shared by graduates throughout each course',
      '92% first-attempt pass rate across all BCS certification programmes',
    ],
  },
  {
    icon: <BookOpen className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />,
    title: 'Practical learning',
    desc: 'We connect theory to real business examples.',
    examples: [
      'Case studies drawn from BA projects in finance, healthcare, and government',
      'Hands-on workshops building requirements documents and process models',
      'Industry guest lectures from senior BAs at leading consulting firms',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* About page backdrop */}
      <div className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: 'url("/classroom.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.1,
        }} />
      {/* Section 1 – About Zeelin Academy */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
        <div className="relative max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection delay={0}>
              <nav className="flex items-center justify-center gap-2 text-sm font-medium mb-6" style={{ color: 'var(--text-muted)' }}>
                <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
                <span>/</span>
                <span style={{ color: 'var(--brand-gold)' }}>About</span>
              </nav>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl uppercase tracking-wide leading-none">
                <span style={{ color: '#ffffff' }}>About </span>
                <span style={{ color: 'var(--brand-gold)' }}>Zeelin Academy</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: <Clock className="w-5 h-5" />, number: '10+', label: 'Years Experience' },
                  { icon: <Users className="w-5 h-5" />, number: '5000+', label: 'Students Trained' },
                  { icon: <Trophy className="w-5 h-5" />, number: '92%', label: 'Pass Rate' },
                  { icon: <Shield className="w-5 h-5" />, number: 'BCS', label: 'Accredited Partner' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{
                        backgroundColor: 'rgba(223,186,107,0.1)',
                        border: '1px solid rgba(223,186,107,0.2)',
                      }}>
                      <span style={{ color: 'var(--brand-gold)' }}>{stat.icon}</span>
                    </div>
                    <div className="font-display font-black text-2xl" style={{ color: 'var(--brand-gold)' }}>
                      {stat.number}
                    </div>
                    <div className="text-xs font-bold mt-1" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <BundleSection />

      {/* Section A – Why Zeelin Academy Exists */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
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

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, number: '£15k', label: 'Avg Salary Increase' },
                  { icon: <Star className="w-6 h-6" />, number: '4.9/5', label: 'Student Rating' },
                  { icon: <GraduationCap className="w-6 h-6" />, number: '50+', label: 'Expert Mentors' },
                  { icon: <Globe className="w-6 h-6" />, number: '30+', label: 'Countries Reached' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{
                        backgroundColor: 'rgba(223,186,107,0.1)',
                        border: '1px solid rgba(223,186,107,0.2)',
                      }}>
                      <span style={{ color: 'var(--brand-gold)' }}>{stat.icon}</span>
                    </div>
                    <div className="font-display font-black text-xl" style={{ color: 'var(--brand-gold)' }}>
                      {stat.number}
                    </div>
                    <div className="text-xs font-bold mt-1" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
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
              <div className="relative h-[18.75rem] md:h-[25rem] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <SafeImage
                  src="/learner.jpg"
                  alt="Business Analysis learning at Zeelin Academy"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom — testimonial-style quotes */}
          <div>
            <AnimatedSection delay={50}>
              <p className="text-center font-display text-3xl font-bold mb-14" style={{ color: 'var(--text-core)' }}>
                We help learners move from:
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {transformations.map((t, idx) => (
                <AnimatedSection key={idx} delay={200 + idx * 80}>
                  <div
                    className="relative p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <span className="font-display text-5xl leading-none absolute -top-2 left-4 opacity-20"
                      style={{ color: 'var(--brand-gold)' }}>
                      &ldquo;
                    </span>
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#ef4444' }}>
                        {t.from}
                      </span>
                      <ArrowRight className="w-4 h-4 shrink-0" style={{ color: 'var(--text-muted)' }} />
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22c55e' }}>
                        {t.to}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed italic relative z-10" style={{ color: 'var(--text-secondary)' }}>
                      &ldquo;{t.desc}&rdquo;
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
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <AnimatedSection direction="right" delay={0} duration={700}>
              <div className="relative w-full aspect-square max-w-[25rem] mx-auto rounded-3xl overflow-hidden shadow-xl"
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

          {/* Timeline */}
          <div className="mt-20">
            <AnimatedSection delay={50}>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12" style={{ color: 'var(--text-core)' }}>
                Our Journey
              </h3>
            </AnimatedSection>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'rgba(212,175,55,0.3)' }} />
              {[
                { year: '2018', title: 'Academy Founded', desc: 'Dr Franklin Kalu established Zeelin Academy with a vision to transform Business Analysis education for busy professionals.' },
                { year: '2019', title: 'First BCS Cohort', desc: 'Launched our first BCS International Diploma in Business Analysis cohort, achieving a 100% pass rate.' },
                { year: '2021', title: '1000th Student Milestone', desc: 'Welcomed our 1000th learner and expanded the curriculum to cover Agile, PRINCE2, and Business Process Modelling.' },
                { year: '2023', title: 'BCS Gold Partner', desc: 'Awarded BCS Gold Partner status in recognition of our commitment to quality training and learner success.' },
                { year: '2025', title: 'Global Expansion', desc: 'Extended reach to over 30 countries, launched on-demand learning, and introduced AI-powered study tools.' },
              ].map((milestone, idx) => (
                <AnimatedSection key={idx} delay={150 + idx * 100}>
                  <div className="relative flex items-start gap-6 pb-12 last:pb-0">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 shadow-md"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--brand-gold)',
                      }}>
                      <Calendar className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <div className="flex-1 p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border)',
                      }}>
                      <span className="font-display font-black text-lg" style={{ color: 'var(--brand-gold)' }}>
                        {milestone.year}
                      </span>
                      <h4 className="font-display font-bold text-base mt-1" style={{ color: 'var(--text-core)' }}>
                        {milestone.title}
                      </h4>
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mission & Vision Sub-sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <AnimatedSection delay={100}>
              <div className="p-8 rounded-2xl border shadow-lg h-full"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'rgba(223,186,107,0.1)',
                    border: '1px solid rgba(223,186,107,0.2)',
                  }}>
                  <Target className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  To democratise Business Analysis education by providing high-quality, structured, and
                  accessible training that empowers learners from all backgrounds to achieve certification
                  and advance their careers — regardless of their starting point or prior experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl border shadow-lg h-full"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: 'rgba(223,186,107,0.1)',
                    border: '1px solid rgba(223,186,107,0.2)',
                  }}>
                  <Eye className="w-7 h-7" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  To become the most trusted global academy for practical Business Analysis education —
                  recognised for producing confident, certified professionals who drive meaningful change
                  in organisations worldwide.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section C – Mission Statement / Making Success Achievable */}
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
              <div className="relative w-20 h-20 rounded-xl overflow-hidden mx-auto mb-6 border-2"
                style={{ borderColor: 'rgba(223,186,107,0.3)' }}>
                <SafeImage src="/success.jpeg" alt="Success" fill className="object-cover" />
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Our mission is to make Business Analysis training simple, structured, and achievable for busy learners.
              </p>
            </div>
          </AnimatedSection>

          {/* Our Impact by Numbers */}
          <AnimatedSection delay={200}>
            <div className="mt-16 mb-16">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-10" style={{ color: 'var(--text-core)' }}>
                Our Impact by <span style={{ color: 'var(--brand-gold)' }}>Numbers</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: <BarChart3 className="w-8 h-8" />, number: '12,000+', label: 'Hours of Learning Content' },
                  { icon: <BookOpen className="w-8 h-8" />, number: '85+', label: 'Comprehensive Modules' },
                  { icon: <Globe className="w-8 h-8" />, number: '30+', label: 'Countries Worldwide' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-8 rounded-2xl border shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5"
                      style={{
                        backgroundColor: 'rgba(223,186,107,0.1)',
                        border: '1px solid rgba(223,186,107,0.2)',
                      }}>
                      <span style={{ color: 'var(--brand-gold)' }}>{item.icon}</span>
                    </div>
                    <div className="font-display font-black text-3xl mb-2" style={{ color: 'var(--brand-gold)' }}>
                      {item.number}
                    </div>
                    <div className="text-sm font-bold" style={{ color: 'var(--text-muted)' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quote cards with sources */}
          <AnimatedSection delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
              {[
                {
                  quote: 'The structured approach transformed how I understand requirements gathering. I passed my BCS exam on the first attempt.',
                  source: 'Sarah T.',
                  context: 'BCS International Diploma Graduate, 2024',
                },
                {
                  quote: 'Balancing work and study felt impossible until I found Zeelin. The micro-learning format fit perfectly into my lunch breaks.',
                  source: 'James O.',
                  context: 'Business Analyst at HSBC, 2023 Cohort',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border text-left shadow-md hover:shadow-lg transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <span className="font-display text-5xl leading-none -mb-4 block opacity-20"
                    style={{ color: 'var(--brand-gold)' }}>
                    &ldquo;
                  </span>
                  <p className="text-base leading-relaxed italic relative z-10" style={{ color: 'var(--text-secondary)' }}>
                    {item.quote}
                  </p>
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                    <p className="text-sm font-bold" style={{ color: 'var(--brand-gold)' }}>
                      &mdash; {item.source}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {item.context}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section D – Vision Statement */}
      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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

              {/* Key Initiatives */}
              <AnimatedSection delay={200}>
                <div className="p-6 rounded-xl border shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}>
                  <h3 className="font-display text-lg font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                    Key Initiatives
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'BCS-accredited diploma programmes with guided mentorship from industry practitioners',
                      'On-demand video library with over 500+ structured lessons and downloadable resources',
                      'Weekly live Q&A sessions and peer study groups to reinforce learning',
                      'Career coaching and CV review services for all graduates',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Our Approach — 4-step flow */}
              <AnimatedSection delay={250}>
                <div className="p-6 rounded-xl border shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}>
                  <h3 className="font-display text-lg font-bold mb-6 text-center" style={{ color: 'var(--text-core)' }}>
                    Our Approach
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: <Play className="w-6 h-6" />, step: '01', label: 'Learn', desc: 'Structured video lessons and reading materials' },
                      { icon: <Briefcase className="w-6 h-6" />, step: '02', label: 'Practice', desc: 'Hands-on exercises and mock exams' },
                      { icon: <Zap className="w-6 h-6" />, step: '03', label: 'Apply', desc: 'Real-world case studies and projects' },
                      { icon: <Trophy className="w-6 h-6" />, step: '04', label: 'Succeed', desc: 'Certification and career advancement' },
                    ].map((item) => (
                      <div key={item.step} className="text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                        style={{
                          backgroundColor: 'rgba(223,186,107,0.05)',
                          border: '1px solid rgba(223,186,107,0.15)',
                        }}>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                          style={{
                            backgroundColor: 'rgba(223,186,107,0.1)',
                            border: '1px solid rgba(223,186,107,0.2)',
                          }}>
                          <span style={{ color: 'var(--brand-gold)' }}>{item.icon}</span>
                        </div>
                        <div className="text-xs font-bold mb-1" style={{ color: 'var(--brand-gold)' }}>
                          Step {item.step}
                        </div>
                        <div className="font-display font-bold text-sm" style={{ color: 'var(--text-core)' }}>
                          {item.label}
                        </div>
                        <div className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Image */}
            <AnimatedSection direction="right" delay={100} duration={700}>
              <div className="relative h-[21.875rem] md:h-[28.125rem] rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}>
                <SafeImage
                  src="/confident.jpg"
                  alt="Building Confident Business Analysis Professionals"
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
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-core)' }}>
                The Principles That Guide{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Everything We Do</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={200 + i * 80}>
                <div
                  className="p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div>
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: 'rgba(223,186,107,0.1)',
                        border: '1px solid rgba(223,186,107,0.2)',
                      }}>
                      {v.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
                      {v.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-auto">
                    {v.examples.map((ex, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--brand-gold)' }} />
                        <span className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {ex}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Our Promise */}
          <AnimatedSection delay={400}>
            <div className="mt-16 p-10 rounded-2xl border-2 shadow-lg max-w-4xl mx-auto text-center"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'rgba(212,175,55,0.3)',
              }}>
              <Shield className="w-12 h-12 mx-auto mb-5" style={{ color: 'var(--brand-gold)' }} />
              <h3 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--text-core)' }}>
                Our Promise to You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {[
                  { title: 'Quality Assured', desc: 'All content is developed by certified BA professionals and regularly updated to reflect industry standards and BCS requirements.' },
                  { title: 'Lifetime Access', desc: 'Enrol once and retain access to your course materials, updates, and community forums for life — no recurring fees.' },
                  { title: 'Support When You Need It', desc: 'Access mentor guidance, peer discussion groups, and technical support within 24 hours, every day of the week.' },
                ].map((promise, idx) => (
                  <div key={idx} className="p-5 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}>
                    <h4 className="font-display font-bold text-sm mb-2" style={{ color: 'var(--brand-gold)' }}>
                      {promise.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {promise.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA – Dark Section */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--black)' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #B5952F, transparent 70%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[31.25rem] h-[31.25rem] rounded-full opacity-[0.03]"
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

          {/* Trust Signals */}
          <AnimatedSection delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
              {[
                { icon: <Star className="w-4 h-4" />, label: '4.9/5 Rating', sub: 'from 2,000+ reviews' },
                { icon: <Shield className="w-4 h-4" />, label: 'BCS Accredited', sub: 'Gold Partner' },
                { icon: <Users className="w-4 h-4" />, label: '5,000+ Alumni', sub: 'across 30 countries' },
                { icon: <Award className="w-4 h-4" />, label: '92% Pass Rate', sub: 'first-attempt success' },
              ].map((trust) => (
                <div key={trust.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(223,186,107,0.1)',
                      border: '1px solid rgba(223,186,107,0.2)',
                    }}>
                    <span style={{ color: 'var(--brand-gold)' }}>{trust.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold" style={{ color: '#ffffff' }}>
                      {trust.label}
                    </div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>
                      {trust.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                Enrol Today
              </Link>
            </div>
          </AnimatedSection>

          {/* Secondary CTA */}
          <AnimatedSection delay={250}>
            <div className="mt-12 pt-8 border-t max-w-xl mx-auto"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
                Not sure where to start? Take our free career assessment and find the right course for you.
              </p>
              <Link
                href="/assessment"
                className="text-sm font-bold inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
                style={{ color: 'var(--brand-gold)' }}>
                Take Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
