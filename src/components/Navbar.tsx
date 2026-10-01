import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

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
    <header className="w-full bg-[#003be2] text-[#f5f5f6] relative z-40 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px]">
        <div className="flex items-center justify-between h-[100px] sm:h-[120px]">
          
          {/* 1. Header Logo (from Figma: 1:1787) */}
          <div 
            onClick={() => handleNav('home')} 
            className="flex items-center cursor-pointer select-none group"
            role="button"
            tabIndex={0}
            aria-label="ByteSpace Home"
          >
            <img 
              src="/figma-assets/bytespace_logo.svg" 
              alt="ByteSpace" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </div>

          {/* 2. Navigation Links (from Figma: Header_Nav_Menu 1:1779) */}
          <nav className="hidden md:flex items-center space-x-10 text-base" aria-label="Main Navigation">
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors cursor-pointer hover:text-white font-medium ${
                currentRoute === 'home' ? 'text-white' : 'text-[#f5f5f6]/80'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('courses')}
              className={`transition-colors cursor-pointer hover:text-white font-normal ${
                currentRoute === 'courses' ? 'text-white' : 'text-[#f5f5f6]/80'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => handleNav('creator')}
              className={`transition-colors cursor-pointer hover:text-white font-normal ${
                currentRoute === 'creator' ? 'text-white' : 'text-[#f5f5f6]/80'
              }`}
            >
              Creators
            </button>
          </nav>

          {/* 3. Action Links: Sign In, Join Us, Cart (from Figma: Header_Nav_Menu 1:1783) */}
          <div className="hidden md:flex items-center space-x-8 text-base">
            <button
              onClick={() => handleNav('login')}
              className="font-normal text-[#f5f5f6] hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </button>

            <button
              onClick={() => handleNav('register')}
              className="font-normal text-[#f5f5f6] hover:text-white transition-colors cursor-pointer"
            >
              Join Us
            </button>

            {/* Shopping Bag Icon with Cart Count */}
            <div className="relative flex items-center">
              <button 
                onClick={() => onNavigate('course-details', 'build-digital-asset')}
                className="p-1.5 text-[#f5f5f6] hover:text-white transition-colors cursor-pointer"
                title="Shopping Bag"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#d4fb20] text-[#242528] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="relative flex items-center">
              <button 
                onClick={() => onNavigate('course-details', 'build-digital-asset')}
                className="p-1.5 text-white"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#d4fb20] text-[#242528] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071e5f] border-t border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          <button
            onClick={() => handleNav('home')}
            className="block w-full text-left py-2 font-medium text-white hover:text-[#d4fb20]"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('courses')}
            className="block w-full text-left py-2 text-[#f5f5f6] hover:text-[#d4fb20]"
          >
            Courses
          </button>
          <button
            onClick={() => handleNav('creator')}
            className="block w-full text-left py-2 text-[#f5f5f6] hover:text-[#d4fb20]"
          >
            Creators
          </button>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => handleNav('login')}
              className="w-full text-center py-2.5 font-medium text-[#f5f5f6] hover:text-white bg-white/10 rounded-xl"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNav('register')}
              className="w-full text-center py-2.5 font-semibold text-[#242528] bg-[#d4fb20] hover:bg-[#cbfc01] rounded-xl"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
