import React from 'react';

// Neon lime squiggle ribbon
export const LimeSquiggle: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M20 95C25 70 45 65 65 75C85 85 95 60 90 40C85 20 65 15 50 30" 
      stroke="#D4FF00" 
      strokeWidth="14" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// White 3D Torus / Donut
export const Torus3D: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="torusGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </radialGradient>
      <filter id="torusShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodOpacity="0.25" />
      </filter>
    </defs>
    <path 
      d="M50 15 C69.33 15 85 30.67 85 50 C85 69.33 69.33 85 50 85 C30.67 85 15 69.33 15 50 C15 30.67 30.67 15 50 15 Z M50 35 C41.72 35 35 41.72 35 50 C35 58.28 41.72 65 50 65 C58.28 65 65 58.28 65 50 C65 41.72 58.28 35 50 35 Z" 
      fill="url(#torusGrad)" 
      filter="url(#torusShadow)"
      fillRule="evenodd" 
    />
  </svg>
);

// White 3D Cone
export const Cone3D: React.FC<{ className?: string }> = ({ className = "w-20 h-24" }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="coneGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="65%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>
    <path d="M50 10 L88 95 C75 105 25 105 12 95 Z" fill="url(#coneGrad)" />
    <ellipse cx="50" cy="95" rx="38" ry="12" fill="#E2E8F0" />
  </svg>
);

// Lime 3D Cylinder / Capsule
export const LimePill3D: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E9FF66" />
        <stop offset="50%" stopColor="#D4FF00" />
        <stop offset="100%" stopColor="#AACC00" />
      </linearGradient>
    </defs>
    <rect x="25" y="15" width="50" height="70" rx="25" fill="url(#limeGrad)" transform="rotate(-25 50 50)" />
  </svg>
);

// Lime 3D Donut
export const LimeDonut3D: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="limeDonutGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#EEFF80" />
        <stop offset="70%" stopColor="#D4FF00" />
        <stop offset="100%" stopColor="#99B800" />
      </radialGradient>
    </defs>
    <path 
      d="M50 18 C67.67 18 82 32.33 82 50 C82 67.67 67.67 82 50 82 C32.33 82 18 67.67 18 50 C18 32.33 32.33 18 50 18 Z M50 36 C42.27 36 36 42.27 36 50 C36 57.73 42.27 64 50 64 C57.73 64 64 57.73 64 50 C64 42.27 57.73 36 50 36 Z" 
      fill="url(#limeDonutGrad)" 
      fillRule="evenodd" 
    />
  </svg>
);
