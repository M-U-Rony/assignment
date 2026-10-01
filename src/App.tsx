import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SearchCoursesPage } from './pages/SearchCoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { CreatorProfilePage } from './pages/CreatorProfilePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { NotFoundPage } from './pages/NotFoundPage';

function getRouteFromPath(path: string): { route: string; param?: string } {
  const cleanPath = path.toLowerCase().split('?')[0].replace(/\/+$/, '') || '/';

  if (cleanPath === '/' || cleanPath === '/home') {
    return { route: 'home' };
  }
  if (cleanPath === '/login' || cleanPath === '/signin') {
    return { route: 'login' };
  }
  if (cleanPath === '/register' || cleanPath === '/signup' || cleanPath === '/join') {
    return { route: 'register' };
  }
  if (cleanPath === '/courses') {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    return { route: 'courses', param: q || undefined };
  }
  if (cleanPath.startsWith('/courses/')) {
    const courseId = cleanPath.replace('/courses/', '');
    return { route: 'course-details', param: courseId };
  }
  if (cleanPath === '/course-details') {
    return { route: 'course-details', param: 'build-digital-asset' };
  }
  if (cleanPath.startsWith('/creator/')) {
    const creatorId = cleanPath.replace('/creator/', '');
    return { route: 'creator', param: creatorId };
  }
  if (cleanPath === '/creator' || cleanPath === '/creators') {
    return { route: 'creator' };
  }
  if (cleanPath === '/404') {
    return { route: '404' };
  }
  return { route: 'home' };
}

function getPathForRoute(route: string, param?: string): string {
  switch (route) {
    case 'home':
      return '/';
    case 'courses':
      return param ? `/courses?q=${encodeURIComponent(param)}` : '/courses';
    case 'course-details':
      return param ? `/courses/${param}` : '/course-details';
    case 'creator':
      return param ? `/creator/${param}` : '/creator';
    case 'login':
      return '/login';
    case 'register':
      return '/register';
    case '404':
      return '/404';
    default:
      return '/';
  }
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return getRouteFromPath(window.location.pathname).route;
  });
  const [routeParam, setRouteParam] = useState<string>(() => {
    return getRouteFromPath(window.location.pathname).param || 'build-digital-asset';
  });
  const [courseTab, setCourseTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [cartCount, setCartCount] = useState<number>(1);

  // Sync with browser back/forward buttons (Popstate)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = getRouteFromPath(window.location.pathname);
      setCurrentRoute(parsed.route);
      if (parsed.param) {
        setRouteParam(parsed.param);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, routeParam, courseTab]);

  const handleNavigate = useCallback((route: string, param?: string) => {
    setCurrentRoute(route);
    if (param) {
      if (param === 'about' || param === 'lessons' || param === 'reviews') {
        setCourseTab(param);
      } else {
        setRouteParam(param);
      }
    }

    const targetPath = getPathForRoute(route, param);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route, param }, '', targetPath);
    }
  }, []);

  const isAuthPage = currentRoute === 'login' || currentRoute === 'register';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-slate-900 font-sans selection:bg-[#D4FF00] selection:text-black">

      {/* Main Navbar */}
      {!isAuthPage && (
        <div className={currentRoute === 'home' ? 'absolute top-0 left-0 w-full z-40' : ''}>
          <Navbar
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            cartCount={cartCount}
          />
        </div>
      )}

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
