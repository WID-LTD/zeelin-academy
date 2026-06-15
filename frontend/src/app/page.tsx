import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import AutoTypeText from '@/components/AutoTypeText'
import CountUp from '@/components/CountUp'
import AutoScrollBooks from '@/components/AutoScrollBooks'
import AutoScrollBooksGrid from '@/components/AutoScrollBooksGrid'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <SafeImage src="/book-main.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(223,186,107,0.1)', color: 'var(--brand-gold)', border: '1px solid rgba(223,186,107,0.2)' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--brand-gold)' }} />
                Pioneered by Dr. Franklin Kalu
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--text-core)' }}>
                <AutoTypeText words={['Diploma in Business Analysis', 'Transform Your Career', 'Master BA in 6 Weeks']} />
              </h1>
              <p className="text-lg mb-8 leading-relaxed text-secondary">
                A structured 6-week program designed to transform aspiring analysts into certified Business Analysis professionals.
                Bridge the gap between theory and real-world application with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="btn-gold px-8 py-4 text-lg inline-block text-center">
                  Start Mastering BA Today
                </Link>
                <Link href="/enroll" className="btn-outline-gold px-8 py-4 text-lg inline-block text-center">
                  Secure Your Spot
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {['/avatar_1.png', '/avatar_2.png', '/avatar_3.png', '/avatar_4.png'].map((src, i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 overflow-hidden bg-white shadow-sm" style={{ borderColor: 'var(--brand-gold)' }}>
                        <SafeImage 
                          src={src} 
                          alt={`Student ${i + 1}`} 
                          width={36} 
                          height={36} 
                          className="object-cover w-full h-full" 
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted">Join <CountUp end={500} suffix="+" /> students</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
              <SafeImage src="/IMG-20260605-WA0035.jpg" alt="Zeelin Academy Mockups" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 6, suffix: '', label: 'Week Program' },
              { value: 8, suffix: '', label: 'Course Modules' },
              { value: 1, suffix: '', label: 'Main Certificate' },
              { value: 500, suffix: '+', label: 'Students' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-bold" style={{ color: 'var(--brand-gold)' }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm mt-1 text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Program Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--text-core)' }}>
                About the{' '}
                <span style={{ color: 'var(--brand-gold)' }}>Program</span>
              </h2>
              <p className="mb-6 leading-relaxed text-secondary">
                Through Zeelin Academy, established by Dr. Franklin Kalu, we provide a specialized training platform
                based in the United Kingdom. We focus on bridging the gap for aspiring Business Analysts,
                career changers, and professionals through structured, practical education.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Practical Learning Framework', desc: 'Our teaching style simplifies complex BA topics into memorable explanations for exam success and real-world application.' },
                  { title: 'Structured Ecosystem', desc: 'Syllabus-aligned question banks, mock exams, bootcamp structures, and defined progression pathways.' },
                  { title: 'AI-Powered Automation', desc: 'Leveraging AI for seamless student onboarding, progress monitoring, and scalable support.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: 'var(--brand-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--text-core)' }}>{item.title}</h3>
                      <p className="text-sm mt-1 text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
              <SafeImage
                src="/about-placeholder.jpg"
                alt="About Zeelin Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
              Who We <span style={{ color: 'var(--brand-gold)' }}>Help</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary">
              Our program is designed for three core audiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Aspiring BA Professionals', desc: 'Just starting your BA journey? Our program takes you from fundamentals to certification with real-world case studies.', icon: 'M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { title: 'Career Changers', desc: 'Transition into business analysis with practical skills and industry knowledge for a successful career pivot.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
              { title: 'Corporate Teams', desc: 'Upskill your team with advanced BA methodologies, AI integration, and strategic analysis techniques.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' }
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl card-hover border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(223,186,107,0.1)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--brand-gold)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: 'var(--text-core)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
              Recommended <span style={{ color: 'var(--brand-gold)' }}>Resources</span>
            </h2>
            <p className="text-secondary">
              Essential reading for every aspiring Business Analyst
            </p>
          </div>
          <AutoScrollBooksGrid />
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-[350px] h-[350px] mx-auto rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
              <SafeImage
                src="/pic.jpg"
                alt="Dr. Franklin Kalu"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(223,186,107,0.1)', color: 'var(--brand-gold)', border: '1px solid rgba(223,186,107,0.2)' }}>
                Founder & Principal Consultant
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                Meet <span style={{ color: 'var(--brand-gold)' }}>Dr. Franklin Kalu</span>
              </h2>
              <p className="mb-6 leading-relaxed text-secondary">
                Dr. Franklin Kalu is the founder of Zeelin Consulting and Zeelin Academy. He is a UK-based business 
                transformation consultant, strategic advisor, and professional training leader. He holds a PhD, is a 
                member of the British Computer Society (MBCS), and is certified in PRINCE2 and AgilePM methodologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'PhD', desc: 'Doctorate Degree' },
                  { label: 'MBCS', desc: 'British Computer Society' },
                  { label: 'PRINCE2', desc: 'Certified Practitioner' },
                  { label: 'AgilePM', desc: 'Agile Certified' }
                ].map((cred) => (
                  <div key={cred.label} className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    <div className="font-display font-bold" style={{ color: 'var(--brand-gold)' }}>{cred.label}</div>
                    <div className="text-xs mt-1 text-muted">{cred.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="relative p-12 md:p-16 text-center" style={{ backgroundColor: 'rgba(223,186,107,0.05)' }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-core)' }}>
                Start Your <span style={{ color: 'var(--brand-gold)' }}>Journey</span> Today
              </h2>
              <p className="mb-8 max-w-xl mx-auto text-secondary">
                Join thousands of successful graduates. Enroll now and take the first step toward becoming a certified Business Analyst.
              </p>
              <Link href="/enroll" className="btn-gold px-10 py-4 text-lg inline-block">
                Unlock Your Potential: Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}