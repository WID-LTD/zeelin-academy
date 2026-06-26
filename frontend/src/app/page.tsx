import Link from 'next/link'
import BannerSection from '@/components/BannerSection'
import WhoWeHelpSection from '@/components/WhoWeHelpSection'
import PartnershipSection from '@/components/PartnershipSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import DeliveryStructureSection from '@/components/DeliveryStructureSection'
import CourseHighlightSection from '@/components/CourseHighlightSection'
import RatingsSection from '@/components/RatingsSection'
import OfferSection from '@/components/OfferSection'
import FlashSaleSection from '@/components/FlashSaleSection'
import CallToActionSection from '@/components/CallToActionSection'
import { Users, Award, Star, TrendingUp, Clock, GraduationCap, Globe, ShieldCheck } from 'lucide-react'
import { FaLinkedinIn, FaTwitter, FaGoogle, FaAmazon, FaMicrosoft } from 'react-icons/fa'

const trustStats = [
  { icon: Users, value: '5,000+', label: 'Students Enrolled' },
  { icon: Award, value: 'BCS', label: 'Accredited Partner' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: TrendingUp, value: '95%', label: 'Pass Rate' },
]

const features = [
  { icon: Clock, title: 'Self-Paced Learning', description: 'Study at your own pace with lifetime access to all materials' },
  { icon: GraduationCap, title: 'Expert Mentors', description: 'Learn from certified BA professionals with real-world experience' },
  { icon: Globe, title: 'Study Anywhere', description: 'Access your courses on any device, anytime, anywhere' },
  { icon: ShieldCheck, title: 'Certification Ready', description: 'Curriculum fully aligned with BCS certification standards' },
]

const trustedCompanies = [
  { name: 'BCS', icon: Award },
  { name: 'APMG', icon: ShieldCheck },
  { name: 'IIBA', icon: Users },
  { name: 'KPMG', icon: FaLinkedinIn },
  { name: 'Deloitte', icon: FaTwitter },
  { name: 'Accenture', icon: FaGoogle },
  { name: 'Amazon', icon: FaAmazon },
  { name: 'Microsoft', icon: FaMicrosoft },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Static Text Section */}
      <section className="pt-1 pb-4 px-4 text-center max-w-[1280px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-tight">
          <span style={{ color: 'var(--text-core)' }}>Stop Guessing. Start Preparing for your </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-dark)]">
            Business Analysis Exam with clarity.
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-full mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Expert-led courses, guided study plans, mock quizzes, visual summaries, and exam-readiness support — everything you need to prepare for your BCS certification with confidence and accelerate your career, all designed for busy professionals like you.
        </p>

        {/* Trust Stats Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {trustStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="p-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:border-[rgba(212,175,55,0.3)] group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <Icon className="w-6 h-6 mx-auto mb-2 transition-transform group-hover:scale-110" style={{ color: 'var(--brand-gold)' }} />
                <div className="font-black text-xl" style={{ color: 'var(--text-core)' }}>{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Feature Highlights Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center p-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform hover:scale-110"
                  style={{ backgroundColor: 'rgba(212,175,55,0.1)' }}>
                  <Icon className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--text-core)' }}>{feature.title}</div>
                <div className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</div>
              </div>
            )
          })}
        </div>

        {/* Trust Signals Strip */}
        <div className="mt-10 pt-6 border-t max-w-3xl mx-auto" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-medium mb-4 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Trusted by professionals at
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {trustedCompanies.map((company) => {
              const Icon = company.icon
              return (
                <div key={company.name} className="flex items-center gap-2 text-sm font-bold opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  style={{ color: 'var(--text-secondary)' }}>
                  <Icon className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                  {company.name}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <BannerSection />

      <WhoWeHelpSection />

      <PartnershipSection />

      <WhyChooseSection />

      <DeliveryStructureSection />

      <CourseHighlightSection />

      <RatingsSection />

      <OfferSection />

      <FlashSaleSection />

      <CallToActionSection />
    </div>
  )
}
