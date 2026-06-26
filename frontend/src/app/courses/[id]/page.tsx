'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Globe, Check, ChevronDown, PlayCircle, Play, FileText, Monitor, Award, ShieldCheck, Star, Clock, BookOpen, ArrowRight, ChevronRight } from 'lucide-react'
import { getTimeLeft, COUNTDOWN_DATE } from '@/lib/constants'

export default function CourseDetails({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeModule, setActiveModule] = useState<number | null>(0)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(new Date(COUNTDOWN_DATE)))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(COUNTDOWN_DATE)))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const curriculum = [
    {
      title: 'Module 1: Introduction to Business Analysis',
      duration: '6 hours',
      lessons: ['What is Business Analysis?', 'Role of a Business Analyst', 'Business Analysis Core Concept Model (BACCM)', 'Career Paths in Business Analysis']
    },
    {
      title: 'Module 2: Strategy Analysis',
      duration: '8 hours',
      lessons: ['Enterprise Analysis', 'Analyze Current State', 'Define Future State', 'Assess Risks', 'Define Change Strategy']
    },
    {
      title: 'Module 3: Requirements Analysis and Design Definition',
      duration: '10 hours',
      lessons: ['Specify and Model Requirements', 'Verify and Validate Requirements', 'Requirements Architecture', 'Define Design Options']
    },
    {
      title: 'Module 4: Agile Frameworks',
      duration: '6 hours',
      lessons: ['Agile Mindset', 'Scrum Methodology', 'Kanban Basics', 'User Stories and Acceptance Criteria']
    }
  ]

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-sm gold font-medium mb-4">
                <span>Business Analysis</span>
                <span>•</span>
                <span>Beginner to Advanced</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master International Business Analysis
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Transform your career with Zeelin Academy - Pioneered by Dr. Franklin Kalu. Structured, practical Business Analysis education based in the UK.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-400">
                    {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current inline" />)}
                  </div>
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-400">(2.4k ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  <span>14,500+ Students enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                  <span>English</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img src="/instructor_1.png" alt="Dr. Franklin Kalu" className="w-12 h-12 rounded-full border-2 gold-border object-cover" />
                <div>
                  <p className="text-sm text-gray-400">Created by</p>
                  <p className="font-medium text-white">Dr. Franklin Kalu</p>
                </div>
              </div>
            </div>
            {/* Mobile-only Sticky Card Area (Hidden on LG) */}
            <div className="lg:hidden block">
              {/* Similar to the sticky sidebar but shown inline for mobile */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div role="tablist" aria-label="Course sections" className="flex overflow-x-auto border-b border-[color:var(--border)] mb-8 hide-scrollbar">
              {['overview', 'curriculum', 'reviews', 'instructor'].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  id={`tab-${tab}`}
                  aria-selected={activeTab === tab}
                  aria-controls={`tabpanel-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-[var(--brand-gold)] text-[var(--brand-gold)]'
                      : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-core)] hover:border-[color:var(--border)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[25rem]">
              {activeTab === 'overview' && (
                <div role="tabpanel" id="tabpanel-overview" aria-labelledby="tab-overview" className="space-y-8 animate-fade-in text-[color:var(--text-core)]">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                    <p className="text-[color:var(--text-secondary)] leading-relaxed">
                      This comprehensive program is designed to take you from a beginner to an advanced Business Analyst. You will learn the core concepts, methodologies, and tools used by top professionals in the industry. The course includes real-world case studies, practical assignments, and interactive sessions to ensure you gain hands-on experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">What you&apos;ll learn</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[color:var(--text-secondary)]">
                      {[
                        'Master Agile and Scrum methodologies',
                        'Write effective User Stories and Acceptance Criteria',
                        'Conduct stakeholder analysis and management',
                        'Perform SWOT and PESTLE analysis',
                        'Create process flow diagrams',
                        'Understand the product lifecycle',
                        'Data analysis and visualization basics',
                        'Prepare for BA certification exams'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <div role="tabpanel" id="tabpanel-curriculum" aria-labelledby="tab-curriculum" className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                  <div className="space-y-4">
                    {curriculum.map((module, i) => (
                      <div key={i} className="border border-[color:var(--border)] rounded-xl overflow-hidden bg-[color:var(--bg-card)]">
                        <button
                          onClick={() => setActiveModule(activeModule === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-[color:var(--bg-secondary)] transition-colors"
                        >
                          <span className="font-bold text-[color:var(--text-core)]">{module.title}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                              <Clock className="w-4 h-4" /> {module.duration}
                            </span>
                            <ChevronDown className={`w-5 h-5 text-[color:var(--text-secondary)] transform transition-transform ${activeModule === i ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        {activeModule === i && (
                          <div className="p-5 border-t border-[color:var(--border)] bg-[color:var(--bg-primary)]">
                            <ul className="space-y-3">
                              {module.lessons.map((lesson, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-[color:var(--text-secondary)]">
                                  <PlayCircle className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div role="tabpanel" id="tabpanel-reviews" aria-labelledby="tab-reviews" className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((r) => (
                      <div key={r} className="p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--brand-gold)' }}>
                            User
                          </div>
                          <div>
                            <div className="font-bold">Amazing Course!</div>
                            <div className="flex items-center gap-1 text-amber-400 text-xs">
                              {Array.from({length: 5}).map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current inline" />)} <span className="text-[color:var(--text-secondary)] ml-2">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-[color:var(--text-secondary)]">
                          &ldquo;This course exceeded my expectations. The content is well-structured, and Dr. Franklin explains complex concepts in a way that is easy to understand. Highly recommended!&rdquo;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div role="tabpanel" id="tabpanel-instructor" aria-labelledby="tab-instructor" className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img src="/instructor_1.png" alt="Dr. Franklin Kalu" className="w-32 h-32 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-xl font-bold">Dr. Franklin Kalu</h3>
                      <p className="text-sm font-medium mb-4 gold">Senior Business Analyst & Educator</p>
                      <p className="text-[color:var(--text-secondary)] text-sm leading-relaxed mb-4">
                        Dr. Franklin Kalu is a seasoned Business Analyst with over 15 years of experience in the industry. He has worked with top Fortune 500 companies and has helped numerous organizations streamline their processes and achieve their strategic goals. His passion for teaching led him to found Zeelin Academy, where he shares his knowledge and expertise with aspiring professionals worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 border border-[color:var(--border)] bg-[color:var(--bg-card)] rounded-2xl shadow-xl overflow-hidden hidden lg:block">
              {/* Course Preview Image */}
              <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform" style={{ color: 'var(--brand-gold)' }} aria-label="Play course preview video">
                    <Play className="w-12 h-12" style={{ color: 'white' }} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {/* Discounted Pricing */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-gray-400 line-through">£499</span>
                    <div className="px-2 py-0.5 rounded-md text-xs font-bold animate-pulse-gold" style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: 'white' }}>
                      Save 40%
                    </div>
                  </div>
                  <div className="text-4xl font-bold" style={{ color: 'var(--brand-gold)' }}>£299</div>
                  <div className="text-xs mt-1 text-muted">Limited Time Offer</div>
                </div>

                {/* Countdown Timer */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--brand-gold)' }}>
                        {String(unit.value).padStart(2, '0')}
                      </div>
                      <div className="text-[0.55rem] mt-1 text-muted uppercase">{unit.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/enroll" className="block w-full py-3 px-4 text-center rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 mb-3" style={{ background: 'linear-gradient(135deg, var(--brand-gold), #b5952f)', color: '#0f1115', boxShadow: '0 4px 20px rgba(212,175,55,0.3)' }}>
                  Enroll Now — £299
                </Link>
                <button className="block w-full py-3 px-4 text-center rounded-lg border border-[color:var(--border)] text-[color:var(--text-core)] font-medium hover:bg-[color:var(--bg-secondary)] transition-colors mb-6" aria-label="Add this course to your wishlist">
                  Add to Wishlist
                </button>

                <div className="space-y-4">
                  <h4 className="font-bold text-[color:var(--text-core)] text-sm">This course includes:</h4>
                  <ul className="space-y-3 text-sm text-[color:var(--text-secondary)]">
                    <li className="flex items-center gap-3">
                      <PlayCircle className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <span>40 hours on-demand video</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FileText className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <span>15 downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Monitor className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <span>Access on mobile and TV</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-core)' }}>
            Related <span style={{ color: 'var(--brand-gold)' }}>Courses</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Business Analysis Foundations', students: '8,200+', rating: '4.7', href: '/courses/modules/ba-foundations' },
              { title: 'Elicitation & Collaboration', students: '6,100+', rating: '4.8', href: '/courses/modules/elicitation' },
              { title: 'Requirements Life Cycle Mgmt', students: '5,400+', rating: '4.6', href: '/courses/modules/requirements-mgmt' },
            ].map((course, i) => (
              <Link key={i} href={course.href}
                className="p-6 rounded-2xl border transition-all hover:shadow-md group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-lg mb-3 group-hover:gold transition-colors" style={{ color: 'var(--text-core)' }}>{course.title}</h3>
                <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> {course.rating}
                  </span>
                </div>
                <span className="text-sm font-semibold inline-flex items-center gap-2" style={{ color: 'var(--brand-gold)' }}>
                  View Course <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Enrollment CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-lg" style={{ backgroundColor: 'rgba(15,17,21,0.95)', borderColor: 'var(--border)' }}>
        <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="hidden sm:block">
            <div className="text-sm font-bold" style={{ color: 'var(--text-core)' }}>Master International Business Analysis</div>
            <div className="flex items-center gap-2 text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              <Star className="w-3 h-3" style={{ color: 'var(--brand-gold)' }} /> 4.9 &middot; 14,500+ students
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-sm line-through" style={{ color: 'var(--text-secondary)' }}>£499</span>
                <span className="text-xl font-black" style={{ color: 'var(--brand-gold)' }}>£299</span>
              </div>
              <div className="text-[0.6rem] uppercase font-bold" style={{ color: '#22c55e' }}>Limited time offer</div>
            </div>
            <Link href="/enroll" className="btn-gold px-6 py-2.5 text-sm font-bold whitespace-nowrap">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
