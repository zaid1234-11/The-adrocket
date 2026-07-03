import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      {/* Left Wing - Saturated Warm Pink */}
      <polygon
        points="100,20 40,130 65,130 100,60"
        fill="#EA62A2"
      />

      {/* Right Wing - Vibrant Purple-Magenta */}
      <polygon
        points="100,20 160,130 135,130 100,60"
        fill="#C354BE"
      />

      {/* Central Rocket Body - Charming Grey-Purple/Dusty Mauve */}
      <polygon
        points="100,52 68,137 78,137 85,127 115,127 122,137 132,137"
        fill="#9C8491"
      />

      {/* Window Circle - Symmetrical White */}
      <circle cx="100" cy="85" r="8" fill="#FFFFFF" />

      {/* Rocket Flame / Nozzle - Flowing Drop Shape */}
      <path
        d="M 94,138 Q 100,162 106,138 Z"
        fill="#9C8491"
      />
    </svg>
  );
};

export default Logo;
