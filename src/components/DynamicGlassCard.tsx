import React from 'react';
import { useGlass, getTintRgba } from './GlassContext';

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
  darkPreset = false,
}) => {
  const { settings } = useGlass();

  // Use the context values, but if darkPreset is set, we use a darker variant
  const opacity = darkPreset ? Math.max(0.65, settings.opacity + 0.3) : settings.opacity;
  const tint = darkPreset ? 'slate' : settings.tintColor;
  const blur = darkPreset ? Math.max(12, settings.blur + 4) : settings.blur;

  return (
    <div
      onClick={onClick}
      className={`relative rounded-[28px] isolation-isolate transition-all duration-300 hover:shadow-xl ${className}`}
      style={{
        boxShadow: `0px 10px 30px rgba(43, 40, 27, ${darkPreset ? 0.25 : 0.08})`,
      }}
    >
      {/* Backdrop blur & distortion layer (After layer equivalent) */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{
          zIndex: -1,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          filter: 'url(#glass-distortion-dynamic)',
          WebkitFilter: 'url(#glass-distortion-dynamic)',
          backgroundColor: getTintRgba(tint, opacity),
        }}
      />

      {/* Tint and inner shadow layer (Before layer equivalent) */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{
          zIndex: 0,
          boxShadow: darkPreset
            ? 'inset 0 0 12px -2px rgba(255, 255, 255, 0.2)'
            : 'inset 0 0 16px -2px rgba(255, 255, 255, 0.8), inset 0 0 4px 0px rgba(227, 168, 92, 0.1)',
          border: `1px solid rgba(174, 168, 143, ${settings.borderOpacity})`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
