export interface BookGuide {
  title: string
  subtitle: string
  chapters: {
    title: string
    concepts: string[]
    examTips?: string[]
  }[]
}

const bookGuides: Record<string, BookGuide> = {
  foundation: {
    title: 'Foundation in Business Analysis',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Introduction to Business Analysis',
        concepts: [
          'Definition and purpose of Business Analysis',
          'The role of the Business Analyst in organisations',
          'Business Analysis competencies and skills framework',
          'Career paths and professional development in BA',
        ],
        examTips: ['Focus on understanding the BA role boundaries', 'Know the difference between BA and project management'],
      },
      {
        title: 'The Core Concept Model',
        concepts: [
          'Six core concepts: Change, Need, Solution, Stakeholder, Value, Context',
          'How the core concepts relate to each other',
          'Applying the Core Concept Model to real scenarios',
          'Understanding value creation through business change',
        ],
        examTips: ['Memorise all six core concepts and their definitions', 'Practice applying the model to case studies'],
      },
      {
        title: 'Stakeholder Identification and Management',
        concepts: [
          'Stakeholder identification techniques',
          'Stakeholder mapping and classification',
          'Power/Interest grid analysis',
          'RACI matrix for role assignment',
        ],
        examTips: ['Know at least 3 stakeholder identification techniques', 'Understand how to tailor communication to each stakeholder type'],
      },
      {
        title: 'Business Analysis Planning',
        concepts: [
          'Planning the BA approach',
          'Governance frameworks and structures',
          'BA metrics and performance measurement',
          'Estimation techniques for BA work',
        ],
        examTips: ['Understand when to use different planning approaches', 'Know key governance principles'],
      },
      {
        title: 'Requirements Lifecycle Management',
        concepts: [
          'Types of requirements: business, stakeholder, solution, transition',
          'Requirements traceability and coverage',
          'Prioritisation frameworks (MoSCoW, Kano, Triage)',
          'Requirements approval and sign-off processes',
        ],
        examTips: ['Distinguish between requirement types clearly', 'Know the MoSCoW prioritisation rules'],
      },
      {
        title: 'Industry Standards and Best Practices',
        concepts: [
          'Professional body standards and frameworks',
          'Ethical considerations in business analysis',
          'Quality management in BA deliverables',
          'Continuous improvement and lessons learned',
        ],
        examTips: ['Study the ethical guidelines thoroughly', 'Understand quality assurance vs quality control'],
      },
    ],
  },
  business_change: {
    title: 'Business Change',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Introduction to Business Change',
        concepts: [
          'What is business change and why it matters',
          'The business change lifecycle',
          'Types of organisational change',
          'Benefits of structured change management',
        ],
      },
      {
        title: 'Identifying Change Opportunities',
        concepts: [
          'Current state assessment techniques',
          'Gap analysis methodology',
          'Business case development for change',
          'Cost-benefit analysis and ROI calculation',
        ],
      },
      {
        title: 'Designing the Future State',
        concepts: [
          'Future state vision and roadmap creation',
          'Solution design principles',
          'Impact assessment across the organisation',
          'Resource planning for change implementation',
        ],
      },
      {
        title: 'Implementing Change',
        concepts: [
          'Change management frameworks',
          'Stakeholder engagement during change',
          'Communication planning and execution',
          'Training and development for change readiness',
        ],
      },
      {
        title: 'Evaluating Change Outcomes',
        concepts: [
          'Benefits realisation and tracking',
          'Post-implementation review',
          'Measuring change effectiveness',
          'Lessons learned and continuous improvement',
        ],
      },
    ],
  },
  is_project_mgmt: {
    title: 'IS Project Management',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Project Management Fundamentals',
        concepts: [
          'Project lifecycle phases and gates',
          'Project initiation and scoping',
          'Work breakdown structures',
          'Critical path analysis and scheduling',
        ],
      },
      {
        title: 'Risk Management',
        concepts: [
          'Risk identification and assessment',
          'Risk response strategies',
          'Risk monitoring and control',
          'Issue management and escalation',
        ],
      },
      {
        title: 'Resource and Budget Management',
        concepts: [
          'Resource allocation and levelling',
          'Budget tracking and cost control',
          'Earned value analysis',
          'Procurement and vendor management',
        ],
      },
      {
        title: 'Quality and Delivery',
        concepts: [
          'Quality planning and assurance',
          'Change control processes',
          'Progress reporting and dashboards',
          'Project closure and handover',
        ],
      },
      {
        title: 'Agile and Hybrid Approaches',
        concepts: [
          'Agile project management principles',
          'Scrum and Kanban for IS projects',
          'Hybrid project delivery models',
          'Managing distributed project teams',
        ],
      },
    ],
  },
  org_behaviour: {
    title: 'Organisational Behaviour',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Organisational Structure and Culture',
        concepts: [
          'Types of organisational structures',
          'Organisational culture models',
          'How structure affects business analysis',
          'Power dynamics and politics in organisations',
        ],
      },
      {
        title: 'Team Dynamics and Group Behaviour',
        concepts: [
          'Team development stages (Tuckman)',
          'Group decision-making processes',
          'Conflict management and resolution',
          'Cross-functional collaboration',
        ],
      },
      {
        title: 'Leadership and Motivation',
        concepts: [
          'Leadership styles and their impact',
          'Motivation theories (Maslow, Herzberg, McGregor)',
          'Emotional intelligence in leadership',
          'Influence and persuasion techniques',
        ],
      },
      {
        title: 'Change Behaviour and Resistance',
        concepts: [
          'Why people resist change',
          'Models for understanding change resistance',
          'Strategies for overcoming resistance',
          'Building a change-ready culture',
        ],
      },
    ],
  },
  ba_practice: {
    title: 'Business Analysis Practice',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Strategic Analysis',
        concepts: [
          'PESTLE analysis for environmental scanning',
          'SWOT analysis and its applications',
          'Porter\'s Five Forces for industry analysis',
          'Value chain analysis',
        ],
      },
      {
        title: 'Business Process Improvement',
        concepts: [
          'Process mapping and documentation',
          'BPMN notation and standards',
          'Lean and Six Sigma principles',
          'Business process re-engineering',
        ],
      },
      {
        title: 'Business Case Development',
        concepts: [
          'Structure and content of a business case',
          'Feasibility assessment techniques',
          'Cost-benefit analysis methods',
          'Investment appraisal techniques (NPV, IRR, Payback)',
        ],
      },
      {
        title: 'Stakeholder Management in Practice',
        concepts: [
          'Stakeholder analysis and engagement planning',
          'Requirements elicitation workshops',
          'Facilitation techniques for BA practice',
          'Managing competing stakeholder interests',
        ],
      },
      {
        title: 'Solution Evaluation',
        concepts: [
          'Defining success criteria and KPIs',
          'Post-implementation review',
          'Benefits realisation tracking',
          'Recommendations for improvement',
        ],
      },
    ],
  },
  requirements_eng: {
    title: 'Requirements Engineering',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Requirements Elicitation',
        concepts: [
          'Elicitation techniques: interviews, workshops, observation',
          'Document analysis and prototyping',
          'Requirements gathering from multiple sources',
          'Managing elicitation sessions effectively',
        ],
      },
      {
        title: 'Requirements Analysis',
        concepts: [
          'Categorising requirements (business, stakeholder, solution)',
          'MoSCoW prioritisation technique',
          'Requirements modelling and visualisation',
          'Feasibility and dependency analysis',
        ],
      },
      {
        title: 'Requirements Documentation',
        concepts: [
          'Writing clear and unambiguous requirements',
          'Functional vs non-functional requirements',
          'User stories and acceptance criteria',
          'Requirements catalogues and registers',
        ],
      },
      {
        title: 'Requirements Validation and Management',
        concepts: [
          'Requirements validation techniques',
          'Traceability matrices',
          'Change control for requirements',
          'Requirements versioning and baselining',
        ],
      },
    ],
  },
  modelling_processes: {
    title: 'Modelling Business Processes',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Process Modelling Fundamentals',
        concepts: [
          'What is a business process model',
          'Benefits of process modelling',
          'Levels of process modelling (L1, L2, L3)',
          'Process owners and governance',
        ],
      },
      {
        title: 'BPMN Notation',
        concepts: [
          'Events, activities, and gateways',
          'Sequence flows and message flows',
          'Swimlanes and pools',
          'Common BPMN patterns',
        ],
      },
      {
        title: 'As-Is and To-Be Modelling',
        concepts: [
          'Documenting current state processes',
          'Identifying process inefficiencies',
          'Designing improved future state processes',
          'Gap analysis between as-is and to-be',
        ],
      },
      {
        title: 'Process Improvement',
        concepts: [
          'Lean principles for waste elimination',
          'Six Sigma DMAIC methodology',
          'Value stream mapping',
          'Continuous improvement frameworks',
        ],
      },
    ],
  },
  systems_modelling: {
    title: 'Systems Modelling Techniques',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'UML Diagrams for Business Analysis',
        concepts: [
          'Use case diagrams and actors',
          'Activity diagrams for workflow',
          'Class diagrams for data modelling',
          'Sequence diagrams for interactions',
        ],
      },
      {
        title: 'Data Modelling with ERDs',
        concepts: [
          'Entity-Relationship Diagram fundamentals',
          'Entities, attributes, and relationships',
          'Cardinality and participation constraints',
          'Normalisation principles',
        ],
      },
      {
        title: 'Data Flow Diagrams',
        concepts: [
          'Context diagrams and levelled DFDs',
          'Processes, data stores, and external agents',
          'Data flow notation and conventions',
          'Balancing DFDs across levels',
        ],
      },
      {
        title: 'Wireframing and Prototyping',
        concepts: [
          'Low-fidelity vs high-fidelity wireframes',
          'Wireframing tools and techniques',
          'User interface design principles',
          'Prototyping for requirements validation',
        ],
      },
    ],
  },
  systems_development: {
    title: 'Systems Development Essentials',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Systems Development Lifecycle',
        concepts: [
          'SDLC phases: analysis, design, implementation, maintenance',
          'Waterfall methodology',
          'V-Model for testing',
          'Incremental and iterative approaches',
        ],
      },
      {
        title: 'Feasibility and Requirements',
        concepts: [
          'Technical feasibility assessment',
          'Economic feasibility and cost analysis',
          'Operational feasibility',
          'Legal and regulatory compliance',
        ],
      },
      {
        title: 'Design Principles',
        concepts: [
          'Software architecture patterns',
          'Database design and normalisation',
          'User interface design standards',
          'API design and integration patterns',
        ],
      },
      {
        title: 'Testing and Quality Assurance',
        concepts: [
          'Testing levels: unit, integration, system, acceptance',
          'Test-driven development',
          'Defect management and tracking',
          'Quality standards and metrics',
        ],
      },
    ],
  },
  data_management: {
    title: 'Data Management Essentials',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Data Governance',
        concepts: [
          'Data governance frameworks',
          'Data ownership and stewardship',
          'Data quality management',
          'Regulatory compliance (GDPR, etc.)',
        ],
      },
      {
        title: 'Data Modelling and Architecture',
        concepts: [
          'Conceptual, logical, and physical data models',
          'Data warehouse and data lake concepts',
          'Master data management',
          'Data integration patterns',
        ],
      },
      {
        title: 'Data Storage and Security',
        concepts: [
          'Database management systems',
          'Cloud storage and computing',
          'Data encryption and access controls',
          'Backup and disaster recovery',
        ],
      },
      {
        title: 'Information Assurance',
        concepts: [
          'Data classification and handling',
          'Privacy and confidentiality',
          'Audit trails and monitoring',
          'Data lifecycle management',
        ],
      },
    ],
  },
  benefits_mgmt: {
    title: 'Benefits Management and Business Acceptance',
    subtitle: 'Exam Focus Study Guide',
    chapters: [
      {
        title: 'Benefits Management Framework',
        concepts: [
          'Identifying and categorising benefits',
          'Benefits mapping and dependency networks',
          'Benefits realisation planning',
          'Benefits ownership and accountability',
        ],
      },
      {
        title: 'Business Acceptance Testing',
        concepts: [
          'User acceptance testing (UAT) processes',
          'Writing acceptance criteria',
          'Test planning and execution',
          'Defect management during UAT',
        ],
      },
      {
        title: 'Value Assessment',
        concepts: [
          'Measuring tangible vs intangible benefits',
          'Cost-benefit analysis and ROI',
          'Balanced scorecard approach',
          'Performance measurement frameworks',
        ],
      },
      {
        title: 'Post-Implementation Review',
        concepts: [
          'Evaluating solution effectiveness',
          'Lessons learned documentation',
          'Recommendations for improvement',
          'Continuous value optimisation',
        ],
      },
    ],
  },
}

export default bookGuides
