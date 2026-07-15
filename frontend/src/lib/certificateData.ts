export interface CertificateData {
  id: string
  title: string
  whoItsFor: string[]
  format: string[]
  weeks: { title: string; desc: string }[]
}

export const foundationCertificates: CertificateData[] = [
  {
    id: 'ba-foundation',
    title: 'Foundation Certificate in Business Analysis',
    whoItsFor: [
      'Aspiring or new Business Analysts',
      'Project Managers',
      'Business/Change Managers',
      'Consultants',
      'Anyone wanting a structured intro to business analysis — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      '1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark)',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Foundations', desc: 'What business analysis means, the skills needed, and how it fits into the bigger picture' },
      { title: 'Week 2 \u2013 Understanding the People', desc: 'Getting to know everyone with a stake in the business' },
      { title: 'Week 3 \u2013 Understanding the Business Today', desc: 'A clear-eyed look at where the business currently stands' },
      { title: 'Week 4 \u2013 Defining the Way Forward', desc: 'Turning insight into direction' },
      { title: 'Week 5 \u2013 Gathering and Organising Requirements', desc: 'Turning ideas into a clear action plan' },
      { title: 'Week 6 \u2013 Making It Happen', desc: 'From plan to lasting results' },
    ],
  },
  {
    id: 'digital-business-change',
    title: 'Foundation Certificate in Digital Business Change',
    whoItsFor: [
      'Business owners driving change in their organisation',
      'Managers responsible for implementing new processes',
      'Team leads guiding staff through transitions',
      'Entrepreneurs scaling or restructuring their business',
      'Anyone wanting a practical, step-by-step approach to leading change — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Format: 1-hour, closed-book, multiple-choice exam, 40 questions, pass mark 26/40 (65%)',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Why Change Fails (and How to Get It Right)', desc: 'The basic mindset and ground rules for leading change well, before touching any process.' },
      { title: 'Week 2 \u2013 Connecting Change to the Business', desc: 'Making sure the change actually serves the business\u2019s real goals, not just a good idea in isolation.' },
      { title: 'Week 3 \u2013 Spotting What Really Needs to Change', desc: 'Digging into the business to identify genuine opportunities and problems worth acting on.' },
      { title: 'Week 4 \u2013 Turning Ideas into a Clear Plan', desc: 'Shaping the specific requirements and building a simple, convincing case to move forward.' },
      { title: 'Week 5 \u2013 Designing and Building the Solution', desc: 'Working out what the change will actually look like in practice and preparing it for rollout.' },
      { title: 'Week 6 \u2013 Making It Stick', desc: 'Implementing the change and tracking whether it delivers the results it promised.' },
    ],
  },
  {
    id: 'org-behaviour',
    title: 'Foundation Certificate in Organisational Behaviour',
    whoItsFor: [
      'Business owners wanting to understand how their organisation truly runs',
      'Managers overseeing teams, budgets, or projects',
      'Entrepreneurs structuring a growing business',
      'Finance and operations staff wanting a clearer big-picture view',
      'Anyone wanting a practical grasp of how organisations are structured, led, and financed — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      '1-hour, closed-book, multiple-choice exam (~40 questions, 65% pass mark)',
    ],
    weeks: [
      { title: 'Week 1 \u2013 How Businesses Are Built', desc: 'The basic shapes and models a business can take \u2014 how work, roles, and decisions are organised.' },
      { title: 'Week 2 \u2013 Why People Work the Way They Do', desc: 'What drives people inside a business \u2014 motivation, behaviour, and the culture that shapes daily decisions.' },
      { title: 'Week 3 \u2013 Getting Teams to Work Together', desc: 'How individuals come together to form functioning teams and groups within a business.' },
      { title: 'Week 4 \u2013 Reading the Money Story', desc: 'The basics of understanding a business\u2019s financial reports \u2014 what the numbers are actually saying.' },
      { title: 'Week 5 \u2013 Where the Money Goes on a Project', desc: 'How money is planned, tracked, and managed within a specific project or initiative.' },
      { title: 'Week 6 \u2013 Putting It All Together', desc: 'Bringing structure, people, and finance together to see how a business truly operates as one system.' },
    ],
  },
  {
    id: 'is-project-mgmt',
    title: 'Foundation Certificate in IS Project Management',
    whoItsFor: [
      'Project managers and project team members',
      'Business owners running their own projects',
      'Managers coordinating cross-functional work',
      'Entrepreneurs delivering business initiatives on time and budget',
      'Anyone wanting a practical understanding of how to plan, run, and control a project — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      '1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark)',
    ],
    weeks: [
      { title: 'Week 1 \u2013 What a Project Really Is', desc: 'The basics of project work \u2014 how it differs from everyday business activity, and how it\u2019s organised.' },
      { title: 'Week 2 \u2013 Planning Before You Start', desc: 'Laying out the roadmap: scope, timelines, resources, and what \u2018done\u2019 looks like.' },
      { title: 'Week 3 \u2013 Staying on Track', desc: 'Monitoring progress, spotting problems early, and keeping a project moving as planned.' },
      { title: 'Week 4 \u2013 Handling Change Without Losing Control', desc: 'Managing changes to scope or plans without derailing the project \u2014 and keeping records straight.' },
      { title: 'Week 5 \u2013 Getting the Numbers Right', desc: 'Estimating time, cost, and effort realistically, and understanding quality standards throughout.' },
      { title: 'Week 6 \u2013 Managing Risk and People', desc: 'Anticipating what could go wrong and keeping communication and team structure working smoothly.' },
    ],
  },
  {
    id: 'ba-practice',
    title: 'Certification in Business Analysis Practise',
    whoItsFor: [
      'Aspiring or practicing Business Analysts',
      'Project Managers and Business Change Managers',
      'Consultants supporting client organisations',
      'Business owners wanting a clearer analytical approach to decisions',
      'Anyone wanting a practical, step-by-step approach to business analysis — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Seeing the Bigger Picture', desc: 'Understanding how business analysis fits into and supports a company\u2019s wider strategy.' },
      { title: 'Week 2 \u2013 Knowing Who Matters', desc: 'Identifying stakeholders and understanding how to work with and manage their interests.' },
      { title: 'Week 3 \u2013 Understanding Where the Business Stands Now', desc: 'A clear, honest look at the current situation before any changes are proposed.' },
      { title: 'Week 4 \u2013 Defining Where the Business Needs to Be', desc: 'Setting a clear target \u2014 what success looks like once the change is made.' },
      { title: 'Week 5 \u2013 Shaping the Right Solution', desc: 'Turning the gap between \u201cnow\u201d and \u201ctarget\u201d into a practical, well-defined solution.' },
      { title: 'Week 6 \u2013 Making the Case for Action', desc: 'Building a solid business case to justify and support the proposed change.' },
    ],
  },
  {
    id: 'benefits-management',
    title: 'Certificate in Benefits Management and Business Acceptance',
    whoItsFor: [
      'Business owners wanting to see real returns from change initiatives',
      'Project and change managers responsible for delivering results',
      'Business analysts tracking value beyond project completion',
      'Quality and testing staff supporting business change',
      'Anyone wanting a practical understanding of how to plan, test, and deliver real business benefits \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 What \u201cBenefit\u201d Really Means', desc: 'Understanding what a business benefit is, and why it should drive every change decision.' },
      { title: 'Week 2 \u2013 Sorting Out What Matters', desc: 'Grouping and understanding how different benefits connect to and depend on one another.' },
      { title: 'Week 3 \u2013 Planning to Capture Value', desc: 'Building a simple plan to track and realise benefits, not just hope they happen.' },
      { title: 'Week 4 \u2013 Proving the Change Works', desc: 'Setting standards and methods to test whether a change is actually ready and acceptable to the business.' },
      { title: 'Week 5 \u2013 Checking the Details', desc: 'Practical techniques for testing, planning the testing process, and confirming results.' },
      { title: 'Week 6 \u2013 From Plan to Payoff', desc: 'Revisiting the business case, rolling out the change, and making sure the promised benefits are actually delivered.' },
    ],
  },
  {
    id: 'modelling-business-processes',
    title: 'Certificate in Modelling Business Processes',
    whoItsFor: [
      'Business analysts and process improvement specialists',
      'Operations managers wanting more efficient workflows',
      'Business owners looking to streamline how their company runs',
      'Project and change managers implementing new processes',
      'Anyone wanting a practical understanding of how to map, improve, and implement better business processes \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Why Processes Matter', desc: 'Understanding what business processes are and why studying them properly makes change work.' },
      { title: 'Week 2 \u2013 Seeing the Whole Business', desc: 'Mapping out how the business works at the highest level \u2014 the big picture view.' },
      { title: 'Week 3 \u2013 Following the Triggers', desc: 'Understanding what sets processes in motion and how the business responds to events.' },
      { title: 'Week 4 \u2013 Zooming Into the Details', desc: 'Breaking processes down to who does what, step by step.' },
      { title: 'Week 5 \u2013 Making Things Work Better', desc: 'Identifying weaknesses in current processes and reshaping them for improvement.' },
      { title: 'Week 6 \u2013 Rolling Out the Change', desc: 'Putting the improved processes into practice and managing the transition smoothly.' },
    ],
  },
  {
    id: 'data-management-essentials',
    title: 'Certificate in Data Management Essentials',
    whoItsFor: [
      'Business owners wanting to make better use of their company\u2019s data',
      'Operations and admin staff responsible for records and systems',
      'IT and data professionals supporting business functions',
      'Managers wanting cleaner, more reliable information for decisions',
      'Anyone wanting a practical understanding of how to manage and use business data well \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format: 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark)',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Why Data Deserves Attention', desc: 'Understanding what data management means and why it matters to every business, big or small.' },
      { title: 'Week 2 \u2013 Keeping Data in Order', desc: 'The everyday discipline of organising, labelling, and maintaining data so it stays useful.' },
      { title: 'Week 3 \u2013 Looking After the Systems That Hold Data', desc: 'Understanding the basics of managing databases \u2014 where data lives and how it\u2019s kept safe.' },
      { title: 'Week 4 \u2013 Building a Single Source of Truth', desc: 'Creating a shared, reliable place where business information can be stored and found.' },
      { title: 'Week 5 \u2013 Knowing Where Data Fits in the Business', desc: 'Understanding how far the data function reaches \u2014 who owns it, who uses it, and who\u2019s responsible.' },
      { title: 'Week 6 \u2013 Turning Data Into a Business Asset', desc: 'Bringing it all together \u2014 using well-managed data to support better decisions.' },
    ],
  },
  {
    id: 'systems-modelling-techniques',
    title: 'Certificate in Systems Modelling Techniques',
    whoItsFor: [
      'Business analysts and systems analysts',
      'Software developers and solution designers',
      'IT professionals bridging business and technical teams',
      'Project managers overseeing system-related change',
      'Anyone wanting a practical understanding of how to model systems clearly before building or changing them \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Seeing Systems Clearly', desc: 'Understanding what systems modelling is and why picturing a system helps before building anything.' },
      { title: 'Week 2 \u2013 Putting Models in Context', desc: 'Learning how models fit within the bigger picture of a business or technical system.' },
      { title: 'Week 3 \u2013 Mapping What a System Does', desc: 'Capturing the functions and actions a system needs to perform.' },
      { title: 'Week 4 \u2013 Capturing What Stays the Same', desc: 'Modelling the fixed structures \u2014 the data and relationships that don\u2019t change moment to moment.' },
      { title: 'Week 5 \u2013 Capturing What Changes Over Time', desc: 'Modelling behaviour and flow \u2014 how a system responds and moves through different states.' },
      { title: 'Week 6 \u2013 Bringing the Models Together', desc: 'Combining functionality, structure, and behaviour into one clear, usable system view.' },
    ],
  },
  {
    id: 'systems-development-essentials',
    title: 'Certificate in Systems Development Essentials',
    whoItsFor: [
      'Systems analysts and business analysts working with technical teams',
      'Software developers and solution architects',
      'IT project managers overseeing development work',
      'Quality assurance professionals',
      'Anyone wanting a practical understanding of how systems are designed, built, and maintained \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format: 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1: Who Does What in Building Systems', desc: 'Understanding the different roles involved in developing a system and how they work together.' },
      { title: 'Week 2: The Blueprint Behind the System', desc: 'Grasping the basics of architecture \u2014 how a system is structured before it\u2019s built.' },
      { title: 'Week 3: The Journey from Idea to Working System', desc: 'Following the lifecycle a system goes through, from concept to completion.' },
      { title: 'Week 4: How Teams Actually Build Systems', desc: 'Practical approaches and methods teams use to develop systems effectively.' },
      { title: 'Week 5: Investigating Before Building', desc: 'Digging into the real problem before designing any solution.' },
      { title: 'Week 6: Designing, Deploying, and Keeping It Running', desc: 'Bringing the system to life, launching it, maintaining it, and ensuring it meets quality standards \u2014 with the right tools supporting the process.' },
    ],
  },
  {
    id: 'requirements-engineering',
    title: 'Certificate in Requirements Engineering',
    whoItsFor: [
      'Business analysts and requirements engineers',
      'Project managers responsible for scope and delivery',
      'Product owners and product managers',
      'Consultants gathering client needs',
      'Anyone wanting a practical understanding of how to gather, document, and manage business requirements \u2014 no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format: 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) \u2014 same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Requirements as a Way of Working', desc: 'Understanding what \u201crequirements\u201d really means and why treating it as a proper service leads to better outcomes.' },
      { title: 'Week 2 \u2013 Drawing Out What People Actually Need', desc: 'Practical ways to ask the right questions and uncover real requirements, not assumptions.' },
      { title: 'Week 3 \u2013 Writing It Down Clearly', desc: 'Turning conversations and findings into clear, usable written requirements.' },
      { title: 'Week 4 \u2013 Making Sense of What You\u2019ve Gathered', desc: 'Breaking down and examining requirements to spot gaps, conflicts, or missing pieces.' },
      { title: 'Week 5 \u2013 Confirming You\u2019ve Got It Right', desc: 'Checking requirements with stakeholders before any work begins, to avoid costly mistakes.' },
      { title: 'Week 6 \u2013 Keeping Requirements Under Control', desc: 'Tracking changes and keeping requirements accurate and relevant throughout the life of a project.' },
    ],
  },
]

