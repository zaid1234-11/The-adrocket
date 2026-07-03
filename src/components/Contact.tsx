import React, { useState } from 'react';
import { useGlass } from './GlassContext';
import { motion, AnimatePresence } from 'motion/react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { Check, CreditCard, Sparkles, Send, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const { settings } = useGlass();

  // Proposal Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [budget, setBudget] = useState('Under $10,000');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Paid Session Booking Modal State
  const [bookingStep, setBookingStep] = useState<'none' | 'checkout' | 'success'>('none');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !website) {
      setFormError('Please fill in all fields before submitting.');
      return;
    }
    if (!email.includes('@')) {
      setFormError('Please provide a valid work email.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('success');
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20" id="contact">
      <div id="proposal" className="scroll-mt-20" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Dynamic Proposal Form (6 Cols) */}
        <div className="lg:col-span-6">
          <DynamicGlassCard className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal">
                      Request a Proposal
                    </h2>
                    <p className="font-sans text-brand-charcoal/70 text-xs md:text-sm leading-relaxed">
                      Ready to scale with editorial precision? Supply your core business details and our strategy directors will build a complimentary baseline performance analysis for you.
                    </p>
                  </div>

                  {formError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-700 px-4 py-3 rounded-xl text-xs font-semibold">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleProposalSubmit} className="space-y-6">
                    {/* First / Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Jane"
                          className="w-full bg-white/40 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className="w-full bg-white/40 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="w-full bg-white/40 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                      />
                    </div>

                    {/* Company Website */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                        Company Website
                      </label>
                      <input
                        type="url"
                        required
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://www.company.com"
                        className="w-full bg-white/40 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors"
                      />
                    </div>

                    {/* Monthly Budget */}
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                        Monthly Ad Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-white/40 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-brand-charcoal outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="Under $10,000">Under $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      SUBMIT REQUEST
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                      Request Submitted Successfully!
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
                      Thank you, {firstName}. Our senior strategy directors are already compiling your live account audits. We will reach out to you within 24 business hours at <strong>{email}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFirstName('');
                      setLastName('');
                      setEmail('');
                      setWebsite('');
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-charcoal transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </DynamicGlassCard>
        </div>

        {/* Right Side: Paid Consultation Strategy Session (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          {/* Arched image container */}
          <div className="arch-frame h-64 w-full relative shadow-xl border border-brand-charcoal/5">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0-62ViSg8iKlWnZUPAr_8l0_ubFGpvmUR3_kCcaqHQXr_CqHCI4_mca2euJX59mwp8Ytyw37kNrhzqzV_JU3dxH7MC8itytfDtALlkr6BMpqDFUUqHCrWwd1863Y2Ob5-y3u-wOs-GGm7a7G1fqL0z16u8AxGn0vuVGVJa3Nk_spZVXqTuG7HwAWlxhk42KeI-w9GOaawiTYjndwWI5d1hRXHYvQOLOdxvO4hQutmqCYsySQB7twG')",
              }}
            />
            <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          </div>

          {/* Strategy Session details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
                IMMEDIATE UNVARNISHED VALUE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal">
                Book a Strategy Session
              </h2>
              <p className="font-sans text-brand-charcoal/70 text-xs md:text-sm leading-relaxed">
                Need high-level tactical insight immediately without signing onto a recurring monthly retainer? Secure an intensive, unvarnished 60-minute account review call directly with our principal directors.
              </p>
            </div>

            {/* Strategy checklist */}
            <ul className="space-y-3.5">
              {[
                'Deep-dive structural tear-down of your current ad accounts.',
                'Concrete optimization checklists to cut wasted CPA immediately.',
                'Honest creative evaluations & copy feedback on landing assets.',
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-brand-charcoal/80">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/15 border border-brand-gold/35 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Price & Book Action */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50">
                  Single Strategy sprint
                </span>
                <div className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold">
                  $499
                </div>
              </div>
              
              <button
                onClick={() => setBookingStep('checkout')}
                className="btn-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <CreditCard className="w-4 h-4" />
                PAY & BOOK NOW
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Checkout Modal (Glassmorphic) */}
      <AnimatePresence>
        {bookingStep !== 'none' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingStep('none')}
              className="absolute inset-0 bg-brand-charcoal/30 backdrop-blur-md cursor-pointer"
            />

            {/* Checkout Form Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="relative w-full max-w-md p-8 rounded-[32px] overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(43, 40, 27, 0.35)',
              }}
            >
              {/* Blur underlying backdrop */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  zIndex: -1,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  backgroundColor: 'rgba(247, 245, 233, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              />

              {bookingStep === 'checkout' ? (
                <form onSubmit={handlePaymentSubmit} className="space-y-6 text-brand-charcoal">
                  <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-brand-gold animate-spin-slow" />
                      <h3 className="font-serif font-bold text-xl">
                        Secure Strategy Session
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBookingStep('none')}
                      className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer"
                    >
                      Close
                    </button>
                  </div>

                  <div className="bg-brand-charcoal text-[#F7F5E9] p-4 rounded-xl text-center space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      Total Investment
                    </p>
                    <p className="font-serif text-3xl font-bold">$499.00 USD</p>
                  </div>

                  {/* Payment Inputs */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full bg-white/50 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4111 2222 3333 4444"
                        className="w-full bg-white/50 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                          Expiry
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full bg-white/50 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                          CVC
                        </label>
                        <input
                          type="password"
                          required
                          maxLength={4}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          placeholder="•••"
                          className="w-full bg-white/50 border border-brand-charcoal/10 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-2.5 text-xs outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4.5 h-4.5" />
                    CONFIRM & BOOK SLOT
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6 text-brand-charcoal">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold">
                      Booking Confirmed!
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed max-w-sm">
                      We've successfully processed your $499 investment, {cardName || 'Partner'}. A Google Calendar invite and custom pre-call audit link have been dispatched.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setBookingStep('none');
                      setCardName('');
                      setCardNumber('');
                      setCardExpiry('');
                      setCardCvc('');
                    }}
                    className="w-full bg-brand-charcoal hover:bg-brand-charcoal/90 text-[#F7F5E9] py-3.5 rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer"
                  >
                    Awesome, Let's Prepare!
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
