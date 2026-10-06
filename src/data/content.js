// Single source of truth for all portfolio content.
// Projects are sourced from github.com/youssefemadhassan66; experience from the CV.

const GH = 'https://github.com/youssefemadhassan66';

export const profile = {
  name: 'Youssef Emad Hussin',
  shortName: 'Youssef Emad',
  role: 'Full-stack developer',
  location: 'Giza, Egypt',
  timeZone: 'Africa/Cairo',
  email: 'youssefemadhassan66@gmail.com',
  phone: '+20 150 159 8998',
  phoneHref: 'tel:+201501598998',
  photo: './profile.jpg',
  resume: './Youssef-Emad-Hussin-Resume.pdf',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/youssef-emad-037570250',
  hero: {
    hello: 'my name is Youssef and I am a',
    line1: 'Full-stack',
    line2: 'Developer',
    after: 'based in Giza, Egypt.',
  },
  // Organizations and clients shown under the hero.
  workedWith: ['iSchool', 'DEPI', 'NTI', 'Nook & Stitch'],
  intro:
    'I build full-stack web applications: multi-tenant SaaS, learning platforms, hospital systems and AI call automation. From the database schema to the last pixel.',
  coreStack: ['Node.js', 'React', 'TypeScript', '.NET', 'PostgreSQL', 'MongoDB'],
};

// The two scrolling bands under the hero.
export const marquee = [
  ['Full-stack developer', 'Node.js', 'React', '.NET', 'PostgreSQL', 'MongoDB'],
  ['Web apps', 'APIs', 'Dashboards', 'SaaS', 'Real-time systems'],
];

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Featured case studies. `proof` selects the visual evidence panel in Proofs.jsx.
export const featured = [
  {
    id: 'noctra',
    name: 'Noctra',
    kind: 'SaaS product',
    access: 'private',
    year: '2026',
    summary:
      'A multi-tenant analytics SaaS. It syncs data from the Shopify and Meta APIs, joins it with supplier costs and expenses, and calculates the real profit behind every ad campaign.',
    highlights: [
      'Multi-tenant from day one: every query is scoped to an organization in both middleware and the repository layer.',
      'OAuth sync with expiring offline tokens, encrypted at rest and rotated under a database lease.',
      'HMAC-verified, de-duplicated webhooks and Redis-backed BullMQ workers for reconciliation jobs.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React', 'BullMQ', 'Redis', 'GraphQL'],
    links: [],
    proof: 'profit',
  },
  {
    id: 'algogambit',
    name: 'AlgoGambit LMS',
    kind: 'Full-stack platform',
    access: 'public',
    year: '2025–26',
    summary:
      'A learning platform with separate dashboards for admins, instructors, parents and students. Sessions, curriculum, exams, submissions, messaging and a full gamification layer.',
    highlights: [
      'Express 5 API with 20+ controllers, Joi validation, rate limiting, Helmet and an audit-log middleware.',
      'Badges, challenges and leaderboards; real-time channels and notifications over Socket.IO.',
      'Dockerized, tested with Jest, shipped through GitHub Actions and Jenkins; React 19 front end on Vercel with a strict CSP.',
    ],
    stack: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Socket.IO', 'JWT', 'Docker', 'Jest'],
    links: [
      { label: 'API repo', url: `${GH}/LMS` },
      { label: 'Frontend repo', url: `${GH}/LMS_FrontEnd` },
    ],
    proof: 'roles',
  },
  {
    id: 'outbound-ai',
    name: 'Arabic AI outbound calls',
    kind: 'AI backend',
    access: 'public',
    year: '2026',
    summary:
      'A FastAPI backend that schedules Arabic follow-up calls, runs a guided AI dialogue and reports first-call resolution. The AI interprets speech; a deterministic rules engine decides whether a ticket is resolved.',
    highlights: [
      'Scheduler enforces recorded consent, do-not-call, Egyptian calling hours, duplicate prevention and retry caps.',
      'RAG ingestion of trusted PDF, DOCX, Markdown and HTML procedures into the call script.',
      'Supabase Postgres with operational tables locked to the backend service role only.',
    ],
    stack: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'RAG'],
    links: [{ label: 'Repo', url: `${GH}/Outbound_Calls_RAG_system` }],
    proof: 'pipeline',
  },
  {
    id: 'his',
    name: 'Hospital Information System',
    kind: '.NET application',
    access: 'public',
    year: '2025–26',
    summary:
      'An ASP.NET Core MVC system and SQL Server schema covering a hospital end to end, from registration and triage to beds, theatres and insurance claims.',
    highlights: [
      'Role-based access with ASP.NET Identity and staff onboarding per department and specialization.',
      'Patient queue with a live display board, encounters, vitals, diagnoses and prescriptions.',
      'Finance module with invoices, payments, insurance plans, claims and verification logs.',
    ],
    stack: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'T-SQL'],
    links: [
      { label: 'App repo', url: `${GH}/Hospital_System` },
      { label: 'Schema repo', url: `${GH}/Hospital-Information-System` },
    ],
    proof: 'modules',
  },
];

