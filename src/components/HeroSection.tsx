import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <section className="relative w-full bg-[#003be2] bg-grid-hero text-white overflow-hidden pt-8 sm:pt-14 pb-0">
      
      {/* 3D Floating Ornaments (Exact Figma Layers from 46:79) */}
      {/* 1. Top-Left Neon Lime Spring/Coil */}
      <img
        src="/hero/shape_coil_lime.png"
        alt=""
        aria-hidden="true"
        className="absolute top-10 -left-12 sm:left-4 lg:left-12 w-28 sm:w-44 lg:w-56 h-auto pointer-events-none select-none z-10 drop-shadow-2xl animate-float-slow"
      />

      {/* 2. Mid-Left White Zig-Zag Spring */}
      <img
        src="/hero/shape_zigzag_white.png"
        alt=""
        aria-hidden="true"
        className="absolute top-56 sm:top-72 left-4 sm:left-16 lg:left-24 w-16 sm:w-24 lg:w-32 h-auto pointer-events-none select-none z-10 drop-shadow-xl"
      />

      {/* 3. Bottom-Left White 3D Donut/Torus */}
      <img
        src="/hero/shape_donut_white.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-16 -left-8 sm:left-2 lg:left-10 w-32 sm:w-52 lg:w-72 h-auto pointer-events-none select-none z-10 drop-shadow-2xl"
      />

      {/* 4. Top-Right Neon Lime Cylinder */}
      <img
        src="/hero/shape_cylinder_lime.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-8 -right-12 sm:right-0 lg:right-6 w-36 sm:w-56 lg:w-72 h-auto pointer-events-none select-none z-10 drop-shadow-2xl"
      />

      {/* 5. Mid-Right White 3D Pyramid / Cone */}
      <img
        src="/hero/shape_cone_white.png"
        alt=""
        aria-hidden="true"
        className="absolute top-52 sm:top-64 right-6 sm:right-20 lg:right-32 w-20 sm:w-32 lg:w-40 h-auto pointer-events-none select-none z-10 drop-shadow-xl"
      />

      {/* 6. Bottom-Right White Zig-Zag Spring */}
      <img
        src="/hero/shape_zigzag_white.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-12 -right-6 sm:right-6 lg:right-16 w-28 sm:w-40 lg:w-52 h-auto pointer-events-none select-none z-10 drop-shadow-2xl rotate-45"
      />

      {/* Hero Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] relative z-20">
        
        {/* Title & Subtitle Frame (Figma: 1:1792) */}
        <div className="text-center max-w-[950px] mx-auto">
          <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-white tracking-tight leading-[1.15]">
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </h1>

          <p className="font-sans font-normal text-sm sm:text-base md:text-[18px] text-[#e5e6e8] max-w-[820px] mx-auto mt-4 sm:mt-5 leading-relaxed sm:leading-[1.6]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar (Figma: Search_Bar 1:1772) */}
          <form 
            onSubmit={handleSubmit} 
            className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 max-w-[581px] mx-auto"
          >
            {/* Input Container */}
            <div className="flex-1 bg-white rounded-full h-[48px] sm:h-[52px] px-5 sm:px-6 flex items-center gap-3 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#d4fb20]">
              <Search className="w-5 h-5 text-[#82868e] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent font-sans text-sm sm:text-[16px] text-[#242528] placeholder-[#82868e] focus:outline-none"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-sans font-medium text-sm sm:text-[16px] h-[48px] sm:h-[52px] px-6 sm:px-8 rounded-full transition-all duration-200 shrink-0 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Hero Visual Composition: Student + Lime Disc + Badges */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 flex items-end justify-center w-full max-w-[1000px] mx-auto">
          
          {/* 1. The Giant Lime Disc (Figma: Ellipse 7) */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] lg:w-[840px] lg:h-[840px] rounded-full bg-[#d4fb20] z-0 pointer-events-none"
            style={{
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.25)'
            }}
          />

          {/* 2. Hero Cutout Student (Figma: 1:1796) */}
          <div className="relative z-10 flex justify-center items-end max-w-[320px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[580px]">
            <img
              src="/hero/student.png"
              alt="ByteSpace student learning online with laptop and headphones"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* 3. Floating Badge 1: Top Left - UI/UX Design (Figma: 46:126) */}
          <div 
            className="absolute top-12 sm:top-20 md:top-24 left-0 sm:left-4 md:left-8 lg:left-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-transform hover:scale-105"
            style={{ minWidth: '170px' }}
          >
            <p className="font-sans font-medium text-sm sm:text-base text-[#242528] leading-tight">
              UI/UX Design
            </p>
            <p className="font-sans font-normal text-xs sm:text-[13px] text-[#82868e] mt-1 flex items-center gap-1.5">
              <span>200 Courses</span>
              <span className="text-[10px] text-[#82868e]">•</span>
              <span>1000+ Students</span>
            </p>
          </div>

          {/* 4. Floating Badge 2: Top Right - Learning Progress (Figma: 1:1797) */}
          <div 
            className="absolute top-16 sm:top-24 md:top-28 right-0 sm:right-4 md:right-8 lg:right-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-transform hover:scale-105"
            style={{ minWidth: '190px' }}
          >
            <p className="font-sans font-medium text-xs sm:text-[14px] text-[#82868e] leading-tight">
              Learning Progress
            </p>
            <p className="font-heading font-semibold text-3xl sm:text-[44px] text-[#242528] mt-1 leading-none">
              55%
            </p>
            {/* Progress track */}
            <div className="w-full bg-[#f6f6f6] h-2 rounded-full overflow-hidden mt-3 sm:mt-4">
              <div 
                className="bg-[#d4fb20] h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: '55%' }} 
              />
            </div>
          </div>

          {/* 5. Floating Badge 3: Bottom Left - Happy Students (Figma: 1:1821) */}
          <div 
            className="absolute bottom-6 sm:bottom-12 md:bottom-16 left-2 sm:left-8 md:left-12 lg:left-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-white/60 transition-transform hover:scale-105"
          >
            <p className="font-sans font-medium text-sm sm:text-base text-[#242528] leading-tight">
              Happy Students
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-sans text-xs sm:text-[13px] text-[#82868e] font-normal">
                4.5 (240)
              </span>
              <Star className="w-3.5 h-3.5 fill-[#d4fb20] text-[#d4fb20]" />
            </div>

            {/* Overlapping Avatars + 2K+ counter */}
            <div className="flex items-center -space-x-2 mt-2.5">
              <img 
                src="/hero/avatar_1.png" 
                alt="Student 1" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" 
              />
              <img 
                src="/hero/avatar_2.png" 
                alt="Student 2" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" 
              />
              <img 
                src="/hero/avatar_3.png" 
                alt="Student 3" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" 
              />
              <img 
                src="/hero/avatar_4.png" 
                alt="Student 4" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" 
              />
              <img 
                src="/hero/avatar_5.png" 
                alt="Student 5" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" 
              />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4fb20] border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#242528] shadow-sm">
                2K+
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
