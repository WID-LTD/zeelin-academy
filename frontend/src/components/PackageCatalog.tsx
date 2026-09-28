import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { jobReadinessPackages } from '@/lib/jobReadinessData'

export default function PackageCatalog({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'zr-package-grid compact' : 'zr-package-grid'}>
      {jobReadinessPackages.map((pkg,index)=>(
        <article className="zr-package-card" key={pkg.slug}>
          <Link href={'/packages/'+pkg.slug} className="zr-package-photo" aria-label={'Explore '+pkg.name}>
            <img src={pkg.image} alt="" loading="lazy"/>
            <span className="zr-package-index">{String(index+1).padStart(2,'0')}</span>
          </Link>
          <div className="zr-package-content">
            <div className="zr-package-meta">{pkg.roles.length} JOB ROLES · COMPLETE JOB-READINESS PATHWAY</div>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            {!compact && <div className="zr-package-roleline">{pkg.roles.slice(0,4).join(' · ')}{pkg.roles.length>4?' · +'+(pkg.roles.length-4)+' more':''}</div>}
            <div className="zr-package-links">
              <Link href={'/packages/'+pkg.slug}>Explore package <ArrowRight size={15}/></Link>
              <Link href={'/enroll?package='+pkg.slug}>Choose package</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
