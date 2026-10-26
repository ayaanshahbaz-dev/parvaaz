import React from 'react';
import Link from 'next/link';

interface CapabilityCategory {
  title: string;
  category: string;
  description: string;
  services: string[];
}

export default function CapabilitiesSection() {
  const capabilities: CapabilityCategory[] = [
    {
      category: 'AI & Automations',
      title: 'AI Agents & Automation',
      description:
        'Intelligent agentic workflows and bots that automate manual processes, integrate APIs, and run 24/7 without extra overhead.',
      services: ['Autonomous Workflows', 'WhatsApp & CRM Bots', 'Data Extraction', 'System Auditing'],
    },
    {
      category: 'Engineering & SEO',
      title: 'Websites & Platforms',
      description:
        'High-performance web applications and corporate websites built with modern frameworks, technical SEO, and conversion-focused UX.',
      services: ['Custom Web Apps', 'Technical SEO', 'Performance Optimization', 'Design Systems'],
    },
    {
      category: 'Product & Architecture',
      title: 'SaaS & Digital Products',
      description:
        'End-to-end software development from initial strategy and MVP architecture to scalable production release and support.',
      services: ['Product Strategy', 'MVP Development', 'Cloud Architecture', 'Continuous Scaling'],
    },
    {
      category: 'Creative & Growth',
      title: 'Video & Digital Marketing',
      description:
        'Cinema-grade visual storytelling, high-performing commercial ads, and data-backed digital marketing campaigns that drive real reach.',
      services: ['Brand Commercials', 'Paid Ad Creative', 'Social Video Production', 'Growth Strategy'],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-white/[0.08]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-[640px]">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              CAPABILITIES & SERVICES
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] font-bold tracking-[-0.02em] text-white">
              What Sits Behind Each Category
            </h2>
            <p className="mt-3 text-[16px] md:text-[18px] text-slate-400 leading-relaxed">
              From technical SEO and growth marketing to custom autonomous agents and product strategy — here is how we power your brand.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>See All Services & Deliverables</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 4 Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-7 bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-400/40 hover:bg-[#0C152B]/90 transition-all duration-300"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                  {item.category}
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-400 mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-2">
                {item.services.map((svc) => (
                  <div key={svc} className="flex items-center gap-2 text-[13px] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Services page at bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-cyan-400 hover:underline"
          >
            <span>Learn more about how our services integrate on the Services page</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
