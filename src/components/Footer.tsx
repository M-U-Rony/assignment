import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Newsletter + 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Newsletter Column */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-7 h-7 rounded-md bg-[#D4FF00] flex items-center justify-center font-bold text-blue-900 text-base">
                b
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Byte<span className="text-slate-800">Space</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194BFB] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  {subscribed ? 'Subscribed!' : 'Search'}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-600 mt-2 font-medium">
                  ✓ Thank you for subscribing to ByteSpace updates!
                </p>
              )}
            </form>

            <p className="text-xs text-slate-400 max-w-sm">
              By subscribing you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 mb-2">Explore</h4>
              <ul className="space-y-2.5">
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Featured Courses</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Featured Categories</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Business</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">IT & Software</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Design</button></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 mb-2">Categories</h4>
              <ul className="space-y-2.5">
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Development</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Marketing</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Photography</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Finance</button></li>
                <li><button onClick={() => onNavigate('courses')} className="hover:text-[#194BFB] transition-colors">Sport</button></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 mb-2">Platform</h4>
              <ul className="space-y-2.5">
                <li><button onClick={() => onNavigate('creator')} className="hover:text-[#194BFB] transition-colors">Become a Creator</button></li>
                <li><button onClick={() => onNavigate('creator')} className="hover:text-[#194BFB] transition-colors">Affiliate Program</button></li>
                <li><button onClick={() => onNavigate('404')} className="hover:text-[#194BFB] transition-colors">Contact</button></li>
                <li><button onClick={() => onNavigate('404')} className="hover:text-[#194BFB] transition-colors">Help</button></li>
                <li><button onClick={() => onNavigate('404')} className="hover:text-[#194BFB] transition-colors">About</button></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('404')} className="hover:text-slate-600 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('404')} className="hover:text-slate-600 transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('404')} className="hover:text-slate-600 transition-colors">Cookies Settings</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
