import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { coursesData, categoryPills } from '../data/coursesData';

interface SearchCoursesPageProps {
  initialQuery?: string;
  onNavigate: (route: string, param?: string) => void;
}

export const SearchCoursesPage: React.FC<SearchCoursesPageProps> = ({ initialQuery = '', onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Search term filter
      const matchesSearch = searchTerm.trim() === '' || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = activeCategory === 'Featured' || 
        course.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(course.category.toLowerCase());

      // Level filter
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, activeCategory, selectedLevel]);

  // Generate 9 cards grid by repeating or slicing
  const displayedCourses = useMemo(() => {
    if (filteredCourses.length === 0) return [];
    // Ensure we have at least 9 cards for display like in the Figma frame
    let list = [...filteredCourses];
    while (list.length < 9 && list.length > 0) {
      list = [...list, ...filteredCourses.map((c, i) => ({ ...c, id: `${c.id}-copy-${i}-${list.length}` }))];
    }
    return list.slice(0, 9);
  }, [filteredCourses]);

  return (
    <div className="w-full min-h-screen bg-[#F8F9FC] flex flex-col">
      
      {/* 1. BLUE HERO SEARCH BANNER */}
      <section className="w-full bg-[#194BFB] bg-grid-pattern py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search bar with category dropdown */}
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-full p-1.5 pl-6 flex items-center shadow-xl">
              <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                placeholder="Search courses, instructors, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-slate-800 text-sm font-medium focus:outline-none placeholder-slate-400"
              />
              <div className="flex items-center gap-1 bg-slate-100 rounded-full px-3 py-1.5 mr-1 text-slate-700 text-xs font-semibold shrink-0">
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SORT BAR */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Filter toggle */}
              <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 transition-colors">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter</span>
              </button>

              {/* Level selector */}
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 hover:bg-slate-50 font-medium text-slate-700 px-3.5 py-2 pr-8 rounded-xl focus:outline-none cursor-pointer text-xs"
                >
                  <option value="All">Level: All</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Category selector */}
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 hover:bg-slate-50 font-medium text-slate-700 px-3.5 py-2 pr-8 rounded-xl focus:outline-none cursor-pointer text-xs"
                >
                  <option value="Featured">Category: All</option>
                  {categoryPills.filter(p => p !== 'Featured' && p !== '+ More').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Sort by:</span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 hover:bg-slate-50 font-semibold text-slate-800 px-3 py-1.5 pr-7 rounded-xl focus:outline-none cursor-pointer"
                >
                  <option value="Most relevant">Most relevant</option>
                  <option value="Highest Rated">Highest Rated</option>
                  <option value="Newest">Newest</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Category Chips row */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar">
            {categoryPills.slice(0, 9).map((pill) => {
              const isActive = activeCategory === pill;
              return (
                <button
                  key={pill}
                  onClick={() => setActiveCategory(pill)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#D4FF00] text-slate-900 font-bold shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. COURSES GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {displayedCourses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-slate-800">No courses found matching "{searchTerm}"</h3>
            <p className="text-sm text-slate-500 mt-2">Try clearing your filters or searching for something else.</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('Featured'); setSelectedLevel('All'); }}
              className="mt-5 px-6 py-2.5 bg-[#194BFB] text-white text-xs font-semibold rounded-full shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={(id) => onNavigate('course-details', id.split('-copy-')[0])}
              />
            ))}
          </div>
        )}

        {/* 4. PAGINATION */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === pageNum
                  ? 'bg-[#194BFB] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button 
            disabled={currentPage === 5}
            onClick={() => setCurrentPage(prev => Math.min(5, prev + 1))}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </main>

    </div>
  );
};
