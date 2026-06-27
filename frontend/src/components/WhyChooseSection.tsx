'use client'

import AnimatedSection from '@/components/AnimatedSection'
import {
  GraduationCap, BookOpen, Sun, BarChart3, Lightbulb,
  ShieldCheck, Mic, Compass, FileText, CalendarCheck, Users,
  MessageCircle, UsersRound
} from 'lucide-react'

const features = [
  {
    image: '/choose_live_training.jpg',
    icon: GraduationCap,
    title: 'Monday to Friday Live Instructor-Led Training',
    description: 'Live weekday teaching sessions where learners receive clear explanations, real examples, guided support, and the opportunity to ask questions.',
  },
  {
    image: '/choose_roadmap.jpg',
    icon: BookOpen,
    title: '6-Week Structured Reading Roadmap',
    description: 'A clear study plan that shows learners what to read, when to read it, and how each reading task connects to exam preparation.',
  },
  {
    image: '/choose_saturday_lab.jpg',
    icon: Sun,
    title: 'Saturday Success Lab',
    description: 'A weekly review and preparation session where learners summarise what they studied during the week, clarify difficult concepts, ask questions, and prepare for the next topic.',
  },
  {
    image: '/choose_visual_summaries.jpg',
    icon: BarChart3,
    title: 'Structured Visual Summaries',
    description: 'Diagrams, tables, process flows, mind maps, and visual breakdowns that help learners understand difficult concepts faster and revise more effectively.',
  },
  {
    image: '/choose_mock_quizzes.jpg',
    icon: Lightbulb,
    title: 'Interactive Mock Quizzes',
    description: 'Engaging exam-style quizzes that help learners practise, receive feedback, identify weak areas, and build confidence.',
  },
  {
    image: '/choose_readiness_check.jpg',
    icon: ShieldCheck,
    title: 'Automatic Exam Readiness Check',
    description: 'A progress-based readiness check that helps learners understand whether they are prepared before booking or sitting their exam.',
  },
  {
    image: '/choose_oral_exam.jpg',
    icon: Mic,
    title: 'Oral Exam Readiness Support',
    description: 'Focused preparation to help learners explain business analysis concepts clearly, connect theory to practical examples, and respond confidently to examiner-style questions.',
  },
  {
    image: '/choose_pathway_finder.jpg',
    icon: Compass,
    title: 'Zeelin Diploma Pathway Finder',
    description: 'Guidance to help learners choose their Diploma modules based on their background, confidence level, career direction, and the type of Business Analyst they want to become.',
  },
  {
    image: '/choose_exam_guides.jpg',
    icon: FileText,
    title: 'Zeelin Exam Focus Companion Guides',
    description: 'Access to Zeelin Academy\'s course-specific study guides, where available, to support revision, understanding, and exam preparation.',
  },
  {
    image: '/choose_exam_booking.jpg',
    icon: CalendarCheck,
    title: 'Exam Booking Guidance',
    description: 'Support to help learners understand the official exam booking process, choose the correct module, and prepare for the next step. Official exam fees are not included.',
  },
  {
    image: '/choose_tutor_checkins.jpg',
    icon: MessageCircle,
    title: 'Personal Tutor Check-Ins',
    description: 'Weekly one-on-one check-in sessions where learners receive personalised feedback, clarify doubts, track their progress against the roadmap, and stay motivated with direct accountability from a dedicated BCS-certified tutor.',
  },
  {
    image: '/choose_study_groups.jpg',
    icon: UsersRound,
    title: 'Community Study Groups',
    description: 'Small-group peer learning sessions where learners collaborate on case studies, discuss exam techniques, share revision tips, and build confidence together in a supportive, structured environment.',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28 3xl:py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black leading-tight mb-6" style={{ color: 'var(--text-core)' }}>
              Why Choose{' '}
              <span style={{ color: 'var(--brand-gold)' }}>Zeelin Academy</span>
            </h2>
            <p className="text-base md:text-lg 3xl:text-xl leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Preparing for Business Analysis exams can feel overwhelming, especially when you are working full-time, changing careers, raising a family, or trying to study after a long day.
            </p>
            <p className="text-base md:text-lg 3xl:text-xl font-semibold" style={{ color: 'var(--text-core)' }}>
              Zeelin Academy was created for busy learners who need more than just study materials. We provide:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 3xl:gap-8 max-w-[1280px] mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <AnimatedSection key={feature.title} delay={100 + idx * 60} duration={600}>
                <div
                  className="rounded-2xl border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col group"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
                >
                  <div className="relative w-full aspect-video overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)',
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <Icon className="w-12 h-12 mb-3 opacity-40" style={{ color: 'var(--brand-gold)' }} />
                      <span className="text-xs font-bold uppercase tracking-wider opacity-30 px-3 py-1 rounded-full border" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>
                        {feature.image.replace('/choose_', '').replace('.jpg', '').replace(/_/g, ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-base md:text-lg 3xl:text-xl font-bold mb-3 leading-snug" style={{ color: 'var(--text-core)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm 3xl:text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
