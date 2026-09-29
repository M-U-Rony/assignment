import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string, param?: string) => void;
  cartCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, cartCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#194BFB] text-white border-b border-blue-600/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#D4FF00] flex items-center justify-center font-extrabold text-blue-900 text-lg transition-transform group-hover:scale-105 shadow-sm">
              b
            </div>
            <span className="text-2xl font-bold tracking-tight text-white flex items-center">
              Byte<span className="text-white/90">Space</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNav('home')}
              className={`text-sm font-medium transition-colors hover:text-[#D4FF00] cursor-pointer ${
                currentRoute === 'home' ? 'text-white font-semibold underline underline-offset-8 decoration-[#D4FF00] decoration-2' : 'text-white/80'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('courses')}
              className={`text-sm font-medium transition-colors hover:text-[#D4FF00] cursor-pointer ${
                currentRoute === 'courses' ? 'text-white font-semibold underline underline-offset-8 decoration-[#D4FF00] decoration-2' : 'text-white/80'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => handleNav('creator')}
              className={`text-sm font-medium transition-colors hover:text-[#D4FF00] cursor-pointer ${
                currentRoute === 'creator' ? 'text-white font-semibold underline underline-offset-8 decoration-[#D4FF00] decoration-2' : 'text-white/80'
              }`}
            >
              Creators
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search shortcut */}
            <button 
              onClick={() => handleNav('courses')} 
              className="p-2 text-white/80 hover:text-white hover:bg-blue-600/40 rounded-full transition-colors cursor-pointer"
              title="Search Courses"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag / Cart */}
            <div className="relative">
              <button 
                onClick={() => onNavigate('course-details', 'build-digital-asset')}
                className="p-2 text-white/80 hover:text-white hover:bg-blue-600/40 rounded-full transition-colors cursor-pointer"
                title="Cart / My Courses"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4FF00] text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Sign In */}
            <button
              onClick={() => handleNav('login')}
              className="text-sm font-semibold text-white/90 hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              Sign In
            </button>

            {/* Join Us */}
            <button
              onClick={() => handleNav('register')}
              className="text-sm font-semibold text-white bg-transparent border border-white/60 hover:bg-white/10 hover:border-white px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
            >
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => handleNav('courses')}
              className="p-2 text-white hover:bg-blue-700/50 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-blue-700/50 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1643df] border-t border-blue-500/30 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <button
            onClick={() => handleNav('home')}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-white hover:bg-blue-700"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('courses')}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-white hover:bg-blue-700"
          >
            Courses
          </button>
          <button
            onClick={() => handleNav('creator')}
            className="block w-full text-left px-3 py-2 rounded-md font-medium text-white hover:bg-blue-700"
          >
            Creators
          </button>
          <div className="pt-4 border-t border-blue-500/30 flex flex-col gap-2">
            <button
              onClick={() => handleNav('login')}
              className="w-full text-center py-2.5 font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNav('register')}
              className="w-full text-center py-2.5 font-semibold text-black bg-[#D4FF00] hover:bg-[#c4ed00] rounded-xl"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
