# 🚀 ByteSpace — Online Learning & Course Platform

<div align="center">

![ByteSpace Banner](public/logo.svg)

### Modern, High-Performance E-Learning Platform Built with Pixel-Perfect Figma Fidelity

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8%2F6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Explore Features](#-features--pages) • [Live Routes](#-application-routes) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Design Fidelity](#-figma-design-fidelity)

</div>

---

## 📖 Overview

**ByteSpace** is a comprehensive, production-ready frontend web application for an online course and learning platform. Built from the ground up using **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, the application faithfully translates complex Figma designs into responsive, high-performance, and accessible web experiences.

From fluid hero animations and 3D geometric vector ornaments to full authentication flows and interactive course curriculums, ByteSpace offers an intuitive and modern educational experience.

---

## ✨ Features & Pages

### 🏠 1. Landing Experience (`/` or `/home`)
- **Interactive Header & Navigation**:
  - Sticky glassmorphic navigation bar with brand logo, categories dropdown, active search input, and authentication buttons (`Sign In` / `Sign Up`).
  - Shopping bag icon with clean hover transitions.
- **Dynamic Hero Section**:
  - Catchy value proposition with high-contrast typography and gradient accents.
  - Floating 3D vector ornaments and authentic Figma-rendered course card showcases.
  - Social proof badges: 5-star student review ratings, enrolled student count, and interactive course search bar.
- **Trusted Partners Banner**:
  - High-visibility logos of partner universities and enterprise technology leaders.
- **Popular Categories Grid**:
  - Curated course category cards (UI/UX Design, Development, Business, Marketing, etc.) with custom vector iconography and active course tallies.
- **Featured Learning Paths**:
  - Interactive category filtering tabs (*All Programmes, UI/UX Design, Development, Data Science, etc.*).
  - Rich course cards featuring instructor avatars, lesson counts, ratings, duration, pricing, and dynamic hover elevation.
- **Student Growth & Impact Section**:
  - Statistics showing student transformation, course completion rates, and learning milestones.
- **Student Testimonials Carousel**:
  - Authentic student reviews with avatars, star ratings, and detailed testimonials.
- **High-Conversion CTA Banner**:
  - Vibrant call-to-action with 3D decorative shapes, newsletter email capture, and instant enrollment triggers.
- **Comprehensive Footer**:
  - Organized column navigation (Programs, Company, Support, Legal), social links, and copyright info.

---

### 🔍 2. Course Catalog & Search (`/courses`)
- Real-time search by keyword via URL query parameter (e.g. `/courses?q=react`).
- Category and skill level filter pills (*Beginner, Intermediate, Advanced*).
- Grid view with empty state fallbacks for queries yielding no results.

---

### 📖 3. Deep Course Details (`/courses/:courseId`)
- **Hero & Video Preview**: Course title, instructor details, duration, rating, price tag, and video trailer modal.
- **Tabbed Syllabus Navigation**:
  - **About**: Comprehensive course overview, prerequisites, and learning objectives.
  - **Lessons**: Expandable curriculum accordion showing module breakdowns, individual lesson titles, and time durations.
  - **Reviews**: Aggregated student ratings, review submission, and verified student feedback.
- **Sticky Purchase Card**: Quick enrollment button with instant pricing and guarantee notices.

---

### 👤 4. Creator / Instructor Profiles (`/creator/:creatorId`)
- Instructor biography, credentials, follower count, and total courses published.
- Interactive "Follow" button state toggle.
- Showcase of all courses authored by the instructor.

---

### 🔐 5. Authentication Suite (`/login` & `/register`)
- **Split-Screen Layout**:
  - **Showcase Panel (`AuthVisualShowcase`)**: Layered 3D visual graphics featuring an elevated 3D white zigzag vector ornament (`z-40`), course badge cards, and a neon lime (*Happy Students*) badge.
  - **Interactive Form Panel**:
    - **Sign In (`/login`)**: Email and password fields with show/hide password toggle, "Remember me" checkbox, and "Forgot password?" link.
    - **Sign Up (`/register`)**: Full name, email, password, and terms agreement check.
    - **Monochrome Social Login**: Facebook and Google sign-in buttons styled in solid dark monochrome (`#242528`), exactly conforming to Figma specs (Node `50:357` & `50:361`).
- **Responsive Desktop Auto-Fit**:
  - Custom `.auth-zoom-container` CSS ensures the full authentication view fits 100% within laptop viewports (e.g. 1536×730) with **zero vertical scroll**.
- **Quick Navigation**:
  - Glassmorphic **"Back to Home"** pill button and clickable **ByteSpace** brand logo.

---

## 🧭 Application Routes

ByteSpace features a lightweight, zero-dependency client-side routing system powered by the **HTML5 History API** (`window.history.pushState` and `popstate`), ensuring bookmarkable URLs and natural browser forward/back button navigation.

| Route | Component | Description |
|---|---|---|
| `/` or `/home` | `HomePage` | Primary landing page with all showcase sections |
| `/courses` | `SearchCoursesPage` | Course directory with search filters and category selectors |
| `/courses/:courseId` | `CourseDetailsPage` | Comprehensive course syllabus, tabs, and enrollment |
| `/creator/:creatorId` | `CreatorProfilePage` | Instructor bio, followers, and authored courses |
| `/login` or `/signin` | `LoginPage` | User login with social authentication & auto-fit zoom |
| `/register` or `/signup` | `RegisterPage` | Account registration with form validation |
| `/404` | `NotFoundPage` | Friendly error page with home redirect CTA |

---

## 🛠 Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Frontend Core** | [React 19](https://react.dev/) | Utilizing React 19 hooks and functional component architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict typing across domain models, props, and API interfaces |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling with `@tailwindcss/vite` |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Blazing fast HMR and optimized production bundling |
| **Iconography** | [Lucide React](https://lucide.dev/) + Custom SVGs | Crisp vector icons and extracted Figma SVG ornaments |
| **Code Quality** | ESLint 10 + TypeScript-ESLint | Automated code consistency and lint rules |

---

## 📁 Project Structure

```text
assignment/
├── public/                     # Static assets, SVG vectors, and favicon
│   ├── favicon.svg             # Official ByteSpace brand SVG favicon
│   ├── logo.svg                # ByteSpace platform logo
│   ├── auth/                   # Authentication 3D graphics & assets
│   ├── hero/                   # Hero section imagery and ornaments
│   └── cta/                    # CTA 3D decorative shapes
├── src/
│   ├── assets/                 # Local image and graphics assets
│   ├── components/             # Reusable UI sections & elements
│   │   ├── AuthHeader.tsx              # Clean auth navbar with "Back to Home" pill
│   │   ├── AuthVisualShowcase.tsx      # Layered 3D visual showcase with z-40 ornament
│   │   ├── BrandPartnersSection.tsx    # Partner universities & companies banner
│   │   ├── CourseCard.tsx              # Reusable course card component
│   │   ├── CTABannerSection.tsx        # High-impact CTA banner with newsletter form
│   │   ├── FeaturedCoursesSection.tsx  # Tabbed popular courses grid
│   │   ├── Footer.tsx                  # Footer with links & social handles
│   │   ├── GeometricDecorations.tsx    # 3D vector geometry elements
│   │   ├── HeroSection.tsx             # Interactive hero banner with floating elements
│   │   ├── LearningPathsSection.tsx    # Interactive learning pathways
│   │   ├── Navbar.tsx                  # Main platform navigation bar
│   │   ├── ProfessionalGrowthSection.tsx # Metrics & career growth benefits
│   │   └── TestimonialsSection.tsx     # Student testimonials slider/grid
│   ├── data/
│   │   └── coursesData.ts      # Comprehensive mock course & instructor catalog
│   ├── pages/                  # Page-level route views
│   │   ├── CourseDetailsPage.tsx   # Detailed course syllabus and video previews
│   │   ├── CreatorProfilePage.tsx  # Instructor profiles & courses
│   │   ├── HomePage.tsx            # Main landing view
│   │   ├── LoginPage.tsx           # Sign In screen
│   │   ├── NotFoundPage.tsx        # 404 handler screen
│   │   ├── RegisterPage.tsx        # Sign Up screen
│   │   └── SearchCoursesPage.tsx   # Search & filter directory
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces (Course, Module, Creator, etc.)
│   ├── App.tsx                 # Root component & HTML5 History API router
│   ├── index.css               # Global styles, fonts, and zoom utilities
│   └── main.tsx                # React application entry point
├── scripts/                    # Asset extraction & design inspection tooling
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **npm**, **pnpm**, or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/M-U-Rony/assignment.git
cd assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
This runs TypeScript type checking (`tsc -b`) followed by Vite's production bundler. The compiled output is generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint Code
```bash
npm run lint
```

---

## 🎨 Figma Design Fidelity

Special care was taken to reproduce the Figma designs with absolute fidelity:
1. **3D Vector Layering**: The white zigzag vector ornament (`Lime_Squiggle.svg` / `vector_3d`) in the authentication screens is precisely positioned and elevated at `z-40` so it floats gracefully over both the white course card and the neon lime (*Happy Students*) badge.
2. **Monochrome Social Buttons**: Both Facebook and Google sign-in buttons use solid dark monochrome icons (`#242528`), matching Figma design node `50:357` and `50:361`.
3. **Viewport Adaptation**: The desktop view uses an intelligent scale container (`.auth-zoom-container`) so authentication pages comfortably fit 100% of standard laptop screens (1366×768, 1536×864, 1920×1080) without generating unnecessary vertical scrollbars.
4. **Official Branding**: The default Vite favicon has been replaced with the official ByteSpace royal blue squircle SVG app logo (`public/favicon.svg`).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
