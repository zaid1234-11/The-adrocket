import React from 'react';

interface DynamicGlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  darkPreset?: boolean;
}

export const DynamicGlassCard: React.FC<DynamicGlassCardProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white/60 border border-brand-gold shadow-md ring-1 ring-brand-gold/10 rounded-[28px] transition-all duration-300 hover:shadow-xl relative ${className}`}
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
