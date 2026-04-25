// ─────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ohidur Rahman',
  shortName: 'Ohidur',
  role: 'Site Reliability Engineer',
  location: 'New York, NY',
  status: 'Open to new roles & collaborations',
  available: true,

  // Three views toggled by the Recruiter / Engineer / Executive buttons
  summary: {
    recruiter:
      'SRE who cut MTTR from 3hr+ to under 60 min and ships observability teams actually use.',
    engineer:
      'Production SRE working in observability, incident response, and AIOps. Cut MTTR 3hr → <60 min via standardized RCA and Prometheus + OpsGenie tooling. Currently exploring Claude Code, MCP, and agent workflows for next-gen runbook automation.',
    executive:
      'Reliability engineer who reduced incident resolution time by 67% while leading cross-team incident response, onboarding, and tooling adoption. Operates with GSA Public Trust clearance.',
  },
  // Phrase to highlight in each summary view
  summaryHighlight: {
    recruiter: 'cut MTTR from 3hr+ to under 60 min',
    engineer: 'Cut MTTR 3hr → <60 min',
    executive: 'reduced incident resolution time by 67%',
  },
};

// Replace with real values before deploying
export const links = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  twitter: 'https://twitter.com/your-handle',
  resume: '/resume.pdf', // place a real resume.pdf in /public
};

export const experience = [
  {
    when: 'Jan 2023 — Present',
    title: 'Site Reliability Engineer',
    company: 'Bruin Group LLC',
    tag: 'Full-time · NYC',
    bullets: [
      { text: '<strong>Cut mean time to resolution from 3+ hours to under 60 minutes</strong> by deploying standardized RCA workflows and post-mortem processes that improved system resilience and accountability.' },
      { text: '<strong>Stood up a real-time observability stack</strong> (Prometheus, Grafana, Splunk, OpsGenie) — surfacing incidents to core teams before they reach end users.' },
      { text: '<strong>Led onboarding and training programs</strong> for new engineers — centralizing documentation in Jira and Confluence and turning repeat questions into structured knowledge.', leadership: 'Leadership' },
      { text: '<strong>Authored operational runbooks</strong> that standardized incident response and reduced recovery time across the on-call rotation.' },
      { text: '<strong>Integrated Resolve.ai AIOps agent</strong> into incident response — using prompted workflows to triage and route alerts, accelerating first-response cycles.' },
    ],
  },
  {
    when: 'Jun 2021 — Dec 2022',
    title: 'Software Support Engineer',
    company: 'Bruin Group LLC',
    tag: 'Full-time · NYC',
    bullets: [
      { text: '<strong>Maintained 93% SLA compliance across 2,000+ tickets</strong> while serving as technical liaison between engineering and operations — surfacing systemic issues that became permanent fixes.', leadership: 'Liaison' },
      { text: '<strong>Performed deep debugging</strong> using logs, metrics, and tracing to diagnose performance bottlenecks and system failures across the stack.' },
      { text: '<strong>Documented troubleshooting procedures</strong> and built knowledge-base articles that reduced overall resolution time across the support org.' },
    ],
  },
  {
    when: 'Feb 2020 — May 2021',
    title: 'MDM Engineer',
    company: 'Mettel',
    tag: 'Full-time · NYC',
    bullets: [
      { text: '<strong>Operated cloud-based MDM fleet supporting 100,000+ enterprise devices</strong> at scale, with reliability and uptime as core responsibilities.' },
      { text: '<strong>Managed OTA updates and secure deployments</strong> aligned with governance and compliance frameworks for federal and enterprise clients.' },
      { text: '<strong>Researched OS releases and security updates</strong> and communicated compatibility impacts directly to clients to prevent service disruptions.' },
    ],
  },
];

export const skillGroups = [
  {
    name: 'AI Agents & Prompting',
    badge: 'Active',
    items: [
      'Resolve.ai (AIOps)',
      'LLM-assisted runbooks',
      'Prompt design for incident triage',
      { name: 'Claude Code', exploring: true },
      { name: 'MCP (Model Context Protocol)', exploring: true },
      { name: 'Custom agent workflows', exploring: true },
    ],
  },
  {
    name: 'Observability & Incident Response',
    items: ['Prometheus', 'Grafana', 'Splunk', 'OpsGenie', 'RCA workflows', 'Runbook design', 'Post-mortem facilitation'],
  },
  {
    name: 'Infrastructure & Tools',
    items: ['Kubernetes', 'Docker', 'HashiCorp Vault', 'ArgoCD', 'TeamCity', 'Apache Solr'],
  },
  {
    name: 'Languages & APIs',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'REST', 'React', 'Tableau'],
  },
  {
    name: 'Leadership & Communication',
    items: ['Onboarding & training', 'Cross-team liaison', 'Technical writing', 'Stakeholder communication', 'Knowledge-base authoring'],
  },
  {
    name: 'DevOps & Workflow',
    items: ['GitHub', 'Jira', 'ServiceNow', 'Octopus Deploy', 'Confluence'],
  },
  {
    name: 'Other',
    items: ['GSA Public Trust', 'OutSystems'],
  },
];

export const projects = [
  {
    tag: 'Infrastructure',
    title: 'Kubernetes Credential Management',
    bullets: [
      'Identified and proposed HashiCorp Vault integration to securely manage secrets and protect sensitive data within internal Kubernetes clusters.',
      'Led end-to-end implementation of centralized secrets management — reducing credential exposure and improving deployment security.',
    ],
    href: '#',
  },
  {
    tag: 'Automation',
    title: 'Bulk Solr Synchronization',
    bullets: [
      'Built automation scripts to perform bulk syncs of Apache Solr endpoints across environments.',
      'Created internal tool to process manual sync requests in bulk — reducing time for large-scale data reconciliation.',
    ],
    href: '#',
  },
];

