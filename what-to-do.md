ADMIN AND USER DASHBOARD ENHANCEMENT :

USER DASHBOARD:

1, THE NAVIGATION IS TO THE LEFT HAND SIDE AS CURRENTLY SEEN, BUT IT WOULD USE THE INSPIRATION OF FILE EXPLORER

&#x20;WITH SUB PAGES UNDER THE MAIN PAGE JUST LIKE FILE EXPLORER WITH A FOLDER AND SUB FOLDERS LISTING BUT ALL DROPDOWN TO THE LEFT SIDE NAVIGATION AND A breadcrumb trail if user navigates around various pages

2,PAGES AND SUB PAGES:

FIRST 5 NAVIAGTIONS WHICH WILL BE BOLDED AS MAIN ( WITH A VERY CATCHY TITLE )

* INTRODUCTION AND WALK THROUGH ( DO RESEARCH ON SUB CATEGORIES FOR THIS PAGE )
* COMMUNITY FORUM ( DO RESEARCH ON SUB CATEGORIES FOR THIS PAGE )
* RESOURCE LIBRARY ( FOR COURSE BOOKLETS, VIDEOS, PRESENTATIONS E.T.C)
* COURSE CALENDER ( TASK,TODO, UPCOMING )
* CLASS REPLAY ( DO RESEARCH ON SUB CATEGORIES FOR THIS PAGE )

LAST FOUR NAVIGATION ( WITH A VERY CATCHY TITLE )

* BA FOUNDATION ROADMAP ( WITH DIAGRAM AND CURRENT PROGRESSION)
* COURSE VIDEO TUTORIAL (DO RESEARCH ON SUB CATEGORIES FOR THIS PAGE )
* COURSE POWERPOINT TUTORIAL ( DO RESEARCH ON SUB CATEGORIES FOR THIS PAGE )
* EXAM (SUB: MOCK UP DAILY COMPUSRY TEST, MOCK UP WEEKLY QUIZ, AND FINAL EXAM )

3, UI AND BACKEND UPDATE

UI:

* THE LOGO IS OBVIOUSLLY TOO BIG AND YES IS VISBLE BUT TRY TO FOLLOW THE RULE OF Visual \& Graphic Design RulesBalance: Distribute visual weight evenly. Symmetrical designs feel stable and formal, while asymmetrical designs create dynamic, modern movement.Hierarchy: Guide the viewer's eye by arranging elements in order of importance. Use size, weight, and color to make key messages or call-to-actions pop.Contrast: Use significant differences in color, value, or size to make elements stand out. High contrast is vital for readability and accessibility.Alignment \& Grids: Never place elements randomly. Using a structured grid system ensures elements relate to one another, creating order and visual harmony.White Space: Negative space isn’t "empty"; it’s a powerful tool. Leaving room around elements prevents clutter and focuses the viewer's attention.Repetition \& Consistency: Repeat colors, fonts, or shapes to create unity. Consistency makes a design feel like a cohesive whole rather than a mix-and-match of ideas.💻 User Experience (UX) RulesUser-Centricity: Always design with the end-user's needs, limitations, and pain points in mind.Accessibility: Ensure your designs can be easily understood and navigated by everyone, including people with visual or cognitive impairments.Deliberateness: Every design choice (margins, shadows, typography) should have a clear justification. Never include an element simply for decoration. and this applies to the entire website.
* on hover icons is blue, review entire codebase for blue and replace with the theme of the website gold white and black.
* search bar not functional, and many others not functional
* 404 not found, please create the pages :
* Support \& Legal
* Help Center
* Community
* Privacy Policy
* Terms of Service
* in litrearly all pages the login button and enroll at headers is too big and login is not very visible
* and the backdrop image in section class="relative min-h-\[90vh] flex items-center overflow-hidden bg-\[color:var(--bg-primary)] should be made more visble and be added as backdrop to other sections or literally whole pages or every pages for silenet branding .

UI AND BACKEND

* the login button shouldnt be showing when user loggeds in instead changes to sign out, and enroll now changes to go to dashboard or dashboard 
* and use session cookies for the website, the auth endpoint, email verification, forget password which is not sending me verification code 
* add security rules like multiple request spamming from an ip 
* sync the entire portal to use uploaded content from admin dashboard like introduction and walkthrough, course videos, library content e.t.c do your review and ensure they use realtime data from database from admin dashboard modification, thou ADMIN AND STUDENT LOGIN IS ON SAME FRONTEND BUT ON BACKEND ITS ROUTED DIFFRETLY TO SEPERATE ENDPOINT ONCE EMAIL VERIFIES FROM DB THAT USER STATE IF ADMIN OR USERTHEN SEPERATE API ROUTE .

