import React from 'react';
import Link from 'next/link';
import { ParvaazLogoMark } from './Nav';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050811] py-12 md:py-16">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 select-none group"
            >
              <ParvaazLogoMark className="w-7 h-7" />
              <span className="text-[18px] font-bold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors">
                PARVAAZ
              </span>
            </Link>

            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />

            <span className="text-[14px] text-slate-400">
              AI. Digital. Creative.
            </span>
          </div>

          {/* Right: Nav Links & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <nav className="flex flex-wrap items-center gap-6 text-[14px] text-slate-300">
              <Link href="/services" className="hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="/work" className="hover:text-cyan-400 transition-colors">
                Work
              </Link>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </nav>

            <span className="text-[13px] text-slate-500">
              © 2026 Parvaaz. All rights reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
