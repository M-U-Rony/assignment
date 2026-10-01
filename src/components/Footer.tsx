import React, { useState } from 'react';

interface FooterProps {
  onNavigate?: (route: string) => void;
}

/**
 * Footer — Figma Frame: "Footer" (Node 34:1256)
 *
 * Canvas: 1440x525, background #FFFFFF, top border line
 * Content Frame (34:1257): 1200x406, centered with max-w-[1200px]
 * Left column: Logo, Newsletter input (with #D4FB20 button), Consent text
 * Right columns: Browse (Courses, Categories, Business, IT, Design), Development/Marketing/Photography, Platform links
 * Bottom copyright bar (34:1296): © 2023 ByteSpace. All rights reserved. + Privacy, Terms, Cookies
 */
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
    <footer className="w-full bg-white border-t border-[#e5e6e8] relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 pt-16 pb-12">
        
        {/* Top Navigation Grid (Node 34:1258) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[92px] items-start pb-12">
          
          {/* Left: Newsletter Block (Node 34:1259, w=504) */}
          <div className="lg:col-span-6 flex flex-col max-w-[504px]">
            {/* Logo: ByteSpace Dark Logo (Node 34:1261) */}
            <div 
              onClick={() => onNavigate?.('home')} 
              className="flex items-center cursor-pointer select-none group w-fit"
            >
              <img 
                src="/figma-assets/bytespace_logo_dark.svg" 
                alt="ByteSpace" 
                className="h-[35px] w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </div>

            {/* Subtitle (Node 34:1264) */}
            <p className="font-sans font-normal text-[16px] text-[#242528] leading-[25.6px] mt-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Input + Button Form (Node 34:1266) */}
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <div className="flex-1 h-[52px] bg-white border border-[#ced0d3] rounded-[24px] px-6 flex items-center shadow-sm focus-within:border-[#003be2] transition-colors">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent font-sans text-[16px] text-[#242528] placeholder-[#82868e] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="h-[46px] px-6 bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-sans font-medium text-[18px] leading-[21.6px] rounded-[24px] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0"
              >
                {subscribed ? 'Subscribed!' : 'Search '}
              </button>
            </form>

            {/* Privacy Policy consent (Node 34:1271) */}
            <p className="font-sans font-normal text-[12px] text-[#242528] leading-[19.2px] mt-5">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: Navigation Links (Node 34:1272, w=580, gap=40) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-left">
            
            {/* Column 1: Browse (Node 34:1273) */}
            <div>
              <h4 className="font-sans font-normal text-[16px] text-[#242528] leading-[24px] mb-6">
                Browse
              </h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Featured Courses
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Featured Categories
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Business
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    IT
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Design
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Categories continuation (Node 34:1281) */}
            <div>
              <div className="hidden sm:block h-[24px] mb-6" aria-hidden="true" />
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Marketing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Photography
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Finance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('courses')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Sport
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform (Node 34:1288) */}
            <div>
              <h4 className="font-sans font-normal text-[16px] text-[#242528] leading-[24px] mb-6">
                Platform
              </h4>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => onNavigate?.('register')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Become a Creator
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('home')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Affiliate Program
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('home')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('home')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    Help
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('home')} 
                    className="font-sans font-normal text-[14px] text-[#242528] hover:text-[#003be2] transition-colors cursor-pointer"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar (Node 34:1296) */}
        <div className="pt-6 border-t border-[#e5e6e8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-sans text-[#242528]">
          <p className="leading-[19.2px]">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate?.('home')} 
              className="hover:text-[#003be2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate?.('home')} 
              className="hover:text-[#003be2] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate?.('home')} 
              className="hover:text-[#003be2] transition-colors cursor-pointer"
            >
              Cookies Settings
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
