import Link from 'next/link'

export default function FlashSaleSection() {
  return (
    <section className="py-16 lg:py-24 px-[5%]" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row h-auto lg:min-h-[25rem] rounded-xl overflow-hidden" style={{ backgroundColor: '#FAF7F0', fontFamily: "'Georgia', 'Times New Roman', serif", border: '1px solid #e2ddd5' }}>
          {/* Left Content */}
          <div className="flex-[1.1] flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:py-[2.5rem] lg:pl-[3.75rem] lg:pr-[1.25rem] text-center relative z-[2]">
            <div className="w-full max-w-full lg:max-w-[36.25rem] mx-auto">
              <div className="flex items-center justify-center gap-2 mb-5 md:mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2Z" stroke="#D4A02A" strokeWidth="2" fill="none" />
                  <text x="12" y="15" fill="#D4A02A" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Z</text>
                </svg>
                <span className="text-[0.8125rem] tracking-[0.125rem] font-bold" style={{ color: '#112240', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>ZEELIN ACADEMY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight mb-3" style={{ color: '#112240', fontFamily: "'Georgia', serif" }}>Start Your Journey Today</h1>

              <div className="text-[0.625rem] mb-4 md:mb-5" style={{ color: '#D4A02A', fontFamily: 'sans-serif' }}>✧</div>

              <p className="text-sm sm:text-base max-w-[28.75rem] mx-auto mb-6 md:mb-7" style={{ color: '#4A4A4A', fontFamily: "'Helvetica Neue', Arial, sans-serif", lineHeight: 1.5 }}>
                Join thousands of successful learners and start your Business Analysis journey with confidence.
              </p>

              <Link href="/enroll" className="w-full sm:w-auto inline-block text-center px-[2.5rem] py-[0.875rem] rounded-md text-[0.9375rem] font-bold mb-6 md:mb-8" style={{ backgroundColor: '#162542', color: '#FFFFFF', textDecoration: 'none', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
                Enroll Now
              </Link>

              {/* Value Props Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-[0.625rem] w-full max-w-[32.5rem] mx-auto pt-4 md:pt-[1.25rem]" style={{ borderTop: '1px solid rgba(213, 178, 102, 0.25)', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: '0.6875rem', color: '#333333' }}>
                <div className="flex items-center gap-2 text-left">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4.5" stroke="#D4A02A" strokeWidth="1.5" />
                    <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div style={{ lineHeight: 1.3 }}>Learn from<br /><strong style={{ color: '#162542' }}>Industry Experts</strong></div>
                </div>
                <div className="hidden sm:block w-px h-[1.5625rem] self-center" style={{ backgroundColor: 'rgba(213, 178, 102, 0.3)' }} />
                <div className="flex items-center gap-2 text-left">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="14" r="6" stroke="#D4A02A" strokeWidth="1.5" />
                    <path d="M8.5 2L10 9" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M15.5 2L14 9" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 2v4" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div style={{ lineHeight: 1.3 }}>Practical Skills for<br /><strong style={{ color: '#162542' }}>Real-World Impact</strong></div>
                </div>
                <div className="hidden sm:block w-px h-[1.5625rem] self-center" style={{ backgroundColor: 'rgba(213, 178, 102, 0.3)' }} />
                <div className="flex items-center gap-2 text-left">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20h18" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M5 16l4-6 4 4 6-8" stroke="#D4A02A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ lineHeight: 1.3 }}>Advance Your Career<br /><strong style={{ color: '#162542' }}>with Confidence</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-[0.9] h-[15.625rem] lg:h-full relative">
            <svg className="w-full h-full block" viewBox="0 0 500 400" preserveAspectRatio="none">
              <defs>
                <clipPath id="image-curve-clip">
                  <path d="M 120,0 Q 15,200 120,400 L 500,400 L 500,0 Z" />
                </clipPath>
              </defs>
              <image href="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" x="0" y="0" width="500" height="400" preserveAspectRatio="xMidYMid slice" clipPath="url(#image-curve-clip)" />
              <path d="M 120,0 Q 15,200 120,400" fill="none" stroke="#D4A02A" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
