import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function CallToActionSection() {
  return (
    <AnimatedSection delay={0}>
    <div className="w-full min-h-[320px] lg:min-h-[400px] font-serif relative overflow-hidden flex flex-col lg:flex-row">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 lg:px-15 lg:py-10 text-center relative z-2">
        <div className="flex items-center gap-2 mb-5 lg:mb-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2Z" stroke="#D5B266" strokeWidth="2" fill="none"/>
            <text x="12" y="15" fill="#D5B266" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Z</text>
          </svg>
          <span className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#112240]">ZEELIN ACADEMY</span>
        </div>
        <h1 className="m-0 mb-2 lg:mb-3 text-[#112240] text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">Start Your Journey Today</h1>
        <div className="text-[#D5B266] text-xs mb-4 lg:mb-5 font-sans">✧</div>
        <p className="m-0 mb-6 lg:mb-7 text-[#4A4A4A] text-sm sm:text-base font-sans leading-relaxed max-w-md">
          Join thousands of successful learners and start your Business Analysis journey with confidence.
        </p>
        <Link href="/enroll" className="inline-block bg-[#162542] text-white no-underline px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-bold font-sans rounded-md mb-7 lg:mb-8 hover:bg-[#1e3358] transition-colors">
          Enroll Now
        </Link>
        <div className="flex justify-between w-full max-w-md gap-2 sm:gap-3 font-sans text-xs text-[#333] border-t border-[rgba(213,178,102,0.25)] pt-5 lg:pt-6">
          <div className="flex items-center gap-2 text-left">
            <span className="text-lg sm:text-2xl text-[#D5B266]">👤</span>
            <div className="leading-snug">Learn from<br /><strong className="text-[#162542]">Industry Experts</strong></div>
          </div>
          <div className="w-px bg-[rgba(213,178,102,0.3)] h-6 self-center flex-shrink-0" />
          <div className="flex items-center gap-2 text-left">
            <span className="text-lg sm:text-2xl text-[#D5B266]">🏅</span>
            <div className="leading-snug">Practical Skills for<br /><strong className="text-[#162542]">Real-World Impact</strong></div>
          </div>
          <div className="w-px bg-[rgba(213,178,102,0.3)] h-6 self-center flex-shrink-0" />
          <div className="flex items-center gap-2 text-left">
            <span className="text-lg sm:text-2xl text-[#D5B266]">📈</span>
            <div className="leading-snug">Advance Your Career<br /><strong className="text-[#162542]">with Confidence</strong></div>
          </div>
        </div>
      </div>

      <div className="flex-0.9 relative h-48 lg:h-auto lg:block hidden">
        <svg className="w-full h-full block" viewBox="0 0 500 400" preserveAspectRatio="none">
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
    </AnimatedSection>
  )
}