export const coreCertificates: CertificateData[] = [
  {
    id: 'core-ba-practice',
    title: 'Business Analysis Practice',
    whoItsFor: [
      'Aspiring or practicing Business Analysts',
      'Project Managers and Business Change Managers',
      'Consultants supporting client organisations',
      'Business owners wanting a clearer analytical approach to decisions',
      'Anyone wanting a practical, step-by-step approach to business analysis — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Seeing the Bigger Picture', desc: 'Understanding how business analysis fits into and supports a company\u2019s wider strategy.' },
      { title: 'Week 2 – Knowing Who Matters', desc: 'Identifying stakeholders and understanding how to work with and manage their interests.' },
      { title: 'Week 3 – Understanding Where the Business Stands Now', desc: 'A clear, honest look at the current situation before any changes are proposed.' },
      { title: 'Week 4 – Defining Where the Business Needs to Be', desc: 'Setting a clear target — what success looks like once the change is made.' },
      { title: 'Week 5 – Shaping the Right Solution', desc: 'Turning the gap between \u201cnow\u201d and \u201ctarget\u201d into a practical, well-defined solution.' },
      { title: 'Week 6 – Making the Case for Action', desc: 'Building a solid business case to justify and support the proposed change.' },
    ],
  },
  {
    id: 'core-requirements-engineering',
    title: 'Requirements Engineering',
    whoItsFor: [
      'Business analysts and requirements engineers',
      'Project managers responsible for scope and delivery',
      'Product owners and product managers',
      'Consultants gathering client needs',
      'Anyone wanting a practical understanding of how to gather, document, and manage business requirements — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Requirements as a Way of Working', desc: 'Understanding what \u201crequirements\u201d really means and why treating it as a proper service leads to better outcomes.' },
      { title: 'Week 2 – Drawing Out What People Actually Need', desc: 'Practical ways to ask the right questions and uncover real requirements, not assumptions.' },
      { title: 'Week 3 – Writing It Down Clearly', desc: 'Turning conversations and findings into clear, usable written requirements.' },
      { title: 'Week 4 – Making Sense of What You\u2019ve Gathered', desc: 'Breaking down and examining requirements to spot gaps, conflicts, or missing pieces.' },
      { title: 'Week 5 – Confirming You\u2019ve Got It Right', desc: 'Checking requirements with stakeholders before any work begins, to avoid costly mistakes.' },
      { title: 'Week 6 – Keeping Requirements Under Control', desc: 'Tracking changes and keeping requirements accurate and relevant throughout the life of a project.' },
    ],
  },
]

