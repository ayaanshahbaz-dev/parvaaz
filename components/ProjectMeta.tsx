import React from 'react';
import { Project } from '@/data/projects';
import { categories } from '@/data/site';

export interface ProjectMetaProps {
  project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const categoryName =
    categories.find((c) => c.slug === project.category)?.name || project.category;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <span className="block text-[12px] uppercase tracking-wider text-cyan-400 font-bold mb-1">
            Category
          </span>
          <span className="text-[15px] font-medium text-white">
            {categoryName}
          </span>
        </div>

        <div>
          <span className="block text-[12px] uppercase tracking-wider text-cyan-400 font-bold mb-1">
            Industry
          </span>
          <span className="text-[15px] font-medium text-white">
            {project.industry}
          </span>
        </div>

        <div>
          <span className="block text-[12px] uppercase tracking-wider text-cyan-400 font-bold mb-1">
            Year
          </span>
          <span className="text-[15px] font-medium text-white">
            {project.year}
          </span>
        </div>

        <div>
          <span className="block text-[12px] uppercase tracking-wider text-cyan-400 font-bold mb-1">
            Tools
          </span>
          <span className="text-[15px] font-medium text-white">
            {project.tools.slice(0, 3).join(', ')}
            {project.tools.length > 3 ? ' +' : ''}
          </span>
        </div>
      </div>

      {project.clientPublic && project.clientLabel ? (
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-baseline gap-2">
          <span className="text-[13px] text-slate-400">Client:</span>
          <span className="text-[15px] font-medium text-white">
            {project.clientLabel}
          </span>
        </div>
      ) : null}
    </div>
  );
}
