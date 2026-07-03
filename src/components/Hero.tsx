import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useGlass } from './GlassContext';
import { Sparkles, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import { Logo } from './Logo';
import { DynamicGlassCard } from './DynamicGlassCard';

export const Hero: React.FC = () => {
  const { settings } = useGlass();
  const { scrollY } = useScroll();

  // Fine-tuned parallax displacements for multi-layered depth of field
  const yBlobLeft = useTransform(scrollY, [0, 1000], [0, -80]);
  const yBlobRight = useTransform(scrollY, [0, 1000], [0, 100]);
  const yAestheticRing = useTransform(scrollY, [0, 1000], [0, -150]);
  const yAestheticDiamond = useTransform(scrollY, [0, 1000], [0, 120]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      
      {/* Floating abstract gold and sage orbits with Parallax scroll mapping */}
      <motion.div 
        style={{ y: yBlobLeft }}
        className="absolute top-[15%] left-[2%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-brand-gold/10 to-transparent blur-3xl pointer-events-none select-none" 
      />
      <motion.div 
        style={{ y: yBlobRight }}
        className="absolute bottom-[5%] right-[2%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-soft-sage/15 to-transparent blur-3xl pointer-events-none select-none" 
      />

      {/* Floating Rotating Accent Ring (Parallax) */}
      <motion.div 
        style={{ y: yAestheticRing }}
        className="absolute right-[10%] top-[20%] z-0 w-36 h-36 rounded-full border border-brand-gold/15 flex items-center justify-center pointer-events-none select-none hidden md:flex"
      >
        <div className="w-28 h-28 rounded-full border border-dashed border-brand-gold/10 animate-spin-slow" />
      </motion.div>

      {/* Floating Sparkle/Diamond Accent (Parallax) */}
      <motion.div 
        style={{ y: yAestheticDiamond }}
        className="absolute left-[8%] bottom-[25%] z-0 text-brand-gold/20 pointer-events-none select-none hidden md:block"
      >
        <Sparkles className="w-10 h-10 animate-pulse" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Symmetrical Floating Logo Asset */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/40 border border-brand-charcoal/5 flex items-center justify-center shadow-md backdrop-blur-sm p-2 hover:scale-105 hover:rotate-6 transition-all duration-300">
            <Logo size={48} />
          </div>
        </motion.div>

        {/* Boutique Agency Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-brand-charcoal/5 border border-brand-charcoal/10 rounded-full px-4 py-2"
        >
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="font-sans font-semibold text-[10px] md:text-xs uppercase tracking-widest text-brand-charcoal/70">
            A Boutique alternative to Corporate Marketing
          </span>
        </motion.div>

        {/* Hero Typography */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold"
          >
            Key Elements for Success in Paid Media are
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl md:text-[54px] lg:text-[68px] leading-[1.1] tracking-tight text-brand-charcoal font-bold flex flex-wrap justify-center items-center gap-y-2.5"
          >
            <span className="relative inline-block px-4 py-1.5 mx-1 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 text-brand-charcoal">Objectives</span>
            <span className="font-serif italic font-normal text-brand-gold mx-1.5">&amp;</span>
            <span className="relative inline-block px-4 py-1.5 mx-1 rounded-2xl bg-[#AEC8C5]/20 border border-[#AEC8C5]/30 text-brand-charcoal">Audience</span>
            <span className="font-serif italic font-normal text-brand-gold mx-1.5">&amp;</span>
            <span className="relative inline-block px-4 py-1.5 mx-1 rounded-2xl bg-[#B28B9E]/15 border border-[#B28B9E]/25 text-brand-charcoal">Creatives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-brand-charcoal/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed pt-1"
          >
            Our highly trained team of paid advertising professionals in Canada uses the latest tools and tried-and-true strategies to ensure that every campaign is custom-tailored to fit with your unique business goals.
          </motion.p>
        </div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="#proposal"
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg bg-brand-charcoal text-white hover:bg-brand-charcoal/90 text-center flex items-center justify-center gap-2 group cursor-pointer"
          >
            <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
            GET A FREE PROPOSAL
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs bg-brand-gold text-brand-charcoal text-center flex items-center justify-center gap-2 shadow-md hover:bg-brand-gold/95 transition-all duration-300"
          >
            <span>GET STARTED</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
