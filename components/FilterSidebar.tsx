'use client';

import React from 'react';

export interface FilterOption {
  slug: string;
  name: string;
  count: number;
}

export interface FilterSidebarProps {
  categoryCounts: FilterOption[];
  totalCategoryCount: number;
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  industryCounts: { name: string; count: number }[];
  totalIndustryCount: number;
  selectedIndustry: string;
  onSelectIndustry: (name: string) => void;
  isFilterActive: boolean;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  categoryCounts,
  totalCategoryCount,
  selectedCategory,
  onSelectCategory,
  industryCounts,
  totalIndustryCount,
  selectedIndustry,
  onSelectIndustry,
  isFilterActive,
  onClearFilters,
}: FilterSidebarProps) {
  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

  return (
    <aside className="hidden md:block w-[240px] shrink-0 sticky top-[104px]">
      {/* Category Group */}
      <div>
        <span className="block text-[12px] uppercase tracking-[0.15em] text-cyan-400 font-bold mb-4">
          CATEGORY
        </span>
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => onSelectCategory('')}
            className={`w-full flex items-center justify-between text-left text-[15px] transition-all duration-150 cursor-pointer py-1 ${
              selectedCategory === ''
                ? 'text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-3'
                : 'text-slate-400 hover:text-white border-l-2 border-transparent pl-3'
            }`}
          >
            <span>All work</span>
            <span className="text-[12px] text-slate-500">{totalCategoryCount}</span>
          </button>

          {categoryCounts.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => onSelectCategory(cat.slug)}
                className={`w-full flex items-center justify-between text-left text-[15px] transition-all duration-150 cursor-pointer py-1 ${
                  isActive
                    ? 'text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-3'
                    : 'text-slate-400 hover:text-white border-l-2 border-transparent pl-3'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[12px] text-slate-500">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spacing */}
      <div className="h-10" />

      {/* Industry Group */}
      <div>
        <span className="block text-[12px] uppercase tracking-[0.15em] text-cyan-400 font-bold mb-4">
          INDUSTRY
        </span>
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => onSelectIndustry('')}
            className={`w-full flex items-center justify-between text-left text-[15px] transition-all duration-150 cursor-pointer py-1 ${
              selectedIndustry === ''
                ? 'text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-3'
                : 'text-slate-400 hover:text-white border-l-2 border-transparent pl-3'
            }`}
          >
            <span>All industries</span>
            <span className="text-[12px] text-slate-500">{totalIndustryCount}</span>
          </button>

          {industryCounts.map((ind) => {
            const isActive =
              norm(selectedIndustry) === norm(ind.name) ||
              selectedIndustry.toLowerCase() === ind.name.toLowerCase();
            return (
              <button
                key={ind.name}
                type="button"
                onClick={() => onSelectIndustry(ind.name)}
                className={`w-full flex items-center justify-between text-left text-[15px] transition-all duration-150 cursor-pointer py-1 ${
                  isActive
                    ? 'text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-3'
                    : 'text-slate-400 hover:text-white border-l-2 border-transparent pl-3'
                }`}
              >
                <span>{ind.name}</span>
                <span className="text-[12px] text-slate-500">{ind.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear Filters (visible only when active) */}
      {isFilterActive && (
        <div className="mt-8 pt-4 border-t border-white/[0.08]">
          <button
            type="button"
            onClick={onClearFilters}
            className="text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-150 cursor-pointer text-left"
          >
            ✕ Clear filters
          </button>
        </div>
      )}
    </aside>
  );
}
