import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, BookOpenCheck, FolderKanban, SearchCheck, ShieldCheck, UsersRound } from 'lucide-react'
import { getPackage, jobReadinessPackages } from '@/lib/jobReadinessData'
import { siteUrl } from '@/lib/site'

export function generateStaticParams() {
  return jobReadinessPackages.map((pkg) => ({ slug: pkg.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pkg = getPackage(params.slug)
  if (!pkg) return {}
  const description = pkg.description + ' Includes a shared foundation, role differentiators, one practical project, mentorship, assessment and job acquisition.'
  return {
    title: pkg.name,
    description,
    alternates: { canonical: '/packages/' + pkg.slug },
    openGraph: {
      type: 'website',
      url: siteUrl + '/packages/' + pkg.slug,
      title: pkg.name,
      description,
      images: [{ url: pkg.image, width: 1200, height: 630, alt: pkg.name }],
    },
    twitter: { card: 'summary_large_image', title: pkg.name, description, images: [pkg.image] },
  }
}

export default function PackageDetail({ params }: { params: { slug: string } }) {
  const pkg = getPackage(params.slug)
  if (!pkg) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: pkg.name,
    description: pkg.description,
    provider: { '@type': 'EducationalOrganization', name: 'Zeelin Academy', sameAs: siteUrl },
    educationalLevel: 'Career development',
    teaches: pkg.roles,
    url: siteUrl + '/packages/' + pkg.slug,
  }

  return (
    <div className="jr-site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="jr-detail-hero">
        <div>
          <span>JOB READINESS PACKAGE</span>
          <h1>{pkg.name}</h1>
          <p>{pkg.description}</p>
          <div className="jr-package-summary-line">
            {pkg.roles.length} target roles · one connected training course · one substantial work-experience project · job acquisition access
          </div>
          <div className="jr-hero-actions">
            <Link href={'/enroll?package=' + pkg.slug} className="jr-btn-primary">Choose this package <ArrowRight size={16}/></Link>
            <Link href="/pathway-finder" className="jr-btn-light">Compare my fit</Link>
          </div>
        </div>
        <img src={pkg.image} alt={pkg.name} />
      </section>

      <section className="jr-section jr-detail-grid">
        <div>
          <div className="jr-section-heading left">
            <span>CAREER COVERAGE</span>
            <h2>Jobs this package prepares you to work toward.</h2>
            <p>The curriculum is organised around the shared foundation across these roles, then role-specific differentiators.</p>
          </div>
          <div className="jr-role-list">{pkg.roles.map((role, i) => <div key={role}><span>{String(i + 1).padStart(2, '0')}</span><b>{role}</b></div>)}</div>
        </div>
        <aside className="jr-detail-aside">
          <div><BookOpenCheck/><b>Training</b><span>Foundation + differentiator modules</span></div>
          <div><FolderKanban/><b>Experience</b><span>{pkg.project}</span></div>
          <div><UsersRound/><b>Mentorship</b><span>Review, accountability and feedback</span></div>
          <div><ShieldCheck/><b>Assessment</b><span>Evidence and readiness evaluation</span></div>
          <div><SearchCheck/><b>Acquisition</b><span>Job boards, applications and tracking</span></div>
        </aside>
      </section>

      <section className="jr-foundation">
        <div className="jr-section-heading left">
          <span>SHARED FOUNDATION</span>
          <h2>What every learner in this package completes.</h2>
          <p>These are the common foundations. Specialist modules then deepen the skills that differentiate specific roles.</p>
        </div>
        <div className="jr-foundation-grid">{pkg.foundationModules.map((mod, i) => <article key={mod}><span>0{i + 1}</span><h3>{mod}</h3></article>)}</div>
      </section>

      <section className="jr-differentiator">
        <div><span>ROLE DIFFERENTIATORS</span><h2>{pkg.differentiatorLabel}</h2><p>After the shared foundation, learners follow the modules most relevant to the role direction they want to pursue inside this package.</p></div>
        <Link href={'/enroll?package=' + pkg.slug} className="jr-btn-primary">Start this pathway <ArrowRight size={16}/></Link>
      </section>
    </div>
  )
}
