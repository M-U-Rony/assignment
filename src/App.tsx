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
import { Layers, ChevronUp, ChevronDown } from 'lucide-react';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string>('build-digital-asset');
  const [courseTab, setCourseTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [cartCount, setCartCount] = useState<number>(1);
  const [showFigmaSwitcher, setShowFigmaSwitcher] = useState<boolean>(true);

  // Scroll to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute, routeParam, courseTab]);

  const handleNavigate = (route: string, param?: string) => {
    setCurrentRoute(route);
    if (param) {
      setRouteParam(param);
    }
  };

  const jumpToFigmaFrame = (route: string, tab?: 'about' | 'lessons' | 'reviews', param?: string) => {
    setCurrentRoute(route);
    if (tab) setCourseTab(tab);
    if (param) setRouteParam(param);
  };

  const isAuthPage = currentRoute === 'login' || currentRoute === 'register';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FC] text-slate-900 font-sans selection:bg-[#D4FF00] selection:text-black">
      
      {/* Figma Frame Quick Switcher for reviewers */}
      <aside 
        aria-label="Figma Frames Quick Switcher"
        className="fixed bottom-4 right-4 z-50 bg-slate-900/95 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl shadow-2xl p-2.5 transition-all text-xs"
      >
        <div className="flex items-center justify-between gap-3 px-2 py-1">
          <div className="flex items-center gap-1.5 font-bold text-[#D4FF00]">
            <Layers className="w-3.5 h-3.5" />
            <span>Figma Artboards</span>
          </div>
          <button 
            onClick={() => setShowFigmaSwitcher(!showFigmaSwitcher)}
            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
            title="Toggle Artboard Switcher"
          >
            {showFigmaSwitcher ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

        {showFigmaSwitcher && (
          <div className="mt-2 pt-2 border-t border-slate-800 grid grid-cols-2 gap-1.5 max-w-xs">
            <button
              onClick={() => jumpToFigmaFrame('home')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'home' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              1. Home
            </button>
            <button
              onClick={() => jumpToFigmaFrame('courses')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'courses' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              2. Search Page
            </button>
            <button
              onClick={() => jumpToFigmaFrame('course-details', 'about')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'course-details' && courseTab === 'about' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              3. Details (About)
            </button>
            <button
              onClick={() => jumpToFigmaFrame('course-details', 'lessons')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'course-details' && courseTab === 'lessons' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              4. Details (Lessons)
            </button>
            <button
              onClick={() => jumpToFigmaFrame('course-details', 'reviews')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'course-details' && courseTab === 'reviews' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              5. Details (Reviews)
            </button>
            <button
              onClick={() => jumpToFigmaFrame('creator')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'creator' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              6. Creator Profile
            </button>
            <button
              onClick={() => jumpToFigmaFrame('register')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'register' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              7. Register
            </button>
            <button
              onClick={() => jumpToFigmaFrame('login')}
              className={`px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === 'login' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              8. Login
            </button>
            <button
              onClick={() => jumpToFigmaFrame('404')}
              className={`col-span-2 px-2.5 py-1.5 rounded-lg text-left font-medium transition-colors ${
                currentRoute === '404' ? 'bg-[#194BFB] text-white font-bold' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              9. 404 Page
            </button>
          </div>
        )}
      </aside>

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
