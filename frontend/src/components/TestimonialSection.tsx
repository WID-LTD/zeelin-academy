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
    <section className="py-16 lg:py-24 px-[5%]" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-[1600px] 3xl:max-w-[2400px] mx-auto">
        {/* Heading */}
        <div className="relative text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-[15px] mb-3">
            <div className="w-[35px] h-px" style={{ backgroundColor: '#D5B266' }} />
            <span className="text-[13px] font-bold tracking-[1.5px]" style={{ color: '#D5B266', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>SUCCESS STORIES</span>
            <div className="w-[35px] h-px" style={{ backgroundColor: '#D5B266' }} />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--navy-dark)' }}>
            What Our <span style={{ color: 'var(--dark-gold)' }}>Students Say</span>
          </h2>

          <p className="text-sm md:text-base max-w-[500px] mx-auto" style={{ color: '#4A4A4A', fontFamily: "'Helvetica Neue', Arial, sans-serif", lineHeight: 1.6, fontWeight: 400 }}>
            Real stories from learners who transformed their careers<br className="hidden sm:inline" /> with Zeelin Academy.
          </p>

          <div className="w-[70px] h-[2px] mx-auto mt-6" style={{ backgroundColor: '#D5B266' }} />

          {/* Decorative elements */}
          <div className="absolute top-[15px] left-[15px] w-[80px] h-[80px] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E8E2D5 2px, transparent 2px)', backgroundSize: '12px 12px', opacity: 0.7 }} />
          <span className="absolute bottom-[-20px] left-[15px] text-[140px] leading-none pointer-events-none select-none" style={{ color: '#F1ECE0', fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>{'\u201C'}</span>
          <span className="absolute top-[-10px] right-[20px] text-[140px] leading-none pointer-events-none select-none" style={{ color: '#F1ECE0', fontFamily: "'Georgia', serif", fontWeight: 'bold' }}>{'\u201D'}</span>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-[30px] p-4 sm:p-6 md:p-10 rounded-xl" style={{ backgroundColor: '#FAF7F0' }}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col md:flex-row h-auto md:h-[260px] rounded-2xl overflow-hidden relative"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(180, 160, 130, 0.15)', borderBottom: '3px solid #D5B266' }}
            >
              <div className="w-full md:w-[190px] h-[200px] md:h-full flex-shrink-0 relative">
                <svg className="w-full h-full block" viewBox="0 0 190 260" preserveAspectRatio="none">
                  <defs>
                    <clipPath id={`curve-clip-${card.id}`}>
                      <path d="M 0,0 L 190,0 Q 155,130 190,260 L 0,260 Z" />
                    </clipPath>
                  </defs>
                  <image href={card.image} x="0" y="0" width="190" height="260" preserveAspectRatio="xMidYMid slice" clipPath={`url(#curve-clip-${card.id})`} />
                </svg>
              </div>
              <div className="flex-1 p-4 md:py-[25px] md:pr-[30px] md:pl-[15px] flex flex-col relative md:max-w-[480px]">
                <h3 className="text-xl md:text-[22px] font-bold mb-[2px]" style={{ color: '#112240', fontFamily: "'Georgia', serif" }}>{card.name}</h3>
                <div className="text-[11px] md:text-xs font-bold mb-2" style={{ color: '#D5B266' }}>{card.role}</div>
                <div className="text-sm mb-3 tracking-wider" style={{ color: '#D5B266', letterSpacing: '2px' }}>★★★★★</div>
                <p className="text-xs sm:text-[12px] leading-relaxed" style={{ color: '#4A4A4A', lineHeight: 1.6, fontWeight: 400 }}>&ldquo;{card.quote}&rdquo;</p>
                <span className="absolute top-3 md:top-[15px] right-4 md:right-[30px] text-[40px] md:text-[60px] leading-none font-bold pointer-events-none" style={{ color: '#FAF2E3', fontFamily: "'Georgia', serif" }}>❝</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
