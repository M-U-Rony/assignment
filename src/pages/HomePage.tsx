import React from "react";
import { HeroSection } from "../components/HeroSection";
import { BrandPartnersSection } from "../components/BrandPartnersSection";
import { FeaturedCoursesSection } from "../components/FeaturedCoursesSection";
import { LearningPathsSection } from "../components/LearningPathsSection";
import { ProfessionalGrowthSection } from "../components/ProfessionalGrowthSection";
import { CTABannerSection } from "../components/CTABannerSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

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

      {/* 7. TESTIMONIALS SECTION (Figma Frame 17 Node 34:1175) */}
      <TestimonialsSection />
    </div>
  );
};
