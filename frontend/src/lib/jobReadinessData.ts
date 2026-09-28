export type JobReadinessPackage = {
  slug: string
  name: string
  shortName: string
  description: string
  image: string
  roles: string[]
  foundationModules: string[]
  differentiatorLabel: string
  project: string
  accent: string
}

export const stockImages = {
  hero: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85',
  training: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85',
  project: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
  mentor: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85',
  acquisition: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85',
  resources: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85',
  support: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85',
  about: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
}

const sharedFoundation = [
  'Business & role foundations',
  'Stakeholder communication and collaboration',
  'Requirements and problem definition',
  'Process and workflow analysis',
  'Data and evidence literacy',
  'Agile delivery and professional ways of working',
  'Documentation, tools and portfolio evidence',
]

export const jobReadinessPackages: JobReadinessPackage[] = [
  {
    slug: 'core-classic-business-analysis',
    name: 'Core / Classic Business Analysis Package',
    shortName: 'Core / Classic BA',
    description: 'The broad Business Analysis package for roles centred on requirements, processes, operations, enterprise change and consulting.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85',
    roles: [
      'Business Analyst','Business Systems Analyst','Systems Analyst','Functional Analyst / Functional Consultant',
      'Requirements Analyst / Requirements Engineer','Process Analyst / Business Process Analyst','Business Process Improvement Analyst',
      'Operations Analyst','Management Analyst','Enterprise Analyst','Solutions Analyst','Business Consultant / Management Consultant',
    ],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Role-specific differentiator modules for each of the 12 career paths',
    project: 'End-to-end stakeholder, requirements, process and solution analysis project',
    accent: '#D4A02A',
  },
  {
    slug: 'technical-business-analysis',
    name: 'Technical Business Analysis Package',
    shortName: 'Technical BA',
    description: 'For analysts working between business needs, systems, integrations, platforms, enterprise applications and technical delivery teams.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    roles: [
      'Technical Business Analyst','IT Business Analyst','Systems Business Analyst','Integration Analyst / API Analyst',
      'ERP Analyst','CRM Analyst / Salesforce Business Analyst','Application Analyst','Platform Analyst',
      'Solution Architect — BA-adjacent senior track','Automation Analyst / RPA Business Analyst / Intelligent Automation Analyst',
    ],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Technical differentiator modules built around systems, integrations, platforms and automation',
    project: 'Technical systems and integration analysis project',
    accent: '#3568C8',
  },
  {
    slug: 'product-agile',
    name: 'Product & Agile Package',
    shortName: 'Product & Agile',
    description: 'For product-facing roles that connect customer needs, delivery priorities, features, Agile teams and measurable product outcomes.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
    roles: ['Product Analyst','Product Owner','Associate Product Manager / Product Manager','Digital Product Analyst','Business Analyst — Agile / Agile BA','Scrum Product Owner','Feature Analyst'],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Product and Agile differentiator modules for discovery, prioritisation, delivery and product ownership',
    project: 'Digital product discovery, backlog and delivery project',
    accent: '#0F8F73',
  },
  {
    slug: 'data-business-intelligence',
    name: 'Data & Business Intelligence Package',
    shortName: 'Data & BI',
    description: 'For data-led roles focused on reporting, analytics, business intelligence, governance, insights and decision support.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    roles: ['Data Analyst','Data Business Analyst','Business Intelligence Analyst / BI Developer','Reporting Analyst','Analytics Consultant','Insights Analyst','Decision Support Analyst','Data Governance Analyst','Master Data Analyst'],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Data differentiator modules for analytics, reporting, BI, governance and insight generation',
    project: 'Business intelligence, reporting and decision-support project',
    accent: '#4D6FD7',
  },
  {
    slug: 'ai-era-business-analysis',
    name: 'AI-Era Business Analysis Package',
    shortName: 'AI-Era BA',
    description: 'For emerging analysis roles where business change, automation, AI products, workflow design and responsible AI meet.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85',
    roles: ['AI Business Analyst','Automation Analyst / RPA Business Analyst','Intelligent Automation Analyst','AI Solutions Analyst','AI Product Analyst','Conversational AI Analyst / Chatbot Analyst','Prompt / AI Workflow Analyst','AI Governance / Responsible AI Analyst'],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'AI differentiator modules spanning workflows, governance, automation and AI-enabled solution analysis',
    project: 'AI-enabled process and workflow transformation project',
    accent: '#7A58C6',
  },
  {
    slug: 'customer-journey',
    name: 'Customer & Journey Package',
    shortName: 'Customer & Journey',
    description: 'For roles focused on customer experience, customer journeys, service delivery, insights, success and relationship management.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    roles: ['Customer Experience (CX) Analyst','Customer Journey Analyst','Customer Insights Analyst','Customer Success Manager / Analyst','Client Relationship Manager','Service Delivery Analyst','Voice of Customer (VoC) Analyst','Customer Operations Analyst'],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Customer differentiator modules for journey mapping, insight, service delivery and experience improvement',
    project: 'Customer journey and service improvement project',
    accent: '#B56E2E',
  },
  {
    slug: 'industry-specific-analysis',
    name: 'Industry-Specific Analysis Package',
    shortName: 'Industry-Specific',
    description: 'For analysts targeting sector-specific titles across finance, healthcare, insurance, telecoms, retail, government, HR and marketing.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
    roles: [
      'Credit Risk Analyst','Regulatory Reporting Analyst','Treasury Analyst','Payments Business Analyst','Core Banking Analyst','AML / Compliance Analyst',
      'Clinical Systems Analyst','Healthcare Business Analyst','EHR / Epic Analyst','Revenue Cycle Analyst','Underwriting Analyst','Claims Business Analyst',
      'OSS / BSS Analyst','Billing Systems Analyst','Merchandising Analyst','Supply Chain Analyst','Category Analyst','Program Analyst','Policy Analyst',
      'Acquisition Analyst','HRIS Analyst','People Analytics Analyst','Marketing Analyst','Growth Analyst','Campaign Analyst',
    ],
    foundationModules: sharedFoundation,
    differentiatorLabel: 'Sector-specific differentiator modules built around the tools, processes and regulations of the target industry',
    project: 'Industry-context project aligned to the learner’s selected sector',
    accent: '#137C6B',
  },
]

export const readinessJourney = [
  { step: '01', title: 'Train', text: 'Complete the shared foundation and the differentiator modules for your target role.' },
  { step: '02', title: 'Practise', text: 'Use daily activities, guided tasks, tools and accountability to turn knowledge into working skill.' },
  { step: '03', title: 'Build Experience', text: 'Complete one substantial work-experience project for your package and create portfolio evidence.' },
  { step: '04', title: 'Get Reviewed', text: 'Use mentorship, evaluation logs and readiness assessments to improve the quality of your work.' },
  { step: '05', title: 'Acquire Jobs', text: 'Move into the Job Acquisition Portal with role-specific boards, applications, accountability and support.' },
]

export function getPackage(slug: string) {
  return jobReadinessPackages.find((pkg) => pkg.slug === slug)
}
