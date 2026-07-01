import type { Metadata } from 'next'
import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import { GraduationCap, Layers, Award, Users, Lightbulb, HeartHandshake, TrendingUp, Wrench, ChevronRight, BookOpen, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Zeelin Academy | Our Story & Mission',
  description:
    'Discover the story, mission, and values behind Zeelin Academy. Founded by Dr. Franklin Kalu to make Business Analysis learning simple, structured, and achievable.',
}

const values = [
  {
    title: 'Clarity',
    desc: 'We explain difficult topics in simple language.',
    examples: [
      'Breaking down Business Analysis concepts into digestible daily lessons',
      'Using real-world business scenarios to illustrate theory',
      'Providing plain-English glossaries for technical BA terminology',
    ],
  },
  {
    title: 'Structure',
    desc: 'We give learners a clear path to follow.',
    examples: [
      'A step-by-step curriculum mapped to certification requirements',
      'Weekly study plans designed to fit around full-time work schedules',
      'Progress tracking with milestone checkpoints and feedback loops',
    ],
  },
  {
    title: 'Support',
    desc: 'We do not leave learners to struggle alone.',
    examples: [
      '1-to-1 mentoring sessions with certified BA practitioners',
      'Community forums with peer support and tutor responses within 24 hours',
      'Dedicated success coordinators who monitor your progress',
    ],
  },
  {
    title: 'Confidence',
    desc: 'We help learners believe they can pass and grow.',
    examples: [
      'Mock exams with detailed feedback to eliminate exam-day anxiety',
      'Success stories shared by graduates throughout each course',
      'Strong first-attempt pass rates across our certification preparation programmes',
    ],
  },
  {
    title: 'Practical learning',
    desc: 'We connect theory to real business examples.',
    examples: [
      'Case studies drawn from BA projects in finance, healthcare, and government',
      'Hands-on workshops building requirements documents and process models',
      'Industry guest lectures from senior BAs at leading consulting firms',
    ],
  },
]

const milestones = [
  {
    year: '2023',
    title: 'Academy Founded',
    desc: 'Dr Franklin established Zeelin Academy with a vision to transform Business Analysis education for busy professionals.',
    image: '/stack.jpg',
  },
  {
    year: '2024',
    title: 'First Official Cohort',
    desc: 'Launched our first Business Analysis cohort and achieved a 100% pass rate.',
    image: '/classroom.jpg',
  },
  {
    year: '2025',
    title: 'Learners in Their Hundreds',
    desc: 'Welcomed learners in their hundreds, including career changers, parents of young children, and Business Analysts looking to grow in their careers.',
    image: '/group.png',
  },
  {
    year: '2026',
    title: 'Global Expansion',
    desc: 'Looking ahead to national and international growth, expanding into new countries and building a truly global learning experience.',
    image: '/global-business-strategy.jpg',
  },
]

