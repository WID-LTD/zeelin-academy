import Link from 'next/link'

export default function FlashSaleSection() {
  return (
    <section style={{ padding: '60px 5%', backgroundColor: 'transparent' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: '1200px', height: '400px', backgroundColor: '#FAF7F0', fontFamily: "'Georgia', 'Times New Roman', serif", overflow: 'hidden', position: 'relative', boxSizing: 'border-box', border: '1px solid #e2ddd5', margin: '0 auto' }}>
        <div style={{ flex: '1.1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px 40px 60px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2Z" stroke="#D5B266" strokeWidth="2" fill="none"/>
              <text x="12" y="15" fill="#D5B266" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Z</text>
            </svg>
            <span style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: '13px', letterSpacing: '2px', color: '#112240', fontWeight: 'bold' }}>ZEELIN ACADEMY</span>
          </div>
          <h1 style={{ margin: '0 0 12px 0', color: '#112240', fontSize: '44px', fontWeight: 700, fontFamily: "'Georgia', serif", lineHeight: 1.2 }}>Start Your Journey Today</h1>
          <div style={{ color: '#D5B266', fontSize: '10px', marginBottom: '20px', fontFamily: 'sans-serif' }}>✧</div>
          <p style={{ margin: '0 0 28px 0', color: '#4A4A4A', fontSize: '16px', fontFamily: "'Helvetica Neue', Arial, sans-serif", lineHeight: 1.5, maxWidth: '460px' }}>
            Join thousands of successful learners and start your Business Analysis journey with confidence.
          </p>
          <Link href="/enroll" style={{ display: 'inline-block', backgroundColor: '#162542', color: '#FFFFFF', textDecoration: 'none', padding: '14px 40px', fontSize: '15px', fontWeight: 'bold', fontFamily: "'Helvetica Neue', Arial, sans-serif", borderRadius: '6px', marginBottom: '35px' }}>
            Enroll Now
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '520px', gap: '10px', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: '11px', color: '#333333', borderTop: '1px solid rgba(213, 178, 102, 0.25)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
              <span style={{ fontSize: '22px', color: '#D5B266' }}>👤</span>
              <div style={{ lineHeight: 1.3 }}>Learn from<br /><strong style={{ color: '#162542' }}>Industry Experts</strong></div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(213, 178, 102, 0.3)', height: '25px', alignSelf: 'center' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
              <span style={{ fontSize: '22px', color: '#D5B266' }}>🏅</span>
              <div style={{ lineHeight: 1.3 }}>Practical Skills for<br /><strong style={{ color: '#162542' }}>Real-World Impact</strong></div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(213, 178, 102, 0.3)', height: '25px', alignSelf: 'center' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left' }}>
              <span style={{ fontSize: '22px', color: '#D5B266' }}>📈</span>
              <div style={{ lineHeight: 1.3 }}>Advance Your Career<br /><strong style={{ color: '#162542' }}>with Confidence</strong></div>
            </div>
          </div>
        </div>

        <div style={{ flex: '0.9', position: 'relative', height: '100%' }}>
          <svg style={{ width: '100%', height: '100%', display: 'block' }} viewBox="0 0 500 400" preserveAspectRatio="none">
            <defs>
              <clipPath id="image-curve-clip">
                <path d="M 120,0 Q 15,200 120,400 L 500,400 L 500,0 Z" />
              </clipPath>
            </defs>
            <image href="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="400" preserveAspectRatio="xMidYMid slice" clipPath="url(#image-curve-clip)" />
            <path d="M 120,0 Q 15,200 120,400" fill="none" stroke="#D5B266" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
