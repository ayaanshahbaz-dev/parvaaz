import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/25 bg-[#090F1E] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about_parvaaz.jpg"
                  alt="Strategy, technology and creativity at Parvaaz"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Copy & Accent Line */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Section Eyebrow */}
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 select-none">
              ABOUT PARVAAZ
            </span>

            {/* Headline */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.15] font-bold tracking-[-0.02em] text-white">
              Strategy, technology, and creativity — working as one.
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-slate-400">
              Parvaaz is a multidisciplinary partner helping businesses solve operational challenges, create strong digital experiences, and reach the right audience.
            </p>

            {/* Cyan Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full mt-8 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
          </div>

        </div>
      </div>
    </section>
  );
}
