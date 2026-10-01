import type { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'UI/UX Designer'
    },
    thumbnail: '/figma-assets/c88264191d691ba3300ad4f82a942429bb912fa5_frame.png',
    rating: 4.5,
    reviewsCount: 172,
    studentsCount: 199,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'UI/UX Design',
    level: 'Beginner',
    isFeatured: true,
    description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
    sneakPeeks: [
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
    ],
    keyPoints: [
      'Foundational Concepts of Digital Assets',
      'Design Principles Mastery & Visual Hierarchy',
      'Advanced Techniques in Digital Creation',
      'Project Showcase and Peer Critique',
      'Optimizing for Various Digital Platforms',
      'Digital Asset Management Best Practices',
      'Monetization Strategies for Creators',
      'Capstone Project: Building Your Portfolio'
    ],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Introduction to Digital Assets',
        duration: '12 mins',
        description: 'Lay the groundwork with lessons like "Understanding Digital Elements" and "Navigating Design Software Tools". Dive into the essentials of digital asset creation.',
        completed: true,
        lessons: [
          { id: 'les-1', title: 'Introduction to Digital Assets', duration: '12 mins' },
          { id: 'les-2', title: 'Core Terminology and Workflow Overview', duration: '15 mins' }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Design Principles for Impact',
        duration: '21 mins',
        description: 'Master the principles that drive impactful designs with lessons such as "Color Theory in Digital Design" and "Typography Essentials". Elevate your visual communication.',
        completed: false,
        lessons: [
          { id: 'les-3', title: 'Design Principles for Impacts', duration: '21 mins' },
          { id: 'les-4', title: 'Contrast, Alignment, and Visual Weight', duration: '18 mins' }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'PurePearl Studio',
        avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
        role: 'UI/UX Designer',
        rating: 5,
        date: 'a year ago',
        comment: 'This course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!'
      }
    ]
  },
  {
    id: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'UI/UX Designer'
    },
    thumbnail: '/figma-assets/93ad9f9e6bdb3c7f3c478820624ee19ad7320072_frame.png',
    rating: 4.5,
    reviewsCount: 88,
    studentsCount: 2450,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'UI/UX Design',
    level: 'Beginner',
    isFeatured: true,
    description: 'Master the industry-standard UI/UX design tool from absolute scratch. Learn auto-layout, components, variants, variables, and responsive constraints.',
    sneakPeeks: [],
    keyPoints: ['Figma Interface Mastery', 'Components and Auto-layout', 'Interactive Prototyping'],
    modules: [],
    reviews: []
  },
  {
    id: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'Data Architect'
    },
    thumbnail: '/figma-assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11_frame.png',
    rating: 4.5,
    reviewsCount: 95,
    studentsCount: 3100,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'Data Science',
    level: 'Beginner',
    isFeatured: true,
    description: 'Demystify big data ecosystems, predictive modeling, data pipelines, and actionable dashboard analytics for modern tech teams.',
    sneakPeeks: [],
    keyPoints: ['Data Pipeline Concepts', 'SQL & Python Analytics', 'Dashboard Storytelling'],
    modules: [],
    reviews: []
  },
  {
    id: 'balancing-productivity-and-life',
    title: 'Balancing Productivity and Self-Care',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'Mindfulness Coach'
    },
    thumbnail: '/figma-assets/72e18d90fb9ddac1944e3483a501f3cdae505f57_frame.png',
    rating: 4.5,
    reviewsCount: 74,
    studentsCount: 1450,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'Productivity',
    level: 'Beginner',
    isFeatured: true,
    description: 'Discover scientific time blocking, energy management, and sustainable habits to maximize creative output without burnout.',
    sneakPeeks: [],
    keyPoints: ['Time Boxing Mastery', 'Deep Work Routines', 'Stress Reduction Protocols'],
    modules: [],
    reviews: []
  },
  {
    id: 'mastering-money-management',
    title: 'Mastering Money Management',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'Financial Analyst'
    },
    thumbnail: '/figma-assets/a89789455304dbf5cadc8e011bc26c97145aa56c_frame.png',
    rating: 4.5,
    reviewsCount: 110,
    studentsCount: 2900,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'Marketing',
    level: 'Beginner',
    isFeatured: true,
    description: 'Gain financial clarity through smart budgeting, investment fundamentals, cash-flow diversification, and freelance tax management.',
    sneakPeeks: [],
    keyPoints: ['Personal Wealth Strategy', 'Investment Portfolios', 'Passive Income Engines'],
    modules: [],
    reviews: []
  },
  {
    id: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: '/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png',
      role: 'Startup Founder'
    },
    thumbnail: '/figma-assets/69362b026219ac3eb8b4e77e8bbe4e18c4464b44_frame.png',
    rating: 4.5,
    reviewsCount: 65,
    studentsCount: 1980,
    price: 25,
    duration: '2 hours 16 mins',
    lessonsCount: 17,
    commentsCount: 59,
    category: 'Creative Marketing',
    level: 'Beginner',
    isFeatured: true,
    description: 'Turn your concept into a thriving business. Validate product-market fit, build an MVP, attract early adopters, and secure funding.',
    sneakPeeks: [],
    keyPoints: ['Lean Validation Methods', 'Customer Discovery', 'Pitch Deck Architecture'],
    modules: [],
    reviews: []
  },
  {
    id: 'creative-marketing-foundations',
    title: 'Creative Marketing Foundations',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      role: 'Growth Specialist'
    },
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 142,
    studentsCount: 2200,
    price: 25,
    duration: '3 hours 10 mins',
    lessonsCount: 22,
    commentsCount: 64,
    category: 'Marketing',
    level: 'Beginner',
    description: 'Master viral storytelling, organic brand positioning, and social conversion funnels tailored for creative entrepreneurs.',
    sneakPeeks: [],
    keyPoints: ['Story Brand Architecture', 'Organic Traffic Channels', 'Campaign Optimization'],
    modules: [],
    reviews: []
  },
  {
    id: 'fullstack-web-development',
    title: 'Fullstack Web App Development',
    instructor: {
      id: 'purepearl-studio',
      name: 'purepearl studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      role: 'Full Stack Engineer'
    },
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 230,
    studentsCount: 4100,
    price: 30,
    duration: '18 hours 40 mins',
    lessonsCount: 68,
    commentsCount: 112,
    category: 'Development',
    level: 'Intermediate',
    description: 'Build robust, full-stack web applications using React, Node.js, TypeScript, and modern relational database architectures.',
    sneakPeeks: [],
    keyPoints: ['React & TypeScript Architecture', 'REST & GraphQL APIs', 'Deployment & CI/CD'],
    modules: [],
    reviews: []
  }
];

export const learningPaths = [
  { id: 'design', name: 'Design', count: '142 Courses', icon: 'pen' },
  { id: 'development', name: 'Development', count: '210 Courses', icon: 'code' },
  { id: 'it-software', name: 'IT & Software', count: '98 Courses', icon: 'server' },
  { id: 'business', name: 'Business', count: '165 Courses', icon: 'briefcase' },
  { id: 'marketing', name: 'Marketing', count: '115 Courses', icon: 'megaphone' },
  { id: 'photography', name: 'Photography', count: '74 Courses', icon: 'camera' },
];

export const categoryPills = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  '+ More'
];

export const testimonials = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    id: 'james-l',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    id: 'alex-b',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
];

export const creatorProfile = {
  id: 'purepearl-studio',
  name: 'PurePearl Studio',
  tag: 'Creator',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  role: 'Passionate UI/UX, Web designer',
  bio: "Welcome to the creative world of PurePearl Studio! Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Step into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  productsCount: 3,
  followersCount: 12,
  isFollowing: false,
  courses: ['build-digital-asset', 'learn-figma-from-basic', 'the-power-of-big-data']
};
