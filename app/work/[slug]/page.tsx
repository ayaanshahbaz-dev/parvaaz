import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { categories } from '@/data/site';
import ProjectVideoPlayer from '@/components/ProjectVideoPlayer';
import InteractivePdfViewer from '@/components/InteractivePdfViewer';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found — Parvaaz',
    };
  }

  return {
    title: `${project.title} — Parvaaz`,
    description: project.resultLine,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const categoryName =
    categories.find((c) => c.slug === project.category)?.name || project.category;

  // Sorted projects by order ascending for pagination
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  return (
    <article className="pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>← All Projects</span>
          </Link>
        </div>

        {/* 1. Project Title and a One-Line Result */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400 select-none">
              {categoryName}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-[12px] font-mono text-slate-400 uppercase tracking-wider">
              {project.industry}
            </span>
          </div>

          <h1 className="text-[36px] sm:text-[46px] md:text-[54px] leading-[1.1] tracking-[-0.03em] font-bold text-white mb-4">
            {project.title}
          </h1>

          <p className="text-[18px] sm:text-[21px] leading-relaxed text-slate-300 font-normal max-w-[840px] mb-6">
            {project.resultLine}
          </p>

          {project.pdfUrl && (
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Read Original PDF Deck / Report</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          )}
        </header>

        {/* 2. Media Section: Interactive PDF Viewer, Video Player, or Image Container */}
        {project.pdfUrl ? (
          <div className="mb-14">
            <InteractivePdfViewer pdfUrl={project.pdfUrl} title={project.title} />
          </div>
        ) : project.category === 'videos-ads' ? (
          <div className="flex justify-center mb-14">
            <div className="relative aspect-[9/16] w-full max-w-[440px] rounded-3xl border border-cyan-500/30 overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(34,211,238,0.2)]">
              {project.video ? (
                <ProjectVideoPlayer
                  src={project.video}
                  poster={project.thumbnail || undefined}
                  className="w-full h-full object-contain bg-black"
                />
              ) : project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-contain bg-black"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                  Ad preview
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full rounded-3xl border border-cyan-500/25 overflow-hidden bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(34,211,238,0.15)] mb-14">
            {project.video ? (
              <ProjectVideoPlayer
                src={project.video}
                poster={project.thumbnail || undefined}
                className="w-full h-full object-cover"
              />
            ) : project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                Demo preview
              </div>
            )}
          </div>
        )}

        {/* 3. Challenge, What We Built, and Tools Used */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* Challenge (Col 6) */}
          <div className="md:col-span-6 rounded-2xl p-8 bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-cyan-400 mb-3 block">
                The Challenge
              </span>
              <h2 className="text-[22px] font-bold text-white mb-4">
                What Problem We Solved
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-300">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* What We Built (Col 6) */}
          <div className="md:col-span-6 rounded-2xl p-8 bg-[#090F1E]/80 border border-cyan-500/15 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-cyan-400 mb-3 block">
                The Solution
              </span>
              <h2 className="text-[22px] font-bold text-white mb-4">
                What We Built
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tools Used (Full Width) */}
          <div className="md:col-span-12 rounded-2xl p-8 bg-[#090F1E]/60 border border-white/[0.08] backdrop-blur-sm">
            <span className="text-[12px] font-bold uppercase tracking-wider text-cyan-400 mb-3 block">
              Technology Stack
            </span>
            <h3 className="text-[20px] font-bold text-white mb-5">
              Tools & Integrations Used
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-xl text-[13px] font-semibold bg-slate-900 border border-slate-700/80 text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Project Gallery & Interface Previews (For non-PDF projects with images) */}
        {!project.pdfUrl && project.images && project.images.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-2 block select-none">
                  VISUAL PREVIEW
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-bold text-white">
                  {project.category === 'videos-ads' ? 'Ad Creative Gallery' : 'Interface & System Showcase'}
                </h2>
              </div>
              <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/60">
                {project.images.length} views
              </span>
            </div>

            <div
              className={
                project.category === 'videos-ads'
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-6'
              }
            >
              {project.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={`group relative rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] ${
                    project.category === 'videos-ads' ? 'aspect-[9/16]' : 'aspect-[16/10]'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} creative ${idx + 1}`}
                    fill
                    sizes={
                      project.category === 'videos-ads'
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        : '(max-width: 768px) 100vw, 50vw'
                    }
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      project.category === 'videos-ads' ? 'object-contain bg-black' : 'object-cover object-top'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-mono text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-md border border-cyan-500/30">
                      Creative {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Results with Numbers (only if available) */}
        {project.results && project.results.length > 0 && (
          <section className="mb-20 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#090F1E] to-[#070D1A] border border-cyan-500/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-white mb-8">
              Results & Outcomes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.results.map((res, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-2xl bg-[#060B14]/80 border border-cyan-500/15"
                >
                  <span className="text-[44px] md:text-[54px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 tracking-[-0.03em] mb-3">
                    {res.value}
                  </span>
                  <span className="text-[14px] font-medium text-slate-300 leading-snug">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. A “Need Something Similar? Let’s Talk” CTA at the Bottom */}
        <section className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#070F1E] via-[#09152C] to-[#060D1A] border border-cyan-500/35 shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="max-w-[650px]">
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-tight mb-3">
              Need Something Similar? Let&apos;s Talk
            </h2>
            <p className="text-[16px] text-slate-300 leading-relaxed">
              Whether you need autonomous AI agents, automated workflows, or a custom web platform, tell us about your project and we&apos;ll scope a solution tailored to your goals.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.45)] cursor-pointer"
            >
              <span>Get in Touch</span>
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </section>

        {/* Previous / Next Project Navigation */}
        <nav
          aria-label="Project pagination"
          className="pt-8 border-t border-white/[0.08] flex items-center justify-between gap-4"
        >
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="flex flex-col gap-1 text-left text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <span className="text-xs text-slate-500 group-hover:text-cyan-400 uppercase tracking-wider">
                ← Previous Project
              </span>
              <span className="text-[15px] font-medium text-white group-hover:text-cyan-300">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="flex flex-col gap-1 text-right text-slate-300 hover:text-cyan-400 transition-colors group"
            >
              <span className="text-xs text-slate-500 group-hover:text-cyan-400 uppercase tracking-wider">
                Next Project →
              </span>
              <span className="text-[15px] font-medium text-white group-hover:text-cyan-300">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

      </div>
    </article>
  );
}
