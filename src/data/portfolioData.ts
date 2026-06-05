export const personal = {
  name: 'Mula Narendra Reddy',
  tagline: 'Building impactful web experiences',
  bio: `Full Stack Software Engineer with 2+ years of experience in React.js, JavaScript, ASP.NET Core, REST APIs, SQL Server, HTML5, CSS3, Tailwind CSS, and Redux. Skilled in frontend development, reusable component architecture, API integration, state management, and performance optimization.`,
  bio2: `Experienced in enterprise applications, Government of Telangana digital platforms, workflow management systems, and e-commerce applications. I thrive in Agile teams and believe great software is built at the intersection of clean code and user empathy.`,
  email: 'mulanarendrareddy@gmail.com',
  phone: '9014612778',
  location: 'Hyderabad, India',
  resumeUrl: '/resume.pdf',
  avatar: '/narendra.jpg',
  social: {
    github: 'https://github.com/NarendraReddy15',
    linkedin: 'https://linkedin.com/in/narendrareddymula',
    twitter: 'https://twitter.com',
    email: 'mailto:mulanarendrareddy@gmail.com',
  },
}

export const roles = [
  'Full Stack Developer',
  'React.js Engineer',
  'ASP.NET Core Developer',
  'Frontend Specialist',
  'UI/UX Enthusiast',
]

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Redux', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'ASP.NET Core', level: 82 },
      { name: 'REST APIs', level: 88 },
      { name: 'Entity Framework', level: 78 },
      { name: 'SQL Server', level: 80 },
      { name: 'Stored Procedures', level: 75 },
    ],
  },
  {
    category: 'Languages & Tools',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'Python', level: 72 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 92 },
    ],
  },
]

export const techStack = [
  'React.js', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Redux', 'ASP.NET Core', 'REST APIs',
  'SQL Server', 'Git', 'Postman', 'Expo',
]

export type ProjectCategory = 'All' | 'Frontend' | 'Full Stack' | 'Backend' | 'Mobile'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  category: Exclude<ProjectCategory, 'All'>
  liveUrl: string
  githubUrl: string
  challenges: string
  outcomes: string
  screenshots: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'deet',
    title: 'DEET — Government of Telangana Digital Employment Platform',
    description: 'Government of Telangana digital employment and workflow management platform with candidate management systems and secure digital features.',
    longDescription: 'Contributed to a large-scale Government of Telangana digital employment platform. Built scalable React.js frontend modules with responsive UI and reusable components. Integrated REST APIs, optimized application performance for enterprise workflows, and worked on candidate management systems and workflow tracking.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
    tags: ['React.js', 'REST APIs', 'JavaScript', 'Tailwind CSS', 'SQL Server'],
    category: 'Full Stack',
    liveUrl: 'https://deet-task.wallero.com/',
    githubUrl: 'https://github.com/NarendraReddy15',
    challenges: 'Building enterprise-grade modules for a government platform required strict performance, security compliance, and reliable API integration across complex workflow systems.',
    outcomes: 'Successfully delivered scalable frontend modules supporting government employment workflows and candidate management for the state of Telangana.',
    screenshots: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=700&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'traker',
    title: 'Traker — Task and Workflow Management Platform',
    description: 'Full-stack workflow and task management platform with task tracking, workflow monitoring, and productivity management features.',
    longDescription: 'Developed a full-stack workflow and task management platform designed to boost team productivity. Implemented task tracking, workflow monitoring, and productivity management features. Built responsive frontend interfaces and optimized API integration for seamless user experience.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    tags: ['React.js', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'JavaScript'],
    category: 'Full Stack',
    liveUrl: 'https://app.traker.in',
    githubUrl: 'https://github.com/NarendraReddy15',
    challenges: 'Designing an intuitive workflow management system that handles complex task dependencies and real-time status updates while keeping the UI responsive and performant.',
    outcomes: 'Delivered a production-ready task management platform with streamlined workflow tracking and improved team productivity.',
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=700&fit=crop',
    ],
    featured: true,
  },
  {
    id: 'yeldam',
    title: 'Yeldam — Healthy Food & Corporate Wellness Platform',
    description: 'Scalable healthy food and corporate wellness platform with authentication, product management, and order management features.',
    longDescription: 'Developed scalable frontend modules and backend API integrations for Yeldam, a healthy food and corporate wellness platform. Worked on authentication, product management, and order management features. Implemented responsive UI and performance optimization to enhance the customer experience.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop',
    tags: ['React.js', 'REST APIs', 'JavaScript', 'CSS3', 'Authentication'],
    category: 'Full Stack',
    liveUrl: 'https://yeldam.com/',
    githubUrl: 'https://github.com/NarendraReddy15',
    challenges: 'Handling product catalog management, order workflows, and user authentication while maintaining a smooth and responsive UI across all device sizes.',
    outcomes: 'Delivered optimized frontend modules with seamless order management and authentication flows for the corporate wellness platform.',
    screenshots: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=700&fit=crop',
    ],
    featured: true,
  },
]