// Compact list of other notable work.
export const moreWork = [
  {
    name: 'Mohamed Mahmoud & Partners',
    what: 'Website for a Cairo corporate law firm: custom WordPress block theme, content-types plugin, SEO schema and security hardening.',
    stack: 'WordPress · PHP',
    year: '2026',
    tag: 'Client',
    url: `${GH}/Law_Firm`,
    linkLabel: 'Repo',
  },
  {
    name: 'Nook & Stitch',
    what: 'Built the company website.',
    stack: 'Shopify · Liquid · JavaScript',
    year: '2026',
    tag: 'Client',
    url: 'https://nookandstitch.com',
    linkLabel: 'Live',
  },
  {
    name: 'Company system',
    what: 'HR backend for roles, attendance, tasks and attachments, with an auth security test suite.',
    stack: 'Node.js · MongoDB',
    year: '2026',
    url: `${GH}/Company_System`,
    linkLabel: 'Repo',
  },
  {
    name: 'Dealer stock tracker',
    what: 'Stock and sales tracker for a dealer, backed by a serverless records API.',
    stack: 'JavaScript · Vercel',
    year: '2026',
    url: 'https://dealer-stock-tracker.vercel.app',
    linkLabel: 'Live',
  },
  {
    name: 'Riven Roams Tours',
    what: 'Tour booking site with JWT auth, bookings, reviews and an admin dashboard for tours and users.',
    stack: 'Angular · Node.js · MongoDB',
    year: '2024',
    url: `${GH}/Riven-Roams-Tours-website-`,
    linkLabel: 'Repo',
  },
  {
    name: 'Exodia OS website',
    what: 'Marketing and documentation site for an open-source operating system.',
    stack: 'HTML · CSS · JavaScript',
    year: '2024',
    url: 'https://exodia-os.github.io',
    linkLabel: 'Live',
  },
  {
    name: 'Steel Express',
    what: 'Graduation project: sales analysis and an EOQ inventory model for five steel product lines.',
    stack: 'Python · Jupyter',
    year: '2024',
    url: `${GH}/Steel-Express`,
    linkLabel: 'Repo',
  },
  {
    name: 'Chess',
    what: 'Playable chess in vanilla JavaScript with full legal-move validation.',
    stack: 'JavaScript',
    year: '2024',
    url: `${GH}/Chess-Game`,
    linkLabel: 'Repo',
  },
];

