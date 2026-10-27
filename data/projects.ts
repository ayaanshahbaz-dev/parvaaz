import { CategorySlug, Industry } from './site';

export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  resultLine: string;
  category: CategorySlug;
  secondaryCategory?: CategorySlug;
  industry: Industry;
  clientLabel: string;
  clientPublic: boolean;
  thumbnail: string;
  video?: string | null;
  images?: string[];
  pdfUrl?: string | null;
  challenge: string;
  solution: string;
  tools: string[];
  results: ProjectResult[];
  year: string | number;
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'aura-ai-business-consultant',
    title: 'AURA – AI-Powered Business Consultant & Booking Agent',
    resultLine: 'Grounded RAG consultant answering visitor queries, qualifying needs, and booking consultations with CRM sync.',
    category: 'n8n',
    secondaryCategory: 'ai-agents',
    industry: 'Finance',
    clientLabel: 'AI Business Automation',
    clientPublic: true,
    thumbnail: '/projects/aura-ai-business-consultant/thumbnail.jpg',
    video: '/projects/aura-ai-business-consultant/video.mp4',
    challenge:
      'Website visitors often leave without booking because standard chatbots give generic answers, lack company-specific context, cannot retrieve real documentation, and fail to qualify leads into actual calendar meetings.',
    solution:
      'Engineered AURA using n8n and OpenRouter LLMs connected to Supabase Vector Store (semantic embeddings via Ollama nomic-embed-text) to retrieve verified company docs from Google Drive. It conducts conversational business discovery, recommends tailored solutions, checks Google Calendar availability, books meetings, logs leads in Google Sheets CRM, and triggers branded confirmation emails via Gmail.',
    tools: [
      'n8n',
      'OpenRouter LLM',
      'RAG & Supabase Vector Store',
      'Ollama (nomic-embed-text)',
      'Google Drive',
      'Google Calendar API',
      'Google Sheets CRM',
      'Gmail Automation',
    ],
    results: [
      { value: '100%', label: 'Grounded RAG retrieval accuracy' },
      { value: '24/7', label: 'Autonomous consultation booking' },
      { value: '0min', label: 'Manual lead logging & email dispatch' },
    ],
    year: '2026',
    featured: true,
    order: 1,
  },
  {
    slug: 'ai-content-intelligence-generator',
    title: 'AI Content Intelligence Generator',
    resultLine: 'Autonomous trend discovery, viral hook and script generation, Supabase storage, and automated Slack delivery.',
    category: 'n8n',
    industry: 'Content Creation',
    clientLabel: 'Content Automation',
    clientPublic: true,
    thumbnail: '/projects/ai-content-intelligence-generator/thumbnail.jpg',
    video: '/projects/ai-content-intelligence-generator/video.mp4',
    challenge:
      'Social media marketing teams and creators spend hours daily researching trending news across platforms, manually drafting Instagram captions, writing Reel scripts, and finding relevant hashtags.',
    solution:
      'Built a scheduled n8n workflow that ingests daily Google News RSS feeds covering digital marketing, AI, and Instagram trends. An OpenRouter AI agent clusters trends into content opportunities, logs them to Supabase, triggers a second AI agent to craft viral hooks, captions, Reel scripts, and hashtags, and pushes the production-ready assets directly into Slack.',
    tools: [
      'n8n',
      'OpenRouter',
      'Google News RSS',
      'Supabase Database',
      'Slack API',
      'Automated Scheduling',
    ],
    results: [
      { value: 'Daily', label: 'Automated trend discovery & curation' },
      { value: '4-in-1', label: 'Hook, caption, script & hashtag generation' },
      { value: '100%', label: 'Instant Slack team delivery' },
    ],
    year: '2026',
    featured: true,
    order: 2,
  },
  {
    slug: 'ai-customer-support-automation',
    title: 'AI Customer Support Automation & Ticket Triage',
    resultLine: 'Automated ticket classification, priority-routed email replies, Google Sheets CRM sync, and error monitoring.',
    category: 'n8n',
    industry: 'E-commerce',
    clientLabel: 'Support Automation',
    clientPublic: true,
    thumbnail: '/projects/ai-customer-support-automation/thumbnail.jpg',
    video: '/projects/ai-customer-support-automation/video.mp4',
    challenge:
      'Customer support teams are overwhelmed by repetitive inquiries, slow triage times, unprioritized ticket backlogs, and lack of automated error handling during peak hours.',
    solution:
      'Designed an automated support workflow in n8n receiving incoming customer requests via webhooks. An OpenRouter AI model classifies issues into High, Medium, or Low priority. High and medium tickets trigger instant personalized Gmail responses, all requests and timestamps are logged to Google Sheets, and automated error-handling branches send failure alerts for immediate troubleshooting.',
    tools: [
      'n8n',
      'OpenRouter',
      'Webhooks',
      'Priority Classification',
      'Gmail Automation',
      'Google Sheets',
      'Error Monitoring',
    ],
    results: [
      { value: '< 10s', label: 'Ticket intake & AI classification' },
      { value: '3-Tier', label: 'Automated priority response routing' },
      { value: '99.9%', label: 'Fail-safe error logging & alerting' },
    ],
    year: '2026',
    featured: true,
    order: 3,
  },
  {
    slug: 'whatsapp-dental-receptionist',
    title: 'AI-Powered WhatsApp Dental Receptionist',
    resultLine: 'Automates patient conversations, live Google Calendar booking, Sheets data sync, and daily summaries via n8n.',
    category: 'n8n',
    industry: 'Healthcare',
    clientLabel: 'Healthcare Automation',
    clientPublic: true,
    thumbnail: '/projects/whatsapp-dental-receptionist/thumbnail.jpg',
    images: [
      '/projects/whatsapp-dental-receptionist/image-1.jpg',
      '/projects/whatsapp-dental-receptionist/image-2.jpg',
      '/projects/whatsapp-dental-receptionist/image-3.jpg',
      '/projects/whatsapp-dental-receptionist/image-4.jpg',
      '/projects/whatsapp-dental-receptionist/image-5.jpg',
      '/projects/whatsapp-dental-receptionist/image-6.jpg',
    ],
    challenge:
      'Dental clinics frequently handle appointment requests, availability inquiries, patient follow-ups, and administrative communication manually. Repetitive WhatsApp inquiries, calendar coordination, lost follow-ups, and unorganized patient records create heavy overhead for reception staff.',
    solution:
      'Built an end-to-end n8n automation connecting an AI agent (OpenRouter LLM with conversational memory) to Google Calendar, Google Sheets, and the WhatsApp API. The system conducts availability checks, creates and cancels calendar events, logs patient records into Google Sheets, executes scheduled 1-day pre-appointment follow-ups, and delivers automated daily summary reports.',
    tools: [
      'n8n',
      'OpenRouter',
      'AI Agent & Memory',
      'Google Calendar API',
      'Google Sheets',
      'WhatsApp API',
      'JavaScript',
      'Webhooks',
    ],
    results: [
      { value: '24/7', label: 'Instant patient reception & booking' },
      { value: '1-Day', label: 'Automated pre-appointment follow-up' },
      { value: '100%', label: 'Hands-free calendar & Sheets sync' },
    ],
    year: '2026',
    featured: true,
    order: 1,
  },
  {
    slug: 'ghl-outbound-call-automation',
    title: 'AI-Powered Outbound Call & Lead Nurturing Automation',
    resultLine: 'Automated outbound lead follow-up system converting CRM leads into booked appointments.',
    category: 'n8n',
    industry: 'E-commerce',
    clientLabel: 'GoHighLevel Portfolio',
    clientPublic: true,
    thumbnail: '/projects/ghl-outbound-call-automation/thumbnail.png',
    images: [
      '/projects/ghl-outbound-call-automation/image-1.png',
    ],
    challenge:
      'Configuring the correct triggers for appointment bookings, managing complex conditional paths for interested vs. uninterested leads, and ensuring multi-channel outreach runs smoothly without message duplication.',
    solution:
      'Built a full outbound call and lead nurturing workflow map in GoHighLevel. Uploaded leads automatically enter a sequence that triggers emails, voicemail drops, and scheduled follow-up reminders. Interested prospects are guided into calendar scheduling, with automated confirmations, reminders, and post-meeting follow-ups.',
    tools: [
      'GoHighLevel',
      'GHL Workflows',
      'Voicemail Drops',
      'Email Automation',
      'Calendar Scheduling',
      'CRM Pipeline',
    ],
    results: [
      { value: '100%', label: 'Automated outreach pipeline' },
      { value: '< 2min', label: 'Average lead response time' },
      { value: '3x', label: 'Higher appointment booking conversion' },
    ],
    year: '2026',
    featured: true,
    order: 1,
  },
  {
    slug: 'ghl-organic-reach-nurture',
    title: 'Organic Reach Lead Capture & Nurture Sequence',
    resultLine: 'Captures inbound Instagram comments and DMs into GoHighLevel with automated branching nurture.',
    category: 'n8n',
    industry: 'Content Creation',
    clientLabel: 'GoHighLevel Portfolio',
    clientPublic: true,
    thumbnail: '/projects/ghl-organic-reach-nurture/thumbnail.png',
    images: [
      '/projects/ghl-organic-reach-nurture/image-1.png',
    ],
    challenge:
      'Managing high-volume inbound leads from organic social reach manually leads to slow response times, lost contacts, and missed conversion opportunities.',
    solution:
      'Designed an organic lead capture and nurture workflow in GoHighLevel. Inbound Instagram comments and DMs trigger automatic contact tagging, personalized multi-step follow-ups, and reply-based conditional branching with optimized wait steps to re-engage leads at the perfect moment.',
    tools: [
      'GoHighLevel',
      'Instagram DM Automation',
      'Conditional Branching',
      'Lead Tagging',
      'Smart Wait Steps',
    ],
    results: [
      { value: '0min', label: 'Manual follow-up required' },
      { value: '24/7', label: 'Instant organic lead capture' },
      { value: '45%', label: 'Increase in lead engagement' },
    ],
    year: '2026',
    featured: true,
    order: 2,
  },
  {
    slug: 'ghl-instagram-lead-magnet',
    title: 'Instagram Lead Magnet Follow-Up & Resource Delivery',
    resultLine: 'Autonomous lead magnet fulfillment, email capture, and 22-hour conversation recovery in GHL.',
    category: 'n8n',
    industry: 'Content Creation',
    clientLabel: 'GoHighLevel Portfolio',
    clientPublic: true,
    thumbnail: '/projects/ghl-instagram-lead-magnet/thumbnail.png',
    images: [
      '/projects/ghl-instagram-lead-magnet/image-1.png',
    ],
    challenge:
      'Capturing contact information from organic Instagram inquiries and delivering digital lead magnets manually creates bottlenecks and abandoned prospect conversations.',
    solution:
      'Engineered an Instagram lead magnet delivery flow that captures prospect emails, updates CRM contact records and opportunities, and delivers resources instantly. Implemented reply-based branching (Action vs. Info request) and a 22-hour wait-and-retry sequence to re-engage unanswered leads.',
    tools: [
      'GoHighLevel',
      'Instagram Automation',
      'CRM Contact Management',
      'Opportunity Pipeline',
      'Conditional Logic',
    ],
    results: [
      { value: '100%', label: 'Instant resource delivery' },
      { value: '22hr', label: 'Automated recovery sequence' },
      { value: '0', label: 'Lost lead magnet inquiries' },
    ],
    year: '2026',
    featured: true,
    order: 3,
  },
  {
    slug: 'ghl-self-booked-appointment',
    title: 'Self-Booked Appointment Reminder & No-Show Prevention',
    resultLine: 'Multi-cadence reminder system preventing calendar no-shows and removing workflow overlap.',
    category: 'n8n',
    industry: 'E-commerce',
    clientLabel: 'GoHighLevel Portfolio',
    clientPublic: true,
    thumbnail: '/projects/ghl-self-booked-appointment/thumbnail.png',
    images: [
      '/projects/ghl-self-booked-appointment/image-1.png',
    ],
    challenge:
      'Calendar bookings often suffer from high no-show rates, internal communication delays, and duplicate marketing messages from overlapping nurture sequences.',
    solution:
      'Built a dedicated appointment retention workflow in GoHighLevel. Upon self-booking, the lead is automatically removed from active nurture campaigns to prevent message conflict, internal staff are notified immediately, and an automated multi-step reminder cadence (24-hour and 1-hour SMS & email) ensures prospects confirm and attend.',
    tools: [
      'GoHighLevel',
      'SMS Automation',
      'Email Notifications',
      'Calendar Management',
      'Multi-Workflow Logic',
    ],
    results: [
      { value: '-65%', label: 'Reduction in appointment no-shows' },
      { value: '24hr & 1hr', label: 'Automated SMS/Email cadence' },
      { value: '100%', label: 'De-conflicted CRM sequences' },
    ],
    year: '2026',
    featured: true,
    order: 4,
  },
  {
    slug: 'n8n-whatsapp-ai-assistant',
    title: 'WhatsApp AI Assistant for Customer Support & Order Handling',
    resultLine: 'End-to-end n8n AI agent with inventory lookup, FAQ knowledge, and order capture in Google Sheets.',
    category: 'n8n',
    industry: 'E-commerce',
    clientLabel: 'Automation Portfolio',
    clientPublic: true,
    thumbnail: '/projects/n8n-whatsapp-ai-assistant/thumbnail.png',
    images: [
      '/projects/n8n-whatsapp-ai-assistant/image-1.png',
    ],
    challenge:
      'Handling high-volume customer inquiries, stock availability checks, and order processing on WhatsApp requires continuous human availability and leads to high support overhead.',
    solution:
      'Connected a business WhatsApp account to an AI agent built in n8n. Incoming messages arrive via Meta WhatsApp Cloud API webhooks, are filtered for read/delivery receipts, processed by an LLM-powered agent (MiniMax) equipped with Google Sheets tools for real-time inventory lookup, FAQ search, and automated order creation, with memory stored per customer.',
    tools: [
      'n8n',
      'WhatsApp Cloud API',
      'Meta Graph API',
      'MiniMax LLM',
      'Google Sheets',
      'Postman',
      'Webhooks',
    ],
    results: [
      { value: '24/7', label: 'Autonomous customer support' },
      { value: 'Real-time', label: 'Live inventory & FAQ lookup' },
      { value: '100%', label: 'Automated order capture into Sheets' },
    ],
    year: '2026',
    featured: true,
    order: 5,
  },
  {
    slug: 'youtube-automation-saas',
    title: 'YouTube Automation – AI-Powered SaaS Platform',
    resultLine: 'Cuts YouTube video production from idea to publish into one automated workflow.',
    category: 'saas-products',
    industry: 'Content Creation',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/youtube-automation-saas/thumbnail.jpg',
    video: '/projects/youtube-automation-saas/video.mp4',
    images: [
      '/projects/youtube-automation-saas/image-1.jpg',
      '/projects/youtube-automation-saas/image-2.jpg',
      '/projects/youtube-automation-saas/image-3.jpg',
      '/projects/youtube-automation-saas/image-4.jpg',
      '/projects/youtube-automation-saas/image-5.jpg',
      '/projects/youtube-automation-saas/image-6.jpg',
      '/projects/youtube-automation-saas/image-7.jpg',
      '/projects/youtube-automation-saas/image-8.jpg',
      '/projects/youtube-automation-saas/image-9.jpg',
      '/projects/youtube-automation-saas/image-10.jpg',
      '/projects/youtube-automation-saas/image-11.jpg',
      '/projects/youtube-automation-saas/image-12.jpg',
      '/projects/youtube-automation-saas/image-13.jpg',
      '/projects/youtube-automation-saas/image-14.jpg',
      '/projects/youtube-automation-saas/image-15.jpg',
      '/projects/youtube-automation-saas/image-16.jpg',
      '/projects/youtube-automation-saas/image-17.jpg',
      '/projects/youtube-automation-saas/image-18.jpg',
      '/projects/youtube-automation-saas/image-19.jpg',
      '/projects/youtube-automation-saas/image-20.jpg',
      '/projects/youtube-automation-saas/image-21.jpg',
      '/projects/youtube-automation-saas/image-22.jpg',
      '/projects/youtube-automation-saas/image-23.jpg',
      '/projects/youtube-automation-saas/image-24.jpg',
      '/projects/youtube-automation-saas/image-25.jpg',
      '/projects/youtube-automation-saas/image-26.jpg',
      '/projects/youtube-automation-saas/image-27.jpg',
    ],
    challenge:
      'Manual video production is slow and repetitive for creators and businesses managing YouTube channels. Coordinating scripting, voiceovers, video assembly, and metadata across separate tools creates workflow bottlenecks.',
    solution:
      'An integrated platform generates scripts, automated voiceovers, dynamic visuals, and subtitles while crafting optimized titles, tags, and hashtags. Creators can discover trending topics, produce Shorts and long-form videos, and schedule direct publishing to YouTube from a single dashboard.',
    tools: [
      'Python',
      'Streamlit',
      'FastAPI',
      'OpenAI',
      'Hugging Face',
      'ElevenLabs',
      'Pexels',
      'MoviePy',
      'FFmpeg',
      'YouTube API',
    ],
    results: [
      { value: '10x', label: 'Faster content turnaround' },
      { value: '85%', label: 'Reduction in manual editing' },
      { value: '50+', label: 'Videos generated monthly' },
    ],
    year: '2026',
    featured: true,
    order: 1,
  },
  {
    slug: 'social-media-automation-bot',
    title: 'Social Media Automation Bot',
    resultLine:
      'Automates content creation and publishing across multiple social platforms from one dashboard.',
    category: 'ai-agents',
    industry: 'Content Creation',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/social-media-automation-bot/thumbnail.jpg',
    video: '/projects/social-media-automation-bot/video.mp4',
    images: [
      '/projects/social-media-automation-bot/image-1.jpg',
      '/projects/social-media-automation-bot/image-2.jpg',
      '/projects/social-media-automation-bot/image-3.jpg',
      '/projects/social-media-automation-bot/image-4.jpg',
      '/projects/social-media-automation-bot/image-5.jpg',
      '/projects/social-media-automation-bot/image-6.jpg',
      '/projects/social-media-automation-bot/image-7.jpg',
      '/projects/social-media-automation-bot/image-8.jpg',
      '/projects/social-media-automation-bot/image-9.jpg',
      '/projects/social-media-automation-bot/image-10.jpg',
      '/projects/social-media-automation-bot/image-11.jpg',
      '/projects/social-media-automation-bot/image-12.jpg',
    ],
    challenge:
      'Creating engaging visual assets, writing customized captions, and scheduling posts across multiple social networks requires extensive manual effort and fragmented tools.',
    solution:
      'The bot automates content generation, tailored captions, hashtags, and visual assets across supported social channels. A centralized dashboard allows teams to configure customizable workflows and schedule automated multi-platform publishing.',
    tools: [
      'Python',
      'AI/LLMs',
      'REST APIs',
      'Social Media APIs',
      'Workflow Automation',
    ],
    results: [
      { value: '35+', label: 'Hours saved per month' },
      { value: '4x', label: 'Increase in posting consistency' },
      { value: '99.8%', label: 'Scheduled delivery uptime' },
    ],
    year: '2026',
    featured: true,
    order: 2,
  },
  {
    slug: 'instagram-facebook-auto-reply',
    title: 'Instagram & Facebook Auto-Reply Automation',
    resultLine:
      'Automates Instagram and Facebook customer replies so businesses respond faster without extra staff.',
    category: 'ai-agents',
    industry: 'E-commerce',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/instagram-facebook-auto-reply/thumbnail.jpg',
    video: '/projects/instagram-facebook-auto-reply/video.mp4',
    images: [
      '/projects/instagram-facebook-auto-reply/image-1.jpg',
      '/projects/instagram-facebook-auto-reply/image-2.jpg',
      '/projects/instagram-facebook-auto-reply/image-3.jpg',
      '/projects/instagram-facebook-auto-reply/image-4.jpg',
      '/projects/instagram-facebook-auto-reply/image-5.jpg',
    ],
    challenge:
      'High volumes of direct messages and post comments across Instagram and Facebook cause slow response times and overwhelm internal support teams.',
    solution:
      'Connected directly via the Meta Graph API and webhooks, the system detects incoming customer messages and comments instantly. It resolves frequent inquiries with automated FAQ replies, triggers keyword-based responses, and routes complex queries seamlessly.',
    tools: [
      'Python',
      'AI/LLMs',
      'Meta Graph API',
      'Instagram API',
      'Facebook API',
      'REST APIs',
      'Webhooks',
    ],
    results: [
      { value: '< 45s', label: 'Average first response time' },
      { value: '24/7', label: 'Instant lead engagement' },
      { value: '92%', label: 'Routine inquiries automated' },
    ],
    year: '2026',
    featured: true,
    order: 3,
  },
  {
    slug: 'whatsapp-ai-automation-bot',
    title: 'WhatsApp AI Automation Bot',
    resultLine:
      'Handles WhatsApp customer conversations automatically, reducing manual support workload.',
    category: 'ai-agents',
    industry: 'E-commerce',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/whatsapp-ai-automation-bot/thumbnail.jpg',
    video: '/projects/whatsapp-ai-automation-bot/video.mp4',
    challenge:
      'Customer support requests on WhatsApp require instantaneous responses around the clock, creating high staffing costs and repetitive manual messaging.',
    solution:
      'The bot connects through the WhatsApp API to handle incoming conversations intelligently. It provides immediate FAQ answers, keyword recognition, and customizable workflow execution to keep support running 24/7 without extra manual intervention.',
    tools: ['Python', 'AI/LLMs', 'WhatsApp API', 'REST APIs', 'Webhooks'],
    results: [
      { value: '1,500+', label: 'Monthly customer chats resolved' },
      { value: '88%', label: 'First-touch issue resolution' },
      { value: '0', label: 'Additional staffing required' },
    ],
    year: '2026',
    featured: true,
    order: 4,
  },
  {
    slug: 'property-moduler',
    title: 'Property Moduler – Real Estate Management System',
    resultLine:
      'Organizes property listings, buyer/seller records, and inquiries in one system instead of scattered files.',
    category: 'saas-products',
    industry: 'Real Estate',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/property-moduler/thumbnail.jpg',
    video: '/projects/property-moduler/video.mp4',
    challenge:
      'Managing real estate property listings, client records, and buyer inquiries across disconnected spreadsheets leads to lost leads and disorganized data.',
    solution:
      'Property Moduler organizes property listings, client portfolios, and buyer inquiries into a structured database. Real estate professionals can filter inventory, manage buyer and seller information, and track new inquiries from a unified management interface.',
    tools: [
      'Python',
      'Database Management',
      'Backend Development',
      'API Integrations',
    ],
    results: [
      { value: '600+', label: 'Property records centralized' },
      { value: '3x', label: 'Faster lead qualification' },
      { value: '100%', label: 'Real-time pipeline visibility' },
    ],
    year: '2026',
    featured: true,
    order: 5,
  },
  {
    slug: 'graphy-ai-trading-bot',
    title: 'Graphy – AI Trading Bot',
    resultLine:
      'Analyzes market data automatically to surface trading signals instead of manual research.',
    category: 'ai-agents',
    industry: 'Finance',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/graphy-ai-trading-bot/thumbnail.jpg',
    video: '/projects/graphy-ai-trading-bot/video.mp4',
    challenge:
      'Manual research of market movements across financial assets is time-consuming and often too slow to identify short-term market trends.',
    solution:
      'The trading bot streams live market data through financial data APIs to analyze technical indicators and patterns in real time. It detects market trends, executes strategy analysis, and surfaces actionable trading signals automatically.',
    tools: [
      'Python',
      'AI/ML',
      'Financial Data APIs',
      'Data Analysis',
      'Automation',
    ],
    results: [
      { value: '150ms', label: 'Real-time signal latency' },
      { value: '24/7', label: 'Autonomous market tracking' },
      { value: '15+', label: 'Technical indicators evaluated' },
    ],
    year: '2026',
    featured: true,
    order: 6,
  },
  {
    slug: 'audit-client-agent',
    title: 'Audit Client Agent',
    resultLine:
      'Automates financial audits across 25 projects, 125 invoices, and 285 payments, flagging discrepancies before they become problems.',
    category: 'n8n',
    industry: 'Finance',
    clientLabel: '',
    clientPublic: false,
    thumbnail: '/projects/audit-client-agent/n8n-workflow-cover.jpg',
    images: [
      '/projects/audit-client-agent/image-1.jpg',
      '/projects/audit-client-agent/image-2.jpg',
      '/projects/audit-client-agent/image-3.jpg',
      '/projects/audit-client-agent/image-4.jpg',
      '/projects/audit-client-agent/image-5.jpg',
      '/projects/audit-client-agent/image-6.jpg',
      '/projects/audit-client-agent/image-7.jpg',
      '/projects/audit-client-agent/image-8.jpg',
      '/projects/audit-client-agent/image-9.jpg',
      '/projects/audit-client-agent/image-10.jpg',
      '/projects/audit-client-agent/n8n-workflow-cover.jpg',
    ],
    challenge:
      'Manual financial monitoring across multiple projects — invoices, payments, expenses, and affiliate commissions — makes it hard to catch discrepancies early.',
    solution:
      'An n8n workflow pulls financial records from Google Sheets, reconciles payments against invoices programmatically (not via AI estimation), flags irregularities like overdue payments, duplicate transactions, and budget overruns, then uses Google Gemini to turn the verified results into a plain-language summary with suggested actions — delivered as scheduled reports and email notifications.',
    tools: ['n8n', 'JavaScript', 'Google Sheets', 'Google Gemini API', 'SMTP'],
    results: [
      { value: '25', label: 'Projects audited' },
      { value: '125', label: 'Invoices tracked' },
      { value: '285', label: 'Payments reconciled' },
    ],
    year: '2026',
    featured: false,
    order: 7,
  },
  {
    slug: "marvelous-beauty",
    title: "Marvelous Beauty – AI Commercial & Visual Ad Campaign",
    resultLine: "High-impact commercial video ad and 21-asset photorealistic product styling series for multi-channel beauty marketing.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "Beauty & Cosmetics",
    clientPublic: true,
    thumbnail: "/projects/marvelous-beauty/thumbnail.jpg",
    video: "/projects/marvelous-beauty/video.mp4",
    images: [
          "/projects/marvelous-beauty/image-1.jpg",
          "/projects/marvelous-beauty/image-2.jpg",
          "/projects/marvelous-beauty/image-3.jpg",
          "/projects/marvelous-beauty/image-4.jpg",
          "/projects/marvelous-beauty/image-5.jpg",
          "/projects/marvelous-beauty/image-6.jpg",
          "/projects/marvelous-beauty/image-7.jpg",
          "/projects/marvelous-beauty/image-8.jpg",
          "/projects/marvelous-beauty/image-9.jpg",
          "/projects/marvelous-beauty/image-10.jpg",
          "/projects/marvelous-beauty/image-11.jpg",
          "/projects/marvelous-beauty/image-12.jpg",
          "/projects/marvelous-beauty/image-13.jpg",
          "/projects/marvelous-beauty/image-14.jpg",
          "/projects/marvelous-beauty/image-15.jpg",
          "/projects/marvelous-beauty/image-16.jpg",
          "/projects/marvelous-beauty/image-17.jpg",
          "/projects/marvelous-beauty/image-18.jpg",
          "/projects/marvelous-beauty/image-19.jpg",
          "/projects/marvelous-beauty/image-20.jpg",
          "/projects/marvelous-beauty/image-21.jpg"
    ],
    challenge: "Cosmetics and skincare brands face intense competition on paid social channels, requiring scroll-stopping commercial video and photorealistic product styling that builds instant trust.",
    solution: "Produced a commercial video spot combined with 21 high-definition product visual creatives featuring studio lighting, clean typography, and persuasive promotional layouts for Meta and TikTok ad campaigns.",
    tools: ["AI Video Generation","Midjourney","Photoshop","Commercial Art Direction","FFmpeg"],
    results: [
          {
                "value": "21+",
                "label": "Commercial ad creatives"
          },
          {
                "value": "100%",
                "label": "AI photorealistic fidelity"
          },
          {
                "value": "Multi-Channel",
                "label": "Meta, TikTok & Display ready"
          }
    ],
    year: "2026",
    featured: true,
    order: 19,
  },
  {
    slug: "slim-homeopathic-drops",
    title: "Slim Homeopathic Drops – Video Commercial Campaign",
    resultLine: "Direct-response video commercial series with persuasive motion hooks and conversion-focused product visuals.",
    category: "videos-ads",
    industry: "Healthcare",
    clientLabel: "Natural Wellness & Healthcare",
    clientPublic: true,
    thumbnail: "/projects/slim-homeopathic-drops/thumbnail.jpg",
    video: "/projects/slim-homeopathic-drops/video.mp4",
    images: [
          "/projects/slim-homeopathic-drops/image-1.jpg",
          "/projects/slim-homeopathic-drops/image-2.jpg",
          "/projects/slim-homeopathic-drops/image-3.jpg"
    ],
    challenge: "Health and wellness products require credible, compliant, and captivating visual storytelling to overcome consumer hesitation and drive direct-response sales.",
    solution: "Scripted and produced dual video commercials featuring clear problem-solution framing, benefit-driven motion graphics, and clean packaging renders optimized for mobile feed consumption.",
    tools: ["AI Commercial Production","Motion Graphics","Direct Response Video","Audio Mastering"],
    results: [
          {
                "value": "2",
                "label": "Commercial video cuts"
          },
          {
                "value": "Mobile-First",
                "label": "Vertical 9:16 aspect ratio"
          },
          {
                "value": "High Engagement",
                "label": "Conversion-driven hooks"
          }
    ],
    year: "2026",
    featured: true,
    order: 20,
  },
  {
    slug: "team-eagle-global-marketing",
    title: "Team Eagle Global Marketing – Executive Brand Campaign",
    resultLine: "Comprehensive executive branding and corporate campaign visual assets for global marketing leadership.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "Global Marketing & Enterprise",
    clientPublic: true,
    thumbnail: "/projects/team-eagle-global-marketing/thumbnail.jpg",
    video: null,
    images: [
          "/projects/team-eagle-global-marketing/image-1.jpg",
          "/projects/team-eagle-global-marketing/image-2.jpg",
          "/projects/team-eagle-global-marketing/image-3.jpg",
          "/projects/team-eagle-global-marketing/image-4.jpg",
          "/projects/team-eagle-global-marketing/image-5.jpg",
          "/projects/team-eagle-global-marketing/image-6.jpg",
          "/projects/team-eagle-global-marketing/image-7.jpg",
          "/projects/team-eagle-global-marketing/image-8.jpg",
          "/projects/team-eagle-global-marketing/image-9.jpg",
          "/projects/team-eagle-global-marketing/image-10.jpg",
          "/projects/team-eagle-global-marketing/image-11.jpg",
          "/projects/team-eagle-global-marketing/image-12.jpg",
          "/projects/team-eagle-global-marketing/image-13.jpg"
    ],
    challenge: "Creating an authoritative executive brand presence that establishes market leadership, institutional trust, and high-impact corporate presentation.",
    solution: "Developed a complete 13-asset executive and corporate marketing visual suite featuring high-authority brand aesthetics, keynote styling, and corporate communication creative.",
    tools: ["AI Creative Direction","Executive Branding","Photoshop","Corporate Visual Identity"],
    results: [
          {
                "value": "13",
                "label": "Executive campaign assets"
          },
          {
                "value": "Global Scale",
                "label": "Enterprise brand positioning"
          },
          {
                "value": "Authority",
                "label": "Executive leadership styling"
          }
    ],
    year: "2026",
    featured: true,
    order: 21,
  },
  {
    slug: "steadlife",
    title: "Steadlife – Commercial Product Ad Creative",
    resultLine: "Premium lifestyle health product creative designed for high-conversion performance marketing.",
    category: "videos-ads",
    industry: "Healthcare",
    clientLabel: "Health & Lifestyle",
    clientPublic: true,
    thumbnail: "/projects/steadlife/thumbnail.jpg",
    video: null,
    images: [
          "/projects/steadlife/image-1.jpg"
    ],
    challenge: "Presenting wellness products with clinical clarity while preserving a premium lifestyle consumer feel in paid advertising.",
    solution: "Crafted clean commercial product ad imagery highlighting natural formulation, brand trust markers, and focused value propositions.",
    tools: ["AI Image Generation","Photoshop","Brand Positioning","Commercial Design"],
    results: [
          {
                "value": "Ultra-HD",
                "label": "Commercial product render"
          },
          {
                "value": "Brand Alignment",
                "label": "Premium lifestyle palette"
          },
          {
                "value": "Ad Ready",
                "label": "Optimized for digital ad spend"
          }
    ],
    year: "2026",
    featured: false,
    order: 22,
  },
  {
    slug: "video-ad-1",
    title: "Video Ad 1",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-1/thumbnail.jpg",
    video: "/projects/video-ad-1/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 11,
  },
  {
    slug: "video-ad-2",
    title: "Video Ad 2",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-2/thumbnail.jpg",
    video: "/projects/video-ad-2/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 12,
  },
  {
    slug: "video-ad-3",
    title: "Video Ad 3",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-3/thumbnail.jpg",
    video: "/projects/video-ad-3/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 13,
  },
  {
    slug: "video-ad-4",
    title: "Video Ad 4",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-4/thumbnail.jpg",
    video: "/projects/video-ad-4/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 14,
  },
  {
    slug: "video-ad-5",
    title: "Video Ad 5",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-5/thumbnail.jpg",
    video: "/projects/video-ad-5/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 15,
  },
  {
    slug: "video-ad-6",
    title: "Video Ad 6",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-6/thumbnail.jpg",
    video: "/projects/video-ad-6/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 16,
  },
  {
    slug: "video-ad-7",
    title: "Video Ad 7",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-7/thumbnail.jpg",
    video: "/projects/video-ad-7/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 17,
  },
  {
    slug: "video-ad-8",
    title: "Video Ad 8",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-8/thumbnail.jpg",
    video: "/projects/video-ad-8/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 18,
  },
  {
    slug: "video-ad-9",
    title: "Video Ad 9",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-9/thumbnail.jpg",
    video: "/projects/video-ad-9/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 19,
  },
  {
    slug: "video-ad-10",
    title: "Video Ad 10",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-10/thumbnail.jpg",
    video: "/projects/video-ad-10/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 20,
  },
  {
    slug: "video-ad-11",
    title: "Video Ad 11",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-11/thumbnail.jpg",
    video: "/projects/video-ad-11/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 21,
  },
  {
    slug: "video-ad-12",
    title: "Video Ad 12",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-12/thumbnail.jpg",
    video: "/projects/video-ad-12/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 22,
  },
  {
    slug: "video-ad-13",
    title: "Video Ad 13",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-13/thumbnail.jpg",
    video: "/projects/video-ad-13/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 23,
  },
  {
    slug: "video-ad-14",
    title: "Video Ad 14",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-14/thumbnail.jpg",
    video: "/projects/video-ad-14/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 24,
  },
  {
    slug: "video-ad-15",
    title: "Video Ad 15",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-15/thumbnail.jpg",
    video: "/projects/video-ad-15/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 25,
  },
  {
    slug: "video-ad-16",
    title: "Video Ad 16",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-16/thumbnail.jpg",
    video: "/projects/video-ad-16/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 26,
  },
  {
    slug: "video-ad-17",
    title: "Video Ad 17",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-17/thumbnail.jpg",
    video: "/projects/video-ad-17/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 27,
  },
  {
    slug: "video-ad-18",
    title: "Video Ad 18",
    resultLine: "High-impact commercial video creative produced with AI cinematography.",
    category: "videos-ads",
    industry: "Content Creation",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/video-ad-18/thumbnail.jpg",
    video: "/projects/video-ad-18/video.mp4",
    challenge: "Crafting dynamic, cinematic commercial video ads requires fast turnaround without compromising on production quality.",
    solution: "Generated high-resolution AI video sequences, camera motions, and color grading tailored for high-engagement social and commercial campaigns.",
    tools: ["AI Video Generation","Midjourney","Runway","FFmpeg","Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 28,
  },
  {
    slug: "image-ad-1",
    title: "Anua",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-1/thumbnail.jpg",
    images: [
      "/projects/image-ad-1/image-1.jpg",
      "/projects/image-ad-1/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 31,
  },
  {
    slug: "image-ad-2",
    title: "Brand",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-2/thumbnail.jpg",
    images: [
      "/projects/image-ad-2/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 32,
  },
  {
    slug: "image-ad-3",
    title: "Burger",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-3/thumbnail.jpg",
    images: [
      "/projects/image-ad-3/image-1.jpg",
      "/projects/image-ad-3/image-2.jpg",
      "/projects/image-ad-3/image-3.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 33,
  },
  {
    slug: "image-ad-4",
    title: "Cake",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-4/thumbnail.jpg",
    images: [
      "/projects/image-ad-4/image-1.jpg",
      "/projects/image-ad-4/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 34,
  },
  {
    slug: "image-ad-5",
    title: "Chocolate Cream",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-5/thumbnail.jpg",
    images: [
      "/projects/image-ad-5/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 35,
  },
  {
    slug: "image-ad-6",
    title: "Crispy Fried Chicken Feast",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-6/thumbnail.jpg",
    images: [
      "/projects/image-ad-6/image-1.jpg",
      "/projects/image-ad-6/image-2.jpg",
      "/projects/image-ad-6/image-3.jpg",
      "/projects/image-ad-6/image-4.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 36,
  },
  {
    slug: "image-ad-7",
    title: "Fruitien Juice",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-7/thumbnail.jpg",
    images: [
      "/projects/image-ad-7/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 37,
  },
  {
    slug: "image-ad-8",
    title: "Head Phone",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-8/thumbnail.jpg",
    images: [
      "/projects/image-ad-8/image-1.jpg",
      "/projects/image-ad-8/image-2.jpg",
      "/projects/image-ad-8/image-3.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 38,
  },
  {
    slug: "image-ad-9",
    title: "Himalaya",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-9/thumbnail.jpg",
    images: [
      "/projects/image-ad-9/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 39,
  },
  {
    slug: "image-ad-10",
    title: "KitKat",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-10/thumbnail.jpg",
    images: [
      "/projects/image-ad-10/image-1.jpg",
      "/projects/image-ad-10/image-2.jpg",
      "/projects/image-ad-10/image-3.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 40,
  },
  {
    slug: "image-ad-11",
    title: "Lakme",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-11/thumbnail.jpg",
    images: [
      "/projects/image-ad-11/image-1.jpg",
      "/projects/image-ad-11/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 41,
  },
  {
    slug: "image-ad-12",
    title: "Lumora",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-12/thumbnail.jpg",
    images: [
      "/projects/image-ad-12/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 42,
  },
  {
    slug: "image-ad-13",
    title: "Midnight Glow Night Serum Ad",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-13/thumbnail.jpg",
    images: [
      "/projects/image-ad-13/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 43,
  },
  {
    slug: "image-ad-14",
    title: "Minsa Glow Sunscreen",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-14/thumbnail.jpg",
    images: [
      "/projects/image-ad-14/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 44,
  },
  {
    slug: "image-ad-15",
    title: "Nescafe",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-15/thumbnail.jpg",
    images: [
      "/projects/image-ad-15/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 45,
  },
  {
    slug: "image-ad-16",
    title: "Parvaaz AI Chatbot",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-16/thumbnail.jpg",
    images: [
      "/projects/image-ad-16/image-1.jpg",
      "/projects/image-ad-16/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 46,
  },
  {
    slug: "image-ad-17",
    title: "Pearl Oasis Restaurant",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-17/thumbnail.jpg",
    images: [
      "/projects/image-ad-17/image-1.jpg",
      "/projects/image-ad-17/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 47,
  },
  {
    slug: "image-ad-18",
    title: "Pizza",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-18/thumbnail.jpg",
    images: [
      "/projects/image-ad-18/image-1.jpg",
      "/projects/image-ad-18/image-2.jpg",
      "/projects/image-ad-18/image-3.jpg",
      "/projects/image-ad-18/image-4.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 48,
  },
  {
    slug: "image-ad-19",
    title: "Pringles",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-19/thumbnail.jpg",
    images: [
      "/projects/image-ad-19/image-1.jpg",
      "/projects/image-ad-19/image-2.jpg",
      "/projects/image-ad-19/image-3.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 49,
  },
  {
    slug: "image-ad-20",
    title: "Rest, Repair, Rejuvenate Serum",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-20/thumbnail.jpg",
    images: [
      "/projects/image-ad-20/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 50,
  },
  {
    slug: "image-ad-21",
    title: "Rolex",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-21/thumbnail.jpg",
    images: [
      "/projects/image-ad-21/image-1.jpg",
      "/projects/image-ad-21/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 51,
  },
  {
    slug: "image-ad-22",
    title: "Thesis",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-22/thumbnail.jpg",
    images: [
      "/projects/image-ad-22/image-1.jpg",
      "/projects/image-ad-22/image-2.jpg",
      "/projects/image-ad-22/image-3.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 52,
  },
  {
    slug: "image-ad-23",
    title: "Tomno",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-23/thumbnail.jpg",
    images: [
      "/projects/image-ad-23/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 53,
  },
  {
    slug: "image-ad-24",
    title: "Voyage",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-24/thumbnail.jpg",
    images: [
      "/projects/image-ad-24/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 54,
  },
  {
    slug: "image-ad-25",
    title: "Wake Up to Brighter Skin",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-25/thumbnail.jpg",
    images: [
      "/projects/image-ad-25/image-1.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 55,
  },
  {
    slug: "image-ad-26",
    title: "Water Bottle",
    resultLine: "Creative commercial product advertisement and campaign visual design.",
    category: "videos-ads",
    industry: "E-commerce",
    clientLabel: "",
    clientPublic: false,
    thumbnail: "/projects/image-ad-26/thumbnail.jpg",
    images: [
      "/projects/image-ad-26/image-1.jpg",
      "/projects/image-ad-26/image-2.jpg"
    ],
    challenge: "Designing scroll-stopping commercial product photography and promotional ad creatives tailored for multi-channel advertising.",
    solution: "Created a series of photorealistic ad creatives highlighting product details, lighting, typography, and promotional styling.",
    tools: ["AI Image Generation","Photoshop","Midjourney","Digital Creative Direction"],
    results: [],
    year: "2026",
    featured: false,
    order: 56,
  },
  {
    slug: "audience-customer-research-b2b-saas",
    title: "Audience Customer Research B2B SaaS",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/audience-customer-research-b2b-saas/thumbnail.jpg",
    images: [
          "/projects/audience-customer-research-b2b-saas/image-1.jpg",
          "/projects/audience-customer-research-b2b-saas/image-2.jpg",
          "/projects/audience-customer-research-b2b-saas/image-3.jpg",
          "/projects/audience-customer-research-b2b-saas/image-4.jpg",
          "/projects/audience-customer-research-b2b-saas/image-5.jpg",
          "/projects/audience-customer-research-b2b-saas/image-6.jpg"
    ],
    pdfUrl: "/documents/audience-customer-research-b2b-saas.pdf",
    challenge: "a self-initiated portfolio simulation built from publicly available...",
    solution: "Social Media Strategist & Marketing Researcher...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "57%",
                "label": "of Asana reviewers in the sm"
          },
          {
                "value": "40%",
                "label": "of B2B deals stall due to in"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 57,
  },
  {
    slug: "brand-strategy-global-skincare",
    title: "Brand Strategy Global Skincare",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Healthcare",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/brand-strategy-global-skincare/thumbnail.jpg",
    images: [
          "/projects/brand-strategy-global-skincare/image-1.jpg",
          "/projects/brand-strategy-global-skincare/image-2.jpg",
          "/projects/brand-strategy-global-skincare/image-3.jpg",
          "/projects/brand-strategy-global-skincare/image-4.jpg",
          "/projects/brand-strategy-global-skincare/image-5.jpg",
          "/projects/brand-strategy-global-skincare/image-6.jpg"
    ],
    pdfUrl: "/documents/brand-strategy-global-skincare.pdf",
    challenge: "positioning, or operational practice. Recommendations are marked as strategic inference where they...",
    solution: "Science-Backed Skincare Brand...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          },
          {
                "value": "Actionable",
                "label": "Implementation roadmap deliverable"
          }
    ],
    year: "2026",
    featured: false,
    order: 58,
  },
  {
    slug: "business-model-adaptation-cross-industry-strategy-playbook",
    title: "Business Model Adaptation Cross Industry Strategy Playbook",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Healthcare",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/business-model-adaptation-cross-industry-strategy-playbook/thumbnail.jpg",
    images: [
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-1.jpg",
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-2.jpg",
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-3.jpg",
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-4.jpg",
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-5.jpg",
          "/projects/business-model-adaptation-cross-industry-strategy-playbook/image-6.jpg"
    ],
    pdfUrl: "/documents/business-model-adaptation-cross-industry-strategy-playbook.pdf",
    challenge: "guidance; shipping/returns clarity....",
    solution: "A cross-industry strategy playbook for designing social media...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "90%",
                "label": "of corporate"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 59,
  },
  {
    slug: "content-operations-workflow-real-estate-bd",
    title: "Content Operations Workflow Real Estate BD",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Real Estate",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/content-operations-workflow-real-estate-bd/thumbnail.jpg",
    images: [
          "/projects/content-operations-workflow-real-estate-bd/image-1.jpg",
          "/projects/content-operations-workflow-real-estate-bd/image-2.jpg",
          "/projects/content-operations-workflow-real-estate-bd/image-3.jpg",
          "/projects/content-operations-workflow-real-estate-bd/image-4.jpg",
          "/projects/content-operations-workflow-real-estate-bd/image-5.jpg",
          "/projects/content-operations-workflow-real-estate-bd/image-6.jpg"
    ],
    pdfUrl: "/documents/content-operations-workflow-real-estate-bd.pdf",
    challenge: "declines in apartment sales, while later reporting discussed high borrowing costs and affordability...",
    solution: "approval, publishing and learning...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          },
          {
                "value": "Actionable",
                "label": "Implementation roadmap deliverable"
          }
    ],
    year: "2026",
    featured: false,
    order: 60,
  },
  {
    slug: "content-strategy-dhaka-restaurant",
    title: "Content Strategy Dhaka Restaurant",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/content-strategy-dhaka-restaurant/thumbnail.jpg",
    images: [
          "/projects/content-strategy-dhaka-restaurant/image-1.jpg",
          "/projects/content-strategy-dhaka-restaurant/image-2.jpg",
          "/projects/content-strategy-dhaka-restaurant/image-3.jpg",
          "/projects/content-strategy-dhaka-restaurant/image-4.jpg",
          "/projects/content-strategy-dhaka-restaurant/image-5.jpg",
          "/projects/content-strategy-dhaka-restaurant/image-6.jpg"
    ],
    pdfUrl: "/documents/content-strategy-dhaka-restaurant.pdf",
    challenge: "ordersthe strategic challenge isObjective...",
    solution: "Specialty Dessert Cafe...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "63%",
                "label": "of TikTok users surveyed dis"
          },
          {
                "value": "54%",
                "label": "actively searched or researc"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 61,
  },
  {
    slug: "creative-strategy-global-language-app",
    title: "Creative Strategy Global Language App",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/creative-strategy-global-language-app/thumbnail.jpg",
    images: [
          "/projects/creative-strategy-global-language-app/image-1.jpg",
          "/projects/creative-strategy-global-language-app/image-2.jpg",
          "/projects/creative-strategy-global-language-app/image-3.jpg",
          "/projects/creative-strategy-global-language-app/image-4.jpg",
          "/projects/creative-strategy-global-language-app/image-5.jpg",
          "/projects/creative-strategy-global-language-app/image-6.jpg"
    ],
    pdfUrl: "/documents/creative-strategy-global-language-app.pdf",
    challenge: "Prepared for portfolio demonstration: research depth, strategic reasoning, customer understanding,...",
    solution: "Language-Learning App...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          },
          {
                "value": "Actionable",
                "label": "Implementation roadmap deliverable"
          }
    ],
    year: "2026",
    featured: false,
    order: 62,
  },
  {
    slug: "customer-psychology-case-online-grocery-bd",
    title: "Customer Psychology Case Online Grocery BD",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/customer-psychology-case-online-grocery-bd/thumbnail.jpg",
    images: [
          "/projects/customer-psychology-case-online-grocery-bd/image-1.jpg",
          "/projects/customer-psychology-case-online-grocery-bd/image-2.jpg",
          "/projects/customer-psychology-case-online-grocery-bd/image-3.jpg",
          "/projects/customer-psychology-case-online-grocery-bd/image-4.jpg",
          "/projects/customer-psychology-case-online-grocery-bd/image-5.jpg",
          "/projects/customer-psychology-case-online-grocery-bd/image-6.jpg"
    ],
    pdfUrl: "/documents/customer-psychology-case-online-grocery-bd.pdf",
    challenge: "positioning, or operational practice. Recommendations are marked as strategic inference where they...",
    solution: "Social Media Strategist & Marketing Researcher...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "90%",
                "label": "of e"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 63,
  },
  {
    slug: "market-competitive-intelligence-fitness-app",
    title: "Market Competitive Intelligence Fitness App",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Healthcare",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/market-competitive-intelligence-fitness-app/thumbnail.jpg",
    images: [
          "/projects/market-competitive-intelligence-fitness-app/image-1.jpg",
          "/projects/market-competitive-intelligence-fitness-app/image-2.jpg",
          "/projects/market-competitive-intelligence-fitness-app/image-3.jpg",
          "/projects/market-competitive-intelligence-fitness-app/image-4.jpg",
          "/projects/market-competitive-intelligence-fitness-app/image-5.jpg",
          "/projects/market-competitive-intelligence-fitness-app/image-6.jpg"
    ],
    pdfUrl: "/documents/market-competitive-intelligence-fitness-app.pdf",
    challenge: "Community + activity identity + social...",
    solution: "Social Media Strategist & Marketing Researcher...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "4%",
                "label": "CAGR from 2026"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 64,
  },
  {
    slug: "platform-strategy-bangladesh-premium-tea-d2c-independent-case-study",
    title: "Platform Strategy Bangladesh Premium Tea D2C Independent Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/thumbnail.jpg",
    images: [
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-1.jpg",
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-2.jpg",
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-3.jpg",
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-4.jpg",
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-5.jpg",
          "/projects/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/platform-strategy-bangladesh-premium-tea-d2c-independent-case-study.pdf",
    challenge: "everywhere,” but to decide where limited creative and management capacity should concentrate....",
    solution: "This case study is an independent strategic exercise. The brand scenario is constructed for portfolio learning; market facts and...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          },
          {
                "value": "Actionable",
                "label": "Implementation roadmap deliverable"
          }
    ],
    year: "2026",
    featured: false,
    order: 65,
  },
  {
    slug: "positioning-differentiation-dental-clinic-dhaka",
    title: "Positioning Differentiation Dental Clinic Dhaka",
    resultLine: "Strategic audit and growth framework analyzing market positioning, audience psychology, and performance optimization.",
    category: 'market-research',
    industry: "Healthcare",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/positioning-differentiation-dental-clinic-dhaka/thumbnail.jpg",
    images: [
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-1.jpg",
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-2.jpg",
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-3.jpg",
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-4.jpg",
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-5.jpg",
          "/projects/positioning-differentiation-dental-clinic-dhaka/image-6.jpg"
    ],
    pdfUrl: "/documents/positioning-differentiation-dental-clinic-dhaka.pdf",
    challenge: "Routine care for children and family...",
    solution: "Social Media Strategist & Marketing...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "84%",
                "label": "of the public trust build a"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 66,
  },
  {
    slug: "social-commerce-strategy-lego-independent-case-study",
    title: "Social Commerce Strategy LEGO Independent Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/social-commerce-strategy-lego-independent-case-study/thumbnail.jpg",
    images: [
          "/projects/social-commerce-strategy-lego-independent-case-study/image-1.jpg",
          "/projects/social-commerce-strategy-lego-independent-case-study/image-2.jpg",
          "/projects/social-commerce-strategy-lego-independent-case-study/image-3.jpg",
          "/projects/social-commerce-strategy-lego-independent-case-study/image-4.jpg",
          "/projects/social-commerce-strategy-lego-independent-case-study/image-5.jpg",
          "/projects/social-commerce-strategy-lego-independent-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/social-commerce-strategy-lego-independent-case-study.pdf",
    challenge: "• LEGO reported DKK 83.5 billion in 2025 revenue and DKK 22.0 billion in operating profit. This demonstrates...",
    solution: "01 / DECISION SUMMARY...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "32%",
                "label": "in its surveyed markets in 2"
          },
          {
                "value": "27%",
                "label": "in 2023"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 67,
  },
  {
    slug: "social-media-analytics-airbnb-independent-case-study-revised",
    title: "Social Media Analytics Airbnb Independent Case Study Revised",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "Real Estate",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/social-media-analytics-airbnb-independent-case-study-revised/thumbnail.jpg",
    images: [
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-1.jpg",
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-2.jpg",
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-3.jpg",
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-4.jpg",
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-5.jpg",
          "/projects/social-media-analytics-airbnb-independent-case-study-revised/image-6.jpg"
    ],
    pdfUrl: "/documents/social-media-analytics-airbnb-independent-case-study-revised.pdf",
    challenge: "The measurement logic...",
    solution: "content can influence inspiration, destination discovery, trust, trip planning and eventual booking. The report applies public...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "+50%",
                "label": "Visibility expanded Saves"
          },
          {
                "value": "+45%",
                "label": "Planning content may resonat"
          },
          {
                "value": "+6%",
                "label": "Interest did not rise with r"
          }
    ],
    year: "2026",
    featured: false,
    order: 68,
  },
  {
    slug: "social-media-reporting-data-storytelling-strategy-case-study",
    title: "Social Media Reporting Data Storytelling Strategy Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "E-commerce",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/social-media-reporting-data-storytelling-strategy-case-study/thumbnail.jpg",
    images: [
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-1.jpg",
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-2.jpg",
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-3.jpg",
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-4.jpg",
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-5.jpg",
          "/projects/social-media-reporting-data-storytelling-strategy-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/social-media-reporting-data-storytelling-strategy-case-study.pdf",
    challenge: "does not claim access to the company’s private analytics....",
    solution: "Social Media Reporting & Data Storytelling — Duolingo...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "+30%",
                "label": "More accounts reached Mea"
          },
          {
                "value": "+20%",
                "label": "Interactions grew more slowl"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 69,
  },
  {
    slug: "social-media-strategy-case-study-d2c-fashion-bd",
    title: "Social Media Strategy Case Study D2C Fashion BD",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/social-media-strategy-case-study-d2c-fashion-bd/thumbnail.jpg",
    images: [
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-1.jpg",
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-2.jpg",
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-3.jpg",
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-4.jpg",
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-5.jpg",
          "/projects/social-media-strategy-case-study-d2c-fashion-bd/image-6.jpg"
    ],
    pdfUrl: "/documents/social-media-strategy-case-study-d2c-fashion-bd.pdf",
    challenge: "views?” It is “how do we turn the right attention into trusted,...",
    solution: "D2C Modest Fashion Growth...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "90%",
                "label": "preference for cash"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 70,
  },
  {
    slug: "social-seo-hellofresh-international-independent-case-study",
    title: "Social SEO HelloFresh International Independent Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/social-seo-hellofresh-international-independent-case-study/thumbnail.jpg",
    images: [
          "/projects/social-seo-hellofresh-international-independent-case-study/image-1.jpg",
          "/projects/social-seo-hellofresh-international-independent-case-study/image-2.jpg",
          "/projects/social-seo-hellofresh-international-independent-case-study/image-3.jpg",
          "/projects/social-seo-hellofresh-international-independent-case-study/image-4.jpg",
          "/projects/social-seo-hellofresh-international-independent-case-study/image-5.jpg",
          "/projects/social-seo-hellofresh-international-independent-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/social-seo-hellofresh-international-independent-case-study.pdf",
    challenge: "that can be translated into social content. [HelloFresh current recipe pages]...",
    solution: "International Meal-Kit & Food-Commerce Brand...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          },
          {
                "value": "Actionable",
                "label": "Implementation roadmap deliverable"
          }
    ],
    year: "2026",
    featured: false,
    order: 71,
  },
  {
    slug: "spotify-wrapped-goal-to-kpi-alignment-independent-case-study",
    title: "Spotify Wrapped Goal to KPI Alignment Independent Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'market-research',
    industry: "E-commerce",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/thumbnail.jpg",
    images: [
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-1.jpg",
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-2.jpg",
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-3.jpg",
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-4.jpg",
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-5.jpg",
          "/projects/spotify-wrapped-goal-to-kpi-alignment-independent-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/spotify-wrapped-goal-to-kpi-alignment-independent-case-study.pdf",
    challenge: "single share-count contest....",
    solution: "A Goal-to-KPI Alignment Strategy for Social...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "0%",
                "label": "1 Set the target Target"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 72,
  },
  {
    slug: "aarong-brand-positioning-case-study",
    title: "Aarong Brand Positioning Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'case-studies',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/aarong-brand-positioning-case-study/thumbnail.jpg",
    images: [
          "/projects/aarong-brand-positioning-case-study/image-1.jpg",
          "/projects/aarong-brand-positioning-case-study/image-2.jpg",
          "/projects/aarong-brand-positioning-case-study/image-3.jpg",
          "/projects/aarong-brand-positioning-case-study/image-4.jpg",
          "/projects/aarong-brand-positioning-case-study/image-5.jpg",
          "/projects/aarong-brand-positioning-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/aarong-brand-positioning-case-study.pdf",
    challenge: "shopper compares Aarong with fast, trend-led fashion and a flood of Facebook boutiques, while...",
    solution: "Market research | Customer psychology | Positioning | Meta Ads funnel...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "30%",
                "label": "Styling"
          },
          {
                "value": "25%",
                "label": "Occasion guides"
          },
          {
                "value": "20%",
                "label": "Proof"
          }
    ],
    year: "2026",
    featured: false,
    order: 73,
  },
  {
    slug: "gymshark-social-media-growth-case-study",
    title: "Gymshark Social Media Growth Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'case-studies',
    industry: "Healthcare",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/gymshark-social-media-growth-case-study/thumbnail.jpg",
    images: [
          "/projects/gymshark-social-media-growth-case-study/image-1.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-2.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-3.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-4.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-5.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-6.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-7.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-8.jpg",
          "/projects/gymshark-social-media-growth-case-study/image-9.jpg"
    ],
    pdfUrl: "/documents/gymshark-social-media-growth-case-study.pdf",
    challenge: "Anyone can sell leggings. Few can make people feel they belong to...",
    solution: "PROJECTS & CASE STUDIES | GYMSHARK | SHAKIR HOSSAIN TALHA...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "55%",
                "label": "Retargeting 30"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 74,
  },
  {
    slug: "pathao-super-app-growth-case-study",
    title: "Pathao Super App Growth Case Study",
    resultLine: "In-depth case study and performance breakdown analyzing strategy, marketing architecture, and conversion drivers.",
    category: 'case-studies',
    industry: "Finance",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/pathao-super-app-growth-case-study/thumbnail.jpg",
    images: [
          "/projects/pathao-super-app-growth-case-study/image-1.jpg",
          "/projects/pathao-super-app-growth-case-study/image-2.jpg",
          "/projects/pathao-super-app-growth-case-study/image-3.jpg",
          "/projects/pathao-super-app-growth-case-study/image-4.jpg",
          "/projects/pathao-super-app-growth-case-study/image-5.jpg",
          "/projects/pathao-super-app-growth-case-study/image-6.jpg"
    ],
    pdfUrl: "/documents/pathao-super-app-growth-case-study.pdf",
    challenge: "different customer and competitor....",
    solution: "customers and partners on both sides of the...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "100%",
                "label": "PROJECTS"
          },
          {
                "value": "30%",
                "label": "Food 25"
          },
          {
                "value": "25%",
                "label": "Partner recruitment 10"
          }
    ],
    year: "2026",
    featured: false,
    order: 75,
  },
  {
    slug: "shikho-campaign-analytics-results",
    title: "Shikho Campaign Analytics Results",
    resultLine: "Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.",
    category: 'campaigns-analytics',
    industry: "E-commerce",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/shikho-campaign-analytics-results/thumbnail.jpg",
    images: [
          "/projects/shikho-campaign-analytics-results/image-1.jpg",
          "/projects/shikho-campaign-analytics-results/image-2.jpg",
          "/projects/shikho-campaign-analytics-results/image-3.jpg",
          "/projects/shikho-campaign-analytics-results/image-4.jpg",
          "/projects/shikho-campaign-analytics-results/image-5.jpg",
          "/projects/shikho-campaign-analytics-results/image-6.jpg"
    ],
    pdfUrl: "/documents/shikho-campaign-analytics-results.pdf",
    challenge: "engaged view and qualified site visit....",
    solution: "Portfolio case reference date requested by the author. Public-source review and strategy exercise; not a claim that the campaign ran on this date....",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "35%",
                "label": "Discovery and retargeting"
          },
          {
                "value": "20%",
                "label": "Teacher explanations and con"
          },
          {
                "value": "15%",
                "label": "Credible walkthroughs"
          }
    ],
    year: "2026",
    featured: false,
    order: 76,
  },
  {
    slug: "walton-campaign-analytics-results",
    title: "Walton Campaign Analytics Results",
    resultLine: "Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.",
    category: 'campaigns-analytics',
    industry: "Content Creation",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/walton-campaign-analytics-results/thumbnail.jpg",
    images: [
          "/projects/walton-campaign-analytics-results/image-1.jpg",
          "/projects/walton-campaign-analytics-results/image-2.jpg",
          "/projects/walton-campaign-analytics-results/image-3.jpg",
          "/projects/walton-campaign-analytics-results/image-4.jpg",
          "/projects/walton-campaign-analytics-results/image-5.jpg",
          "/projects/walton-campaign-analytics-results/image-6.jpg"
    ],
    pdfUrl: "/documents/walton-campaign-analytics-results.pdf",
    challenge: "Define the pass condition...",
    solution: "WALTON / PERFORMANCE CONTROL...",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "30%",
                "label": "Meta lead"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          },
          {
                "value": "Strategic",
                "label": "Multi-channel competitive audit"
          }
    ],
    year: "2026",
    featured: false,
    order: 77,
  },
  {
    slug: "chaldal-campaign-analytics-results",
    title: "Chaldal Campaign Analytics Results",
    resultLine: "Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.",
    category: 'campaigns-analytics',
    industry: "E-commerce",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/chaldal-campaign-analytics-results/thumbnail.jpg",
    images: [
          "/projects/chaldal-campaign-analytics-results/image-1.jpg",
          "/projects/chaldal-campaign-analytics-results/image-2.jpg",
          "/projects/chaldal-campaign-analytics-results/image-3.jpg",
          "/projects/chaldal-campaign-analytics-results/image-4.jpg",
          "/projects/chaldal-campaign-analytics-results/image-5.jpg",
          "/projects/chaldal-campaign-analytics-results/image-6.jpg"
    ],
    pdfUrl: "/documents/chaldal-campaign-analytics-results.pdf",
    challenge: "Chaldal | Bangladesh online grocery...",
    solution: "checkout can beat a generic “shop now” message....",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "30%",
                "label": "Catalog"
          },
          {
                "value": "25%",
                "label": "Cart recovery 15"
          },
          {
                "value": "20%",
                "label": "Experiment reserve 10"
          }
    ],
    year: "2026",
    featured: false,
    order: 78,
  },
  {
    slug: "canva-campaign-analytics-results",
    title: "Canva Campaign Analytics Results",
    resultLine: "Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.",
    category: 'campaigns-analytics',
    industry: "E-commerce",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/canva-campaign-analytics-results/thumbnail.jpg",
    images: [
          "/projects/canva-campaign-analytics-results/image-1.jpg",
          "/projects/canva-campaign-analytics-results/image-2.jpg",
          "/projects/canva-campaign-analytics-results/image-3.jpg",
          "/projects/canva-campaign-analytics-results/image-4.jpg",
          "/projects/canva-campaign-analytics-results/image-5.jpg",
          "/projects/canva-campaign-analytics-results/image-6.jpg"
    ],
    pdfUrl: "/documents/canva-campaign-analytics-results.pdf",
    challenge: "Company-published research on visual communication and consistency....",
    solution: "Delivered an in-depth strategic analysis and execution framework for Canva Campaign Analytics Results, covering customer psychology, competitive intelligence, content operations, and conversion-focused growth systems.",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "25%",
                "label": "Output"
          },
          {
                "value": "20%",
                "label": "Tutorial and comparison cont"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 79,
  },
  {
    slug: "airbnb-campaign-analytics-results",
    title: "Airbnb Campaign Analytics Results",
    resultLine: "Full campaign analytics report detailing KPIs, attribution channels, creative benchmarks, and ROI analysis.",
    category: 'campaigns-analytics',
    industry: "Content Creation",
    clientLabel: "Strategic Case Study",
    clientPublic: true,
    thumbnail: "/projects/airbnb-campaign-analytics-results/thumbnail.jpg",
    images: [
          "/projects/airbnb-campaign-analytics-results/image-1.jpg",
          "/projects/airbnb-campaign-analytics-results/image-2.jpg",
          "/projects/airbnb-campaign-analytics-results/image-3.jpg",
          "/projects/airbnb-campaign-analytics-results/image-4.jpg",
          "/projects/airbnb-campaign-analytics-results/image-5.jpg",
          "/projects/airbnb-campaign-analytics-results/image-6.jpg"
    ],
    pdfUrl: "/documents/airbnb-campaign-analytics-results.pdf",
    challenge: "Looks for a stay that makes a destination...",
    solution: "Delivered an in-depth strategic analysis and execution framework for Airbnb Campaign Analytics Results, covering customer psychology, competitive intelligence, content operations, and conversion-focused growth systems.",
    tools: ["Strategic Research","Data Storytelling","Market Intelligence","Customer Psychology","Auditing & Analytics","Campaign Optimization"],
    results: [
          {
                "value": "25%",
                "label": "Visual discovery and creator"
          },
          {
                "value": "20%",
                "label": "Longer context for location"
          },
          {
                "value": "100%",
                "label": "Data-driven strategy execution"
          }
    ],
    year: "2026",
    featured: false,
    order: 80,
  },
];
