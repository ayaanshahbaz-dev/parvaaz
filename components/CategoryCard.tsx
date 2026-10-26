import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Placeholder from './Placeholder';
import { CategoryInfo } from '@/data/site';

export interface CategoryCardProps {
  index: string; // e.g. "01"
  category: CategoryInfo;
  projectCount: number;
  thumbnail?: string | null;
}

export default function CategoryCard({
  index,
  category,
  projectCount,
  thumbnail,
}: CategoryCardProps) {
  return (
    <Link
      href={`/work?category=${category.slug}`}
      className="group block w-full focus-visible:outline-[#1565E8]"
    >
      {/* Media container 4:3 */}
      <div className="relative aspect-[4/3] w-full rounded-[2px] border border-[#E4E4E0] overflow-hidden bg-[#E4E4E0] mb-4">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <Placeholder
            aspectRatio="full"
            className="transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>

      {/* Row: Left index + category name | Right count + arrow */}
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[13px] leading-[1.4] text-[#6B6B6B] select-none font-normal">
            {index}
          </span>
          <span className="text-[20px] leading-[1.3] font-medium text-[#111111] group-hover:text-[#1565E8] transition-colors duration-150">
            {category.name}
          </span>
        </div>
        <div className="flex items-baseline gap-1 text-[13px] leading-[1.4] text-[#6B6B6B] shrink-0 font-normal">
          <span>{projectCount} {projectCount === 1 ? 'project' : 'projects'}</span>
          <span className="text-[#111111] group-hover:text-[#1565E8] transition-colors duration-150">
            →
          </span>
        </div>
      </div>

      {/* Description below */}
      <p className="mt-1 text-[15px] leading-[1.6] text-[#6B6B6B] font-normal">
        {category.description}
      </p>
    </Link>
  );
}
