import React, { Suspense, useEffect, useState } from 'react';
import { GlassProvider, useGlass } from './components/GlassContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionSkeleton } from './components/Skeletons';

// Lazy loaded components for below-the-fold content
const Stats = React.lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const About = React.lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Competencies = React.lazy(() => import('./components/Competencies').then(m => ({ default: m.Competencies })));
const Process = React.lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Packages = React.lazy(() => import('./components/Packages').then(m => ({ default: m.Packages })));
const Expertise = React.lazy(() => import('./components/Expertise').then(m => ({ default: m.Expertise })));
const Blog = React.lazy(() => import('./components/Blog').then(m => ({ default: m.Blog })));
const FlowingMenu = React.lazy(() => import('./components/FlowingMenu').then(m => ({ default: m.FlowingMenu })));
const Faq = React.lazy(() => import('./components/Faq').then(m => ({ default: m.Faq })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

import { LazyLoad } from './components/LazyLoad';

function AppContent() {
  const { settings } = useGlass();
  const [showFilter, setShowFilter] = useState(false);

  // Defer SVG filter rendering to reduce styleLayout blocking on initial load
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setShowFilter(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal overflow-x-hidden selection:bg-brand-gold/30 selection:text-brand-charcoal">
      {/* Live Dynamic SVG Filter Map - Deferred */}
      {showFilter && (
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <filter id="glass-distortion-dynamic" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency={`${settings.frequencyX} ${settings.frequencyY}`}
                numOctaves="2" 
                seed="92" 
                result="noise" 
              />
              <feGaussianBlur 
                in="noise" 
                stdDeviation="2" 
                result="blurred" 
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="blurred" 
                scale={settings.scale}
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
          </defs>
        </svg>
      )}

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Intro wrapper with home target */}
      <main id="main-content">
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>


          {/* Trust Metrics */}
          <LazyLoad>
            <Stats />
          </LazyLoad>

          {/* About Section */}
          <LazyLoad>
            <About />
          </LazyLoad>

          {/* Core Competencies */}
          <LazyLoad>
            <Competencies />
          </LazyLoad>

          {/* Progressive Process Playbook */}
          <LazyLoad>
            <Process />
          </LazyLoad>

          {/* Packages Pricing Tier */}
          <LazyLoad>
            <Packages />
          </LazyLoad>
          
          {/* Interactive Core Services Section */}
          <LazyLoad>
            <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 content-visibility-auto contain-intrinsic-size-1000" id="services">
              <div className="space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
                    OUR CORE SERVICES
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
                    High-Impact Growth Channels
                  </h2>
                  <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
                  <p className="font-sans text-brand-charcoal/75 text-base md:text-lg">
                    Hover over each channel to experience our adaptive visual framework. We engineer premium campaigns across search, social, and retail media networks.
                  </p>
                </div>
                
                <div className="relative h-[480px] md:h-[640px] w-full rounded-3xl overflow-hidden border border-brand-charcoal/10 bg-white/30 backdrop-blur-sm shadow-md">
                  <FlowingMenu 
                    items={[
                      { link: '#proposal', text: 'Google Ads', image: '/assets/google-ads.webp' },
                      { link: '#proposal', text: 'Meta Ads', image: '/assets/meta-ads.webp' },
                      { link: '#proposal', text: 'SEO & Content', image: '/assets/seo-content.webp' },
                      { link: '#proposal', text: 'Amazon Ads', image: '/assets/amazon-ads.webp' }
                    ]} 
                    speed={12}
                    textColor="#2B281B"
                    marqueeBgColor="#E3A85C"
                    marqueeTextColor="#2B281B"
                    borderColor="rgba(43, 40, 27, 0.15)"
                  />
                </div>
              </div>
            </section>
          </LazyLoad>

          {/* Channels & Platforms */}
          <LazyLoad>
            <Expertise />
          </LazyLoad>

          {/* Editorial Insights Blog */}
          <LazyLoad>
            <Blog />
          </LazyLoad>

          {/* Frequently Asked Accordions */}
          <LazyLoad>
            <Faq />
          </LazyLoad>

          {/* Lead capture proposal form & session checkout */}
          <LazyLoad>
            <Contact />
          </LazyLoad>

      </main>

      <Suspense fallback={<div className="h-32"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <GlassProvider>
      <AppContent />
    </GlassProvider>
  );
}
