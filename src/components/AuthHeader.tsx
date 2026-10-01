import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AuthHeaderProps {
  onNavigate: (route: string) => void;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full h-[72px] lg:h-[90px] xl:h-[100px] flex items-center justify-between px-6 sm:px-12 lg:px-[122px] z-30 shrink-0">
      <div 
        onClick={() => onNavigate('home')} 
        className="flex items-center cursor-pointer select-none group"
        role="button"
        tabIndex={0}
        aria-label="ByteSpace Home"
        title="ByteSpace Home"
      >
        <img 
          src="/figma-assets/bytespace_mark.svg" 
          alt="ByteSpace" 
          className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
        />
      </div>

      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-white/90 hover:text-white font-['Satoshi'] text-[14px] sm:text-[15px] font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-all cursor-pointer group shadow-sm active:scale-95"
        title="Back to Home"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </button>
    </header>
  );
};
