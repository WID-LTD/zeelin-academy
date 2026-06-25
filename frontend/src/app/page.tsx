import Link from 'next/link'
import BannerSection from '@/components/BannerSection'
import BundleSection from '@/components/BundleSection'
import WhoWeHelpSection from '@/components/WhoWeHelpSection'
import PartnershipSection from '@/components/PartnershipSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import HomeCoursesSection from '@/components/HomeCoursesSection'
import RatingsSection from '@/components/RatingsSection'
import TeachingMethodSection from '@/components/TeachingMethodSection'
import OfferSection from '@/components/OfferSection'
import FlashSaleSection from '@/components/FlashSaleSection'
import CallToActionSection from '@/components/CallToActionSection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Static Text Section */}
      <section className="pt-16 pb-8 px-4 text-center max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight">
          <span style={{ color: 'var(--text-core)' }}>Master </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-dark)]">
            Business Analysis
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Expert-led courses, lifetime access, and everything you need to prepare for your BCS certification and accelerate your career.
        </p>
      </section>

      <BannerSection />

      <BundleSection />

      <WhoWeHelpSection />

      <PartnershipSection />

      <WhyChooseSection />

      <HomeCoursesSection />


      <RatingsSection />

      <TeachingMethodSection />

      <OfferSection />

      <FlashSaleSection />

      <CallToActionSection />
    </div>
  )
}
