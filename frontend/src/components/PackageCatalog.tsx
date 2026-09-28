import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, BookOpenCheck, FolderKanban, SearchCheck } from 'lucide-react'
import { jobReadinessPackages } from '@/lib/jobReadinessData'

export default function PackageCatalog({ compact = false }: { compact?: boolean }) {
  const gridClass = compact ? 'jr-package-grid compact' : 'jr-package-grid'
  return (
    <div className={gridClass}>
      {jobReadinessPackages.map((pkg, index) => (
        <article key={pkg.slug} className="jr-package-card">
          <div className="jr-package-image">
            <img src={pkg.image} alt="" loading="lazy" />
            <div className="jr-package-number">{String(index + 1).padStart(2, '0')}</div>
            <span>{pkg.roles.length} job roles</span>
          </div>
          <div className="jr-package-body">
            <div className="jr-package-kicker">JOB READINESS PACKAGE</div>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <div className="jr-package-proof">
              <span><BookOpenCheck size={15} /> One course</span>
              <span><FolderKanban size={15} /> One project</span>
              <span><SearchCheck size={15} /> Job acquisition</span>
            </div>
            {!compact && (
              <div className="jr-role-preview">
                {pkg.roles.slice(0, 5).map((role) => <span key={role}>{role}</span>)}
                {pkg.roles.length > 5 && <span>+{pkg.roles.length - 5} more roles</span>}
              </div>
            )}
            <div className="jr-package-actions">
              <Link href={'/packages/' + pkg.slug} className="jr-btn-secondary">
                Explore package <ArrowRight size={16} />
              </Link>
              <Link href={'/enroll?package=' + pkg.slug} className="jr-btn-primary">
                Choose package <BriefcaseBusiness size={16} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
