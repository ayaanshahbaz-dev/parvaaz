import React from 'react';
import Link from 'next/link';

export interface SectionHeadingProps {
  title: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  linkText,
  linkHref,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 md:mb-12 ${className}`}>
      <h2 className="text-[28px] md:text-[40px] leading-[1.1] font-normal tracking-[-0.03em] text-[#111111]">
        {title}
      </h2>
      {linkText && linkHref && (
        <Link
          href={linkHref}
          className="text-[15px] font-normal text-[#111111] hover:text-[#1565E8] transition-colors duration-150 shrink-0 self-start sm:self-auto"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
