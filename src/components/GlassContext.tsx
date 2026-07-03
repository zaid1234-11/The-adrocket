import React, { createContext, useContext, useState } from 'react';

export interface GlassSettings {
  scale: number;
  frequencyX: number;
  frequencyY: number;
  blur: number;
  opacity: number;
  tintColor: string; // 'ivory' | 'slate' | 'gold' | 'sage' | 'rose'
  borderOpacity: number;
}

interface GlassContextType {
  settings: GlassSettings;
  updateSettings: (newSettings: Partial<GlassSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings: GlassSettings = {
  scale: 65,
  frequencyX: 0.025,
  frequencyY: 0.025,
  blur: 8,
  opacity: 0.35,
  tintColor: 'ivory',
  borderOpacity: 0.2,
};

const GlassContext = createContext<GlassContextType | undefined>(undefined);

export const GlassProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<GlassSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<GlassSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <GlassContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </GlassContext.Provider>
  );
};

export const useGlass = () => {
  const context = useContext(GlassContext);
  if (!context) {
    throw new Error('useGlass must be used within a GlassProvider');
  }
  return context;
};

// Helper to resolve the tint hex color
export const getTintRgba = (tint: string, opacity: number): string => {
  switch (tint) {
    case 'slate':
      return `rgba(43, 40, 27, ${opacity})`; // charcoal
    case 'gold':
      return `rgba(227, 168, 92, ${opacity})`; // gold
    case 'sage':
      return `rgba(174, 200, 197, ${opacity})`; // sage
    case 'rose':
      return `rgba(178, 139, 158, ${opacity})`; // rosewood
    case 'ivory':
    default:
      return `rgba(247, 245, 233, ${opacity})`; // ivory
  }
};

export const getTintHex = (tint: string): string => {
  switch (tint) {
    case 'slate':
      return '#2B281B';
    case 'gold':
      return '#E3A85C';
    case 'sage':
      return '#AEC8C5';
    case 'rose':
      return '#B28B9E';
    case 'ivory':
    default:
      return '#F7F5E9';
  }
};
