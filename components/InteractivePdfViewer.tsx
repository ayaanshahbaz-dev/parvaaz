'use client';

import React, { useState } from 'react';

interface InteractivePdfViewerProps {
  pdfUrl: string;
  title: string;
}

export default function InteractivePdfViewer({ pdfUrl, title }: InteractivePdfViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full rounded-2xl md:rounded-3xl border border-cyan-500/25 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(34,211,238,0.12)] overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-4 z-50 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.95)] border-cyan-400 bg-slate-950 flex flex-col'
          : 'h-[620px] sm:h-[750px] md:h-[860px]'
      }`}
    >
      {/* Top Interactive Toolbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/90 border-b border-white/[0.08] backdrop-blur-md">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-[13px] sm:text-[14px] font-semibold text-white truncate max-w-[240px] sm:max-w-[420px]">
            {title}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full shrink-0">
            Interactive Scrollable PDF
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Direct Download / Open Link */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 transition-colors"
            title="Open in new window"
          >
            <span>Open in Tab</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Direct Download */}
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-colors"
            title="Download PDF"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden xs:inline">Download</span>
          </a>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Embedded Responsive PDF Viewer Object */}
      <div className="relative w-full flex-1 h-[calc(100%-54px)] bg-slate-950">
        {!hasError ? (
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            title={title}
            className="w-full h-full border-0 bg-slate-900"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900 text-slate-300">
            <p className="mb-4 text-base">Your browser couldn&apos;t embed the PDF directly.</p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
            >
              Open Interactive PDF ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