// Smaller public repositories, shown in the "More on GitHub" grid. Newest first.
export const githubRepos = [
  {
    name: 'ALX Python track',
    what: 'Python fundamentals from the ALX back-end track: control flow, functions and data structures.',
    tech: 'Python',
    year: '2025',
    url: `${GH}/alx_be_python`,
  },
  {
    name: 'Riven Roams API',
    what: 'REST API behind the tour site: tours, bookings, reviews, JWT auth and role-based access.',
    tech: 'Node.js · Express · MongoDB',
    year: '2025',
    url: `${GH}/Riven-Roams-Tours-websist-Back-end-`,
  },
  {
    name: 'Bank system',
    what: 'Banking system in C#, built during the DEPI program.',
    tech: 'C# · .NET',
    year: '2025',
    url: `${GH}/Bank_System_DEPI`,
  },
  {
    name: 'Fawry Rise challenge',
    what: 'Object-oriented system design challenge from the Fawry Rise program.',
    tech: 'C# · .NET',
    year: '2025',
    url: `${GH}/Fawry-Rise-Journey`,
  },
  {
    name: 'Angular portfolio',
    what: 'My previous portfolio: a component-driven Angular single-page app.',
    tech: 'Angular · TypeScript',
    year: '2024',
    url: `${GH}/My-Portofolio_Fornt-end`,
  },
  {
    name: 'Portfolio API',
    what: 'Backend for the Angular portfolio: auth, page content, uploads and contact mail.',
    tech: 'Node.js · Express',
    year: '2024',
    url: `${GH}/My-Portfolio_Backend`,
  },
  {
    name: 'Node.js file system',
    what: 'Reads and writes JSON data with the Node.js file system API.',
    tech: 'Node.js',
    year: '2024',
    url: `${GH}/NodeJS-File-System`,
  },
  {
    name: 'Angular API client',
    what: 'Angular app with server-side rendering that consumes a REST API through a typed service.',
    tech: 'Angular · TypeScript',
    year: '2024',
    url: `${GH}/Store_Api_Angular`,
  },
  {
    name: 'Hangman',
    what: 'Browser hangman game with sound effects.',
    tech: 'JavaScript',
    year: '2024',
    url: `${GH}/Hang-man`,
  },
  {
    name: 'Authentication app',
    what: 'Register, login and protected pages with Passport sessions and MongoDB.',
    tech: 'Node.js · Express · MongoDB',
    year: '2024',
    url: `${GH}/Authentication-`,
  },
  {
    name: 'Journal website',
    what: 'Blog-style journal with a compose page, rendered server-side.',
    tech: 'Node.js · Express · EJS',
    year: '2024',
    url: `${GH}/Jornal-news-Website`,
  },
  {
    name: 'Pharmacy manager',
    what: 'Inventory, employee records and daily sales reports with CSV storage.',
    tech: 'Python',
    year: '2024',
    url: `${GH}/Pharmacy_Project`,
  },
];

// Professional timeline, newest first.
export const experience = [
  {
    role: 'English Coding Instructor',
    org: 'iSchool',
    period: 'Aug 2025 – Jun 2026',
    points: [
      'Taught programming fundamentals and problem solving to 100+ students in English.',
      'Designed structured learning paths and project-based coding activities.',
    ],
  },
  {
    role: 'Full-Stack .NET Developer',
    org: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Jun 2025 – Dec 2025',
    points: [
      'Built end-to-end web applications with ASP.NET, C#, SQL Server and modern front-end frameworks.',
      'Applied clean architecture and designed scalable APIs.',
    ],
  },
  {
    role: 'MEAN Stack Web Development',
    org: 'National Telecommunication Institute (NTI)',
    period: 'Jul 2023 – Sep 2023',
    points: ['Built full-stack applications with Angular, Express, Node.js and MongoDB.'],
  },
  {
    role: 'Full Stack Web Development',
    org: 'YAT Learning Center',
    period: 'Mar 2018 – Jul 2018',
    points: ['Built and deployed PHP and Laravel applications backed by MySQL.'],
  },
];

export const education = {
  degree: 'BSc, Computer Science & Artificial Intelligence',
  org: 'Cairo University',
  year: '2024',
};

export const certificates = [
  { name: 'Google Data Analytics Professional Certificate', org: 'Coursera', year: '2023' },
  { name: 'AI Career Essentials (AiCE)', org: 'ALX', year: '2024' },
];

// Grouped by where it sits in a product, not by self-rated percentages.
export const stack = [
  {
    area: 'Back end',
    items: ['Node.js', 'Express', 'C# / ASP.NET Core', 'Python / FastAPI', 'REST & GraphQL APIs', 'JWT & OAuth'],
  },
  {
    area: 'Front end',
    items: ['React', 'TypeScript', 'Angular', 'Vite', 'Accessible, responsive CSS'],
  },
  {
    area: 'Data',
    items: ['PostgreSQL', 'Prisma', 'SQL Server', 'MongoDB', 'Redis & BullMQ', 'Supabase'],
  },
  {
    area: 'Integrations',
    items: ['Shopify API', 'Meta Marketing API', 'Webhooks', 'WordPress', 'Cloudinary'],
  },
  {
    area: 'Delivery',
    items: ['Docker', 'GitHub Actions', 'Jenkins', 'Jest', 'Vercel & Render', 'PM2'],
  },
];
