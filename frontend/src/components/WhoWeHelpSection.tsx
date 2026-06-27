'use client'

import SafeImage from '@/components/SafeImage'
import AnimatedSection from '@/components/AnimatedSection'
import { Check } from 'lucide-react'

const audiences = [
  'Complete beginners',
  'Career changers',
  'Busy 9–5 professionals',
  'Parents with limited study time',
  'People preparing for BCS Business Analysis exams',
  'People who feel overwhelmed by big textbooks',
  'Visual learners',
  'Professionals who want practical BA confidence',
]

const personaStories = [
  {
    name: 'Sarah — The Complete Beginner',
    story: 'Sarah had never studied Business Analysis before and felt intimidated by the terminology. Zeelin Academy\'s visual summaries and step-by-step roadmap helped her build confidence from day one. She passed her BCS Foundation exam in just 6 weeks.',
  },
  {
    name: 'James — The Career Changer',
    story: 'After 8 years in retail management, James wanted to transition into Business Analysis. Zeelin\'s structured pathway and live coaching calls gave him the practical skills and certification he needed to land his first BA role within 3 months.',
  },
  {
    name: 'Aisha — The Busy Professional',
    story: 'Working 9–5 as a project coordinator, Aisha struggled to find study time. Zeelin\'s flexible self-paced programme and micro-learning format allowed her to study during her commute and lunch breaks, completing her certification without sacrificing work.',
  },
  {
    name: 'David — The Parent with Limited Time',
    story: 'With two young children at home, David needed a programme that respected his limited availability. The weekly check-ins and accountability system kept him on track without overwhelming his schedule, and he passed his Practitioner exam on the first attempt.',
  },
  {
    name: 'Priya — The BCS Exam Candidate',
    story: 'Priya had already tried studying with traditional textbooks but felt overwhelmed by the volume of information. Zeelin\'s mock quizzes and exam readiness system helped her identify gaps and approach her BCS Practitioner exam with genuine confidence.',
  },
  {
    name: 'Michael — The Visual Learner',
    story: 'Michael always struggled with dense reading materials and lengthy textbooks. Zeelin\'s structured visual summaries and diagram-based explanations transformed complex BA concepts into clear, memorable visuals that finally clicked for him.',
  },
]

const photos = [
  { src: '/complete_beginner.jpg', alt: 'Complete beginners' },
  { src: '/career_changers.jpg', alt: 'Career changers' },
  { src: '/busy_9–5_profession.jpg', alt: 'Busy 9–5 professionals' },
  { src: '/overwhelmed_by_big_textbooks.jpg', alt: 'Feeling overwhelmed by big textbooks' },
  { src: '/professional_bcs_practitioner.png', alt: 'Professional BCS Practitioner', isPractitioner: true },
]

export default function WhoWeHelpSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ color: 'var(--text-core)' }}>
                Who Zeelin Academy{' '}
                <span style={{ color: 'var(--brand-gold)' }}>helps</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ul className="space-y-4">
                {audiences.map((item, i) => (
                  <AnimatedSection key={item} delay={200 + i * 60}>
                    <li className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(223,186,107,0.15)' }}>
                        <Check className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <span className="text-lg md:text-xl font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </AnimatedSection>

            {/* Persona Stories */}
            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {personaStories.map((persona, i) => (
                  <AnimatedSection key={persona.name} delay={400 + i * 60}>
                    <div
                      className="p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-[rgba(212,175,55,0.3)] h-full"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                        style={{ backgroundColor: 'rgba(212,175,55,0.15)' }}
                      >
                        <Check className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} />
                      </div>
                      <h4 className="font-display text-base font-bold mb-2" style={{ color: 'var(--text-core)' }}>
                        {persona.name}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        &ldquo;{persona.story}&rdquo;
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Photo Grid */}
          <AnimatedSection direction="right" delay={200} duration={700} className="w-full h-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full auto-rows-fr">
              {photos.map((img, i) => (
                <div key={img.src}
                  className={`relative overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${i === 0 ? 'row-span-2 col-span-1' : ''} ${i === 0 ? 'min-h-[416px]' : 'min-h-[200px]'}`}
                  style={{ backgroundColor: img.isPractitioner ? 'rgba(212,175,55,0.15)' : 'var(--bg-card)' }}>
                  <SafeImage src={img.src} alt={img.alt} fill className="object-cover" />
                  {img.isPractitioner && (
                    <div className="absolute inset-0 border-2 pointer-events-none" style={{ borderColor: 'rgba(212,175,55,0.3)' }} />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
