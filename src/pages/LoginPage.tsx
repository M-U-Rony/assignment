import React, { useState } from 'react';
import { AuthHeader } from '../components/AuthHeader';
import { AuthVisualShowcase } from '../components/AuthVisualShowcase';

interface LoginPageProps {
  onNavigate: (route: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  const handleSocialLogin = () => {
    setSignedIn(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#003BE2] flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Background 120px Grid Overlay (Figma: Group 4 49:196) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}
      />

      {/* 2. Top Header (Figma: Header_Frame 49:247) */}
      <AuthHeader onNavigate={onNavigate} />

      {/* 3. Main 1440px Centered Canvas Content */}
      <main className="auth-zoom-container relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[122px] pb-6 lg:pb-10 flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-8">
        
        {/* Left Column: Visual Showcase (Figma: Text 49:244 + Group 8 15254:195) */}
        <div className="w-full lg:w-[580px] shrink-0 pt-1 lg:pt-0">
          <AuthVisualShowcase
            title="Sign in with ease"
            subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Column: Login Card (Figma: Register_Frame 49:220) */}
        <div className="w-full max-w-[579px] bg-white rounded-[24px] p-6 sm:p-8 lg:px-[40px] lg:py-[36px] xl:px-[48px] xl:py-[42px] shadow-2xl flex flex-col justify-between shrink-0 min-h-[540px] xl:min-h-[600px]">
          
          <div>
            {/* Step & Heading */}
            <div className="mb-6 xl:mb-8">
              <span className="font-['Satoshi'] font-normal text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28.8px] text-[#003BE2] block">
                Sign In
              </span>
              <h1 className="font-['Poppins'] font-semibold text-[30px] sm:text-[38px] xl:text-[44px] leading-[36px] sm:leading-[46px] xl:leading-[52.8px] text-[#242528] mt-1">
                Welcome Back
              </h1>
            </div>

            {signedIn ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-[16px] p-8 text-center space-y-3 my-8">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-['Poppins'] font-semibold text-emerald-900 text-xl">Signed In!</h3>
                <p className="font-['Satoshi'] text-emerald-700 text-sm">
                  Welcome back. Redirecting to home...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-6">
                
                {/* Email Field */}
                <div>
                  <label className="block font-['Satoshi'] font-medium text-[14px] leading-[16.8px] text-[#242528] mb-1.5 xl:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[48px] xl:h-[52px] rounded-[12px] border border-[#E5E6E8] px-5 xl:px-6 text-[16px] xl:text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all bg-white font-['Satoshi']"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block font-['Satoshi'] font-medium text-[14px] leading-[16.8px] text-[#242528] mb-1.5 xl:mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[48px] xl:h-[52px] rounded-[12px] border border-[#E5E6E8] px-5 xl:px-6 text-[16px] xl:text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all bg-white font-['Satoshi']"
                  />
                </div>

                {/* Sign In CTA (Figma: Auto Layout Horizontal 49:239 - 104x46, right-aligned) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-[104px] h-[44px] xl:h-[46px] rounded-full bg-[#D4FB20] hover:bg-[#c2eb00] text-[#242528] font-['Satoshi'] font-medium text-[16px] xl:text-[18px] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Sign In
                  </button>
                </div>

              </form>
            )}

            {!signedIn && (
              <div className="pt-5 xl:pt-8">
                {/* Or Divider (Figma: Frame 18 50:362 / 50:349) */}
                <div className="flex items-center gap-4 mb-4 xl:mb-6">
                  <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
                  <span className="font-['Satoshi'] font-normal text-[16px] xl:text-[18px] leading-[28.8px] text-[#888888]">
                    or
                  </span>
                  <div className="flex-1 h-[1px] bg-[#D1D1D1]" />
                </div>

                {/* Social Login Buttons (Figma: Auto Layout Horizontal 50:353) */}
                <div className="flex items-center justify-center gap-4">
                  {/* Facebook Button */}
                  <button
                    type="button"
                    onClick={handleSocialLogin}
                    className="w-[64px] h-[64px] xl:w-[72px] xl:h-[72px] rounded-[20px] xl:rounded-[24px] border border-[#D1D1D1] bg-white hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    title="Sign in with Facebook"
                    aria-label="Sign in with Facebook"
                  >
                    <svg className="w-7 h-7 xl:w-8 xl:h-8 fill-current text-[#242528]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    onClick={handleSocialLogin}
                    className="w-[64px] h-[64px] xl:w-[72px] xl:h-[72px] rounded-[20px] xl:rounded-[24px] border border-[#D1D1D1] bg-white hover:bg-slate-50 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    title="Sign in with Google"
                    aria-label="Sign in with Google"
                  >
                    <svg className="w-7 h-7 xl:w-8 xl:h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Toggle (Figma: Auto Layout Horizontal 49:241) */}
          <div className="pt-5 xl:pt-8 text-center font-['Satoshi'] font-normal text-[15px] xl:text-[16px] leading-[25.6px] text-[#888888]">
            New user?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-[#003BE2] hover:underline cursor-pointer font-normal"
            >
              Create an account
            </button>
          </div>

        </div>

      </main>

    </div>
  );
};
