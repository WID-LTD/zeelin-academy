'use client'

import Link from 'next/link'
import SafeImage from '@/components/SafeImage'
import CountUp from '@/components/CountUp'
import { ArrowRight, Star, Check, Shield, ShieldCheck, Quote, Plus, Minus, Zap, BookOpen, Users, Globe, Award, Lightbulb, GraduationCap, BarChart3, Sparkles, Target, BookMarked, Clock, Monitor, FileText, HeartHandshake, Eye, PlayCircle, Image } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[color:var(--bg-primary)]">
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <SafeImage src="/logo.png" alt="" fill className="object-contain p-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 text-[color:var(--brand-gold)] bg-[rgba(223,186,107,0.1)] border border-[rgba(223,186,107,0.2)]">
                <span className="w-2 h-2 rounded-full gold-bg" />
                Premium Online Learning
              </div>
              <h1 className="font-display text-5xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-6 text-[color:var(--text-core)]">
                Learn Future-Ready Skills That Accelerate Your <span className="gold">Career</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-secondary max-w-2xl">
                Master Technology, AI, Cybersecurity, and Business with industry experts. Transform your career with globally recognized certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <Link href="/enroll" className="btn-gold btn-blink px-10 py-4 text-lg inline-block text-center shadow-lg hover:shadow-xl transition-all relative font-bold">
                  Start Learning
                </Link>
                <Link href="/courses" className="btn-outline-gold px-10 py-4 text-lg inline-block text-center bg-white dark:bg-transparent font-bold">
                  Explore Courses
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {['/avatar_1.png', '/avatar_2.png', '/avatar_3.png', '/avatar_4.png'].map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 overflow-hidden bg-white shadow-sm gold-border">
                        <SafeImage src={src} alt={`Student ${i + 1}`} width={40} height={40} className="object-cover w-full h-full" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-secondary">Join <CountUp end={10000} suffix="+" /> students globally</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl border border-[rgba(223,186,107,0.3)] hover:-translate-y-2 transition-transform duration-500">
              <SafeImage src="/hero_mockup.png" alt="Premium Learning Platform Mockup" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 border-y border-[color:var(--border)] bg-[color:var(--bg-secondary)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 10000, suffix: '+', label: 'Students Enrolled' },
              { value: 50, suffix: '+', label: 'Courses Available' },
              { value: 120, suffix: '+', label: 'Expert Instructors' },
              { value: 8500, suffix: '+', label: 'Certificates Issued' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-[color:var(--bg-card)] shadow-sm border border-[color:var(--border)] card-hover">
                <div className="font-display text-4xl sm:text-5xl font-bold mb-2 gold">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-secondary uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
                Featured <span className="gold">Courses</span>
              </h2>
              <p className="max-w-2xl text-secondary text-xl">Top-rated premium programs to elevate your career.</p>
            </div>
            <Link href="/courses" className="hidden md:inline-flex items-center gap-2 text-[color:var(--brand-gold)] font-semibold hover:underline">
              View All Courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business Analysis Foundations', cat: 'Business Analysis', duration: '4 Weeks', level: 'Beginner', students: '3.2k', rating: '4.9', instructor: 'Dr. Franklin Kalu', img: '/business_analysis_course.png', avatar: '/pic.jpg' },
              { title: 'Cybersecurity Fundamentals', cat: 'Security', duration: '8 Weeks', level: 'Beginner', students: '4.1k', rating: '4.8', instructor: 'James Wilson', img: '/cybersecurity_course.png', avatar: '/instructor_1.png' },
              { title: 'Full-Stack Software Development', cat: 'Development', duration: '16 Weeks', level: 'Intermediate', students: '3.8k', rating: '4.9', instructor: 'Dr. Franklin Kalu', img: '/software_development_course.png', avatar: '/pic.jpg' }
            ].map((course, i) => (
              <div key={i} className="flex flex-col h-full bg-[color:var(--bg-card)] rounded-2xl overflow-hidden shadow-lg border border-[color:var(--border)] card-hover group">
                <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
                  <SafeImage src={course.img} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                    {course.cat}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 text-sm font-medium text-secondary">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>{course.rating} ({course.students} students)</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)] leading-snug">{course.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[color:var(--border)]">
                      <SafeImage src={course.avatar} alt={course.instructor} width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <span className="text-sm font-semibold text-[color:var(--text-core)]">{course.instructor}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-[color:var(--border)]">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted uppercase font-bold tracking-wider">Duration</span>
                      <span className="text-sm font-semibold text-[color:var(--text-core)]">{course.duration}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted uppercase font-bold tracking-wider">Level</span>
                      <span className="text-sm font-semibold text-[color:var(--text-core)]">{course.level}</span>
                    </div>
                  </div>
                  <div className="mt-auto text-center">
                    <Link href="/enroll" className="btn-gold px-8 py-3 text-sm inline-block font-bold whitespace-nowrap w-full md:w-auto">Enroll Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href="/courses" className="btn-outline-gold px-8 py-3 text-sm inline-block">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="categories" className="py-24 bg-[color:var(--bg-secondary)] border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Explore <span className="gold">Categories</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-xl">Find the perfect program to advance your skills in high-demand fields.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="w-6 h-6" />, title: 'Artificial Intelligence' },
              { icon: <Zap className="w-6 h-6" />, title: 'Cybersecurity' },
              { icon: <Users className="w-6 h-6" />, title: 'Software Development' },
              { icon: <Globe className="w-6 h-6" />, title: 'Web Development' },
              { icon: <PlayCircle className="w-6 h-6" />, title: 'Mobile Development' },
              { icon: <Monitor className="w-6 h-6" />, title: 'Data Science' },
              { icon: <Award className="w-6 h-6" />, title: 'Cloud Computing' },
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'UI/UX Design' },
              { icon: <Lightbulb className="w-6 h-6" />, title: 'Digital Marketing' },
              { icon: <BarChart3 className="w-6 h-6" />, title: 'Business' },
              { icon: <Image className="w-6 h-6" />, title: 'Entrepreneurship' },
              { icon: <GraduationCap className="w-6 h-6" />, title: 'Leadership' },
            ].map((cat, i) => (
              <Link href={`/courses?category=${cat.title.toLowerCase().replace(/ /g, '-')}`} key={i} className="flex flex-col items-center justify-center p-8 bg-[color:var(--bg-card)] rounded-2xl border border-[color:var(--border)] hover:border-[color:var(--brand-gold)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] transition-all group cursor-pointer text-center">
                <div className="w-16 h-16 rounded-xl bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-[color:var(--text-core)]">{cat.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zeelin Academy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Why Choose <span className="gold">Zeelin Academy</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-xl">The definitive learning ecosystem for modern professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Industry Expert Instructors', desc: 'Learn directly from seasoned professionals who bring real-world experience and insights into every lesson.', icon: <BookMarked className="w-6 h-6" /> },
              { title: 'Hands-On Projects', desc: 'Build a robust portfolio with practical, real-world assignments and case studies that simulate actual workplace challenges.', icon: <Zap className="w-6 h-6" /> },
              { title: 'Professional Certifications', desc: 'Earn globally recognized certificates that validate your expertise and boost your employability across industries.', icon: <ShieldCheck className="w-6 h-6" /> },
              { title: 'Flexible Learning', desc: 'Study at your own pace with on-demand video lessons, interactive quizzes, and accessible learning materials.', icon: <PlayCircle className="w-6 h-6" /> },
              { title: 'Community Support', desc: 'Join an exclusive global network of learners and mentors. Collaborate, share ideas, and grow together.', icon: <Users className="w-6 h-6" /> },
              { title: 'Career Development', desc: 'Get dedicated support with resume building, interview preparation, and direct connections to hiring partners.', icon: <Monitor className="w-6 h-6" /> }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] card-hover group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(223,186,107,0.03)] rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
                <div className="w-14 h-14 rounded-xl bg-[rgba(223,186,107,0.1)] flex items-center justify-center mb-6 border border-[rgba(223,186,107,0.2)]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-[color:var(--text-core)]">{feature.title}</h3>
                <p className="text-secondary leading-relaxed relative z-10">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience Preview */}
      <section className="py-24 bg-[color:var(--bg-secondary)] border-y border-[color:var(--border)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-6 text-[color:var(--text-core)]">
                A World-Class <span className="gold">Learning Experience</span>
              </h2>
              <p className="text-secondary text-xl mb-8 leading-relaxed">
                Our proprietary learning dashboard provides everything you need to master your chosen field seamlessly. Track progress, watch premium video content, and submit assignments all in one place.
              </p>
              <ul className="space-y-6">
                {[
                  'High-definition video lessons with transcripts',
                  'Interactive quizzes & automated assessments',
                  'Real-time progress tracking analytics',
                  'Integrated notebook for study notes',
                  'One-click certificate downloads'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm">
                    <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center flex-shrink-0 text-black">
                      <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <span className="text-[17px] font-semibold text-[color:var(--text-core)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/dashboard/login" className="btn-gold px-10 py-4 text-lg inline-block text-center font-bold shadow-lg hover:shadow-xl transition-all">
                  Explore the Dashboard
                </Link>
              </div>
            </div>
            <div className="relative h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[color:var(--border)] group">
              <SafeImage src="/learning_experience.png" alt="Learning Experience Mockup" fill className="object-cover object-left-top transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Student <span className="gold">Success Stories</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-xl">
              Hear from our graduates who have transformed their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The Business Analysis Foundations course gave me the perfect start to my BA career. The practical case studies and stakeholder mapping exercises were exactly what I needed.", author: "Sarah M.", role: "Business Analyst", course: "Business Analysis Foundations" },
              { text: "The instructors simplified complex cybersecurity topics. I transitioned from IT support to a security analyst role seamlessly. Highly recommended!", author: "James D.", role: "Security Analyst", course: "Cybersecurity Fundamentals" },
              { text: "The comprehensive software development program gave me the edge I needed to get hired at a top tech firm. The mentorship was fantastic.", author: "Aisha T.", role: "Software Developer", course: "Full-Stack Development" }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[color:var(--bg-card)] border border-[color:var(--border)] shadow-sm relative card-hover">
                <Quote className="w-12 h-12 opacity-20" style={{ color: 'var(--brand-gold)' }} />
                <div className="flex gap-1 mb-6 gold">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary italic mb-6 relative z-10 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">Course Completed:</span>
                  <p className="text-sm font-semibold text-[color:var(--text-core)]">{testimonial.course}</p>
                </div>
                <div className="flex items-center gap-4 border-t border-[color:var(--border)] pt-6">
                  <div className="w-12 h-12 rounded-full bg-[rgba(223,186,107,0.1)] flex items-center justify-center font-bold gold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[color:var(--text-core)]">{testimonial.author}</h4>
                    <p className="text-xs text-muted mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-24 bg-[color:var(--bg-secondary)] border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Learn From <span className="gold">Elite Experts</span>
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-xl">Our faculty consists of industry leaders, innovators, and seasoned professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Franklin Kalu', role: 'Principal Consultant & Founder', exp: 'Business Strategy & IT', students: '8.5k', rating: '4.9', img: '/pic.jpg' },
              { name: 'James Wilson', role: 'Senior Cybersecurity Architect', exp: 'Network Security & Risk', students: '4.1k', rating: '4.8', img: '/instructor_1.png' },
              { name: 'Dr. Sarah Chen', role: 'Lead Data Scientist', exp: 'AI & Machine Learning', students: '5.2k', rating: '5.0', img: '/instructor_2.png' }
            ].map((inst, i) => (
              <div key={i} className="bg-[color:var(--bg-card)] rounded-2xl border border-[color:var(--border)] overflow-hidden card-hover text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[color:var(--bg-primary)] shadow-xl mb-6 relative">
                  <div className="absolute inset-0 border-4 border-[color:var(--brand-gold)] rounded-full z-10 pointer-events-none"></div>
                  <SafeImage src={inst.img} alt={inst.name} fill className="object-cover" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-[color:var(--text-core)]">{inst.name}</h3>
                <p className="text-sm font-semibold gold mb-4 uppercase tracking-wide">{inst.role}</p>
                <p className="text-secondary mb-6 line-clamp-2">Expertise: {inst.exp}</p>
                <div className="flex justify-center gap-6 pt-6 border-t border-[color:var(--border)]">
                  <div className="text-center">
                    <span className="block font-bold text-xl text-[color:var(--text-core)]">{inst.students}</span>
                    <span className="text-xs text-muted uppercase">Students</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-xl text-[color:var(--text-core)] flex items-center gap-1 justify-center">
                      {inst.rating} <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </span>
                    <span className="text-xs text-muted uppercase">Rating</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[450px] w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-white dark:border-[#242830]">
              <SafeImage src="/certificate_preview.png" alt="Official Zeelin Academy Certificate" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-6 text-[color:var(--text-core)]">
                Earn Globally Recognized <span className="gold">Certifications</span>
              </h2>
              <p className="text-secondary text-xl mb-8 leading-relaxed">
                Validate your expertise with premium, verifiable certificates upon course completion. Our credentials are trusted by top employers worldwide.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Unique verification ID for employers',
                  'Downloadable high-res PDF format',
                  'Direct sharing to LinkedIn profile',
                  'Blockchain-backed digital credential'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6" style={{ color: 'var(--brand-gold)' }} />
                    <span className="text-lg font-medium text-[color:var(--text-core)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[color:var(--bg-secondary)] border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Transparent <span className="gold">Pricing</span>
            </h2>
            <p className="text-secondary text-xl max-w-2xl mx-auto">
              Invest in your future with our flexible pricing plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] flex flex-col card-hover">
              <h3 className="font-display text-2xl font-bold mb-2 text-[color:var(--text-core)]">Starter</h3>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-[color:var(--text-core)]">£79</span>
                <span className="text-muted text-sm ml-2">/ module</span>
              </div>
              <p className="text-sm text-muted mb-8">Perfect for focused skill building.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Single course access', 'Standard video quality', 'Basic community access', 'Module certification'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/courses" className="btn-outline-gold w-full text-center py-4 text-sm font-bold uppercase tracking-wider">Explore Modules</Link>
            </div>

            {/* Premium */}
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--premium-border)] flex flex-col relative transform md:-translate-y-4 shadow-[0_20px_40px_rgba(212,175,55,0.15)] z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full gold-bg text-sm font-bold uppercase tracking-wider text-black shadow-md">Recommended</div>
              <h3 className="font-display text-2xl font-bold mb-2 text-[color:var(--brand-gold)]">Premium</h3>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-[color:var(--text-core)]">£499</span>
                <span className="text-muted text-sm ml-2">lifetime</span>
              </div>
              <p className="text-sm text-muted mb-8">The ultimate career acceleration package.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full access to all courses', '1-on-1 Expert Mentorship', 'Exclusive Live Workshops', 'Priority Career Guidance', 'Resume & Interview Prep', 'Blockchain Verified Certs'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium">
                    <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    <span className="text-[color:var(--text-core)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/enroll?plan=premium" className="btn-gold btn-blink w-full text-center py-4 text-sm font-bold uppercase tracking-wider">Get Premium</Link>
            </div>

            {/* Professional */}
            <div className="p-8 rounded-2xl border bg-[color:var(--bg-card)] border-[color:var(--border)] flex flex-col card-hover">
              <h3 className="font-display text-2xl font-bold mb-2 text-[color:var(--text-core)]">Professional</h3>
              <div className="mb-6">
                <span className="font-display text-5xl font-bold text-[color:var(--text-core)]">£297</span>
                <span className="text-muted text-sm ml-2">lifetime</span>
              </div>
              <p className="text-sm text-muted mb-8">Comprehensive access for dedicated learners.</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Full access to all courses', 'High-res video downloads', 'Premium community access', 'All certifications included', 'Standard email support'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5" style={{ color: 'var(--brand-gold)' }} />
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/enroll?plan=professional" className="btn-outline-gold w-full text-center py-4 text-sm font-bold uppercase tracking-wider">Enroll Pro</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-4xl lg:text-[44px] font-bold mb-4 text-[color:var(--text-core)]">
              Frequently Asked <span className="gold">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long do I have access to the courses?", a: "If you purchase the Professional or Premium plan, you get lifetime access. Single modules also grant lifetime access to that specific content." },
              { q: "Are the certifications recognized?", a: "Yes, our certificates are globally recognized and come with a unique verification ID that employers can check." },
              { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee if you are not satisfied with the course content." },
              { q: "How does the mentorship work?", a: "Premium members get access to a dedicated calendar to book 1-on-1 sessions with industry experts for career advice and project reviews." }
            ].map((faq, i) => (
              <details key={i} className="group bg-[color:var(--bg-card)] rounded-xl border border-[color:var(--border)] [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all hover:border-[color:var(--brand-gold)]">
                <summary className="flex items-center justify-between gap-1.5 p-6 text-[color:var(--text-core)] font-semibold text-lg outline-none">
                  {faq.q}
                  <span className="relative size-5 shrink-0 gold">
                    <Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" />
                    <Minus className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-[color:var(--border)] pt-4 mt-2">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow-blue pointer-events-none opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[color:var(--bg-card)] border border-[color:var(--brand-gold)] rounded-3xl p-10 md:p-16 text-center shadow-[0_20px_60px_rgba(212,175,55,0.1)]">
            <h2 className="font-display text-4xl font-bold mb-4 text-[color:var(--text-core)]">Join Our Newsletter</h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto">Subscribe to get weekly insights on Tech, Business, exclusive course discounts, and free resources.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); const email = fd.get('email'); if (!email) return; try { await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }); alert('Subscribed successfully!'); e.currentTarget.reset(); } catch { alert('Subscription failed. Please try again.'); } }}>
              <input type="email" name="email" placeholder="Enter your email address" required className="flex-grow px-6 py-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-primary)] text-[color:var(--text-core)] outline-none focus:border-[color:var(--brand-gold)] focus:ring-2 focus:ring-[rgba(212,175,55,0.2)] transition-all" />
              <button type="submit" className="btn-gold px-8 py-4 rounded-xl font-bold text-black uppercase tracking-wider whitespace-nowrap">Subscribe</button>
            </form>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted">
              <span className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> No spam</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" style={{ color: 'var(--brand-gold)' }} /> Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}