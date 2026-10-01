import React from "react";
import { HeroSection } from "../components/HeroSection";
import { BrandPartnersSection } from "../components/BrandPartnersSection";
import { FeaturedCoursesSection } from "../components/FeaturedCoursesSection";
import { LearningPathsSection } from "../components/LearningPathsSection";
import { ProfessionalGrowthSection } from "../components/ProfessionalGrowthSection";
import { CTABannerSection } from "../components/CTABannerSection";
import { testimonials } from "../data/coursesData";

interface HomePageProps {
  onNavigate: (route: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION (Figma: Hero_Frame 1:1695) */}
      <HeroSection onSearch={(query) => onNavigate("courses", query)} />

      {/* 2. BRAND PARTNERS STRIP (Figma: Frame 2 1:1794) */}
      <BrandPartnersSection />

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS (Figma: Frame 3, Category Pills, Frame 8) */}
      <FeaturedCoursesSection onNavigate={onNavigate} />

      {/* 4. EXPLORE DIVERSE LEARNING PATHS (Figma: Frame 9 Node 34:684 & Frame 10 Node 34:725) */}
      <LearningPathsSection onNavigate={onNavigate} />

      {/* 5. PROFESSIONAL GROWTH & COURSE CREATION (Figma: Frame 15 Node 34:1159) */}
      <ProfessionalGrowthSection onNavigate={onNavigate} />

      {/* 6. UNLOCK YOUR POTENTIAL AS A CREATOR (CTA BANNER - Figma Frame 16 Node 34:1161) */}
      <CTABannerSection onNavigate={onNavigate} />

      {/* 8. TESTIMONIALS SECTION */}
      <section className="w-full py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Discover What Our <br />
                Community Is Saying
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating
                on our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
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
                      <h4 className="font-bold text-slate-900 text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-[#194BFB] font-medium">
                        {t.role}
                      </p>
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
