'use client'

import Link from 'next/link'
import { ChevronRight, Home, BookOpen, Package, Phone, FileText, HelpCircle, Users, ClipboardList, GraduationCap, Shield, ShoppingCart } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

interface SitemapNode {
  label: string
  href?: string
  icon?: React.ReactNode
  children?: SitemapNode[]
}

const sitemapTree: SitemapNode[] = [
  {
    label: 'Home', href: '/', icon: <Home className="w-5 h-5" />,
  },
  {
    label: 'About', href: '/about', icon: <Users className="w-5 h-5" />,
  },
  {
    label: 'Courses', href: '/courses', icon: <BookOpen className="w-5 h-5" />,
    children: [
      { label: 'Foundation Pathway', href: '/courses/foundation-pathway', icon: <ChevronRight className="w-4 h-4" /> },
      { label: 'Core Pathway', href: '/courses/core-pathway', icon: <ChevronRight className="w-4 h-4" /> },
      { label: 'Practitioner Pathway', href: '/courses/practitioner-pathway', icon: <ChevronRight className="w-4 h-4" /> },
      { label: 'Oral Examination', href: '/courses/oral-examination', icon: <ChevronRight className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Pathway Finder', href: '/pathway-finder', icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    label: 'Packages', href: '/packages', icon: <Package className="w-5 h-5" />,
  },
  {
    label: 'Resources', href: '/resources', icon: <FileText className="w-5 h-5" />,
  },
  {
    label: 'Enroll', href: '/enroll', icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    label: 'Contact', href: '/contact', icon: <Phone className="w-5 h-5" />,
  },
  {
    label: 'Community', href: '/community', icon: <Users className="w-5 h-5" />,
  },
  {
    label: 'Support', href: '/support', icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    label: 'Help / FAQ', href: '/help', icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    label: 'Checkout', icon: <ShoppingCart className="w-5 h-5" />,
    children: [
      { label: 'Success', href: '/checkout/success', icon: <ChevronRight className="w-4 h-4" /> },
      { label: 'Cancel', href: '/checkout/cancel', icon: <ChevronRight className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Legal', icon: <Shield className="w-5 h-5" />,
    children: [
      { label: 'Terms & Conditions', href: '/terms', icon: <ChevronRight className="w-4 h-4" /> },
      { label: 'Privacy Policy', href: '/privacy', icon: <ChevronRight className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Sitemap', href: '/sitemap', icon: <ClipboardList className="w-5 h-5" />,
  },
]

function SitemapNodeComponent({ node, depth = 0 }: { node: SitemapNode; depth?: number }) {
  return (
    <AnimatedSection delay={depth * 50}>
      <div className="mb-4">
        <div className="flex items-center gap-3">
          {node.icon && <span style={{ color: 'var(--brand-gold)' }}>{node.icon}</span>}
          {node.href ? (
            <Link href={node.href}
              className="font-semibold hover:underline transition-all"
              style={{ color: depth === 0 ? 'var(--text-core)' : 'var(--text-secondary)', fontSize: depth === 0 ? '1.125rem' : '1rem' }}>
              {node.label}
            </Link>
          ) : (
            <span className="font-semibold" style={{ color: 'var(--text-core)' }}>{node.label}</span>
          )}
        </div>
        {node.children && (
          <div className="ml-8 mt-2 space-y-2">
            {node.children.map((child, i) => (
              <SitemapNodeComponent key={i} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen py-32 relative">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ color: 'var(--text-core)' }}>
              Visual <span style={{ color: 'var(--brand-gold)' }}>Sitemap</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Explore all pages available on Zeelin Academy.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 lg:p-12 rounded-2xl shadow-lg" style={{ backgroundColor: 'var(--bg-card)' }}>
            {sitemapTree.map((node, i) => (
              <SitemapNodeComponent key={i} node={node} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              XML sitemap also available at{' '}
              <a href="http://localhost:3030/api/sitemap/sitemap.xml" className="underline hover:no-underline" style={{ color: 'var(--brand-gold)' }}>
                /api/sitemap/sitemap.xml
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
