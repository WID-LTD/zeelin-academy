import Link from 'next/link'
import CountUp from '@/components/CountUp'
import BannerSection from '@/components/BannerSection'
import WhoWeHelpSection from '@/components/WhoWeHelpSection'
import TeachingMethodSection from '@/components/TeachingMethodSection'
import OfferSection from '@/components/OfferSection'
import FlashSaleSection from '@/components/FlashSaleSection'
import CallToActionSection from '@/components/CallToActionSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BannerSection />

      <WhoWeHelpSection />

      <TeachingMethodSection />

      <OfferSection />

      {/* Stats Section */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Flash Sale Section */}
      <FlashSaleSection />

      <CallToActionSection />
    </div>
  )
}