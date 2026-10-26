import React from 'react';
import ShowreelHero from '@/components/ShowreelHero';
import TickerBar from '@/components/TickerBar';
import SelectedWorkSection from '@/components/SelectedWorkSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import FinalCTA from '@/components/FinalCTA';
import ScrollFade from '@/components/ScrollFade';

export const metadata = {
  title: 'Parvaaz — Creative AI & Digital Solutions',
  description:
    'Parvaaz combines AI, software, and creative growth services to help businesses work smarter and stand out.',
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1) Hero Section with Continuous Running Showcase Reel */}
      <ShowreelHero />

      {/* 2) Ticker Bar: AI • SOFTWARE • CREATIVE • GROWTH */}
      <ScrollFade>
        <TickerBar />
      </ScrollFade>

      {/* 3) Featured Projects / Selected Work Section: Top 6 projects in larger cards */}
      <ScrollFade>
        <SelectedWorkSection />
      </ScrollFade>

      {/* 4) Capabilities Section: Explaining services behind each category */}
      <ScrollFade>
        <CapabilitiesSection />
      </ScrollFade>

      {/* 5) About Parvaaz */}
      <ScrollFade>
        <AboutSection />
      </ScrollFade>

      {/* 6) Our Process */}
      <ScrollFade>
        <ProcessSection />
      </ScrollFade>

      {/* 7) Final Call To Action */}
      <ScrollFade>
        <FinalCTA />
      </ScrollFade>
    </div>
  );
}
