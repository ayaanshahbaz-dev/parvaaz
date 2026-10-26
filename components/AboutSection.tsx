import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 md:px-8 relative z-10">
        
        {/* Main Grid: Left Logo Presentation + Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Parvaaz Brand Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer Cyan / Blue Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-sky-500/20 to-blue-600/25 rounded-[36px] blur-2xl opacity-80 -z-10" />

              {/* Logo Presentation Showcase Card */}
              <div className="relative rounded-[32px] overflow-hidden border border-cyan-500/35 bg-gradient-to-b from-[#091122] via-[#060B17] to-[#040711] p-8 sm:p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(34,211,238,0.15)] flex flex-col items-center">
                
                {/* Subtle Grid Backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    INDEPENDENT DIGITAL PARTNER
                  </span>
                </div>

                {/* Parvaaz Official Emblem / Logo */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl animate-pulse" />
                  <Image
                    src="/logo.jpg"
                    alt="Official Parvaaz Brand Logo - Rise, Grow, Succeed"
                    width={220}
                    height={220}
                    className="relative w-full h-full object-contain rounded-2xl drop-shadow-[0_0_25px_rgba(34,211,238,0.45)] select-none"
                    priority
                  />
                </div>

                {/* Subtitle / Brand Ethos */}
                <h3 className="text-xl font-bold tracking-wider text-white uppercase drop-shadow-sm">
                  PARVAAZ
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-400 font-medium">
                  Rise • Grow • Succeed
                </p>

                {/* Divider Accent */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full my-6 opacity-75" />

                {/* Direct Founder Access Micro-Badge */}
                <div className="w-full py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-cyan-400 text-xs">✦</span>
                    <span className="text-[12px] font-bold text-white uppercase tracking-wider">
                      DIRECT FOUNDER COLLABORATION
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-snug">
                    Every project is led hands-on from strategy to maintenance handover.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Mission & What Makes Parvaaz Different */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-300 select-none">
                ABOUT PARVAAZ
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] font-bold tracking-[-0.025em] text-white">
              A digital growth partner for businesses ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                move forward
              </span>
              .
            </h2>

            {/* Core Narrative */}
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-slate-300">
              PARVAAZ helps businesses move from scattered online activity to clearer visibility, faster response, stronger presentation, and more organized digital operations.
            </p>

            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
              Built around <span className="text-slate-200 font-semibold">clarity, trust, and practical execution</span>, PARVAAZ is an independent digital services brand focused on AI automation, digital marketing, SEO, branding support, and business growth strategy.
            </p>

            {/* Who It's Built For - Micro Tag Pills */}
            <div className="mt-6 pt-6 border-t border-white/[0.08] w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Built For Businesses That Need Useful Systems:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Small Businesses',
                  'Startups',
                  'Service Providers',
                  'E-commerce Brands',
                  'Professional Teams',
                ].map((audience) => (
                  <span
                    key={audience}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300"
                  >
                    ✓ {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full text-[14px] font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <span>Work With Us</span>
                <span className="font-bold">→</span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center h-12 px-7 rounded-full text-[14px] font-medium text-slate-300 hover:text-white border border-slate-700/80 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                Explore Case Studies
              </Link>
            </div>

          </div>

        </div>

        {/* Secondary Detailed Cards: Founder & Integrity Pillars */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Founder Vision */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#091122]/90 to-[#050811]/90 border border-cyan-500/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  THE FOUNDER
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  HANDS-ON LEADERSHIP
                </span>
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight mb-4">
                Built by someone who understands the journey.
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-300 mb-4">
                PARVAAZ was started to help businesses get practical digital support without the noise, fake guarantees, or disconnected agency experience that many service providers deliver.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-300">
                The founder works directly with every client to understand their business, define clear priorities, and build useful systems that can be maintained after handover.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                No Middlemen or Account Managers
              </span>
              <span className="font-semibold text-slate-300">Direct Client Access</span>
            </div>
          </div>

          {/* Card 2: Transparency & Integrity Commitments */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#091122]/90 to-[#050811]/90 border border-cyan-500/20 backdrop-blur-sm shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                  HONEST STANDARDS
                </span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  ZERO FLUFF
                </span>
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight mb-4">
                Credibility through clear process and real execution.
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-300 mb-6">
                PARVAAZ does not publish fake clients, fake testimonials, invented awards, or unsupported performance claims.
              </p>

              {/* 4 Pillars of Credibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Clear Process</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Useful Demonstrations</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Responsible Technology</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Transparent Delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Transparent Delivery Boundaries
              </span>
              <span className="font-semibold text-cyan-300">100% Authentic Work</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
