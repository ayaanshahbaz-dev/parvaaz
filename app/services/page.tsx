import React from 'react';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import ScrollFade from '@/components/ScrollFade';

export const metadata = {
  title: 'Services — Parvaaz',
  description:
    'Comprehensive digital capabilities across AI Agents, Web Development, Chatbots & RAG, Video Production, Social Media, and SEO.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      description:
        'Custom autonomous agents and automated workflows designed to handle high-volume repetitive tasks, integrate databases and APIs, and streamline core operations.',
      capabilities: [
        'Autonomous Workflow Design',
        'Multi-Platform Integrations',
        'Data Extraction & Pipeline Automation',
        'System Auditing & Error Handling',
      ],
      linkText: 'Explore AI Agent work →',
      linkHref: '/work?category=ai-agents',
    },
    {
      id: 'websites',
      title: 'Web Development',
      description:
        'High-performance web applications, modern corporate websites, and conversion-focused landing pages built with modern architecture and cutting-edge design.',
      capabilities: [
        'Custom Web Applications',
        'Design Systems & Responsive UI',
        'Performance & Core Web Vitals',
        'CMS & API Integrations',
      ],
      linkText: 'Explore Web projects →',
      linkHref: '/work?category=websites',
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & RAG',
      description:
        'Intelligent conversational bots powered by state-of-the-art Large Language Models and Retrieval-Augmented Generation to provide context-aware, hallucination-free business support.',
      capabilities: [
        'Knowledge-Base Vector Search',
        'WhatsApp & Omnichannel Bots',
        'Customer Support Automation',
        'CRM & Database Sync',
      ],
      linkText: 'Explore Chatbot work →',
      linkHref: '/work?category=ai-agents',
    },
    {
      id: 'videos-ads',
      title: 'Video Production',
      description:
        'Cinema-grade brand videos, commercials, product showcases, and high-impact social ads crafted to tell compelling stories and capture customer attention.',
      capabilities: [
        'Commercials & Brand Stories',
        'Product & Feature Demos',
        'Short-form Vertical Content',
        'High-End Editing & Color Grading',
      ],
      linkText: 'Explore Video work →',
      linkHref: '/work?category=videos-ads',
    },
    {
      id: 'social-media',
      title: 'Content & Social Media',
      description:
        'Consistent visual storytelling, viral short-form clips, and audience engagement strategies designed to establish authority and build loyal communities.',
      capabilities: [
        'Creative Asset Production',
        'Content Strategy & Calendars',
        'Shorts & Reels Production',
        'Community Growth & Scaling',
      ],
      linkText: 'Explore Content work →',
      linkHref: '/work',
    },
    {
      id: 'marketing-seo',
      title: 'Digital Marketing & SEO',
      description:
        'Precision performance marketing, technical search engine optimization, and data-backed conversion rate improvements to accelerate customer acquisition.',
      capabilities: [
        'Technical & On-Page SEO',
        'Paid Acquisition (Meta, Google)',
        'Conversion Funnel Optimization',
        'Analytics & Attribution Tracking',
      ],
      linkText: 'Explore Growth work →',
      linkHref: '/work',
    },
  ];

  return (
    <div className="pt-12 md:pt-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Header */}
        <header className="mb-16 md:mb-20">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
            OUR CAPABILITIES
          </span>
          <h1 className="text-[40px] md:text-[58px] leading-[1.08] tracking-[-0.03em] font-bold text-white">
            Services & Expertise
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] leading-relaxed text-slate-400 font-normal max-w-[650px]">
            We bridge deep engineering with cinema-grade creativity to help ambitious brands scale.
          </p>
        </header>

        {/* Services List */}
        <div className="flex flex-col gap-10 mb-20">
          {serviceCategories.map((service, index) => (
            <ScrollFade key={service.id}>
              <section
                id={service.id}
                className="rounded-2xl p-8 md:p-10 bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 flex flex-col md:flex-row gap-8 md:gap-16"
              >
                {/* Left: Index & Title */}
                <div className="w-full md:w-[300px] shrink-0 flex flex-col items-start">
                  <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">
                    0{index + 1}
                  </span>
                  <h2 className="text-[24px] md:text-[28px] leading-[1.2] font-bold text-white">
                    {service.title}
                  </h2>
                </div>

                {/* Right: Description & Capabilities */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[16px] leading-[1.7] text-slate-300 mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-[15px] text-slate-200">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={service.linkHref}
                      className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{service.linkText}</span>
                    </Link>
                  </div>
                </div>
              </section>
            </ScrollFade>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
