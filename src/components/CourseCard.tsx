import React from 'react';
import { BookOpen, Clock, MessageSquare, Star, Signal } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(course.id)}
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/50 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 mb-3.5">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Stats Row: Lessons, Duration, Comments */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.lessonsCount} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.commentsCount} Comments</span>
          </div>
        </div>

        {/* Title and Rating */}
        <div className="pt-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-slate-900 group-hover:text-[#194BFB] transition-colors line-clamp-1 text-base">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-700 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            by <span className="font-medium text-slate-700">{course.instructor.name}</span>
          </p>
        </div>

        {/* Level badge */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100/80 w-fit px-2.5 py-1 rounded-md">
          <Signal className="w-3 h-3 text-[#194BFB]" />
          <span className="font-medium">{course.level}</span>
        </div>
      </div>

      {/* Footer: Price and Enrolled Students Avatars */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-lg font-extrabold text-[#194BFB]">${course.price}</span>
          <span className="text-xs text-slate-500 font-normal">/lifetime</span>
        </div>

        {/* Avatars Stack */}
        <div className="flex items-center -space-x-1.5">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
            alt="Student" 
            className="w-5 h-5 rounded-full border border-white object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
            alt="Student" 
            className="w-5 h-5 rounded-full border border-white object-cover" 
          />
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
            alt="Student" 
            className="w-5 h-5 rounded-full border border-white object-cover" 
          />
          <div className="w-5 h-5 rounded-full bg-[#D4FF00] border border-white flex items-center justify-center text-[8px] font-bold text-slate-900">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
};
