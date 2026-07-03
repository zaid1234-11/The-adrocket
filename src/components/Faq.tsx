import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useGlass } from './GlassContext';

export const Faq: React.FC = () => {
  const { settings } = useGlass();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes your agency 'boutique'?",
      a: "We intentionally limit our active client roster to under 15 partners to guarantee senior-level architectural attention on every single account. We do not pitch you with senior executives only to pass your capital off to junior account managers a week later.",
    },
    {
      q: 'What is the typical onboarding timeline?',
      a: 'Our standard onboarding takes 14 to 21 days. This comprehensive window encompasses historical account audits, multi-touch tracking validations, custom dashboards build, creative asset drafts, and tactical planning prior to campaign push.',
    },
    {
      q: 'Do you require long-term contracts?',
      a: 'We begin with an initial 90-day sprint to establish stable baselines and implement robust structures. Following this validation window, we pivot to flexible rolling month-to-month terms.',
    },
    {
      q: 'How do you handle performance reporting?',
      a: 'Partners receive continuous 24/7 access to live custom attribution dashboards. In addition, we deliver comprehensive narrative reports weekly and schedule deep-dive strategic roadmap calls monthly.',
    },
    {
      q: 'Do you produce ad creatives in-house?',
      a: 'Yes, absolutely. We offer full-service visual solutions (static ad layouts, high-retention video loops, copy scripts) specifically calibrated to maximize CTR within noisy paid media networks.',
    },
    {
      q: 'What budgets do you typically manage?',
      a: 'Our brand partners typically spend between $10,000 and $100,000+ monthly. However, we select partners based on creative potential and scaling readiness rather than rigid baseline minimums.',
    },
    {
      q: 'Can I book a single high-level consultation first?',
      a: 'Yes. We offer intensive, paid 60-minute strategy sessions where we analyze your live accounts and supply an unvarnished audit checklist that you can hand straight to your current team.',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto" id="faqs">
      <div className="space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-charcoal/70 text-base max-w-xl mx-auto">
            Honest answers regarding our operations, terms, creative approach, and scaling thresholds.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.45)',
                  borderColor: isOpen ? 'rgba(227, 168, 92, 0.4)' : 'rgba(43, 40, 27, 0.05)',
                  boxShadow: isOpen 
                    ? '0 10px 25px -5px rgba(174, 168, 143, 0.15)' 
                    : '0 4px 15px -3px rgba(174, 168, 143, 0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-gold' : 'text-brand-charcoal/40'}`} />
                    <span className="font-serif font-bold text-base md:text-lg text-brand-charcoal leading-tight">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-charcoal/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-gold' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-15 border-t border-brand-charcoal/5 pt-4">
                        <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed">
                          {faq.a}
                        </p>
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
