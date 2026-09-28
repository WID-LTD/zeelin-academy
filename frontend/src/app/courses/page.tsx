import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, Layers3, Route } from 'lucide-react'
import PackageCatalog from '@/components/PackageCatalog'

export const metadata: Metadata = {
  title: 'Curriculum & Packages | Zeelin Academy',
  description: 'Zeelin courses are complete job-readiness packages: shared foundation modules, role differentiators, one project and job acquisition.',
}

export default function CoursesPage() {
  return (
    <div className="jr-site">
      <section className="jr-subhero">
        <span>CURRICULUM MODEL</span>
        <h1>The course is the package. The package is the course.</h1>
        <p>Every Zeelin package is designed around a career category, not a single exam or isolated module.</p>
      </section>
      <section className="jr-section">
        <div className="jr-curriculum-explain">
          <article><BookOpenCheck/><h3>Foundation modules</h3><p>The common capabilities shared across the job roles in that category.</p></article>
          <article><Layers3/><h3>Differentiator modules</h3><p>Role-specific modules based on what separates one job title from another.</p></article>
          <article><Route/><h3>Full readiness pathway</h3><p>Training continues into project experience, evaluation and job acquisition.</p></article>
        </div>
        <div className="jr-section-heading left">
          <span>THE 7 PACKAGES</span><h2>Choose a category, then build toward the roles inside it.</h2>
        </div>
        <PackageCatalog compact />
        <div className="jr-centered-action"><Link href="/pathway-finder" className="jr-btn-primary">Not sure? Use Pathway Finder <ArrowRight size={16}/></Link></div>
      </section>
    </div>
  )
}