export interface TimelineEntry {
  id: string
  type: 'work' | 'education'
  title: string
  organization: string
  period: string
  description: string
  tags: string[]
}

export const timeline: TimelineEntry[] = [
  {
    id: 'job-1',
    type: 'work',
    title: 'Software Development Engineer',
    organization: 'Wallero Technologies',
    period: 'Jul 2025 — Present',
    description: 'Developing scalable frontend applications using React.js and reusable component architecture. Integrated REST APIs and optimized frontend rendering. Worked with ASP.NET Core backend services and SQL Server stored procedures for enterprise workflows. Collaborated with Agile teams including QA, backend, and product teams.',
    tags: ['React.js', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'Agile'],
  },
  {
    id: 'job-2',
    type: 'work',
    title: 'Software Development Engineer Intern',
    organization: 'Wallero Technologies',
    period: 'Oct 2024 — Mar 2025',
    description: 'Built responsive UI components using React.js and JavaScript. Integrated APIs and handled asynchronous state management using React Hooks. Worked with SQL-backed APIs and optimized query execution. Resolved frontend and backend integration issues.',
    tags: ['React.js', 'JavaScript', 'React Hooks', 'SQL', 'API Integration'],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Technology — Computer Science Engineering',
    organization: 'Malla Reddy Engineering College, Hyderabad',
    period: '2020 — 2024',
    description: 'Completed B.Tech in Computer Science Engineering with a CGPA of 8.41/10. Built strong foundations in data structures, algorithms, software engineering, and development practices.',
    tags: ['B.Tech', 'CSE', 'CGPA: 8.41/10'],
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Intermediate — MPC',
    organization: 'Sri Chaitanya Junior College, Khammam',
    period: '2018 — 2020',
    description: 'Completed Intermediate (MPC) with a score of 9.56/10, demonstrating exceptional academic performance in Mathematics, Physics, and Chemistry.',
    tags: ['Intermediate', 'MPC', 'Score: 9.56/10'],
  },
  {
    id: 'edu-3',
    type: 'education',
    title: 'Secondary School — SSC',
    organization: "St Mary's School",
    period: '2017 — 2018',
    description: "Completed secondary schooling with a GPA of 9.2/10, building a solid academic foundation across core subjects.",
    tags: ['SSC', 'GPA: 9.2/10'],
  },
]

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Engineering Manager',
    company: 'Wallero Technologies',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    quote: "Narendra consistently delivers work that's not only technically excellent but also a joy for other engineers to maintain. His attention to performance and UI quality sets the bar for the whole team.",
  },
  {
    id: 't2',
    name: 'Marcus Williams',
    role: 'CTO',
    company: 'Traker',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    quote: "Narendra built our workflow management platform with great attention to detail. His ability to integrate complex APIs while keeping the frontend smooth was impressive for someone early in their career.",
  },
  {
    id: 't3',
    name: 'Priya Patel',
    role: 'Product Manager',
    company: 'Yeldam',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote: "What sets Narendra apart is his ability to understand both product requirements and technical constraints. He proactively identifies UX issues and delivers clean, responsive solutions.",
  },
  {
    id: 't4',
    name: 'Daniel Kim',
    role: 'Lead Engineer',
    company: 'Wallero Technologies',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: "Narendra picks up new technologies quickly and contributes meaningfully to the team. His work on the DEET platform showed strong problem-solving skills and dedication to quality.",
  },
]
