'use client'

import SafeImage from '@/components/SafeImage'

const testimonials = [
  {
    name: 'Sarah',
    role: 'BCS Foundation Certificate Student',
    text: 'I was a complete beginner and had never studied Business Analysis before. Zeelin\u2019s roadmap helped me build confidence from day one.',
    avatar: '/avatar_1.png',
  },
  {
    name: 'James',
    role: 'Career Changer',
    text: 'After 8 years in retail management, I wanted to transition to BA. Zeelin\u2019s live coaching calls gave me the practical skills I needed.',
    avatar: '/avatar_2.png',
  },
  {
    name: 'Aisha',
    role: 'Busy Professional',
    text: 'Working 9\u20135 as a project coordinator, I struggled to find study time. Zeelin\u2019s flexible format allowed me to study during my commute.',
    avatar: '/avatar_3.png',
  },
  {
    name: 'David',
    role: 'Parent with Limited Time',
    text: 'With two young children at home, the weekly check-ins kept me on track without overwhelming my schedule. I passed on my first attempt.',
    avatar: '/avatar_4.png',
  },
  {
    name: 'Priya',
    role: 'BCS Practitioner Candidate',
    text: 'I felt overwhelmed by traditional textbooks. Zeelin\u2019s mock quizzes and exam readiness system helped me approach the exam with confidence.',
    avatar: '/avatar_5.png',
  },
  {
    name: 'Michael',
    role: 'Visual Learner',
    text: 'The visual summaries transformed complex BA concepts into clear, memorable diagrams that finally clicked for me.',
    avatar: '/avatar_6.png',
  },
]

export default function TestimonialSection() {
  return (
    <section style={{ padding: '100px 5%', backgroundColor: 'transparent' }}>
      <div className="max-w-[1200px] 3xl:max-w-[2100px] mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-black text-center mb-12" style={{ color: 'var(--navy-dark)' }}>
          What Our <span style={{ color: 'var(--dark-gold)' }}>Students Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '32px', background: 'var(--bg-cream)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden" style={{ backgroundColor: 'var(--brand-gold)' }}>
                  <SafeImage src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold" style={{ color: 'var(--navy-dark)' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-gold)' }}>{item.role}</p>
                </div>
              </div>
              <p className="text-base font-semibold leading-relaxed" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>&ldquo;{item.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
