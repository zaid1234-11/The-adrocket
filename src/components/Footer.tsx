import React, { useState } from 'react';
import { useGlass } from './GlassContext';
import { Mail, Check, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = React.memo(() => {
  const { settings } = useGlass();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer 
      className="relative w-full border-t border-brand-charcoal/5 transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: 'rgba(43, 40, 27, 0.96)',
        color: '#F7F5E9',
      }}
    >
      {/* Background radial gradients */}
      <div className="absolute bottom-0 left-[20%] w-[50%] h-[150px] bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Brand Col (5 Cols) */}
        <div className="md:col-span-5 space-y-6">
          <a href="#" className="flex items-center gap-2.5 font-serif text-2xl font-bold tracking-tight text-[#F7F5E9]">
            <Logo size={28} />
            <span>The <span className="text-brand-gold italic font-normal">Ad</span>Rocket</span>
          </a>
          <p className="font-sans text-xs md:text-sm text-[#F7F5E9]/70 max-w-sm leading-relaxed">
            Performant Growth, Humanized. We engineer high-yield, privacy-compliant visual campaigns that convert attention into measurable bottom-line revenue.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center hover:text-brand-gold transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center hover:text-brand-gold transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-white/10 hover:border-brand-gold flex items-center justify-center hover:text-brand-gold transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Col 1 (3 Cols) */}
        <div className="md:col-span-3 space-y-4">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            Regions & Operations
          </h2>
          <ul className="space-y-2.5 text-xs md:text-sm text-[#F7F5E9]/70">
            {['Mumbai, India', 'New York, USA', 'Toronto, Canada', 'London, UK'].map((region, idx) => (
              <li key={idx} className="flex items-center gap-2 hover:text-[#F7F5E9] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {region}
              </li>
            ))}
          </ul>
        </div>

        {/* Stay Updated Col (4 Cols) */}
        <div className="md:col-span-4 space-y-4">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            Stay Updated
          </h2>
          <p className="font-sans text-xs text-[#F7F5E9]/65">
            Recieve monthly unvarnished performance strategies, ad copywriting frameworks, and attribution alerts.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <div className="relative">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="news@company.com"
                className="w-full bg-white/5 border border-white/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-full px-5 py-3 text-xs text-[#F7F5E9] outline-none transition-all pr-12"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-brand-gold text-brand-charcoal flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                {subscribed ? <Check className="w-4 h-4 text-brand-charcoal" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] text-emerald-400 font-medium">
                Thank you! You have subscribed to our Performance Letters.
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Underline copyright */}
      <div className="border-t border-white/5 py-6 text-center text-[11px] text-[#F7F5E9]/40 font-mono">
        &copy; {new Date().getFullYear()} The AdRocket. Crafted with Premium Glassmorphic precision. All rights reserved.
      </div>
    </footer>
  );
});
