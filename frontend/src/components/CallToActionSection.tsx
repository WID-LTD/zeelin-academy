'use client'

import Link from 'next/link'

export default function CallToActionSection() {
  return (
    <section style={{ backgroundColor: 'var(--navy-dark)', color: 'var(--white)', textAlign: 'center', padding: '100px 20px' }}>
      <div className="max-w-[1280px] 3xl:max-w-[2240px] mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
          Ready to start your Business Analysis<br /><span style={{ color: 'var(--primary-gold)' }}>Certification journey?</span>
        </h2>
        <p className="text-lg md:text-xl font-semibold mb-8 max-w-3xl mx-auto" style={{ opacity: 0.95 }}>
          Whether you are new to Business Analysis or preparing for your first certification, Zeelin Academy will guide you step by step.
        </p>
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/enroll" className="btn-gold px-10 py-4 text-lg font-bold">Enroll Now</Link>
          <Link
            href="/courses"
            className="btn-outline px-10 py-4 text-lg font-bold"
            style={{ borderColor: 'white', color: 'white' }}
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