const objectives = [
  { title: 'Structured Learning', desc: 'Step-by-step guidance that makes complex concepts simple.' },
  { title: 'For All Backgrounds', desc: 'Inclusive training designed for beginners, career changers, and professionals.' },
  { title: 'Certification Success', desc: 'Proven strategies and support to help you pass with confidence.' },
  { title: 'Global Impact', desc: 'Equipping you with skills that drive meaningful change worldwide.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Section 1 — Hero: Navy gradient split */}
      <section
        style={{ background: 'linear-gradient(135deg, #040A1A 0%, #0D1530 100%)', color: '#FFFFFF', padding: '80px 5%' }}
      >
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              ABOUT<br /><span style={{ color: 'var(--brand-gold)' }}>ZEELIN ACADEMY</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-8" style={{ opacity: 0.9 }}>
              At Zeelin Academy, we empower busy professionals to build in-demand skills, pass with confidence, and advance their careers in Business Analysis.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: 'Expert-Led Training', icon: GraduationCap },
                { label: 'Structured Learning', icon: Layers },
                { label: 'Proven Results', icon: Award },
                { label: 'Supportive Community', icon: Users },
              ].map((tag) => (
                <span key={tag.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <tag.icon className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                  {tag.label}
                </span>
              ))}
            </div>
            <div className="text-lg md:text-xl font-bold" style={{ color: 'var(--brand-gold)' }}>
              | Learn with clarity. Grow with confidence. <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Succeed with Zeelin.</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] 3xl:w-[480px] 3xl:h-[480px] rounded-full overflow-hidden border-[3px]" style={{ borderColor: 'var(--brand-gold)' }}>
              <SafeImage src="/pic.jpg" alt="Dr Franklin Kalu" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Founder Story: cream bg */}
      <section className="py-16 lg:py-24 px-[5%]" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex">
            <div className="relative w-full" style={{ border: '1px solid var(--brand-gold)', padding: '12px', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <div className="relative w-full flex-1 overflow-hidden" style={{ backgroundColor: '#1A263F', borderRadius: '4px', marginBottom: '12px', minHeight: '300px' }}>
                <SafeImage src="/pic.jpg" alt="Dr Franklin Kalu" fill className="object-cover" />
              </div>
              <div style={{ backgroundColor: '#0D1530', color: 'var(--brand-gold)', padding: '10px', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>
                Dr Franklin Kalu
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Founder, Zeelin Academy
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--navy-dark)' }}>
              The Story Behind <span style={{ color: 'var(--dark-gold)' }}>the Academy</span>
            </h2>
            <div className="space-y-4 text-lg font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>Zeelin Academy was founded by <strong>Dr Franklin Kalu</strong>, a Business Analysis professional, educator, and transformation-focused leader who understands the pressure of learning while balancing work, family, and personal responsibilities.</p>
              <p>After using a structured micro-learning approach to successfully complete Business Analysis studies, Franklin recognized that many learners struggle not because they lack ability, but because they lack structure, support, and clarity.</p>
              <p>This realization inspired the creation of Zeelin Academy — a learning platform designed to help busy learners study effectively, stay accountable, and achieve certification success without feeling overwhelmed.</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--brand-gold)', padding: '20px', marginTop: '30px', fontStyle: 'italic', backgroundColor: '#F1ECE1', borderRadius: '0 4px 4px 0' }}>
              <p className="text-lg font-semibold mb-2" style={{ color: 'var(--navy-dark)' }}>&ldquo;Success becomes achievable when learning is structured, practical, and designed for real life.&rdquo;</p>
              <cite style={{ color: 'var(--dark-gold)', fontWeight: 'bold', fontStyle: 'normal' }}>&mdash; Dr Franklin Kalu</cite>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'PhD', desc: 'Doctorate Degree' },
                { label: 'MBCS', desc: 'British Computer Society' },
                { label: 'PRINCE2', desc: 'Certified Practitioner' },
                { label: 'AgilePM', desc: 'Agile Certified' },
              ].map((cred) => (
                <div key={cred.label} className="p-4 rounded-xl border text-center" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                  <div className="font-display font-black text-xl" style={{ color: 'var(--brand-gold)' }}>{cred.label}</div>
                  <div className="text-xs font-bold mt-1" style={{ color: 'var(--text-muted)' }}>{cred.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Our Journey Timeline: white bg */}
      <section className="py-16 lg:py-24 px-[5%]" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--dark-gold)' }}>Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>Our Journey</h2>
            <p className="text-lg font-semibold mb-8" style={{ color: 'var(--text-secondary)' }}>From a bold vision to a global learning community — our journey is built on impact, excellence, and learners at the heart of everything we do.</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-5 rounded-lg" style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-cream)' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--brand-gold)', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <div className="font-bold text-2xl" style={{ color: 'var(--navy-dark)' }}>4</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Years of Impact and Counting</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-lg" style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-cream)' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--brand-gold)', borderRadius: '4px', flexShrink: 0 }} />
                <div>
                  <div className="font-bold text-2xl" style={{ color: 'var(--navy-dark)' }}>Hundreds</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>of Learners Empowered Worldwide</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="relative flex flex-col items-center">
                  <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--brand-gold)', borderRadius: '50%', flexShrink: 0, position: 'relative', zIndex: 1, marginTop: '5px' }} />
                  {i < milestones.length - 1 && (
                    <div className="flex-1 w-0.5" style={{ backgroundColor: 'var(--border)', minHeight: '30px' }} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="relative w-full h-[80px] sm:h-[100px] overflow-hidden mb-3" style={{ backgroundColor: '#DDD', borderRadius: '4px' }}>
                    <SafeImage src={m.image} alt={m.year} fill className="object-cover" />
                  </div>
                  <h4 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--dark-gold)' }}>{m.year} — {m.title}</h4>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Mission & Vision: cream bg */}
      <section style={{ padding: '80px 5%', backgroundColor: 'var(--bg-cream)' }}>
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--dark-gold)', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 className="font-display text-2xl md:text-3xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>Our Mission</h3>
            <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To democratise Business Analysis education by providing high-quality, structured, and accessible training that empowers learners from all backgrounds to achieve certification and advance their careers — regardless of their starting point or prior experience.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--dark-gold)', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 className="font-display text-2xl md:text-3xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>Our Vision</h3>
            <p className="text-base font-semibold leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To become the most trusted global academy for practical Business Analysis education — recognised for producing confident, certified professionals who drive meaningful change in organisations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Our Objective: navy bg */}
      <section style={{ backgroundColor: 'var(--navy-dark)', color: '#FFFFFF', padding: '80px 5%' }}>
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[220px] sm:h-[350px] rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
            <SafeImage
              src="/learning_experience.png"
              alt="Zeelin Academy objective"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Our <span style={{ color: 'var(--brand-gold)' }}>Objective</span>
            </h2>
            <p className="text-lg font-semibold leading-relaxed mb-10" style={{ opacity: 0.9 }}>
              To provide structured, practical, and accessible Business Analysis training that helps learners from all backgrounds build confidence, achieve certification success, and develop the skills needed to contribute meaningfully to organisations worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {objectives.map((obj) => (
                <div key={obj.title} className="p-5 sm:p-6" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px' }}>
                  <div className="mb-3" style={{ color: 'var(--brand-gold)' }}>
                    {obj.title === 'Structured Learning' && <BookOpen className="w-5 h-5" />}
                    {obj.title === 'For All Backgrounds' && <Users className="w-5 h-5" />}
                    {obj.title === 'Certification Success' && <Award className="w-5 h-5" />}
                    {obj.title === 'Global Impact' && <Globe className="w-5 h-5" />}
                  </div>
                  <h4 className="font-display text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>{obj.title}</h4>
                  <p className="text-sm font-semibold" style={{ opacity: 0.8 }}>{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Principles: cream bg, 5-column cards */}
      <section className="py-16 lg:py-24 px-[5%]" style={{ textAlign: 'center', backgroundColor: 'var(--bg-cream)' }}>
        <div className="max-w-[1600px] 3xl:max-w-[2400px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>
            The Principles That Guide<br /><span style={{ color: 'var(--dark-gold)' }}>Everything We Do</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-12 text-left">
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: 'var(--white)', borderRadius: '8px', padding: '30px 20px', textAlign: 'left', borderTop: '4px solid var(--brand-gold)', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="mb-3" style={{ color: 'var(--dark-gold)' }}>
                  {v.title === 'Clarity' && <Lightbulb className="w-5 h-5" />}
                  {v.title === 'Structure' && <Layers className="w-5 h-5" />}
                  {v.title === 'Support' && <HeartHandshake className="w-5 h-5" />}
                  {v.title === 'Confidence' && <TrendingUp className="w-5 h-5" />}
                  {v.title === 'Practical learning' && <Wrench className="w-5 h-5" />}
                </div>
                <h4 className="font-display text-xl font-bold mb-1" style={{ color: 'var(--navy-dark)' }}>{v.title}</h4>
                <p className="text-sm font-semibold mb-5" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {v.examples.map((ex, i) => (
                    <li key={i} className="flex gap-3 text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-1" style={{ color: 'var(--brand-gold)' }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA: navy bg */}
      <section style={{ backgroundColor: 'var(--navy-dark)', color: '#FFFFFF', textAlign: 'center', padding: '100px 20px' }}>
        <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Ready to Start Your Business Analysis<br /><span style={{ color: 'var(--brand-gold)' }}>Journey?</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-10 max-w-2xl mx-auto" style={{ opacity: 0.85 }}>
            Join a growing community of learners building confidence, gaining certification, and creating new career opportunities through structured Business Analysis education.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link href="/courses" className="btn-gold px-10 py-4 text-lg font-bold">Explore Courses</Link>
            <Link href="/enroll" className="btn-outline px-10 py-4 text-lg font-bold" style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}>Enrol Today</Link>
          </div>
          <p className="text-base font-semibold mb-3" style={{ color: '#A0A5B5' }}>Not sure where to start? Take our free career assessment and find the right course for you.</p>
          <Link href="/assessment" className="text-lg font-bold inline-flex items-center gap-2" style={{ color: 'var(--brand-gold)' }}>
            Take Free Assessment <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
