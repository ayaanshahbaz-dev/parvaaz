import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { categories } from '@/data/site';

export default function SelectedWorkSection() {
  // Showcase top 4 featured projects in a single 4-column row
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-[640px]">
            <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              FEATURED PROJECTS
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] leading-[1.12] font-bold tracking-[-0.02em] text-white">
              Selected Work
            </h2>
            <p className="mt-3 text-[16px] md:text-[18px] text-slate-400 leading-relaxed">
              Recent highlights spanning autonomous AI agents, conversion-focused web platforms, and automated workflow software.
            </p>
          </div>

          {/* View All Projects Link (Top Right on desktop) */}
          <div className="shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-cyan-400 border border-cyan-500/35 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all duration-200"
            >
              <span>View All Projects</span>
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>

        {/* Projects in 4-Column Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {featuredProjects.map((project) => {
            const categoryName =
              categories.find((c) => c.slug === project.category)?.name || project.category;

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#090F1E]/85 border border-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#0C152B] hover:shadow-[0_15px_40px_rgba(0,229,255,0.18)] hover:-translate-y-1.5 focus-visible:outline-cyan-400"
              >
                {/* Widescreen Thumbnail Media Container (16:9) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-white/[0.08]">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                        {categoryName}
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-cyan-300 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 px-2.5 py-0.5 rounded-full shadow-lg">
                      {categoryName}
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-300 mb-5 line-clamp-3">
                      {project.resultLine}
                    </p>
                  </div>

                  {/* View Project Action */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-cyan-400 group-hover:text-cyan-300">
                      <span>View Project</span>
                      <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom "View All Projects" Link */}
        <div className="mt-14 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-white/[0.04] text-white border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/[0.08] transition-all duration-200"
          >
            <span>View All Projects</span>
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
