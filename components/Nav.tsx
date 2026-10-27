'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function ParvaazLogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/parvaaz-logo.png"
        alt="Parvaaz Logo"
        width={36}
        height={36}
        className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
        priority
      />
    </span>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-[#050811]/85 backdrop-blur-md border-b border-white/[0.08] w-full transition-colors">
      <div className="max-w-[1240px] mx-auto h-full px-5 md:px-8 flex items-center justify-between">
        {/* Left: Icon mark + PARVAAZ wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none group"
        >
          <ParvaazLogoMark className="w-8 h-8 transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors duration-150 leading-tight">
              PARVAAZ
            </span>
            <span className="hidden sm:block text-[9px] font-semibold tracking-[0.28em] text-cyan-400 uppercase select-none">
              Rise • Grow • Succeed
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-[14px] text-slate-300 hover:text-white transition-colors duration-150 font-normal"
          >
            Services
          </Link>
          <Link
            href="/work"
            className="text-[14px] text-slate-300 hover:text-white transition-colors duration-150 font-normal"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-[14px] text-slate-300 hover:text-white transition-colors duration-150 font-normal"
          >
            About
          </Link>
          <Link
            href="/#process"
            className="text-[14px] text-slate-300 hover:text-white transition-colors duration-150 font-normal"
          >
            Process
          </Link>
          <Link
            href="/contact"
            className="text-[14px] text-slate-300 hover:text-white transition-colors duration-150 font-normal"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-cyan-400 border border-cyan-500/35 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white px-5 py-2 rounded-full transition-all duration-200"
          >
            <span>Start a Project</span>
            <span className="text-xs">→</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-[14px] font-medium text-slate-200 hover:text-cyan-400 p-2 cursor-pointer border border-white/10 rounded-lg px-3 py-1.5"
          aria-expanded={mobileMenuOpen}
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#050811]/95 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between h-[48px]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <ParvaazLogoMark className="w-8 h-8" />
              <span className="text-[20px] font-bold tracking-widest text-white uppercase">
                PARVAAZ
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[14px] font-medium text-slate-300 hover:text-white p-2 cursor-pointer border border-white/10 rounded-lg px-3"
              aria-label="Close menu"
            >
              ✕ Close
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[24px] text-slate-200 hover:text-cyan-400 font-medium"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[24px] text-slate-200 hover:text-cyan-400 font-medium"
            >
              Work
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[24px] text-slate-200 hover:text-cyan-400 font-medium"
            >
              About
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[24px] text-slate-200 hover:text-cyan-400 font-medium"
            >
              Process
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[24px] text-slate-200 hover:text-cyan-400 font-medium"
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-[15px] font-semibold bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 py-3 rounded-full"
              >
                <span>Start a Project</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-1 text-[13px] text-slate-500">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium select-none">
              Rise • Grow • Succeed
            </span>
            <span>© 2026 Parvaaz. All rights reserved.</span>
          </div>
        </div>
      )}
    </header>
  );
}
