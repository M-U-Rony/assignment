import React from 'react';
import { Star, Signal } from 'lucide-react';
import type { Course } from '../types';

const FIGMA_STUDENT_AVATARS = [
  '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
  '/figma-assets/3fe559181733e0fb69226caee836e40092facb44_ellipse.png',
  '/figma-assets/0577f0e9b7fca2f32639871454da0de95f951709_ellipse.png',
  '/figma-assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f_ellipse.png'
];

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(course.id)}
      className="group bg-white rounded-[16px] border border-[#e5e6e8] hover:border-[#003be2]/30 p-4 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex flex-col justify-between cursor-pointer w-full max-w-[373px] mx-auto min-h-[384px]"
    >
      <div>
        {/* 1. Thumbnail (341x195 in Figma) */}
        <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-slate-100 select-none">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Floating chips at bottom of thumbnail */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[6px] text-[12px] font-sans font-medium text-[#4f4f4f] shadow-sm">
              {course.lessonsCount} Lessons
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[6px] text-[12px] font-sans font-medium text-[#4f4f4f] shadow-sm">
              {course.duration}
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[6px] text-[12px] font-sans font-medium text-[#4f4f4f] shadow-sm">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* 2. Title & Author & Rating */}
        <div className="pt-3.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-semibold text-[18px] sm:text-[20px] text-[#242528] group-hover:text-[#003be2] transition-colors truncate leading-[24px]">
                {course.title}
              </h3>
              <p className="font-sans text-[12px] text-[#82868e] mt-0.5">
                by {course.instructor.name.toLowerCase()}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 shrink-0 pt-0.5">
              <span className="font-sans font-medium text-[16px] sm:text-[18px] text-[#4f4f4f]">
                {course.rating.toFixed(1)}
              </span>
              <Star className="w-4 h-4 fill-[#ffb800] text-[#ffb800]" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Middle & Bottom Meta Rows */}
      <div className="pt-3">
        {/* Level badge & Enrolled Students Stack */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5 bg-[#f5f5f6] text-[#4b4c53] font-sans font-medium text-[12px] px-2.5 py-1 rounded-[16px]">
            <Signal className="w-3.5 h-3.5 text-[#003be2]" />
            <span>{course.level}</span>
          </div>

          {/* Student Avatars Stack */}
          <div className="flex items-center -space-x-2">
            {FIGMA_STUDENT_AVATARS.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt="Student" 
                className="w-7 h-7 rounded-full ring-2 ring-white object-cover" 
              />
            ))}
            <div className="w-7 h-7 rounded-full bg-[#f5f5f6] ring-2 ring-white flex items-center justify-center font-sans font-medium text-[11px] text-[#242528]">
              26+
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="flex items-baseline">
          <span className="font-heading font-semibold text-[20px] text-[#003be2]">
            ${course.price}
          </span>
          <span className="font-sans text-[12px] text-[#82868e] ml-1">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
};
