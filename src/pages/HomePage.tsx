import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, PenTool, Code, Server, Briefcase, Megaphone, Camera } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { HeroSection } from '../components/HeroSection';
import { LimeSquiggle, Cone3D, LimeDonut3D } from '../components/GeometricDecorations';
import { coursesData, categoryPills, testimonials } from '../data/coursesData';

interface HomePageProps {
  onNavigate: (route: string, param?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  // Filter 6 featured courses
  const filteredCourses = coursesData.filter(course => {
    if (activeCategory === 'Featured') return true;
    return course.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
           activeCategory.toLowerCase().includes(course.category.toLowerCase());
  }).slice(0, 6);

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO SECTION (Figma: Hero_Frame 1:1695) */}
      <HeroSection onSearch={(query) => onNavigate('courses', query)} />


      {/* 2. BRAND PARTNERS STRIP */}
      <section className="w-full bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['logoipsum', 'logoipsum', 'logoipsum', 'logoipsum', 'logoipsum'].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-xs">
                  ⚡
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-700 lowercase">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS */}
      <section className="w-full py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Discover Your Passion, <br className="hidden sm:block" />Build Your Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
            {categoryPills.map((pill) => {
              const isActive = activeCategory === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setActiveCategory(pill)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4FF00] text-slate-900 shadow-sm font-bold scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* 6 Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={(id) => onNavigate('course-details', id)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#194BFB] hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Explore All Courses</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. EXPLORE DIVERSE LEARNING PATHS */}
      <section className="w-full py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* 6 Learning Path Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { id: 'design', name: 'Design', icon: PenTool },
              { id: 'development', name: 'Development', icon: Code },
              { id: 'it-software', name: 'IT & Software', icon: Server },
              { id: 'business', name: 'Business', icon: Briefcase },
              { id: 'marketing', name: 'Marketing', icon: Megaphone },
              { id: 'photography', name: 'Photography', icon: Camera },
            ].map((path) => {
              const IconComp = path.icon;
              return (
                <div
                  key={path.id}
                  onClick={() => onNavigate('courses')}
                  className="group bg-[#F8F9FC] hover:bg-[#194BFB] border border-slate-200 hover:border-transparent rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#D4FF00] group-hover:bg-white flex items-center justify-center mb-4 transition-colors shadow-sm">
                    <IconComp className="w-7 h-7 text-slate-900 group-hover:text-[#194BFB] transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-white text-sm transition-colors">
                    {path.name}
                  </h3>
                </div>
              );
            })}
          </div>

        </div>
      </section>

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
