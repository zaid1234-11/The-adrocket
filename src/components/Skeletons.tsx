import React from 'react';

export const SectionSkeleton: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col gap-8 animate-pulse">
      <div className="w-1/3 h-10 bg-brand-charcoal/10 rounded-lg"></div>
      <div className="w-full h-64 bg-brand-charcoal/5 rounded-2xl"></div>
    </section>
  );
};
