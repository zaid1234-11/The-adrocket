import React from 'react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { Compass, Zap, Coins, TrendingUp } from 'lucide-react';
import { m as motion } from 'motion/react';

export const Competencies: React.FC = () => {
  const competencies = [
    {
      title: 'Campaign Strategy',
      desc: "Bespoke strategic frameworks designed to align with your brand's unique market position, customer persona, and vertical competition.",
      icon: Compass,
    },
    {
      title: 'Conversion Optimization',
      desc: 'Continuous refinement of dynamic creative elements, visual typography, copy layouts, and landing pages to ensure maximum return on ad spend.',
      icon: Zap,
    },
    {
      title: 'Bid Management',
      desc: 'Surgical algorithmic and manual real-time bidding strategies across search, social, and visual programmatic networks to efficiently lock in conversion loops.',
      icon: Coins,
    },
    {
      title: 'Performance Tracking',
      desc: 'Ultra-granular analytics, custom privacy-compliant attribution tracking, and highly transparent reporting for concrete, actionable marketing intelligence.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="competencies">
      <div className="space-y-16">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            Core Competencies
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-charcoal/75 text-base md:text-lg leading-relaxed">
            Elevating your brand performance through meticulous mathematical optimization and editorial aesthetic standards.
          </p>
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => {
            const IconComponent = comp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <DynamicGlassCard className="h-full flex flex-col p-8 md:p-9 text-left justify-between min-h-[300px]">
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                      <IconComponent className="w-6 h-6 text-brand-gold" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-serif font-bold text-xl text-brand-charcoal leading-snug">
                        {comp.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                </DynamicGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
