import BannerSection from '@/components/BannerSection'
import WhoWeHelpSection from '@/components/WhoWeHelpSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import DeliveryStructureSection from '@/components/DeliveryStructureSection'
import CourseHighlightSection from '@/components/CourseHighlightSection'
import OfferSection from '@/components/OfferSection'
import FlashSaleSection from '@/components/FlashSaleSection'
import TestimonialSection from '@/components/TestimonialSection'

export default function Home() {
  return (
    <div id="home-section" className="overflow-x-hidden">
      <BannerSection />

      <WhoWeHelpSection />

      <OfferSection />

      <WhyChooseSection />

      <DeliveryStructureSection />

      <CourseHighlightSection />

      <TestimonialSection />

      <FlashSaleSection />
    </div>
  )
}
