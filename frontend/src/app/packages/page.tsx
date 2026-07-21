import type { Metadata } from 'next'
import PackagesPageContent from '@/components/PackagesPageContent'

export const metadata: Metadata = {
  title: 'Packages | Zeelin Academy',
  description: 'Explore Zeelin Academy\'s course packages: Module-by-Module Exam Prep, Complete Diploma Bundle, and Fast-Track Diploma. Choose your path to professional certification.',
}

export default function PackagesPage() {
  return <PackagesPageContent />
}
