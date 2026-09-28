import type { Metadata } from 'next'
import PackageCatalog from '@/components/PackageCatalog'

export const metadata: Metadata = {
  title: 'Job Readiness Packages | Zeelin Academy',
  description: 'Explore seven all-in-one job readiness packages. Each package combines training, work experience, mentorship, assessment and job acquisition.',
}

export default function PackagesPage() {
  return (
    <div className="jr-site">
      <section className="jr-subhero">
        <span>JOB READINESS PACKAGES</span>
        <h1>One package is one complete career pathway.</h1>
        <p>You do not buy disconnected modules. You choose a career category and receive the complete system for the job roles inside it.</p>
      </section>
      <section className="jr-section">
        <div className="jr-section-heading left">
          <span>CHOOSE YOUR CATEGORY</span>
          <h2>7 packages built around real role families.</h2>
          <p>Each package contains shared foundation learning, role differentiator modules, one work-experience project, mentorship, evaluation and job acquisition.</p>
        </div>
        <PackageCatalog />
      </section>
      <section className="jr-package-model">
        <div><b>01</b><h3>Shared foundation</h3><p>Learn the common capabilities that recur across the roles in your selected category.</p></div>
        <div><b>02</b><h3>Role differentiators</h3><p>Build the skills, tools and context that distinguish one role from another.</p></div>
        <div><b>03</b><h3>One practical project</h3><p>Create evidence through a substantial work-experience project aligned to the package.</p></div>
        <div><b>04</b><h3>Job acquisition</h3><p>Move into role-specific opportunity sourcing, applications and accountability.</p></div>
      </section>
    </div>
  )
}
