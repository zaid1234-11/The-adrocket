import React, { useState } from 'react';
import { m as motion, AnimatePresence } from 'motion/react';
import { DynamicGlassCard } from './DynamicGlassCard';
import { ArrowUpRight, Clock, Eye, Sparkles } from 'lucide-react';
import { useGlass } from './GlassContext';

export const Blog: React.FC = () => {
  const { settings } = useGlass();
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      category: 'STOCHASTIC ANALYSIS',
      title: 'The Math of High-Yield Media: Solving the Attribution Puzzle',
      desc: 'In an era of cookie depletion, standard pixel-tracking is dead. Explore how we utilize custom Bayesian attribution structures to determine real, incrementality-driven ROAS across complex multi-platform channels.',
      date: 'June 28, 2026',
      readTime: '6 min read',
      author: 'David Vance, Chief of Analytics',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByAeR4mFhrbdDGRymC64uo41bjqsR-oM2DgkPJpE_rQ0wLdrhDofhrUXzpfC3CxZq_PIYiLPxDT775wH3UVaOfjXxxS9Q17yp2qijCFcqTTT0lwFDH3XDfVjUZGIoqAcvQ1SZiC5FfiZkSpf9S_33EqxYiW4_3aAR2eZ1qYoN__Wjf4nYpxPHxCYPcvrLLbYXwLxqwBquPR3Edliu2rtIRRaNbd4CiVKj08VDdGbXOA3ywa6NP25GZ',
      fullContent: `
        Standard digital marketing attribution is fundamentally broken. Last-click pixel reports from platform-native dashboards are notorious for double-counting conversions and inflating returns. 

        To achieve actual, performant growth, modern brands must pivot toward state-of-the-art marketing mix modeling (MMM) combined with rigorous randomized control testing (RCT). At The AdRocket, we construct automated Bayesian models that isolate underlying baseline sales from active, ad-driven lift. This allows us to map customer lifetime journeys without invasive third-party scripts.

        Our models show that on average, Facebook native ROAS values are overstated by up to 34%, while Google search impressions often cannibalize existing organic traffic. By implementing incrementality testing schedules, our clients can safely re-allocate their budgets with complete visual and statistical confidence.
      `
    },
    {
      id: 2,
      category: 'VISUAL PSYCHOLOGY',
      title: 'The Atmospheric Effect: Why Silent Luxury Converts Faster than Loud Banner Ads',
      desc: 'Screaming discount badges and flashing neon buttons trigger sensory blindness. We dive into the psychology of silent, elegant editorial typography, high-contrast negative space, and how they build premium brand desire.',
      date: 'May 14, 2026',
      readTime: '4 min read',
      author: 'Evelyn Choi, Creative Director',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByAeR4mFhrbdDGRymC64uo41bjqsR-oM2DgkPJpE_rQ0wLdrhDofhrUXzpfC3CxZq_PIYiLPxDT775wH3UVaOfjXxxS9Q17yp2qijCFcqTTT0lwFDH3XDfVjUZGIoqAcvQ1SZiC5FfiZkSpf9S_33EqxYiW4_3aAR2eZ1qYoN__Wjf4nYpxPHxCYPcvrLLbYXwLxqwBquPR3Edliu2rtIRRaNbd4CiVKj08VDdGbXOA3ywa6NP25GZ',
      fullContent: `
        The average consumer is bombarded with over 5,000 marketing messages per day. The natural human response is cognitive defense: banner blindness and immediate scroll behavior.

        Boutique visual styling cuts through the digital white noise not by shouting louder, but by introducing a moment of absolute visual elegance. High-contrast sans-serif tracking, serif headline pairs, and soft natural lighting in photography suggest exclusive luxury. This aesthetic creates psychological premiumization—allowing brands to sell at higher average order values (AOV) while maintaining lower customer acquisition costs (CAC).

        We replaced standard aggressive sale graphics with elegant, glassmorphic Editorial Layouts for our lifestyle clients. The outcome? A 42% increase in post-click conversion rates, along with a drastic boost in multi-session customer retention.
      `
    },
    {
      id: 3,
      category: 'INTEGRATED TECHNOLOGY',
      title: 'Server-Side Conversions: Engineering Stable Signal Pathways',
      desc: 'Browser-based trackers are blocking up to 40% of campaign events due to iOS restrictions and tracking blocks. Learn why implementing clean, secure server-side API proxy connections is critical to training platform algorithms.',
      date: 'April 02, 2026',
      readTime: '8 min read',
      author: 'Vikram Mehta, Principal Engineer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByAeR4mFhrbdDGRymC64uo41bjqsR-oM2DgkPJpE_rQ0wLdrhDofhrUXzpfC3CxZq_PIYiLPxDT775wH3UVaOfjXxxS9Q17yp2qijCFcqTTT0lwFDH3XDfVjUZGIoqAcvQ1SZiC5FfiZkSpf9S_33EqxYiW4_3aAR2eZ1qYoN__Wjf4nYpxPHxCYPcvrLLbYXwLxqwBquPR3Edliu2rtIRRaNbd4CiVKj08VDdGbXOA3ywa6NP25GZ',
      fullContent: `
        If your campaign algorithm is optimizing based on incomplete event data, it is essentially steering blind. Relying solely on client-side JS tags is no longer viable. 

        Server-to-Server connections (such as Meta Conversions API or Google Offline Conversions) act as a secure proxy pipeline. When a checkout completes, your database transmits an encrypted payload directly to the platform API endpoint. This completely bypasses client-side web browser protections and script blockages.

        By establishing a robust server-side setup, the platform algorithms receive consistent, high-fidelity signals. This allows machine-learning bidding scripts to locate exact, high-intent prospective buyers, resulting in an average reduction of 21% in cost-per-acquisition (CPA) within the first 30 days of launch.
      `
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20" id="blog">
      <div className="space-y-16">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-gold">
            THE PERFORMANCE INTEL
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal">
            The Rocket Log
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-charcoal/75 text-base md:text-lg leading-relaxed">
            Unvarnished, mathematically rigorous perspectives on media buying, visual customizer mechanics, and user psychographics.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedPost(post.id)}
            >
              <DynamicGlassCard className="p-0 overflow-hidden h-full flex flex-col justify-between group-hover:border-brand-gold/40 transition-all duration-300">
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-video overflow-hidden border-b border-brand-charcoal/5">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-charcoal text-brand-gold font-sans text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded">
                      {post.category}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg md:text-xl text-brand-charcoal leading-snug group-hover:text-brand-gold transition-colors">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 line-clamp-3 leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex items-center justify-between border-t border-brand-charcoal/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 group-hover:bg-brand-gold group-hover:text-brand-charcoal flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-brand-charcoal" />
                  </div>
                </div>
              </DynamicGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedPost !== null && (
            (() => {
              const currentPost = posts.find(p => p.id === selectedPost);
              if (!currentPost) return null;
              return (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-brand-charcoal/70 backdrop-blur-md"
                    onClick={() => setSelectedPost(null)}
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                    className="relative w-full max-w-3xl bg-brand-ivory border border-brand-gold/30 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
                  >
                    {/* Image Header */}
                    <div className="relative aspect-video w-full shrink-0">
                      <img 
                        src={currentPost.image} 
                        alt={currentPost.title} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent opacity-60" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-brand-gold text-brand-charcoal font-sans text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded">
                          {currentPost.category}
                        </span>
                        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3 leading-tight">
                          {currentPost.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-10 overflow-y-auto space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-brand-charcoal/50 uppercase tracking-widest border-b border-brand-charcoal/5 pb-4">
                        <div>BY <span className="text-brand-gold">{currentPost.author}</span></div>
                        <div className="flex items-center gap-4">
                          <span>{currentPost.date}</span>
                          <span>•</span>
                          <span>{currentPost.readTime}</span>
                        </div>
                      </div>

                      <div className="font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed whitespace-pre-line space-y-4">
                        {currentPost.fullContent}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 md:p-6 border-t border-brand-charcoal/5 bg-brand-ivory/80 backdrop-blur flex justify-end shrink-0">
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="px-6 py-2.5 bg-brand-charcoal hover:bg-brand-charcoal/90 text-white rounded-full font-sans text-xs font-bold uppercase tracking-widest shadow-md"
                      >
                        Close Reader
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })()
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