export const practitionerCertificates: CertificateData[] = [
  {
    id: 'prac-modelling-processes',
    title: 'Modelling Business Processes',
    whoItsFor: [
      'Business analysts and process improvement specialists',
      'Operations managers wanting more efficient workflows',
      'Business owners looking to streamline how their company runs',
      'Project and change managers implementing new processes',
      'Anyone wanting a practical understanding of how to map, improve, and implement better business processes — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Why Processes Matter', desc: 'Understanding what business processes are and why studying them properly makes change work.' },
      { title: 'Week 2 – Seeing the Whole Business', desc: 'Mapping out how the business works at the highest level — the big picture view.' },
      { title: 'Week 3 – Following the Triggers', desc: 'Understanding what sets processes in motion and how the business responds to events.' },
      { title: 'Week 4 – Zooming Into the Details', desc: 'Breaking processes down to who does what, step by step.' },
      { title: 'Week 5 – Making Things Work Better', desc: 'Identifying weaknesses in current processes and reshaping them for improvement.' },
      { title: 'Week 6 – Rolling Out the Change', desc: 'Putting the improved processes into practice and managing the transition smoothly.' },
    ],
  },
  {
    id: 'prac-systems-modelling',
    title: 'Systems Modelling Techniques',
    whoItsFor: [
      'Business analysts and systems analysts',
      'Software developers and solution designers',
      'IT professionals bridging business and technical teams',
      'Project managers overseeing system-related change',
      'Anyone wanting a practical understanding of how to model systems clearly before building or changing them — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Seeing Systems Clearly', desc: 'Understanding what systems modelling is and why picturing a system helps before building anything.' },
      { title: 'Week 2 – Putting Models in Context', desc: 'Learning how models fit within the bigger picture of a business or technical system.' },
      { title: 'Week 3 – Mapping What a System Does', desc: 'Capturing the functions and actions a system needs to perform.' },
      { title: 'Week 4 – Capturing What Stays the Same', desc: 'Modelling the fixed structures — the data and relationships that don\u2019t change moment to moment.' },
      { title: 'Week 5 – Capturing What Changes Over Time', desc: 'Modelling behaviour and flow — how a system responds and moves through different states.' },
      { title: 'Week 6 – Bringing the Models Together', desc: 'Combining functionality, structure, and behaviour into one clear, usable system view.' },
    ],
  },
  {
    id: 'prac-systems-dev',
    title: 'Systems Development Essentials',
    whoItsFor: [
      'Systems analysts and business analysts working with technical teams',
      'Software developers and solution architects',
      'IT project managers overseeing development work',
      'Quality assurance professionals',
      'Anyone wanting a practical understanding of how systems are designed, built, and maintained — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Who Does What in Building Systems', desc: 'Understanding the different roles involved in developing a system and how they work together.' },
      { title: 'Week 2 – The Blueprint Behind the System', desc: 'Grasping the basics of architecture — how a system is structured before it\u2019s built.' },
      { title: 'Week 3 – The Journey from Idea to Working System', desc: 'Following the lifecycle a system goes through, from concept to completion.' },
      { title: 'Week 4 – How Teams Actually Build Systems', desc: 'Practical approaches and methods teams use to develop systems effectively.' },
      { title: 'Week 5 – Investigating Before Building', desc: 'Digging into the real problem before designing any solution.' },
      { title: 'Week 6 – Designing, Deploying, and Keeping It Running', desc: 'Bringing the system to life, launching it, maintaining it, and ensuring it meets quality standards — with the right tools supporting the process.' },
    ],
  },
  {
    id: 'prac-data-management',
    title: 'Data Management Essentials',
    whoItsFor: [
      'Business owners wanting to make better use of their company\u2019s data',
      'Operations and admin staff responsible for records and systems',
      'IT and data professionals supporting business functions',
      'Managers wanting cleaner, more reliable information for decisions',
      'Anyone wanting a practical understanding of how to manage and use business data well — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – Why Data Deserves Attention', desc: 'Understanding what data management means and why it matters to every business, big or small.' },
      { title: 'Week 2 – Keeping Data in Order', desc: 'The everyday discipline of organising, labelling, and maintaining data so it stays useful.' },
      { title: 'Week 3 – Looking After the Systems That Hold Data', desc: 'Understanding the basics of managing databases — where data lives and how it\u2019s kept safe.' },
      { title: 'Week 4 – Building a Single Source of Truth', desc: 'Creating a shared, reliable place where business information can be stored and found.' },
      { title: 'Week 5 – Knowing Where Data Fits in the Business', desc: 'Understanding how far the data function reaches — who owns it, who uses it, and who\u2019s responsible.' },
      { title: 'Week 6 – Turning Data Into a Business Asset', desc: 'Bringing it all together — using well-managed data to support better decisions.' },
    ],
  },
  {
    id: 'prac-benefits-management',
    title: 'Benefits Management and Business Acceptance',
    whoItsFor: [
      'Business owners wanting to see real returns from change initiatives',
      'Project and change managers responsible for delivering results',
      'Business analysts tracking value beyond project completion',
      'Quality and testing staff supporting business change',
      'Anyone wanting a practical understanding of how to plan, test, and deliver real business benefits — no prior experience required',
    ],
    format: [
      '6-week program, one core session per week, with practical exercises and a real-world case study to apply each step immediately.',
      'Exam format (if adding a certification-style assessment): 1-hour, closed-book, multiple-choice exam (~40 questions, ~65% pass mark) — same structure as your earlier modules.',
    ],
    weeks: [
      { title: 'Week 1 – What "Benefit" Really Means', desc: 'Understanding what a business benefit is, and why it should drive every change decision.' },
      { title: 'Week 2 – Sorting Out What Matters', desc: 'Grouping and understanding how different benefits connect to and depend on one another.' },
      { title: 'Week 3 – Planning to Capture Value', desc: 'Building a simple plan to track and realise benefits, not just hope they happen.' },
      { title: 'Week 4 – Proving the Change Works', desc: 'Setting standards and methods to test whether a change is actually ready and acceptable to the business.' },
      { title: 'Week 5 – Checking the Details', desc: 'Practical techniques for testing, planning the testing process, and confirming results.' },
      { title: 'Week 6 – From Plan to Payoff', desc: 'Revisiting the business case, rolling out the change, and making sure the promised benefits are actually delivered.' },
    ],
  },
]

