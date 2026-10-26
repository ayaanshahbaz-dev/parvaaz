import React from 'react';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: 'ai-agents',
      title: 'AI Agents & Automation',
      description: 'Smart agents and automated workflows to save time and scale operations.',
      link: '/services#ai-agents',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="3" y="3" width="6" height="6" rx="1.5" />
          <rect x="15" y="3" width="6" height="6" rx="1.5" />
          <rect x="9" y="15" width="6" height="6" rx="1.5" />
          <path d="M6 9v3a3 3 0 0 0 3 3h3" />
          <path d="M18 9v3a3 3 0 0 1-3 3" />
        </svg>
      ),
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Modern, fast and scalable web applications tailored to your needs.',
      link: '/services#websites',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 10l-2 2 2 2" />
          <path d="M16 10l2 2-2 2" />
          <path d="M13 9l-2 6" />
        </svg>
      ),
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & RAG',
      description: 'Context-aware chatbots with knowledge retrieval for better, accurate responses.',
      link: '/services#ai-agents',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="12" r="1" fill="currentColor" />
          <circle cx="17" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'video-production',
      title: 'Video Production',
      description: 'High-quality video content that tells your story and drives engagement.',
      link: '/services#videos-ads',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 9h20" />
          <path d="M6 4l2 5" />
          <path d="M11 4l2 5" />
          <path d="M16 4l2 5" />
          <polygon points="10 12 15 15 10 18 10 12" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'content-social',
      title: 'Content & Social Media',
      description: 'Scroll-stopping content and consistent social media growth.',
      link: '/services#social-media',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="5" rx="1" />
          <rect x="13" y="11" width="8" height="10" rx="1.5" />
          <rect x="3" y="14" width="8" height="7" rx="1" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & SEO',
      description: 'Data-driven strategies to increase visibility and generate real results.',
      link: '/services#marketing-seo',
      icon: (
        <svg className="w-8 h-8 text-cyan-400 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.75">
          <rect x="3" y="12" width="4" height="8" rx="1" />
          <rect x="9" y="8" width="4" height="12" rx="1" />
          <rect x="15" y="4" width="4" height="16" rx="1" />
          <circle cx="18" cy="7" r="3" />
          <path d="M20.5 9.5L23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-[620px]">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              OUR SERVICES
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] font-bold tracking-[-0.02em] text-white">
              One partner. Six ways to grow.
            </h2>
          </div>

          <p className="text-[15px] md:text-[16px] text-slate-400 max-w-[440px] leading-relaxed">
            We offer a complete suite of digital services that work together to help your business build, automate, create and grow.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-8 bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0C152B]/90 hover:shadow-[0_10px_35px_rgba(0,229,255,0.12)] hover:-translate-y-1 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                {/* Icon with glowing badge frame */}
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all duration-200">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.65] text-slate-400">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.05]">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cyan-400 group-hover:text-cyan-300 hover:underline"
                >
                  <span>Explore service</span>
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
