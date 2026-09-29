import React, { useState } from 'react';
import { 
  Play, 
  Share2, 
  Signal, 
  Star, 
  Users, 
  CheckCircle2, 
  FileText, 
  Video, 
  Award, 
  MessageCircle, 
  Check, 
  ArrowLeft,
  X
} from 'lucide-react';
import type { Course } from '../types';
import { coursesData } from '../data/coursesData';

interface CourseDetailsPageProps {
  courseId?: string;
  initialTab?: 'about' | 'lessons' | 'reviews';
  onNavigate: (route: string, param?: string) => void;
  onAddToCart?: () => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({ 
  courseId = 'build-digital-asset', 
  initialTab = 'about',
  onNavigate,
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(initialTab);
  const [selectedReviewFilter, setSelectedReviewFilter] = useState<number | 'all'>('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  // Find course or fallback to build-digital-asset
  const course: Course = coursesData.find(c => c.id === courseId) || coursesData[0];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 3000);
  };

  const handleEnroll = () => {
    setEnrolled(true);
    if (onAddToCart) onAddToCart();
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FC] pb-24">
      
      {/* 1. BLUE HEADER BANNER */}
      <section className="w-full bg-[#194BFB] bg-grid-pattern text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-200 hover:text-white mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-xs text-blue-200">
                by{' '}
                <button 
                  onClick={() => onNavigate('creator', course.instructor.id)}
                  className="font-semibold text-white underline decoration-white/40 hover:decoration-white transition-colors"
                >
                  {course.instructor.name}
                </button>
              </p>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
                  <Signal className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>{course.level}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 fill-[#D4FF00] text-[#D4FF00]" />
                  <span>{course.rating} ({course.reviewsCount} reviews)</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
                  <Users className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>{course.studentsCount} Students</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
            <div className="shrink-0 relative">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4FF00] hover:bg-[#c4ec00] text-slate-900 font-bold text-xs rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              {shareToast && (
                <div className="absolute right-0 top-12 bg-white text-slate-900 text-xs px-3 py-1.5 rounded-lg shadow-lg border border-slate-200 whitespace-nowrap animate-fadeIn font-semibold">
                  ✓ Link copied to clipboard!
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTENT + SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Video Player & Tabs */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Video Player Box */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200 group">
              <img
                src={course.thumbnail}
                alt="Course Video Preview"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#194BFB] flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>

              {/* Video Modal */}
              {isVideoPlaying && (
                <div className="absolute inset-0 z-30 bg-black flex flex-col justify-center items-center p-4">
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/20 rounded-full cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <iframe 
                    className="w-full h-full rounded-2xl" 
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Video preview" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* TAB SELECTOR */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              {(['about', 'lessons', 'reviews'] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#D4FF00] text-slate-900 shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* TAB 1: ABOUT CONTENT */}
            {activeTab === 'about' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8 animate-fadeIn">
                
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Description</h3>
                  <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak Gallery */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Sneak Peak</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {course.sneakPeeks.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group">
                        <img 
                          src={img} 
                          alt={`Sneak peek ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Points</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {course.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#194BFB] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: LESSONS CONTENT */}
            {activeTab === 'lessons' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Explore the Modules</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Modules Accordion List */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">Lesson List</h4>
                  {course.modules.map((mod) => (
                    <div 
                      key={mod.id}
                      className="border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                            mod.completed ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-[#194BFB]'
                          }`}>
                            {mod.completed ? <Check className="w-5 h-5" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                              {mod.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              {mod.description}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 shrink-0">
                          {mod.duration}
                        </span>
                      </div>

                      {/* Sub-lessons */}
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 pl-12">
                        {mod.lessons.map(sub => (
                          <div key={sub.id} className="flex items-center justify-between text-xs text-slate-600">
                            <span className="hover:text-[#194BFB] cursor-pointer">• {sub.title}</span>
                            <span className="text-slate-400">{sub.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS CONTENT */}
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8 animate-fadeIn">
                
                <div>
                  <h3 className="text-lg font-bold text-slate-900">What Learners Are Saying</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    Discover what our learners have to say about their experiences with "{course.title}". Read reviews and ratings from individuals who have embarked on this transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Rating Overview Card */}
                <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="bg-[#D4FF00] rounded-2xl p-5 text-center min-w-[140px] shadow-sm">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">Ratings</span>
                    <span className="text-4xl font-extrabold text-slate-900 mt-1 block">4.7</span>
                  </div>

                  {/* Rating Bars */}
                  <div className="flex-1 w-full space-y-2 text-xs">
                    {[
                      { stars: 5, count: 720, pct: 85 },
                      { stars: 4, count: 120, pct: 14 },
                      { stars: 3, count: 21, pct: 4 },
                      { stars: 2, count: 12, pct: 2 },
                      { stars: 1, count: 16, pct: 3 },
                    ].map(bar => (
                      <div key={bar.stars} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-16 text-slate-600 font-medium">
                          <span>{bar.stars}</span>
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </div>
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-slate-800 rounded-full" 
                            style={{ width: `${bar.pct}%` }} 
                          />
                        </div>
                        <span className="w-8 text-right text-slate-400 font-medium">{bar.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Filter Chips */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-slate-900">Individual Reviews:</h4>
                    <span className="text-xs text-slate-400">{course.reviews.length} reviews</span>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    <button
                      onClick={() => setSelectedReviewFilter('all')}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${
                        selectedReviewFilter === 'all' 
                          ? 'bg-[#D4FF00] text-slate-900 font-bold' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      All rating
                    </button>
                    {[5, 4, 3, 2, 1].map(r => (
                      <button
                        key={r}
                        onClick={() => setSelectedReviewFilter(r)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${
                          selectedReviewFilter === r 
                            ? 'bg-[#D4FF00] text-slate-900 font-bold' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <span>{r}</span>
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Cards */}
                <div className="space-y-4">
                  {course.reviews
                    .filter(rev => selectedReviewFilter === 'all' || rev.rating === selectedReviewFilter)
                    .map(rev => (
                      <div key={rev.id} className="border border-slate-200 rounded-2xl p-5 space-y-3 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img 
                              src={rev.avatar} 
                              alt={rev.author} 
                              className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                            />
                            <div>
                              <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{rev.author}</h5>
                              <p className="text-[11px] text-slate-400">{rev.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-slate-400">{rev.date}</span>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                            />
                          ))}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                          "{rev.comment}"
                        </p>
                      </div>
                    ))}
                </div>

              </div>
            )}

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR ENROLLMENT CARD */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-6">
              
              {/* Teaser Modules */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">112 Lessons (24 hours)</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700 font-medium">01 Introduction to Digital Assets</span>
                    <span className="text-slate-400">12 mins</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700 font-medium">02 Design Principles for Impacts</span>
                    <span className="text-slate-400">21 mins</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-700 font-medium">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-slate-400">16 mins</span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab('lessons')}
                  className="text-xs font-semibold text-[#194BFB] mt-2 block hover:underline cursor-pointer"
                >
                  99 more videos
                </button>
              </div>

              {/* Callout */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#194BFB]">${course.price}</span>
                  <span className="text-xs text-slate-400 font-medium">/ lifetime</span>
                </div>

                {/* Enroll button */}
                <button
                  onClick={handleEnroll}
                  disabled={enrolled}
                  className={`w-full mt-4 py-3.5 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer ${
                    enrolled 
                      ? 'bg-green-600 text-white' 
                      : 'bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {enrolled ? '✓ Enrolled Successfully' : 'Enroll Now'}
                </button>
              </div>

              {/* Course Includes */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                  This course includes
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#194BFB]" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-[#194BFB]" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#194BFB]" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#194BFB]" />
                    <span>Private Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Creator Box */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{course.instructor.name}</h5>
                    <p className="text-[10px] text-slate-400">{course.instructor.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('creator', course.instructor.id)}
                  className="text-xs font-bold text-[#194BFB] hover:underline cursor-pointer"
                >
                  See Full Profile
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
