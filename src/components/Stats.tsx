import React from 'react';
import { useGlass, getTintRgba } from './GlassContext';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, Globe } from 'lucide-react';

export const Stats: React.FC = () => {
  const { settings } = useGlass();

  const stats = [
    {
      value: '12+',
      label: 'Years Experience',
      desc: 'Forging growth pathways',
      icon: ShieldCheck,
    },
    {
      value: '800+',
      label: 'Projects Delivered',
      desc: 'Precision execution & ROI',
      icon: Layers,
    },
    {
      value: 'India, USA, Canada',
      label: 'Global Reach',
      desc: 'Omnichannel multi-market setups',
      icon: Globe,
    },
  ];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div
        className="w-full rounded-[32px] overflow-hidden transition-all duration-300 border border-brand-charcoal/5 p-8 md:p-12"
        style={{
          backdropFilter: `blur(${settings.blur}px)`,
          WebkitBackdropFilter: `blur(${settings.blur}px)`,
          backgroundColor: getTintRgba(settings.tintColor, settings.opacity * 0.9),
          border: `1px solid rgba(174, 168, 143, ${settings.borderOpacity})`,
          boxShadow: `0 8px 32px rgba(174, 168, 143, ${settings.tintColor === 'slate' ? 0.15 : 0.04})`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-brand-charcoal/10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col md:items-center text-center md:text-left py-6 md:py-0 md:px-8 space-y-3"
              >
                <div className="flex items-center gap-3 md:justify-center">
                  <div className="w-9 h-9 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/25">
                    <IconComponent className="w-4.5 h-4.5 text-brand-gold" />
                  </div>
                  <span
                    className={`font-sans font-bold text-xs uppercase tracking-widest ${
                      settings.tintColor === 'slate' ? 'text-white/60' : 'text-brand-charcoal/60'
                    }`}
                  >
                    {stat.label}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3
                    className={`font-serif text-3xl md:text-4xl font-bold tracking-tight ${
                      settings.tintColor === 'slate' ? 'text-white' : 'text-brand-charcoal'
                    }`}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className={`text-xs ${
                      settings.tintColor === 'slate' ? 'text-white/50' : 'text-brand-charcoal/50'
                    }`}
                  >
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
