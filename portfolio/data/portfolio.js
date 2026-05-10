export const hero = {
  name: 'Manish Kumar',
  title: 'Full Stack Developer · Node.js · React.js / Next.js · ERP & AI/ML',
  description:
    'Building scalable web applications, AI-powered tools, and enterprise ERP platforms that actually move the needle — 3+ years of shipping production code that serves 50+ businesses.',
  stats: [
    { value: '3+',  label: 'Years Experience' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '3×',  label: 'Award Winner' },
    { value: '60%', label: 'Code Quality Lift' },
  ],
  email:    'mk2220660@gmail.com',
  phone:    '+91-7906050187',
  location: 'Meerut, UP, India',
  linkedin: 'https://linkedin.com/in/manish-kumar-a9456520b',
};

export const skills = [
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Nest.js', 'PHP', 'Python', 'REST APIs', 'JWT', 'RBAC'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'ES6+', 'AG Grid', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'GitHub', 'CI/CD', 'Postman', 'Redux', 'Agile', 'AI/ML Integration', 'ERP Systems'],
  },
];

export const experience = [
  {
    period:  'August 2023 – Present',
    role:    'Full Stack Developer',
    company: 'Dayal InfoSystem · Meerut, India',
    bullets: [
      'Built and maintained production RESTful APIs using Node.js & PHP for 50+ enterprise ERP clients across Sales, Purchase, Inventory & HRMS modules.',
      'Engineered reusable React.js components with AG Grid, boosting build automation accuracy by 70%.',
      'Architected DB Portal — real-time multi-client database management with health monitoring & audit logging.',
      'Developed CodeKeeper, an AI/ML-powered code quality tool that cut debugging time by 60%.',
      'Created SEA platform — automated customer onboarding & DB provisioning, reducing setup time by 80%.',
      'Designed dynamic RBAC module with granular permission mapping across MySQL & MongoDB backends.',
      'Mentored junior developers: task assignment, code reviews, Git enforcement in an Agile environment.',
    ],
  },
];

export const projects = [
  {
    name:   'DB Portal',
    badge:  'Production',
    icon:   '⬡',
    color:  'green',
    stack:  'React · Next.js · Node.js · AG Grid · PostgreSQL · MongoDB',
    description:
      'Real-time multi-client database management system with health monitoring, audit logging, RBAC, and automated build pipelines that reduced human error by 70%.',
  },
  {
    name:   'CodeKeeper',
    badge:  'AI/ML',
    icon:   '◈',
    color:  'purple',
    stack:  'React · Node.js · Python · AG Grid · MySQL · MongoDB',
    description:
      'AI-powered platform that auto-scans codebases, detects inconsistencies, and enforces coding standards — improved code quality by 60% across all ERP modules.',
  },
  {
    name:   'SEA Platform',
    badge:  'Enterprise',
    icon:   '◎',
    color:  'pink',
    stack:  'React · Next.js · Node.js · Express · Nest.js · PostgreSQL · MySQL',
    description:
      'Centralised ERP management hub: feature control, subscription plans, automated provisioning and onboarding reducing setup time by 80%.',
  },
];

export const awards = [
  {
    icon:  '🏆',
    title: 'Annual General Meeting Award',
    desc:  'Awarded by CEO Aman Dayal for exceptional ownership and delivery of DB Portal & Budget projects.',
    date:  'April 2025',
  },
  {
    icon:  '⭐',
    title: 'CEO Excellence Award',
    desc:  'Outstanding performance on the stock allotment system with AG Grid integration.',
    date:  'September 2024',
  },
  {
    icon:  '🥇',
    title: 'Employee of the Month',
    desc:  'Consistent high performance and team contribution.',
    date:  'December 2023 & March 2025',
  },
];
