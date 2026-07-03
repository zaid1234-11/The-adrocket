import React from 'react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { motion, useScroll, useTransform } from 'motion/react';
import { Check, Chrome, Share2, ShoppingCart, Activity, Sparkles } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { scrollY } = useScroll();

  // Dedicated parallax rates for the Platform Expertise section's depth of field
  const yBlobLeft = useTransform(scrollY, [200, 1600], [0, -60]);
  const yBlobRight = useTransform(scrollY, [200, 1600], [0, 80]);
  const yAccentRing = useTransform(scrollY, [200, 1600], [40, -100]);
  const yAccentSparkle = useTransform(scrollY, [200, 1600], [-30, 90]);

  const platforms = [
    {
      title: 'Google Ads',
      icon: Chrome,
      desc: 'Capture high-intent search queries with meticulously structured campaigns, advanced semantic bidding strategies, and compelling ad copy designed to lock in conversions.',
      bullets: ['Search & Display Networks', 'YouTube Visual Placements', 'Performance Max Syntheses'],
    },
    {
      title: 'Meta Ads',
      icon: Share2,
      desc: 'Drive scalable customer acquisition through visually striking Facebook and Instagram campaigns that leverage advanced cohort segmentation and dynamic creative testing.',
      bullets: ['Full-Funnel Funnel Alignment', 'High-Fidelity Creative Direction', 'Privacy-Safe Retargeting Blocks'],
    },
    {
      title: 'Amazon Ads',
      icon: ShoppingCart,
      desc: 'Dominate the product marketplace with aggressive Sponsored Product, Brand, and Display campaigns that secure prime catalog real estate and lower your ACoS.',
      bullets: ['Surgical Keyword Harvesting', 'Storefront Layout Optimization', 'Competitor Conquesting Funnels'],
    },
    {
      title: 'Shopping Campaigns',
      icon: Activity,
      desc: 'Maximize eCommerce catalog revenue with highly optimized product XML feeds, schema enhancements, and strategic multi-bid structures across Google and Bing.',
      bullets: ['Continuous Feed XML Audits', 'SKU-Level Profit Optimization', 'Dynamic Remarketing Loops'],
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden" id="expertise">
      
      {/* Background Decorative Blobs with Parallax */}
      <motion.div 
        style={{ y: yBlobLeft }}
        className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-brand-gold/5 to-transparent blur-3xl pointer-events-none select-none -z-10" 
      />
      <motion.div 
        style={{ y: yBlobRight }}
        className="absolute bottom-[15%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-bl from-soft-sage/10 to-transparent blur-3xl pointer-events-none select-none -z-10" 
      />

      {/* Floating Thin Geometric Accent Ring (Parallax) */}
      <motion.div 
        style={{ y: yAccentRing }}
        className="absolute left-[5%] top-[35%] w-28 h-28 rounded-full border border-brand-gold/10 flex items-center justify-center pointer-events-none select-none hidden md:flex -z-10"
      >
        <div className="w-20 h-20 rounded-full border border-dashed border-brand-gold/5 animate-spin-slow" />
      </motion.div>

      {/* Floating delicate sparkle accent (Parallax) */}
      <motion.div 
        style={{ y: yAccentSparkle }}
        className="absolute right-[6%] bottom-[25%] text-brand-gold/15 pointer-events-none select-none hidden md:block -z-10"
      >
        <Sparkles className="w-8 h-8 animate-pulse" />
      </motion.div>

      <div className="space-y-16 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            CHANNEL MASTERY
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            Platform Expertise
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-charcoal/75 text-base md:text-lg">
            Surgical execution across the core digital platforms where attention and commerce converge.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((plat, idx) => {
            const IconComponent = plat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <DynamicGlassCard className="p-8 md:p-10 flex flex-col justify-between h-full min-h-[340px]">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 flex items-center justify-center border border-brand-charcoal/10 text-brand-gold">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-brand-charcoal">
                        {plat.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed">
                      {plat.desc}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 pt-6 border-t border-brand-charcoal/5 mt-6">
                    {plat.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-brand-charcoal/80">
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </DynamicGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
