import React from 'react';

export default function TickerBar() {
  const items = ['AI', 'SOFTWARE', 'CREATIVE', 'GROWTH'];

  return (
    <div className="w-full py-6 border-y border-white/[0.06] bg-[#050811]/60">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 md:gap-12">
          {items.map((item, index) => (
            <React.Fragment key={item}>
              <span className="text-[13px] md:text-[14px] font-semibold tracking-[0.25em] text-slate-300 uppercase select-none hover:text-cyan-400 transition-colors">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_8px_rgba(34,211,238,0.8)] select-none" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
