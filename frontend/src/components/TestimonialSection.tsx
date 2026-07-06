export default function TestimonialSection() {
  const cards = [
    {
      id: '1',
      name: 'Sarah',
      role: 'BCS Foundation Certificate Student',
      quote: "I was a complete beginner and had never studied Business Analysis before. Zeelin Academy made everything so easy to follow. The visual summaries and step-by-step roadmap helped me build confidence from day one. I passed my BCS Foundation exam in just 6 weeks!",
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      name: 'James',
      role: 'Career Changer',
      quote: "After 8 years in retail management, I wanted to transition into Business Analysis. Zeelin's structured pathway and live coaching calls gave me the practical skills and certification I needed. I landed my first BA role within 3 months of completing the programme.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Aisha',
      role: 'Busy Professional',
      quote: "Working 9-5 as a project coordinator, I struggled to find study time. Zeelin's flexible self-paced programme and micro-learning format allowed me to study during my commute and lunch breaks. I completed my certification without sacrificing work or family time.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      name: 'David',
      role: 'Parent with Limited Time',
      quote: "With two young children at home, I needed a programme that respected my limited availability. The weekly check-ins and accountability system kept me on track without overwhelming my schedule. I passed my Practitioner exam on the first attempt.",
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
  ]

  return (
    <section style={{ padding: '3.75rem 5%', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="font-display text-4xl md:text-5xl font-black text-center mb-12" style={{ color: 'var(--navy-dark)' }}>
          What Our <span style={{ color: 'var(--dark-gold)' }}>Students Say</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', backgroundColor: '#FAF7F0', padding: '40px', boxSizing: 'border-box', fontFamily: "'Helvetica Neue', Arial, sans-serif", borderRadius: '0.5rem' }}>
          {cards.map((card) => (
            <div key={card.id} style={{ display: 'flex', height: '260px', backgroundColor: '#FFFFFF', borderRadius: '16px', boxShadow: '0 10px 30px rgba(180, 160, 130, 0.15)', overflow: 'hidden', position: 'relative', borderBottom: '3px solid #D5B266' }}>
              <div style={{ width: '190px', height: '100%', flexShrink: 0, position: 'relative' }}>
                <svg style={{ width: '100%', height: '100%', display: 'block' }} viewBox="0 0 190 260" preserveAspectRatio="none">
                  <defs>
                    <clipPath id={`curve-clip-${card.id}`}>
                      <path d="M 0,0 L 190,0 Q 155,130 190,260 L 0,260 Z" />
                    </clipPath>
                  </defs>
                  <image href={card.image} x="0" y="0" width="190" height="260" preserveAspectRatio="xMidYMid slice" clipPath={`url(#curve-clip-${card.id})`} />
                </svg>
              </div>
              <div style={{ flex: 1, padding: '25px 30px 25px 15px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <h3 style={{ margin: '0 0 2px 0', color: '#112240', fontSize: '22px', fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>{card.name}</h3>
                <div style={{ color: '#D5B266', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>{card.role}</div>
                <div style={{ color: '#D5B266', fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ margin: 0, color: '#4A4A4A', fontSize: '12px', lineHeight: 1.6, fontWeight: 400 }}>&ldquo;{card.quote}&rdquo;</p>
                <span style={{ position: 'absolute', top: '15px', right: '30px', fontFamily: "'Georgia', serif", fontSize: '60px', color: '#FAF2E3', lineHeight: 1, fontWeight: 'bold', pointerEvents: 'none' }}>❝</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
