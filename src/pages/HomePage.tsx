import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { BrandPartnersSection } from '../components/BrandPartnersSection';
import { FeaturedCoursesSection } from '../components/FeaturedCoursesSection';
import { LimeSquiggle, Cone3D, LimeDonut3D } from '../components/GeometricDecorations';
import { testimonials } from '../data/coursesData';

import { LearningPathsSection } from '../components/LearningPathsSection';

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

      {/* 5. YOUR PATH TO PROFESSIONAL GROWTH STARTS HERE */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Metrics */}
              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-extrabold text-[#194BFB]">12K</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#194BFB]">70+</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#194BFB]">16</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">Creators</div>
                </div>
              </div>
            </div>

            {/* Right Visual composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Student portrait"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating Mini Course Preview */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[220px]">
                <p className="text-xs font-bold text-slate-900">Learn Figma from Basic</p>
                <p className="text-[11px] text-slate-500">by purepearl studio</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-extrabold text-[#194BFB]">$25</span>
                  <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">Beginner</span>
                </div>
              </div>

              {/* Floating Progress Badge */}
              <div className="absolute top-8 -right-2 sm:-right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 text-left">
                <span className="text-[11px] text-slate-500 block">Learning Progress</span>
                <span className="text-2xl font-black text-slate-900">55%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CREATE & MANAGE COURSES EASILY (CREATOR SECTION) */}
      <section className="w-full py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Visual: Creator with Revenue Badges */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Creator presenting"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Revenue Badge 1 */}
              <div className="absolute top-6 -left-4 sm:left-2 bg-[#194BFB] text-white rounded-2xl p-3.5 shadow-xl text-left">
                <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Total Revenue</p>
                <p className="text-xl font-extrabold">$120.29</p>
              </div>

              {/* Floating Revenue Badge 2 */}
              <div className="absolute top-28 -left-4 sm:left-2 bg-[#194BFB] text-white rounded-2xl p-3.5 shadow-xl text-left">
                <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">Year to Date</p>
                <p className="text-xl font-extrabold">$1,200.38</p>
              </div>

              {/* Floating Happy Students */}
              <div className="absolute -bottom-4 right-2 sm:right-6 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full object-cover" alt="" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full object-cover" alt="" />
                </div>
                <span className="text-xs font-bold text-slate-800">Happy Students 2K+</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Create & Manage Courses Easily.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Benefits checklist */}
              <div className="space-y-4 pt-2">
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#194BFB] shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('creator')}
                  className="px-7 py-3 bg-[#194BFB] hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md transition-all cursor-pointer"
                >
                  Explore Creator Tools
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

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