ADMIN DASHBOARD:

* 👤 User Management (Role-Based Access)Control who can access the system and manage their profiles.Student Directory: Track enrollments, student profiles, attendance, course progress, and certificates.Instructor Profiles: Manage teacher hiring, assign them to specific classes, and view their teaching schedules.Role Assignments: Create clear security boundaries by setting specific permissions for managers, support staff, teachers, and students.📚 Course and Content ManagementBuild, edit, and launch educational content across the platform.Course Creator: Upload videos, PDF files, and reading materials to build new learning pathways.Live Class Scheduler: Integrate with video tools like Zoom to set up live interactive lectures and virtual events.Quizzes \& Assignments: Create automated tests, set due dates, and build customized grading scales.📊 Analytics and ReportingMake data-driven decisions with clear, real-time insights into the academy's health.Enrollment Statistics: Track which classes are popular and view real-time signup rates.Performance Tracking: Monitor completion rates and use AI-driven insights to find struggling students who need extra support.Automated Reports: Generate and export downloadable grading sheets and attendance records for school compliance.💰 Financial and Billing ToolsManage the academy’s revenue pipelines and daily expenses in one secure place.Payment Gateway Integration: Process subscription fees or one-time course sales safely using credit cards or modern cryptocurrency options.Discount Code Creator: Set up seasonal promotions, bundle pricing, and free student trial periods.Expense Tracker: Document instructor payroll payments, platform hosting costs, and general administrative bills.💬 Communication and SupportKeep everyone connected and answer support questions quickly.Bulk Announcements: Send system-wide alerts, holiday updates, or technical maintenance warnings to everyone instantly.In-App Chat Management: Monitor student-teacher chat rooms and manage direct customer service help tickets.Automated Notifications: Set up trigger emails for course welcome notes, late assignment warnings, and payment receipts.⚙️ System and Brand SettingsCustomize the look and technical background of the online platform.White-Label Branding: Upload custom school logos, change color themes, and connect a unique web domain.Security \& Privacy Logs: Audit past login details and update privacy settings to keep data completely safe.
* any colour in the entire website outside black gold and white should be removed and replaced with colours that wont affect the ui negatively but in icons like a progress bar , you can still use red for bad and yellow for warning and green for good e.t.c
* most importantly work on the entire website to be fully mobile responsive, not just only lighthouse test but literally all sections and elements realignment and organization , add alt to entire images on the website 
* WORK ON THIS ELEMENT FOR THE LEFT HAND SIDE NAVIGATION <ASIDE class="w-64 fixed h-\[calc(100vh-80px)] border-r border-\[color:var(--border)] bg-\[color:var(--bg-primary)] hidden md:block" 
* ADD CLOUDFLARE S3 STORAGE AND USE IT FOR ANY FILE UPLOAD AND LINK TO ALL USER VIEW AND ADMIN VIEW , firstly review the codebase, using s3 configuration on cloudflare  and add to env and 
* https://ae5f7e6e4a91cf13a04d8343c445e583.r2.cloudflarestorage.com/zeelin-academy
* 
* 
* zeelin-s3-access
* 
* Account ID
* ae5f7e6e4a91cf13a04d8343c445e583
* Important: Copy your token now
* This is the only time you will see this token. Make sure to copy it and store it securely. You will not be able to retrieve it later.
* Your API Token
* cfat\_o8UbgOMmjQAhN9Cn3voLTPYLVz0Si8WeCTQWIPD9a7e38046
* Use these S3-compatible credentials with the R2 API or any S3 client.
* Access Key ID
* 48331a4413b3be740aa5556016db1bdf
* Secret Access Key
* 3e0f3d41cb745120f90253bdddc6c05c0adc79c9d50d738b3f959f0706debba5
* S3 API endpoint
* https://ae5f7e6e4a91cf13a04d8343c445e583.r2.cloudflarestorage.com
* Example Usage
* curl -X GET "https://api.cloudflare.com/client/v4/accounts/ae5f7e6e4a91cf13a04d8343c445e583/tokens/verify" \\
* &#x20;    -H "Authorization: Bearer cfat\_o8UbgOMmjQAhN9Cn3voLTPYLVz0Si8WeCTQWIPD9a7e38046"
* ONCE ALL THIS ARE DONE , TEST THE FRONTEND PIPEDOWN VIA TERMINAL FOR ALL COMPONENTS 

