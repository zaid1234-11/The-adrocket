/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GlassProvider, useGlass } from './components/GlassContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Competencies } from './components/Competencies';
import { Process } from './components/Process';
import { Packages } from './components/Packages';
import { Expertise } from './components/Expertise';
import { Blog } from './components/Blog';
import { FlowingMenu } from './components/FlowingMenu';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function AppContent() {
  const { settings } = useGlass();

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal overflow-x-hidden selection:bg-brand-gold/30 selection:text-brand-charcoal">
      {/* Live Dynamic SVG Filter Map */}
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

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Intro wrapper with home target */}
      <div id="home" className="scroll-mt-20">
        <Hero />
      </div>

      {/* Trust Metrics */}
      <Stats />

      {/* About Section */}
      <About />

      {/* Core Competencies */}
      <Competencies />

      {/* Progressive Process Playbook */}
      <Process />

      {/* Packages Pricing Tier */}
      <Packages />
      
      {/* Interactive Core Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20" id="services">
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
                { link: '#proposal', text: 'Google Ads', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80' },
                { link: '#proposal', text: 'Meta Ads', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80' },
                { link: '#proposal', text: 'SEO & Content', image: 'https://images.unsplash.com/photo-1571867424488-4565932edb41?auto=format&fit=crop&w=600&q=80' },
                { link: '#proposal', text: 'Amazon Ads', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' }
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

      {/* Channels & Platforms */}
      <Expertise />

      {/* Editorial Insights Blog */}
      <Blog />

      {/* Frequently Asked Accordions */}
      <Faq />

      {/* Lead capture proposal form & session checkout */}
      <Contact />

      {/* Global footer shelf */}
      <Footer />
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
