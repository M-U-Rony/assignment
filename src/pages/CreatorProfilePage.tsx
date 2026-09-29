import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, Check, ArrowLeft } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { creatorProfile, coursesData } from '../data/coursesData';

interface CreatorProfilePageProps {
  creatorId?: string;
  onNavigate: (route: string, param?: string) => void;
}

export const CreatorProfilePage: React.FC<CreatorProfilePageProps> = ({ onNavigate }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(creatorProfile.followersCount);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount(prev => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount(prev => prev + 1);
    }
  };

  // Creator's published courses
  const creatorCourses = coursesData.filter(c => 
    creatorProfile.courses.includes(c.id) || c.instructor.name.toLowerCase().includes('purepearl')
  ).slice(0, 6);

  return (
    <div className="w-full min-h-screen bg-[#F8F9FC] pb-20">
      
      {/* 1. BLUE CREATOR BANNER */}
      <section className="w-full bg-[#194BFB] bg-grid-pattern text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex items-start sm:items-center gap-5">
              <img
                src={creatorProfile.avatar}
                alt={creatorProfile.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/20 shadow-xl"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {creatorProfile.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#D4FF00] text-slate-900">
                    {creatorProfile.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 font-medium">
                  {creatorProfile.role}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-xs font-bold text-white pt-1">
                  <span className="bg-white/10 px-3 py-1 rounded-full">
                    {creatorCourses.length} Products
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full">
                    {followerCount} Followers
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <div className="pt-2 md:pt-0">
              <button
                onClick={toggleFollow}
                className={`px-7 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-md ${
                  isFollowing 
                    ? 'bg-white text-slate-900 hover:bg-slate-100' 
                    : 'bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 hover:scale-105'
                }`}
              >
                {isFollowing ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Following
                  </span>
                ) : (
                  'Follow'
                )}
              </button>
            </div>
          </div>

          {/* Bio text */}
          <div className="mt-8 pt-6 border-t border-blue-500/30 max-w-3xl">
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
              {creatorProfile.bio}
            </p>
          </div>

        </div>
      </section>

      {/* 2. CREATOR'S PRODUCTS LIST */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3 text-xs">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700">
              <span>Level</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700">
              <span>Category</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Sort by:</span>
            <span className="font-semibold text-slate-800">Most relevant</span>
          </div>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {creatorCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={(id) => onNavigate('course-details', id)}
            />
          ))}
        </div>

      </main>

    </div>
  );
};
