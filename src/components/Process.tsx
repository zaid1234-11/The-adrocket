import React, { useState } from 'react';
import { useGlass } from './GlassContext';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, FileText, PlayCircle, Award, CheckCircle2 } from 'lucide-react';
import { DynamicGlassCard } from './DynamicGlassCard';

export const Process: React.FC = () => {
  const { settings } = useGlass();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      desc: 'Deep dive into current account architecture, past visual creative pipelines, and strategic positioning to pinpoint wasted spend and hidden growth channels.',
      icon: Compass,
      insights: ['Comprehensive tag & attribution audits', 'Historical CPA and LTV calculations', 'Competitor keyword hijacking assessment'],
    },
    {
      num: '02',
      title: 'Strategic Roadmap',
      desc: 'Crafting a bespoke editorial calendar and campaign structure tailored explicitly to your target demographics. No cookie-cutter blueprints.',
      icon: FileText,
      insights: ['Multi-channel budget allocations', 'Creative directions and ad copywriting briefs', 'Precision cohort targeting models'],
    },
    {
      num: '03',
      title: 'Execution & Launch',
      desc: 'Deploying high-fidelity creative copy, setting up bid automation guardrails, and taking your campaigns live with surgical target mapping.',
      icon: PlayCircle,
      insights: ['Dynamic A/B creative testing cycles', 'Real-time bidding system triggers', 'Anti-fatigue ad swapping algorithms'],
    },
    {
      num: '04',
      title: 'Scale & Refine',
      desc: 'Continuous real-time optimization to expand reach, maximize your return on ad spend (ROAS), and dramatically lower acquisition costs.',
      icon: Award,
      insights: ['Weekly creative refresh cadences', 'Automated margin-expansion rule updates', 'New channel exploration (Amazon/SEO)'],
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto" id="process">
      <div className="space-y-16">
        
        {/* Centered Header Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            OUR PLAYBOOK
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            Our Process
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base">
            We operate with absolute structural transparency. Click on any stage below to explore our core focus metrics and precise deliverables.
          </p>
        </div>

        {/* List of Steps (Centered & Contained) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const isOpen = activeStep === idx;
            const IconComp = step.icon;
            return (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isOpen 
                    ? 'border-brand-gold bg-white/60 shadow-md ring-1 ring-brand-gold/10' 
                    : 'border-brand-charcoal/5 hover:border-brand-charcoal/20 bg-white/20'
                }`}
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <div className="flex items-center gap-5">
                  {/* Index Sphere */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    isOpen ? 'bg-brand-charcoal text-brand-gold' : 'bg-brand-charcoal/5 text-brand-charcoal/60'
                  }`}>
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-bold text-brand-charcoal">
                      {step.title}
                    </h4>
                  </div>

                  <IconComp className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-gold animate-pulse' : 'text-brand-charcoal/35'}`} />
                </div>

                {/* Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-14 space-y-4 border-t border-brand-charcoal/5 mt-4">
                        <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed">
                          {step.desc}
                        </p>
                        
                        <div className="space-y-2">
                          <p className="font-sans font-semibold text-[10px] uppercase tracking-widest text-brand-charcoal/50">
                            Core Deliverables & Audits
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {step.insights.map((ins, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal/80 bg-brand-charcoal/5 px-2.5 py-1.5 rounded-lg border border-brand-charcoal/5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                                <span className="truncate">{ins}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