export const oralCertificates: CertificateData[] = [
  {
    id: 'oral-exam-prep',
    title: 'Oral Exam Preparation',
    whoItsFor: [
      'Candidates preparing for the Oral Examination',
      'Business analysts seeking professional certification',
      'Professionals wanting to validate their practical BA experience',
      'Learners who have completed Foundation or Practitioner pathways',
      'Anyone needing structured preparation for an oral assessment in business analysis',
    ],
    format: [
      '4-week program, one core session per week, with mock oral exercises, peer feedback, and personalised trainer guidance.',
      'Oral examination format: structured panel assessment with scenario-based questions and portfolio discussion.',
    ],
    weeks: [
      { title: 'Week 1 \u2013 Understanding the Exam', desc: 'Learning the oral exam structure, assessment criteria, and expectations to build a clear preparation strategy.' },
      { title: 'Week 2 \u2013 Building Your Portfolio', desc: 'Structuring your experience, selecting appropriate examples, and preparing to articulate your BA competence.' },
      { title: 'Week 3 \u2013 Practice and Feedback', desc: 'Participating in mock oral sessions, receiving constructive feedback, and refining your responses.' },
      { title: 'Week 4 \u2013 Final Preparation', desc: 'Consolidating knowledge, practising under timed conditions, and building confidence for the actual examination.' },
    ],
  },
]
