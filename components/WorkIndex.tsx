'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { categories } from '@/data/site';

export default function WorkIndex() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category') || '';
  const [isFading, setIsFading] = useState(false);

  const handleSelectCategory = (slug: string) => {
    setIsFading(true);
    setTimeout(() => {
      const params = new URLSearchParams();
      if (slug) params.set('category', slug);
      const query = params.toString();
      const newUrl = query ? `${pathname}?${query}` : pathname;
      router.replace(newUrl, { scroll: false });
      setTimeout(() => {
        setIsFading(false);
      }, 50);
    }, 80);
  };

  const filteredProjects = selectedCategory
    ? projects.filter(
        (p) => p.category === selectedCategory || p.secondaryCategory === selectedCategory
      )
    : projects;

  const sortedProjects = [...filteredProjects].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full">
      {/* Category Filters at the Top */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 pb-6 border-b border-white/[0.08]">
        {/* All Projects Pill */}
        <button
          type="button"
          onClick={() => handleSelectCategory('')}
          className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
            selectedCategory === ''
              ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
              : 'bg-slate-900/70 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/50'
          }`}
        >
          All Projects ({projects.length})
        </button>

        {/* Individual Category Pills */}
        {categories.map((cat) => {
          const count = projects.filter(
            (p) => p.category === cat.slug || p.secondaryCategory === cat.slug
          ).length;
          const isActive = selectedCategory === cat.slug;

          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => handleSelectCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
                  : 'bg-slate-900/70 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/50'
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Projects Count */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[13px] font-mono text-slate-400 uppercase tracking-wider">
          Showing {sortedProjects.length} {sortedProjects.length === 1 ? 'Project' : 'Projects'}
        </span>
      </div>

      {/* Clean Grid Layout */}
      <div
        className={`transition-opacity duration-150 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProjects.map((project) => {
              const categoryName =
                categories.find((c) => c.slug === project.category)?.name || project.category;

              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-[#090F1E]/85 border border-cyan-500/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-[#0C152B] hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 focus-visible:outline-cyan-400"
                >
                  {/* Thumbnail Container (adaptive for vertical ads vs horizontal platforms) */}
                  <div
                    className={`relative w-full overflow-hidden bg-slate-950 border-b border-white/[0.08] ${
                      project.category === 'videos-ads' ? 'aspect-[4/5]' : 'aspect-[16/9]'
                    }`}
                  >
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`transition-transform duration-700 group-hover:scale-105 ${
                          project.category === 'videos-ads'
                            ? 'object-contain bg-black/60'
                            : 'object-cover object-top'
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-900">
                        <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                          {categoryName}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-cyan-300 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 px-2.5 py-0.5 rounded-full">
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-[17px] font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-300 mb-5 line-clamp-3">
                        {project.resultLine}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-cyan-400 group-hover:text-cyan-300">
                        <span>View Project</span>
                        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-lg mb-4">No projects found in this category.</p>
            <button
              onClick={() => handleSelectCategory('')}
              className="text-cyan-400 hover:underline font-semibold"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
