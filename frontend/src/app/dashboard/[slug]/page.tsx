import React from 'react'
import Link from 'next/link'

export default function DashboardFeaturePage({ params }: { params: { slug: string } }) {
  const featureName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="w-20 h-20 bg-[rgba(212,175,55,0.1)] rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-[color:var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold font-display text-[color:var(--text-core)] mb-4">
        {featureName}
      </h1>
      <p className="text-[color:var(--text-secondary)] max-w-md mx-auto mb-8">
        This feature is currently under development. Check back soon for updates as we continue to improve your learning experience.
      </p>
      <Link 
        href="/dashboard"
        className="px-6 py-2 bg-[color:var(--brand-gold)] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
      >
        Return to Overview
      </Link>
    </div>
  )
}
