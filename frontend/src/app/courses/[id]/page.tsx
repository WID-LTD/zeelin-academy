'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Globe, Check, ChevronDown, PlayCircle, Play, FileText, Monitor, Award, ShieldCheck, Star } from 'lucide-react'

export default function CourseDetails({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeModule, setActiveModule] = useState<number | null>(0)

  const curriculum = [
    {
      title: 'Module 1: Introduction to Business Analysis',
      lessons: ['What is Business Analysis?', 'Role of a Business Analyst', 'Business Analysis Core Concept Model (BACCM)', 'Career Paths in Business Analysis']
    },
    {
      title: 'Module 2: Strategy Analysis',
      lessons: ['Enterprise Analysis', 'Analyze Current State', 'Define Future State', 'Assess Risks', 'Define Change Strategy']
    },
    {
      title: 'Module 3: Requirements Analysis and Design Definition',
      lessons: ['Specify and Model Requirements', 'Verify and Validate Requirements', 'Requirements Architecture', 'Define Design Options']
    },
    {
      title: 'Module 4: Agile Frameworks',
      lessons: ['Agile Mindset', 'Scrum Methodology', 'Kanban Basics', 'User Stories and Acceptance Criteria']
    }
  ]

  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
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
                <img src="/instructor_1.png" alt="Dr. Franklin Kalu" className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-[color:var(--border)] mb-8 hide-scrollbar">
              {['overview', 'curriculum', 'reviews', 'instructor'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-core)] hover:border-[color:var(--border)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-fade-in text-[color:var(--text-core)]">
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
                <div className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                  <div className="space-y-4">
                    {curriculum.map((module, i) => (
                      <div key={i} className="border border-[color:var(--border)] rounded-xl overflow-hidden bg-[color:var(--bg-card)]">
                        <button
                          onClick={() => setActiveModule(activeModule === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-[color:var(--bg-secondary)] transition-colors"
                        >
                          <span className="font-bold text-[color:var(--text-core)]">{module.title}</span>
                          <ChevronDown className={`w-5 h-5 text-[color:var(--text-secondary)] transform transition-transform ${activeModule === i ? 'rotate-180' : ''}`} />
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
                <div className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((r) => (
                      <div key={r} className="p-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
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
                <div className="animate-fade-in text-[color:var(--text-core)]">
                  <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <img src="/instructor_1.png" alt="Dr. Franklin Kalu" className="w-32 h-32 rounded-xl object-cover" />
                    <div>
                      <h3 className="text-xl font-bold">Dr. Franklin Kalu</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">Senior Business Analyst & Educator</p>
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
                  <button className="w-16 h-16 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <Play className="w-12 h-12" style={{ color: 'white' }} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-[color:var(--text-core)] mb-4">£299</div>
                <Link href="/enroll" className="block w-full py-3 px-4 text-center rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors mb-3 shadow-md shadow-blue-500/20">
                  Enroll Now
                </Link>
                <button className="block w-full py-3 px-4 text-center rounded-lg border border-[color:var(--border)] text-[color:var(--text-core)] font-medium hover:bg-[color:var(--bg-secondary)] transition-colors mb-6">
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
    </div>
  )
}
