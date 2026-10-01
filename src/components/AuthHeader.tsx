import React from 'react';

interface AuthHeaderProps {
  onNavigate: (route: string) => void;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ onNavigate }) => {
  return (
    <header className="w-full h-[72px] lg:h-[90px] xl:h-[100px] flex items-center px-6 sm:px-12 lg:px-[122px] z-30 shrink-0">
      <div 
        onClick={() => onNavigate('home')} 
        className="flex items-center cursor-pointer select-none group"
        role="button"
        tabIndex={0}
        aria-label="ByteSpace Home"
      >
        <img 
          src="/figma-assets/bytespace_mark.svg" 
          alt="ByteSpace" 
          className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
        />
      </div>
    </header>
  );
};
