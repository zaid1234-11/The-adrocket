import React from 'react';
import { useGlass, getTintRgba } from './GlassContext';
import { Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { settings } = useGlass();

  return (
    <header 
      className="sticky top-4 z-50 w-full max-w-7xl mx-auto px-4 md:px-8"
    >
      <div 
        className="w-full rounded-full transition-all duration-300 shadow-lg border border-brand-charcoal/5 px-6 md:px-10 py-3.5 flex justify-between items-center"
        style={{
          backdropFilter: `blur(${settings.blur}px)`,
          WebkitBackdropFilter: `blur(${settings.blur}px)`,
          backgroundColor: getTintRgba(settings.tintColor, settings.opacity * 1.2),
          border: `1px solid rgba(174, 168, 143, ${settings.borderOpacity * 1.5})`,
          boxShadow: `0 8px 30px rgba(43, 40, 27, ${settings.tintColor === 'slate' ? 0.2 : 0.04})`,
        }}
      >
        {/* Logo */}
        <a 
          href="#" 
          className={`flex items-center gap-2.5 font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors ${
            settings.tintColor === 'slate' ? 'text-white' : 'text-brand-charcoal'
          }`}
        >
          <Logo size={28} />
          <span>The <span className={`${settings.tintColor === 'slate' ? 'text-brand-gold' : 'text-[#9e6316]'} italic font-normal`}>Ad</span>Rocket</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden xl:flex gap-6 items-center">
          {[
            { label: 'Home', id: 'home' },
            { label: 'About Us', id: 'about' },
            { label: 'Our Services', id: 'services' },
            { label: 'Packages', id: 'packages' },
            { label: 'Blog', id: 'blog' },
            { label: 'Contact Us', id: 'contact' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-sans font-medium text-xs uppercase tracking-widest transition-colors duration-200 ${
                settings.tintColor === 'slate' 
                  ? 'text-white/70 hover:text-brand-gold' 
                  : 'text-brand-charcoal/75 hover:text-brand-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold">
            <span className={`${settings.tintColor === 'slate' ? 'text-white/50' : 'text-brand-charcoal/50'}`}>
              CA/USA: <a href="tel:+12299223896" className="text-brand-gold hover:underline">+1 229 922 3896</a>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
            <span className={`${settings.tintColor === 'slate' ? 'text-white/50' : 'text-brand-charcoal/50'}`}>
              IN: <a href="tel:+919560725642" className="text-brand-gold hover:underline">+91 95607 25642</a>
            </span>
          </div>
          <a 
            href="#proposal" 
            className="btn-primary flex items-center gap-1 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all active:scale-95"
          >
            Get A Free Proposal
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
