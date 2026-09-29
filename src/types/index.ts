export interface Course {
  id: string;
  title: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
    role: string;
  };
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  duration: string;
  lessonsCount: number;
  commentsCount: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  sneakPeeks: string[];
  keyPoints: string[];
  modules: CourseModule[];
  reviews: CourseReview[];
  isFeatured?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  completed?: boolean;
  lessons: {
    id: string;
    title: string;
    duration: string;
  }[];
}

export interface CourseReview {
  id: string;
  author: string;
  avatar: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  role: string;
  tag: string;
  bio: string;
  productsCount: number;
  followersCount: number;
  isFollowing?: boolean;
  courses: string[]; // course IDs
}

export interface Category {
  id: string;
  name: string;
  iconName?: string;
  count?: number;
}