export const education = [
  {
    title: 'B.E., Computer Engineering',
    school: 'City College of New York — Grove School of Engineering',
    when: 'Graduated May 2020',
  },
];

export const now =
  'On-call rotation at Bruin Group. Reading <em>The Phoenix Project</em>. Building with <em>Claude Code</em> and <em>MCP servers</em> to bring agent workflows into SRE operations.';

export const dailyWords = [
  { title: 'Toil',           body: 'Manual, repetitive, automatable work that scales linearly with service growth. The thing you should be eliminating, not normalizing.' },
  { title: 'Idempotent',     body: 'An operation you can apply multiple times with the same effect as applying it once. The single most important property of a safe deploy.' },
  { title: 'Blameless',      body: 'A post-mortem culture that treats failures as systemic, not personal. Engineers who fear blame hide information; those who don\'t make systems better.' },
  { title: 'Backpressure',   body: 'The mechanism by which a slow consumer signals to a fast producer to slow down. Without it, queues become bombs.' },
  { title: 'Quorum',         body: 'In distributed systems: the minimum number of nodes that must agree before an operation is considered committed. The line between consistency and availability.' },
  { title: 'Cardinality',    body: 'The number of unique values in a metric label. High cardinality is the silent killer of monitoring systems and observability budgets.' },
  { title: 'Saturation',     body: 'How "full" a resource is — one of the four golden signals (with latency, traffic, and errors). Often more predictive of failure than utilization.' },
  { title: 'Brownout',       body: 'A controlled, partial degradation — turning off non-critical features early to preserve the critical path. The opposite of a hard failure.' },
  { title: 'Thundering herd',body: 'When many clients retry simultaneously after an outage, overwhelming the recovering service. Solved with jitter, exponential backoff, and circuit breakers.' },
  { title: 'SLO',            body: 'Service Level Objective: the internal reliability target. Differs from an SLA (the customer promise) and an SLI (the actual measurement). The middle term is where engineering decisions live.' },
  { title: 'Bulkhead',       body: 'An isolation pattern that contains failure within a single compartment so the rest of the system stays afloat. Borrowed from ship design.' },
  { title: 'Chaos Engineering', body: 'The discipline of deliberately injecting failures into production systems to surface weaknesses before they become incidents.' },
  { title: 'Cattle, not pets', body: 'Servers as interchangeable, replaceable units rather than uniquely-named, hand-cared-for machines. Shifts maintenance from artisanship to automation.' },
  { title: 'Error budget',   body: 'The amount of unreliability you\'re allowed to accumulate before you must stop shipping features. Makes the reliability/velocity tradeoff explicit and quantitative.' },
];

export const dailyFacts = [
  { body: 'Google\'s original SRE handbook coined the term "error budget" — explicitly accepting that 100% reliability is the wrong target because the marginal cost outweighs the marginal value.' },
  { body: 'The first widely-recognized post-mortem in software was written by Mariner I engineers in 1962. A single missing hyphen in FORTRAN code crashed a $135M ($1.4B today) Venus probe 293 seconds after launch.' },
  { body: 'AWS S3 was designed for 99.999999999% (eleven nines) durability. If you stored 10 million objects, you\'d statistically expect to lose one every 10,000 years.' },
  { body: 'Netflix\'s Chaos Monkey was born from the realization that you cannot trust untested failure modes — so they started randomly killing production servers to verify resilience.' },
  { body: 'The 2017 AWS S3 outage that broke half the internet was caused by a typo in a debugging command — meant to remove a few servers, the command removed too many.' },
  { body: 'The "five nines" standard (99.999%) allows just 5 minutes 15 seconds of downtime per year. Most consumer SaaS targets three nines (~8.7 hours/year) and most teams overestimate their actual reliability.' },
  { body: 'Stack Overflow runs on a famously small fleet of physical servers — at one point under 25 — disproving the cloud assumption that scale must mean horizontal sprawl.' },
  { body: 'The original GitHub status page outages were tracked by hand on a whiteboard. The discipline of public incident reporting only became normal after Twitter\'s "fail whale" era forced transparency.' },
  { body: 'Cloudflare\'s 2019 outage was triggered by a single regular-expression rule that took 27% of its CPU. One bad regex took down a meaningful fraction of the web.' },
  { body: 'Facebook\'s 2021 six-hour BGP outage locked employees out of their offices because the badge readers depended on the same network. Reliability and physical security are entangled in unexpected ways.' },
  { body: 'The term "site reliability engineering" was coined at Google by Ben Treynor Sloss in 2003, describing it as "what happens when you ask a software engineer to design an operations team."' },
  { body: 'The most expensive software bug in history was Knight Capital\'s 2012 trading glitch — a stale config flag activated dead code that lost $440M in 45 minutes.' },
];

export const palettes = ['aurora', 'sunset', 'ocean', 'forest', 'nebula', 'ember', 'parchment'];

export const paletteMeta = {
  aurora:    { name: 'Aurora',    hint: 'violet · cyan · pink' },
  sunset:    { name: 'Sunset',    hint: 'coral · amber · rose' },
  ocean:     { name: 'Ocean',     hint: 'teal · blue · mint' },
  forest:    { name: 'Forest',    hint: 'sage · emerald · bronze' },
  nebula:    { name: 'Nebula',    hint: 'magenta · purple · cyan' },
  ember:     { name: 'Ember',     hint: 'red · orange · crimson' },
  parchment: { name: 'Parchment', hint: 'warm cream · sepia · sage' },
};
