import React, { Suspense } from 'react';
import WorkIndex from '@/components/WorkIndex';

export const metadata = {
  title: 'All Projects — Parvaaz',
  description:
    'Full index of projects, automations, web platforms, and creative campaigns created by Parvaaz.',
};

export default function WorkPage() {
  return (
    <div className="pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <header className="mb-10 md:mb-12">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
            PORTFOLIO
          </span>
          <h1 className="text-[40px] md:text-[54px] leading-[1.08] tracking-[-0.03em] font-bold text-white mb-3">
            All Projects
          </h1>
          <p className="text-[17px] md:text-[18px] text-slate-400 max-w-[620px] leading-relaxed">
            Explore our work across autonomous AI agents, automated workflows, web applications, and digital platforms.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="text-[15px] text-slate-400 py-12">
              Loading projects...
            </div>
          }
        >
          <WorkIndex />
        </Suspense>
      </div>
    </div>
  );
}
