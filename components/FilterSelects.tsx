'use client';

import React from 'react';
import { FilterOption } from './FilterSidebar';

export interface FilterSelectsProps {
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

export default function FilterSelects({
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
}: FilterSelectsProps) {
  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="md:hidden flex flex-col gap-4 mb-8">
      <div>
        <label htmlFor="mobile-category-select" className="sr-only">
          Category
        </label>
        <select
          id="mobile-category-select"
          value={selectedCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          className="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-900 text-[15px] text-white focus:outline-none focus:border-cyan-400"
        >
          <option value="">All work ({totalCategoryCount})</option>
          {categoryCounts.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name} ({cat.count})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mobile-industry-select" className="sr-only">
          Industry
        </label>
        <select
          id="mobile-industry-select"
          value={norm(selectedIndustry)}
          onChange={(e) => onSelectIndustry(e.target.value)}
          className="w-full h-12 px-4 rounded-xl border border-slate-700 bg-slate-900 text-[15px] text-white focus:outline-none focus:border-cyan-400"
        >
          <option value="">All industries ({totalIndustryCount})</option>
          {industryCounts.map((ind) => (
            <option key={ind.name} value={norm(ind.name)}>
              {ind.name} ({ind.count})
            </option>
          ))}
        </select>
      </div>

      {isFilterActive && (
        <button
          type="button"
          onClick={onClearFilters}
          className="text-[13px] font-semibold text-cyan-400 hover:text-cyan-300 text-left self-start py-1"
        >
          ✕ Clear filters
        </button>
      )}
    </div>
  );
}
