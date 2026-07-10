import React from 'react';
import { m as motion } from 'motion/react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { Check, Flame, Award, Shield } from 'lucide-react';
import { useGlass } from './GlassContext';

export const Packages = React.memo(() => {
  const { settings } = useGlass();

  const tiers = [
    {
      name: 'Launch Pad',
      icon: Shield,
      price: '$2,500',
      period: '/month',
      desc: 'Perfect for emerging brands seeking immediate paid media takeoff with high-impact objectives.',
      features: [
        'Dedicated Campaign Manager',
        '2 Ad Platforms (Meta & Google)',
        'Up to $10,000 Monthly Ad Spend',
        'Audience Persona Research',
        'Weekly Performance Reports',
        'Standard Creative Copywriting',
      ],
      popular: false,
      color: 'gold',
    },
    {
      name: 'Growth Rocket',
      icon: Flame,
      price: '$4,800',
      period: '/month',
      desc: 'Our flagship suite designed for high-velocity scaling with comprehensive content strategies.',
      features: [
        'Everything in Launch Pad',
        '4 Ad Platforms (Meta, Google, TikTok, LinkedIn)',
        'Up to $50,000 Monthly Ad Spend',
        'Continuous Creative Variations',
        'High-End Editorial Landing Page Layouts',
        'Dynamic Retargeting Optimization',
        'Bi-weekly Strategy Deep-dives',
      ],
      popular: true,
      color: 'magenta',
    },
    {
      name: 'Enterprise Engine',
      icon: Award,
      price: 'Custom',
      period: '',
      desc: 'The ultimate performance marketing matrix featuring complete statistical alignment & bespoke tools.',
      features: [
        'Unlimited Ad Platforms & Spend Support',
        'Custom Multi-Country Attribution Setup',
        'Full-Suite Video & High-End Graphic Design',
        'Dynamic Creative Optimization (DCO)',
        'Real-time Custom Dashboard Integration',
        'Dedicated Creative & Copywriting Team',
        '24/7 Slack & Phone Operations Response',
      ],
      popular: false,
      color: 'sage',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20" id="packages">
      <div className="space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            OUR PACKAGES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            Transparent Scaling Tiers
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-charcoal/75 text-base md:text-lg leading-relaxed">
            Choose a plan that fits your growth ambitions. All packages are built with absolute transparency and meticulous detail.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative flex flex-col h-full"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-brand-gold text-brand-charcoal font-sans text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Most Popular Choice
                  </div>
                )}
                
                <DynamicGlassCard 
                  className={`h-full flex flex-col p-8 md:p-10 justify-between relative overflow-hidden transition-all duration-300 ${
                    tier.popular ? 'border-brand-gold/60 ring-1 ring-brand-gold/25' : ''
                  }`}
                >
                  <div className="space-y-8">
                    {/* Header Details */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-brand-gold">
                          {tier.popular ? 'Premium Growth' : 'Precision Core'}
                        </p>
                        <h3 className="font-serif font-bold text-2xl text-brand-charcoal">
                          {tier.name}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed">
                      {tier.desc}
                    </p>

                    {/* Price Tag */}
                    <div className="py-4 border-y border-brand-charcoal/5 flex items-baseline gap-2">
                      <span className="font-serif text-4xl md:text-5xl font-extrabold text-brand-charcoal">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="font-sans text-xs text-brand-charcoal/50 uppercase tracking-widest font-semibold">
                          {tier.period}
                        </span>
                      )}
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-4">
                      <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-brand-charcoal/40">
                        What's Included
                      </p>
                      <ul className="space-y-3">
                        {tier.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-charcoal/80 leading-relaxed">
                            <span className="w-4.5 h-4.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-emerald-600" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-8 mt-auto">
                    <a
                      href="#proposal"
                      className={`block w-full py-3.5 rounded-full font-bold uppercase tracking-widest text-center text-[10px] transition-all active:scale-95 ${
                        tier.popular
                          ? 'bg-brand-charcoal text-white hover:bg-brand-charcoal/90 shadow-md'
                          : 'bg-brand-gold/15 text-brand-charcoal border border-brand-gold/30 hover:bg-brand-gold/25'
                      }`}
                    >
                      Secure This Package
                    </a>
                  </div>
                </DynamicGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
