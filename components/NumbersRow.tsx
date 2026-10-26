import React from 'react';
import { stats } from '@/data/site';

export default function NumbersRow() {
  const items = [
    { label: 'Videos made', value: stats.videosMade ?? '—' },
    { label: 'Ads run', value: stats.adsRun ?? '—' },
    { label: 'Agents built', value: stats.agentsBuilt ?? '—' },
    { label: 'Websites', value: stats.websites ?? '—' },
    { label: 'Industries', value: stats.industries ?? '—' },
  ];

  return (
    <section className="w-full border-t border-b border-[#E4E4E0] py-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 border-l border-t md:border-t-0 border-[#E4E4E0]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div
                key={item.label}
                className={`flex flex-col justify-start p-6 border-r border-b border-[#E4E4E0] ${
                  isLast ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <span className="text-[40px] leading-none font-medium text-[#111111] tracking-[-0.03em]">
                  {item.value}
                </span>
                <span className="text-[13px] leading-[1.4] text-[#6B6B6B] mt-3 font-normal">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
