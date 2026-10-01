import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { coursesData } from '../data/coursesData';

const PILL_ROWS = [
  // Row 1: Figma Node 21:33 (Tab_Categories)
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing'
  ],
  // Row 2: Figma Node 21:56 (Frame 6)
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography'
  ],
  // Row 3: Figma Node 21:63 (Frame 7)
  [
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
    '+ More'
  ]
];

interface FeaturedCoursesSectionProps {
  onNavigate: (route: string, param?: string) => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Featured');

  // Filter 6 featured courses according to active category
  const filteredCourses = coursesData.filter(course => {
    if (activeCategory === 'Featured') return true;
    return (
      course.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
      activeCategory.toLowerCase().includes(course.category.toLowerCase()) ||
      course.title.toLowerCase().includes(activeCategory.toLowerCase())
    );
  }).slice(0, 6);

  const handlePillClick = (pill: string) => {
    if (pill === '+ More') {
      onNavigate('courses');
    } else {
      setActiveCategory(pill);
    }
  };

  return (
    <section 
      aria-label="Featured Courses and Categories"
      className="w-full bg-white py-16 lg:py-[72px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        
        {/* 1. Header Frame (Figma: Frame 3 Node 12:101, w=917, h=180) */}
        <div className="max-w-[917px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#040819] leading-[40px] sm:leading-[48px] lg:leading-[52.8px] tracking-[-0.44px]">
            Discover Your Passion, <br className="hidden sm:inline" />Build Your Skills
          </h2>

          <p className="font-sans font-normal text-[15px] sm:text-[17px] lg:text-[18px] text-[#82868e] leading-[24px] sm:leading-[28px] lg:leading-[28.8px] mt-4 sm:mt-5 max-w-[917px]">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 2. Category Filter Pills (Figma: 21:33, 21:56, 21:63) */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 max-w-[1100px] mx-auto">
          {PILL_ROWS.map((row, rowIdx) => (
            <div 
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 lg:gap-4"
            >
              {row.map((pill) => {
                const isMore = pill === '+ More';
                const isActive = activeCategory === pill;

                if (isMore) {
                  return (
                    <button
                      key={pill}
                      onClick={() => handlePillClick(pill)}
                      className="px-4 py-2.5 rounded-[24px] font-sans font-medium text-[15px] sm:text-[16px] text-[#003be2] hover:underline transition-all cursor-pointer flex items-center justify-center"
                    >
                      {pill}
                    </button>
                  );
                }

                return (
                  <button
                    key={pill}
                    onClick={() => handlePillClick(pill)}
                    className={`px-4 sm:px-5 py-2.5 rounded-[24px] font-sans font-medium text-[14px] sm:text-[16px] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#d4fb20] text-[#242528] shadow-sm scale-105'
                        : 'bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#e5e6e8] hover:text-[#242528]'
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* 3. Course Cards Grid (Figma: Frame 8 Node 33:683, w=1199, h=808) */}
        <div className="mt-12 lg:mt-[77px] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[40px] justify-items-center">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={(id) => onNavigate('course-details', id)}
              />
            ))}
          </div>

          {/* Fallback if category has no results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16 bg-[#f5f5f6] rounded-2xl max-w-md mx-auto">
              <p className="font-heading font-medium text-[#242528] text-lg">No courses found in this category.</p>
              <button
                onClick={() => setActiveCategory('Featured')}
                className="mt-4 px-6 py-2 bg-[#d4fb20] text-[#242528] font-sans font-medium text-sm rounded-full cursor-pointer hover:bg-[#cbfc01] transition-all"
              >
                View Featured Courses
              </button>
            </div>
          )}

          {/* 4. Explore All Courses Button */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#003be2] hover:bg-[#0445ff] text-white font-sans font-medium text-[16px] rounded-full shadow-lg shadow-[#003be2]/20 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <span>Explore All Courses</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
