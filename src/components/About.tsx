import React from 'react';
import { m as motion } from 'motion/react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { Award, Compass, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useGlass } from './GlassContext';

export const About = React.memo(() => {
  const { settings } = useGlass();

  const values = [
    {
      title: 'Obsessive Detail',
      desc: 'We treat every tracking pixel, creative line, and bidding bid with surgical mathematical rigor.',
      icon: Compass,
    },
    {
      title: 'Radical Transparency',
      desc: 'Zero hidden kickbacks or platform markups. Live read-only dashboards with direct data feeds.',
      icon: ShieldCheck,
    },
    {
      title: 'Creative-First Scaling',
      desc: 'Algorithms prioritize content authenticity. We deliver highly customized cinematic and typographic ad assets.',
      icon: Award,
    },
    {
      title: 'Human Integrity',
      desc: 'We value long-term partnerships over short-term campaign gains. Direct lines to your strategy principal.',
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 overflow-hidden" id="about">
      <div className="space-y-24">
        
        {/* Main Grid: Story + Parallax Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Story & Philosophy (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#9e6316] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#9e6316]" />
                ABOUT THE ADROCKET
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal leading-tight">
                A Boutique Growth Catalyst
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold" />
            </div>

            <p className="font-sans text-brand-charcoal/85 text-base leading-relaxed">
              Founded with the conviction that digital media scaling should be transparent, elegant, and highly performant. The AdRocket is a high-end alternative to bloated corporate marketing bureaus. 
            </p>

            <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed">
              By limiting our client portfolio, we ensure that every project benefits from direct executive oversight, premium design craftsmanship, and robust server-side signal integrations. Our team operates at the intersection of statistical precision and high-fashion branding.
            </p>

            <div className="pt-4">
              <a
                href="#proposal"
                className="inline-flex items-center gap-2 bg-brand-charcoal text-white hover:bg-brand-charcoal/90 px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-md"
              >
                Get A Free Proposal
              </a>
            </div>
          </div>

          {/* Right Side: Elegant Core Pillars & Credentials (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            
            {/* Background decorative blob */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-gold/10 to-transparent blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <DynamicGlassCard className="p-8 h-full space-y-6 hover:border-brand-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-brand-charcoal">Direct-to-Principal</h3>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                    By capping our active roster at 10 brands, your lead strategist is always a principal partner. No middle managers. No information loss.
                  </p>
                </div>
              </DynamicGlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DynamicGlassCard className="p-8 h-full space-y-6 hover:border-brand-gold/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                  <Award className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-brand-charcoal">Signal Precision</h3>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                    Custom server-side API setups to capture up to 94% attribution accuracy, preserving signal data in cookie-less landscapes.
                  </p>
                </div>
              </DynamicGlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:col-span-2"
            >
              <DynamicGlassCard className="p-8 hover:border-brand-gold/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-md">
                    <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-3 py-1">
                      <Sparkles className="w-3 h-3 text-brand-gold" />
                      <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-brand-gold">Boutique Framework</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-brand-charcoal">The AdRocket Growth Standard</h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      We combine custom high-production typography, rigorous database-grounded cohort analysis, and rapid iteration loops.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1 self-center bg-brand-gold/5 border border-brand-gold/15 px-6 py-4 rounded-2xl">
                    <span className="font-serif font-extrabold text-3xl text-brand-charcoal">+340%</span>
                    <span className="font-sans font-bold text-[9px] uppercase tracking-wider text-brand-charcoal/50">Avg Lift</span>
                  </div>
                </div>
              </DynamicGlassCard>
            </motion.div>

          </div>

        </div>

        {/* Lower Section: Values Grid */}
        <div className="space-y-12 border-t border-brand-charcoal/5 pt-16">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal">
              Our Non-Negotiables
            </h3>
            <p className="font-sans text-brand-charcoal/80 text-xs mt-2">
              Every single campaign is built upon these strict foundational tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <DynamicGlassCard className="p-8 h-full flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <h3 className="font-serif font-bold text-lg text-brand-charcoal">
                        {val.title}
                      </h3>
                      <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </DynamicGlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
});
