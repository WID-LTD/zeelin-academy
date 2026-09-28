import type { MetadataRoute } from 'next'
import { jobReadinessPackages } from '@/lib/jobReadinessData'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPages = [
    ['', 1, 'weekly'],
    ['/packages', .95, 'weekly'],
    ['/pathway-finder', .95, 'monthly'],
    ['/courses', .9, 'monthly'],
    ['/about', .85, 'monthly'],
    ['/resources', .8, 'weekly'],
    ['/community', .7, 'monthly'],
    ['/support', .7, 'monthly'],
    ['/help', .65, 'monthly'],
    ['/contact', .7, 'monthly'],
    ['/privacy', .3, 'yearly'],
    ['/terms', .3, 'yearly'],
    ['/sitemap', .35, 'monthly'],
  ] as const

  const pages: MetadataRoute.Sitemap = staticPages.map(([path,priority,changeFrequency]) => ({
    url: siteUrl + path,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  const packages: MetadataRoute.Sitemap = jobReadinessPackages.map(pkg => ({
    url: siteUrl + '/packages/' + pkg.slug,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: .9,
  }))

  return [...pages, ...packages]
}
