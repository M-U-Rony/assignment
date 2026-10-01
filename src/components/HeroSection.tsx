import React, { useState } from 'react';
import { Search } from 'lucide-react';

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
    <section className="w-full bg-[#003be2] bg-grid-hero relative overflow-hidden">
      
      {/* ========================================================================= */}
      {/* DESKTOP VIEW (Exact 1440x1024 Canvas matching Figma Frame 1:1695)       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1440px] h-[1024px] mx-auto overflow-hidden">
        
        {/* 1. 3D Ornaments Group (Figma: 46:79) */}
        {/* Top-Left Lime Coil (46:90) */}
        <img
          src="/hero/shape_coil_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10 animate-float-slow"
          style={{
            left: '-118px',
            top: '221px',
            width: '385px',
            height: '385px'
          }}
        />

        {/* Mid-Left White Zigzag (46:95) */}
        <img
          src="/hero/shape_zigzag_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '183px',
            top: '477px',
            width: '175px',
            height: '175px'
          }}
        />

        {/* Bottom-Left White Donut (46:105) */}
        <img
          src="/hero/shape_donut_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '18px',
            top: '682px',
            width: '342px',
            height: '342px'
          }}
        />

        {/* Top-Right Lime Cylinder (46:110) */}
        <img
          src="/hero/shape_cylinder_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '1231px',
            top: '221px',
            width: '370px',
            height: '370px'
          }}
        />

        {/* Mid-Right White Cone / Pyramid (46:80) */}
        <img
          src="/hero/shape_cone_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '1106px',
            top: '464px',
            width: '188px',
            height: '188px'
          }}
        />

        {/* Bottom-Right White Zigzag (46:85) */}
        <img
          src="/hero/shape_zigzag_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10 rotate-45"
          style={{
            left: '1127px',
            top: '672px',
            width: '330px',
            height: '330px'
          }}
        />

        {/* 2. Hero Headings (Figma: Frame 1 1:1792) */}
        <div 
          className="absolute z-20 text-center flex flex-col items-center"
          style={{
            left: '253px',
            top: '169px',
            width: '935px',
            height: '233px'
          }}
        >
          <h1 className="font-heading font-semibold text-[72px] text-white tracking-[-0.72px] leading-[86.4px] w-full text-center">
            Get Access to Hundreds <br />
            Courses Available
          </h1>

          <p className="font-sans font-normal text-[18px] text-[#e5e6e8] leading-[28.8px] mt-8 max-w-[819px] text-center">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* 3. Hero Search Bar (Figma: Search_Bar 1:1772) */}
        <form 
          onSubmit={handleSubmit}
          className="absolute z-20 flex items-center justify-center gap-4"
          style={{
            left: '430px',
            top: '462px',
            width: '581px',
            height: '52px'
          }}
        >
          {/* Input Box: 461px x 52px */}
          <div className="w-[461px] h-[52px] bg-white rounded-[24px] px-6 flex items-center gap-2.5 shadow-lg">
            <Search className="w-5 h-5 text-[#82868e] shrink-0 stroke-[2]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent font-sans text-[18px] text-[#242528] placeholder-[#82868e] focus:outline-none"
            />
          </div>

          {/* Search Button: 104px x 46px (centered in 52px line) */}
          <button
            type="submit"
            className="w-[104px] h-[46px] bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-sans font-medium text-[18px] rounded-[24px] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 shrink-0"
          >
            Search
          </button>
        </form>

        {/* 4. Giant Lime Disc (Figma: Ellipse 7 1:1866) */}
        <div 
          className="absolute rounded-full bg-[#d4fb20] pointer-events-none z-0"
          style={{
            left: '145px',
            top: '582px',
            width: '1149px',
            height: '1149px',
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.2)'
          }}
        />

        {/* 5. Student Cutout (Figma: Image 1:1796) */}
        <img
          src="/hero_img.png"
          alt="ByteSpace student learning online"
          className="absolute pointer-events-none select-none z-10 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          style={{
            left: '431px',
            top: '512px',
            width: '578px',
            height: '541px'
          }}
        />

        {/* 6. Floating Badge 1: UI/UX Design (Figma: 46:126 at left=404px, top=639px) */}
        <div 
          className="absolute z-30 transition-transform hover:scale-105"
          style={{
            left: '404px',
            top: '639px',
            width: '208px',
            height: '70px'
          }}
        >
          <img 
            src="/figma-assets/hero_badge_uiux.svg" 
            alt="UI/UX Design - 200 Courses, 1000+ Students" 
            className="w-full h-full object-contain drop-shadow-xl" 
          />
        </div>

        {/* 7. Floating Badge 2: Learning Progress (Figma: 1:1797 at left=842px, top=651px) */}
        <div 
          className="absolute z-30 transition-transform hover:scale-105"
          style={{
            left: '842px',
            top: '651px',
            width: '232px',
            height: '131px'
          }}
        >
          <img 
            src="/figma-assets/hero_badge_progress.svg" 
            alt="Learning Progress 55%" 
            className="w-full h-full object-contain drop-shadow-xl" 
          />
        </div>

        {/* 8. Floating Badge 3: Happy Students (Figma: 1:1821 at left=328px, top=837px) */}
        <div 
          className="absolute z-30 bg-white rounded-[16px] px-5 py-3.5 shadow-2xl border border-white/60 transition-transform hover:scale-105 flex items-center justify-center"
          style={{
            left: '328px',
            top: '837px',
            width: '258px',
            height: '121px'
          }}
        >
          <img 
            src="/Auto Layout Vertical (2).png" 
            alt="Happy Students 4.5 (240) 2K+" 
            className="w-full h-auto object-contain" 
          />
        </div>

      </div>

      {/* ========================================================================= */}
      {/* TABLET & MOBILE VIEW (< 1024px)                                          */}
      {/* ========================================================================= */}
      <div className="lg:hidden px-4 sm:px-8 pt-28 pb-16 flex flex-col items-center text-center relative z-20">
        
        {/* Floating Accents */}
        <img
          src="/hero/shape_coil_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute top-12 -left-8 w-24 sm:w-36 h-auto pointer-events-none opacity-80"
        />
        <img
          src="/hero/shape_cylinder_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute top-8 -right-8 w-24 sm:w-36 h-auto pointer-events-none opacity-80"
        />

        {/* Headings */}
        <h1 className="font-heading font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        <p className="font-sans font-normal text-sm sm:text-base text-[#e5e6e8] max-w-xl mx-auto mt-4 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form 
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto"
        >
          <div className="w-full bg-white rounded-full h-12 px-5 flex items-center gap-2.5 shadow-md">
            <Search className="w-5 h-5 text-[#82868e] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent font-sans text-sm text-[#242528] placeholder-[#82868e] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#d4fb20] text-[#242528] font-sans font-medium text-sm h-12 px-7 rounded-full transition-all cursor-pointer shadow-md shrink-0"
          >
            Search
          </button>
        </form>

        {/* Visual Student + Disc */}
        <div className="relative mt-12 w-full max-w-sm sm:max-w-md mx-auto flex items-end justify-center">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-[#d4fb20] z-0" />
          <img
            src="/hero_img.png"
            alt="ByteSpace student"
            className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] h-auto object-contain"
          />

          {/* Badges on mobile */}
          <div className="absolute -top-4 -left-2 z-20 w-36 sm:w-44">
            <img src="/figma-assets/hero_badge_uiux.svg" alt="UI/UX Design" className="w-full h-auto drop-shadow-lg" />
          </div>
          <div className="absolute top-12 -right-2 z-20 w-40 sm:w-48">
            <img src="/figma-assets/hero_badge_progress.svg" alt="Learning Progress" className="w-full h-auto drop-shadow-lg" />
          </div>
          <div className="absolute bottom-4 -left-4 z-20 w-44 sm:w-52 bg-white rounded-xl p-2 shadow-xl border border-white/60">
            <img src="/Auto Layout Vertical (2).png" alt="Happy Students" className="w-full h-auto" />
          </div>
        </div>

      </div>

    </section>
  );
};
