'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function ShowreelHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Ensure video is playing continuously
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires user gesture
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Copy & Actions (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-300 select-none">
                CREATIVE AI & DIGITAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[40px] sm:text-[48px] xl:text-[58px] leading-[1.08] tracking-[-0.03em] font-bold text-white">
              We Build What{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                Moves Business
              </span>{' '}
              Forward.
            </h1>

            {/* Paragraph Description */}
            <p className="mt-5 text-[16px] sm:text-[18px] leading-[1.65] text-slate-300 max-w-[540px]">
              Parvaaz combines AI, software, and creative growth services to help businesses work smarter and stand out in a competitive world.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 sm:h-13 px-7 sm:px-8 rounded-full text-[14px] sm:text-[15px] font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <span className="text-base font-bold">→</span>
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center h-12 sm:h-13 px-7 sm:px-8 rounded-full text-[14px] sm:text-[15px] font-medium text-white border border-slate-700/80 bg-white/[0.04] hover:bg-white/[0.08] hover:border-slate-500 transition-all duration-200 cursor-pointer"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Studio Capabilities Micro-Tags */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] w-full max-w-[540px] flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] sm:text-[13px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✦</span>
                <span>AI Agents & Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✦</span>
                <span>Modern Web Platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✦</span>
                <span>Cinema Video Production</span>
              </div>
            </div>
          </div>

          {/* Right Column: Horizontal (16:9) Widescreen Video (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 w-full">
            <div className="relative w-full max-w-[620px]">
              
              {/* Ambient Glow Aura Behind the Reel Frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/25 via-sky-500/15 to-blue-600/20 rounded-[30px] blur-xl opacity-75 -z-10" />

              {/* Horizontal Card Frame (Native 16:9 Aspect Ratio) */}
              <div className="relative w-full aspect-[16/9] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-cyan-500/35 bg-[#060B17] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(34,211,238,0.2)]">
                
                {/* Continuous Running Video */}
                <video
                  ref={videoRef}
                  src="/projects/youtube-automation-saas/video.mp4"
                  poster="/images/hero_showreel.jpg"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover select-none"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Top HUD: Live Indicator & Audio Toggle */}
                <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-cyan-200 uppercase">
                      SHOWCASE REEL
                    </span>
                  </div>

                  {/* Audio Mute/Unmute Toggle */}
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:border-cyan-400 hover:scale-105 cursor-pointer shadow-md"
                    title={isMuted ? 'Unmute sound' : 'Mute sound'}
                    aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
                  >
                    {isMuted ? (
                      <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Bottom HUD: Reel Title & Status */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 flex flex-col pointer-events-none">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-cyan-400 uppercase">
                      CONTINUOUS PREVIEW
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                      2026 EDITION
                    </span>
                  </div>
                  <span className="text-[14px] sm:text-[16px] font-bold text-white tracking-wide drop-shadow-md">
                    PARVAAZ IN MOTION
                  </span>
                </div>

                {/* Bottom Animated Glowing Line (Playback Progress Indicator) */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-800/80 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-300 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
