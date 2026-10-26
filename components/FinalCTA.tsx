import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-r from-[#070F1E] via-[#09152C] to-[#060D1A] border border-cyan-500/30 shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(34,211,238,0.12)]">
          
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 cta-grid-bg opacity-40 pointer-events-none" />

          {/* Decorative Corner Diagonal Hatch Lines (Top Left) */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none overflow-hidden opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 stroke-1">
              <line x1="-20" y1="20" x2="40" y2="-40" />
              <line x1="-10" y1="40" x2="60" y2="-30" />
              <line x1="0" y1="60" x2="80" y2="-20" />
              <line x1="10" y1="80" x2="100" y2="-10" />
            </svg>
          </div>

          {/* Decorative Corner Diagonal Hatch Lines (Bottom Right) */}
          <div className="absolute bottom-0 right-0 w-36 h-36 pointer-events-none overflow-hidden opacity-30 rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 stroke-1">
              <line x1="-20" y1="20" x2="40" y2="-40" />
              <line x1="-10" y1="40" x2="60" y2="-30" />
              <line x1="0" y1="60" x2="80" y2="-20" />
              <line x1="10" y1="80" x2="100" y2="-10" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-[650px]">
              {/* Eyebrow */}
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
                LET&apos;S WORK TOGETHER
              </span>

              {/* Title */}
              <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.15] font-bold tracking-[-0.02em] text-white">
                Ready to take the next step?
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-[17px] md:text-[19px] text-slate-300">
                Tell us what you&apos;re building.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[16px] font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] cursor-pointer"
              >
                <span>Start a Project</span>
                <span className="text-lg font-bold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
