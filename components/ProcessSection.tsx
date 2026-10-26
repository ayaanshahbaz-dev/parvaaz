import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand your goals, challenges and opportunities.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Plan the right strategy, UX and solution.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Develop, integrate and bring it to life.',
    },
    {
      number: '04',
      title: 'Improve',
      description: 'Measure, optimize and scale for long-term growth.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-[620px]">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              OUR PROCESS
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] font-bold tracking-[-0.02em] text-white">
              A simple, focused process.
            </h2>
          </div>

          <p className="text-[15px] md:text-[16px] text-slate-400 max-w-[440px] leading-relaxed">
            We keep things clear, collaborative and efficient from day one to launch and beyond.
          </p>
        </div>

        {/* 4 Steps Horizontal Row */}
        <div className="relative">
          {/* Connecting line across steps (visible on md+) */}
          <div className="hidden md:block absolute top-[26px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-cyan-500/30 via-cyan-400/50 to-cyan-500/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start group">
                {/* Circle Number Badge */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#050811] border-2 border-cyan-400/80 flex items-center justify-center text-[15px] font-bold text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.3)] mb-6 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_22px_rgba(0,229,255,0.5)] transition-all duration-200">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.65] text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
