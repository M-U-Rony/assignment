import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BrandPartnersSection } from '../components/BrandPartnersSection';
import { FeaturedCoursesSection } from '../components/FeaturedCoursesSection';
import { LimeSquiggle, Cone3D, LimeDonut3D } from '../components/GeometricDecorations';
import { testimonials } from '../data/coursesData';

import { LearningPathsSection } from '../components/LearningPathsSection';
import { ProfessionalGrowthSection } from '../components/ProfessionalGrowthSection';

interface HomePageProps {
  onNavigate: (route: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO SECTION (Figma: Hero_Frame 1:1695) */}
      <HeroSection onSearch={(query) => onNavigate('courses', query)} />


      {/* 2. BRAND PARTNERS STRIP (Figma: Frame 2 1:1794) */}
      <BrandPartnersSection />

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS (Figma: Frame 3, Category Pills, Frame 8) */}
      <FeaturedCoursesSection onNavigate={onNavigate} />

      {/* 4. EXPLORE DIVERSE LEARNING PATHS (Figma: Frame 9 Node 34:684 & Frame 10 Node 34:725) */}
      <LearningPathsSection onNavigate={onNavigate} />

      {/* 5. PROFESSIONAL GROWTH & COURSE CREATION (Figma: Frame 15 Node 34:1159) */}
      <ProfessionalGrowthSection onNavigate={onNavigate} />


      {/* 7. UNLOCK YOUR POTENTIAL AS A CREATOR (CTA BANNER) */}
      <section className="relative w-full bg-[#194BFB] bg-grid-pattern text-white py-20 overflow-hidden">
        {/* Decorative 3D elements */}
        <div className="absolute top-6 left-10 pointer-events-none opacity-80">
          <LimeSquiggle className="w-20 h-20" />
        </div>
        <div className="absolute bottom-6 right-10 pointer-events-none opacity-80">
          <LimeDonut3D className="w-24 h-24" />
        </div>
        <div className="absolute top-1/2 right-1/4 pointer-events-none opacity-70">
          <Cone3D className="w-16 h-20" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed font-normal">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 font-extrabold text-sm rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Join as Creator
            </button>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="w-full py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Discover What Our <br />Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-[#194BFB] font-medium">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
