import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parvaaz.com'),
  title: {
    default: 'Parvaaz — Creative AI & Digital Solutions | Rise • Grow • Succeed',
    template: '%s — Parvaaz',
  },
  description:
    'Parvaaz combines AI, software, and creative growth services to help businesses work smarter and stand out. Rise, Grow, Succeed.',
  openGraph: {
    title: 'Parvaaz — Creative AI & Digital Solutions | Rise • Grow • Succeed',
    description:
      'Parvaaz combines AI, software, and creative growth services to help businesses work smarter and stand out. Rise, Grow, Succeed.',
    siteName: 'Parvaaz',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#050811] text-[#F8FAFC] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <Nav />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
