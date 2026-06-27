import BannerSection from '@/components/BannerSection'
import WhoWeHelpSection from '@/components/WhoWeHelpSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import DeliveryStructureSection from '@/components/DeliveryStructureSection'
import CourseHighlightSection from '@/components/CourseHighlightSection'
import OfferSection from '@/components/OfferSection'
import FlashSaleSection from '@/components/FlashSaleSection'
import CallToActionSection from '@/components/CallToActionSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Static Text Section */}
      <section className="pt-1 pb-4 px-4 text-center max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black font-display leading-tight">
          <span style={{ color: 'var(--text-core)' }}>Stop Guessing. Start Preparing for your </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-dark)]">
            Business Analysis Exam with clarity.
          </span>
        </h1>
      </section>

      <BannerSection />

      <WhoWeHelpSection />

      <OfferSection />

      <WhyChooseSection />

      <DeliveryStructureSection />

      <CourseHighlightSection />

      <TestimonialSection />

      <FlashSaleSection />

      <CallToActionSection />
    </div>
  )
}
