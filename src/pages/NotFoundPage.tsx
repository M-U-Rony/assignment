import React from 'react';
import { LimeSquiggle, Torus3D, Cone3D } from '../components/GeometricDecorations';

interface NotFoundPageProps {
  onNavigate: (route: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex-1 bg-[#194BFB] bg-grid-pattern text-white py-24 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      {/* Decorative 3D elements */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-85">
        <LimeSquiggle className="w-24 h-24" />
      </div>
      <div className="absolute bottom-12 right-12 pointer-events-none opacity-85">
        <Torus3D className="w-24 h-24" />
      </div>
      <div className="absolute top-1/3 right-16 pointer-events-none opacity-80">
        <Cone3D className="w-20 h-24" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        
        {/* Giant 404 */}
        <div className="text-8xl sm:text-9xl font-black tracking-tighter text-[#D4FF00] drop-shadow-2xl select-none">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-md mx-auto leading-relaxed">
            Try to use a correct url or go back to homepage to start again.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 font-bold text-sm rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Back to Home
          </button>
        </div>

      </div>

    </div>
  );
};
