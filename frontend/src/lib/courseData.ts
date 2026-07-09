export interface CourseData {
  id: string
  title: string
  for: string
  duration: string
  learn: string[]
  includes: string[]
  outcome: string
  media: string
  isVideo: boolean
}

export interface CategoryData {
  letter: string
  name: string
  tagline: string
  description: string
  slug: string
  courses: CourseData[]
}

const foundationLearn = [
  'Understand the role and responsibilities of a Business Analyst',
  'Apply key BA techniques and frameworks in real scenarios',
  'Build confidence in stakeholder management and elicitation',
  'Prepare effectively for professional certification exams',
]

const coreLearn = [
  'Master requirements elicitation, analysis, and documentation',
  'Apply BA techniques in real-world business contexts',
  'Manage the full requirements lifecycle with confidence',
  'Bridge the gap between business needs and technical solutions',
]

const practitionerLearn = [
  'Model business processes using industry-standard techniques',
  'Design and evaluate effective business solutions',
  'Manage benefits realisation and business acceptance',
  'Apply systems thinking to complex business problems',
]

const includes = [
  'Video lessons',
  'Reading guide',
  'Mock quiz',
  'Visual summaries',
  'Study plan',
  'Live Trainer',
  'Support',
]

export const categories: CategoryData[] = [
  {
    letter: 'A',
    name: 'Foundation Pathway',
    tagline: 'For people who are completely new',
    description: 'A structured 6-week programme designed to help busy learners prepare for the Foundation exam using micro-learning, visual explanations, quizzes, and guided support.',
    slug: 'foundation-pathway',
    courses: [
      {
        id: 'foundation-cert',
        title: 'Foundation Certificate in Business Analysis',
        for: 'Beginners, career changers, and busy professionals',
        duration: '6 weeks',
        learn: foundationLearn,
        includes,
        outcome: 'Build confidence and prepare for the Foundation exam',
        media: '/activities/Bussiness-foudation.mp4',
        isVideo: true,
      },
      {
        id: 'business-change',
        title: 'Business Change Certificate',
        for: 'Aspiring change analysts and business professionals',
        duration: '6 weeks',
        learn: foundationLearn,
        includes,
        outcome: 'Understand business change principles and prepare for certification',
        media: '/activities/Elicitation-Collaboration.mp4',
        isVideo: true,
      },
      {
        id: 'is-project-mgmt',
        title: 'IS Project Management Certificate',
        for: 'Project coordinators, new project managers, and BAs',
        duration: '6 weeks',
        learn: foundationLearn,
        includes,
        outcome: 'Build IS project management foundations and gain certification readiness',
        media: '/business_analysis_course.png',
        isVideo: false,
      },
      {
        id: 'org-behaviour',
        title: 'Organisational Behaviour Certificate',
        for: 'People-focused professionals and team leads',
        duration: '6 weeks',
        learn: foundationLearn,
        includes,
        outcome: 'Understand organisational behaviour concepts and their impact on business analysis',
        media: '/business_analysis_course.png',
        isVideo: false,
      },
    ],
  },
  {
    letter: 'B',
    name: 'Core Pathway',
    tagline: 'For people preparing for exams',
    description: 'A structured 6-week programme designed to help busy learners prepare for professional exams using micro-learning, visual explanations, quizzes, and guided support.',
    slug: 'core-pathway',
    courses: [
      {
        id: 'ba-practice',
        title: 'Business Analysis Practice',
        for: 'Aspiring BAs, junior analysts, and career changers',
        duration: '6 weeks',
        learn: coreLearn,
        includes,
        outcome: 'Apply BA techniques in real scenarios and prepare for certification',
        media: '/activities/Requirements-Analysis-Design.mp4',
        isVideo: true,
      },
      {
        id: 'requirements-engineering',
        title: 'Requirements Engineering',
        for: 'BAs, project teams, and systems analysts',
        duration: '6 weeks',
        learn: coreLearn,
        includes,
        outcome: 'Master the requirements lifecycle and deliver clear, traceable requirements',
        media: '/activities/Requirements-Life-Cycle-Management.mp4',
        isVideo: true,
      },
    ],
  },
  {
    letter: 'C',
    name: 'Practitioner Pathway',
    tagline: 'For learners who want to move beyond Foundation',
    description: 'Advanced courses designed for learners who have completed Foundation-level study and want to deepen their expertise.',
    slug: 'practitioner-pathway',
    courses: [
      {
        id: 'modelling-business-processes',
        title: 'Modelling Business Processes',
        for: 'Process analysts, BAs, and improvement specialists',
        duration: '6 weeks',
        learn: practitionerLearn,
        includes,
        outcome: 'Model and improve business processes using industry-standard techniques',
        media: '/activities/Strategy-Analysis.mp4',
        isVideo: true,
      },
      {
        id: 'systems-modelling-techniques',
        title: 'Systems Modelling Techniques',
        for: 'Technical BAs and systems analysts',
        duration: '6 weeks',
        learn: practitionerLearn,
        includes,
        outcome: 'Model system requirements effectively using UML and other techniques',
        media: '/software_development_course.png',
        isVideo: false,
      },
      {
        id: 'systems-development-essentials',
        title: 'Systems Development Essentials',
        for: 'IT-focused BAs and delivery team members',
        duration: '6 weeks',
        learn: practitionerLearn,
        includes,
        outcome: 'Understand the systems development lifecycle and your role within it',
        media: '/software_development_course.png',
        isVideo: false,
      },
      {
        id: 'data-management-essentials',
        title: 'Data Management Essentials',
        for: 'Data-aware BAs and information managers',
        duration: '6 weeks',
        learn: practitionerLearn,
        includes,
        outcome: 'Manage and govern business data effectively within BA projects',
        media: '/data_driven_decision.png',
        isVideo: false,
      },
      {
        id: 'benefits-management',
        title: 'Benefits Management and Business Acceptance',
        for: 'Change and benefits analysts',
        duration: '6 weeks',
        learn: practitionerLearn,
        includes,
        outcome: 'Manage benefits realisation and business acceptance throughout the project lifecycle',
        media: '/activities/Solution-Evaluation.mp4',
        isVideo: true,
      },
    ],
  },
  {
    letter: 'D',
    name: 'Oral Examination',
    tagline: 'For candidates preparing for their oral exam',
    description: 'Focused preparation programme to help you pass your Oral Examination with confidence.',
    slug: 'oral-examination',
    courses: [
      {
        id: 'oral-exam-prep',
        title: 'Oral Exam Preparation',
        for: 'Candidates preparing for the Oral Examination',
        duration: '4 weeks',
        learn: [
          'Understand the oral exam structure and expectations',
          'Practice answering typical oral exam questions',
          'Build confidence in articulating BA knowledge verbally',
          'Receive feedback and guidance from experienced trainers',
        ],
        includes,
        outcome: 'Prepare effectively and pass your Oral Examination',
        media: '/business_analysis_course.png',
        isVideo: false,
      },
    ],
  },
]
