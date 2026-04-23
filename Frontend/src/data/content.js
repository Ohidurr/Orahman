// ─────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the site.
// Nothing else needs to change for content updates.
// ─────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ohidur Rahman',
  shortName: 'Ohidur',
  role: 'Site Reliability Engineer',
  location: 'New York City',
  status: 'Open to new roles & collaborations',
  available: true, // toggles the green dot
  tagline: [
    // split into words/phrases so the hero can animate them in
    { text: 'Site', em: false },
    { text: 'reliability', em: false },
    { text: 'engineer', em: false },
    { text: 'building', em: false },
    { text: 'systems', em: false },
    { text: 'that', em: false },
    { text: 'stay', em: false },
    { text: 'up.', em: true },
  ],
  blurbs: {
    currently:
      'Site Reliability Engineer at Bruin Group, working across wireless and cloud infrastructure. I care about uptime, observability, and the small design decisions that make on-call humane.',
    background:
      'City College of New York alum and Pursuit Fellowship graduate (cohort 6.4). Full-stack background: TypeScript, Python, Node, Postgres, and whatever the incident needs.',
  },
};

export const links = {
  email: 'ohidur.rahman@example.com', // ← replace with real
  github: 'https://github.com/Ohidurr',
  linkedin: 'https://linkedin.com/in/Ohidur-Rahman',
  x: 'https://x.com/_Ohidur',
  resume: '/resume.pdf', // place resume.pdf in /public
};

// ─── Projects ────────────────────────────────────────────────────
// Replace with real projects. Keep 3–6 for best visual balance.
export const projects = [
  {
    year: '2025',
    title: 'Observability pipeline overhaul',
    description:
      'Rebuilt metrics + tracing stack across multi-region services. Cut median incident detection time from 14 min to under 90 sec.',
    tags: ['SRE', 'Prometheus', 'OpenTelemetry'],
    href: '#', // link to case study or GitHub
  },
  {
    year: '2025',
    title: 'On-call runbook generator',
    description:
      'Internal tool that turns post-mortem notes into structured runbooks. Built with TypeScript and a small LLM pipeline.',
    tags: ['TypeScript', 'Node', 'LLM'],
    href: '#',
  },
  {
    year: '2024',
    title: 'Wireless network health dashboard',
    description:
      'Real-time signal-quality and device-state dashboard for a national wireless deployment. React + WebSockets.',
    tags: ['React', 'WebSockets', 'Python'],
    href: '#',
  },
  {
    year: '2024',
    title: 'Pursuit capstone — community finance app',
    description:
      'Full-stack platform for rotating savings groups (ROSCAs), built in a team of four at Pursuit Fellowship.',
    tags: ['PERN stack', 'Postgres', 'Team project'],
    href: '#',
  },
];

// ─── Experience (for the About/Resume section) ───────────────────
export const experience = [
  {
    when: '2024 —',
    title: 'Bruin Group LLC',
    detail: 'Site Reliability Engineer — wireless & cloud infrastructure',
  },
  {
    when: '2023 — 24',
    title: 'Pursuit Fellowship',
    detail: 'Software engineering fellow, cohort 6.4 (full-stack web)',
  },
  {
    when: '— 2023',
    title: 'The City College of New York',
    detail: 'B.S., Computer Science',
  },
];

export const skills = [
  'TypeScript', 'Python', 'Node.js', 'React',
  'PostgreSQL', 'Linux', 'AWS', 'Docker',
  'Prometheus', 'Grafana', 'Git', 'Bash',
];

// ─── Writing / notes (optional — leave empty array to hide) ──────
export const writing = [
  {
    tag: 'Note',
    title: 'What a good post-mortem actually sounds like',
    date: 'Mar 2026',
    readTime: '6 min',
    href: '#',
  },
  {
    tag: 'Essay',
    title: 'On-call is a design problem',
    date: 'Jan 2026',
    readTime: '9 min',
    href: '#',
  },
];

// ─── Nav items ───────────────────────────────────────────────────
export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];
