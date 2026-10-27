export type CategorySlug =
  | 'videos-ads'
  | 'ai-agents'
  | 'n8n'
  | 'websites'
  | 'saas-products'
  | 'market-research'
  | 'case-studies'
  | 'campaigns-analytics';
export type Industry = 'Content Creation' | 'E-commerce' | 'Finance' | 'Real Estate' | 'Healthcare';

export interface CategoryInfo {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface CapabilityGroup {
  categorySlug: CategorySlug;
  title: string;
  services: string[];
}

export interface SiteStats {
  videosMade: number | null;
  adsRun: number | null;
  agentsBuilt: number | null;
  websites: number | null;
  industries: number | null;
}

// TODO: replace with your booking URL (e.g. Cal.com or Calendly)
export const bookingUrl = 'https://cal.com/TODO';

export const brandName = 'Parvaaz';
export const brandNameUpper = 'PARVAAZ';
export const brandMotto = 'Rise • Grow • Succeed';

export const contactEmail = 'parwaazcompany@gmail.com';

export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'instagram' | 'youtube' | 'facebook';
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/parvaaz-digital-27878a421/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/parvaaz_official__/',
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@IrisEyeAI',
    icon: 'youtube',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61572118860851',
    icon: 'facebook',
  },
];

// Site numbers shown in the Numbers row on the homepage.
// Set to null until verified real numbers are provided.
export const stats: SiteStats = {
  // TODO: add verified count of videos made
  videosMade: null,
  // TODO: add verified count of ads run
  adsRun: null,
  // TODO: add verified count of AI agents built
  agentsBuilt: null,
  // TODO: add verified count of websites launched
  websites: null,
  // TODO: add verified count of industries served
  industries: null,
};

// 4-step studio process shown on the homepage and process section.
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    // TODO: update with final copy
    description: 'We review your goals, audience, and constraints in detail. You get a clear scope and timeline before any work begins.',
  },
  {
    number: '02',
    title: 'Plan',
    // TODO: update with final copy
    description: 'We define the architecture, script, or design system. Every deliverable is mapped to a tangible business outcome.',
  },
  {
    number: '03',
    title: 'Build',
    // TODO: update with final copy
    description: 'We execute the production, coding, or agent integration. Weekly updates keep you informed at every milestone.',
  },
  {
    number: '04',
    title: 'Launch',
    // TODO: update with final copy
    description: 'We deploy, test across environments, and hand over full ownership. Ongoing support is provided as needed.',
  },
];

export const categories: CategoryInfo[] = [
  {
    slug: 'videos-ads',
    name: 'Videos & Ads',
    description: 'Hotel films, commercials, paid ads',
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents',
    description: 'WhatsApp, email, voice and audit agents',
  },
  {
    slug: 'n8n',
    name: 'AI Automations',
    description: 'Autonomous workflows and intelligent system automations',
  },
  {
    slug: 'websites',
    name: 'Websites',
    description: 'Design and development for business sites',
  },
  {
    slug: 'saas-products',
    name: 'SaaS & Products',
    description: 'Software products built from idea to launch',
  },
  {
    slug: 'case-studies',
    name: 'Projects & Case Studies',
    description: 'Brand positioning, competitive growth, and market expansion case studies',
  },
  {
    slug: 'market-research',
    name: 'Market Research & Audits',
    description: 'Audience psychology, competitive intelligence, and workflow audits',
  },
  {
    slug: 'campaigns-analytics',
    name: 'Campaigns & Analytics',
    description: 'Full campaign performance reports, attribution metrics, and ROI analysis',
  },
];

export const industries: Industry[] = [
  'Content Creation',
  'E-commerce',
  'Finance',
  'Healthcare',
  'Real Estate',
];

export const capabilities: CapabilityGroup[] = [
  {
    categorySlug: 'videos-ads',
    title: 'Video & Ads',
    services: ['Creative direction', 'Production', 'Paid ads', 'Editing'],
  },
  {
    categorySlug: 'ai-agents',
    title: 'AI Agents',
    services: ['WhatsApp agents', 'Email agents', 'Voice agents', 'Auditing'],
  },
  {
    categorySlug: 'n8n',
    title: 'AI Automations',
    services: ['GoHighLevel workflows', 'n8n automations', 'CRM pipelines', 'Multi-channel nurture'],
  },
  {
    categorySlug: 'websites',
    title: 'Websites',
    services: ['Design', 'Development', 'SEO', 'Maintenance'],
  },
  {
    categorySlug: 'saas-products',
    title: 'Products',
    services: ['Strategy', 'MVP builds', 'Automation', 'Support'],
  },
];
