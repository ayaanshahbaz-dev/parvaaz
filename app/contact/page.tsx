'use client';

import React, { useState } from 'react';
import { bookingUrl, socialLinks } from '@/data/site';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'AI Agents & Automation',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-12 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-[700px] mb-14 md:mb-16">
          <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 block select-none">
            GET IN TOUCH
          </span>
          <h1 className="text-[40px] md:text-[58px] leading-[1.08] tracking-[-0.03em] font-bold text-white">
            Let&apos;s Build Something Extraordinary.
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] leading-relaxed text-slate-400 font-normal">
            Have a project in mind, need automated AI workflows, or want to scale your creative brand? Tell us about your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#090F1E]/90 border border-cyan-500/20 rounded-3xl p-8 sm:p-10 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto mb-6 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! Our team will review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    >
                      <option value="AI Agents & Automation">AI Agents & Automation</option>
                      <option value="Web Development">Web Development</option>
                      <option value="AI Chatbots & RAG">AI Chatbots & RAG</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Content & Social Media">Content & Social Media</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    >
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                      <option value="$35,000+">$35,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project goals, timelines, and current bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full text-[15px] font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-pointer mt-2"
                >
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Book A Call Direct & Studio Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-3xl p-8 bg-[#090F1E]/80 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 block">
                DIRECT STRATEGY CALL
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Prefer a face-to-face chat?
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-6">
                Skip the back-and-forth email exchange. Book a 20-minute strategy session directly with our engineering and creative leads.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-full text-sm font-semibold border border-cyan-400/80 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                Schedule Free Strategy Call ↗
              </a>
            </div>

            <div className="rounded-3xl p-8 bg-[#090F1E]/50 border border-white/[0.08] backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
                Studio Highlights
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Turnaround under 48 hours for scoping</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Direct Slack/WhatsApp channel access</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Transparent weekly sprint milestones</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 bg-[#090F1E]/50 border border-white/[0.08] backdrop-blur-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
                Follow Parvaaz
              </h4>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Watch behind-the-scenes engineering, AI system drops, and client campaign breakdowns.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 transition-all text-xs font-semibold group"
                  >
                    <span>{social.name}</span>
                    <span className="text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
