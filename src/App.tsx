import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SearchCoursesPage } from './pages/SearchCoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { CreatorProfilePage } from './pages/CreatorProfilePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string>('build-digital-asset');
  const [courseTab, setCourseTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [cartCount, setCartCount] = useState<number>(1);

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, routeParam, courseTab]);

  const handleNavigate = (route: string, param?: string) => {
    setCurrentRoute(route);
    if (param) {
      if (param === 'about' || param === 'lessons' || param === 'reviews') {
        setCourseTab(param);
      } else {
        setRouteParam(param);
      }
    }
  };

  const isAuthPage = currentRoute === 'login' || currentRoute === 'register';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-slate-900 font-sans selection:bg-[#D4FF00] selection:text-black">

      {/* Main Navbar */}
      <div className={currentRoute === 'home' ? 'absolute top-0 left-0 w-full z-40' : ''}>
        <Navbar
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          cartCount={cartCount}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {currentRoute === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'courses' && (
          <SearchCoursesPage 
            initialQuery={routeParam !== 'build-digital-asset' ? routeParam : ''} 
            onNavigate={handleNavigate} 
          />
        )}

        {currentRoute === 'course-details' && (
          <CourseDetailsPage
            courseId={routeParam}
            initialTab={courseTab}
            onNavigate={handleNavigate}
            onAddToCart={() => setCartCount(prev => prev + 1)}
          />
        )}

        {currentRoute === 'creator' && (
          <CreatorProfilePage
            creatorId={routeParam}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'login' && (
          <LoginPage onNavigate={handleNavigate} />
        )}

        {currentRoute === 'register' && (
          <RegisterPage onNavigate={handleNavigate} />
        )}

        {currentRoute === '404' && (
          <NotFoundPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer (omitted on split login/register pages for clean fullscreen layout) */}
      {!isAuthPage && (
        <Footer onNavigate={handleNavigate} />
      )}

    </div>
  );
}

export default App;
