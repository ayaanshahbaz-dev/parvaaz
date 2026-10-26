import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { categories } from '@/data/site';

export interface ProjectCardProps {
  project: Project;
  aspectRatio?: '16/9' | '4/3';
  priority?: boolean;
}

export default function ProjectCard({
  project,
  aspectRatio = '4/3',
  priority = false,
}: ProjectCardProps) {
  const categoryName =
    categories.find((c) => c.slug === project.category)?.name || project.category;

  const aspectClass =
    aspectRatio === '16/9' ? 'aspect-[16/9] w-full' : 'aspect-[4/3] w-full';

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block w-full rounded-2xl overflow-hidden bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0C152B]/90 hover:shadow-[0_12px_40px_rgba(0,229,255,0.15)] hover:-translate-y-1 focus-visible:outline-cyan-400"
    >
      {/* Media */}
      <div
        className={`relative ${aspectClass} overflow-hidden bg-slate-950 border-b border-white/[0.06]`}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority={priority}
            sizes={
              aspectRatio === '16/9'
                ? '100vw'
                : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400/80">
              {project.category}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col items-start gap-2">
        <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 rounded-full">
          {categoryName} · {project.industry}
        </span>

        <h3 className="text-[19px] leading-[1.3] font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-[14px] leading-[1.6] text-slate-400 font-normal">
          {project.resultLine}
        </p>

        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-cyan-400 group-hover:text-cyan-300 mt-2">
          <span>View case study</span>
          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </span>
      </div>
    </Link>
  );
}
