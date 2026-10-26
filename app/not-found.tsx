import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — Parvaaz',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <div className="py-[72px] md:py-[128px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <h1 className="text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.03em] font-normal text-[#111111] mb-6">
          Page not found.
        </h1>
        <div>
          <Link
            href="/"
            className="text-[15px] font-normal text-[#111111] hover:text-[#1565E8] transition-colors duration-150"
          >
            Back to home →
          </Link>
        </div>
      </div>
    </div>
  );
}
