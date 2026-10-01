import React, { useState } from 'react';
import { AuthHeader } from '../components/AuthHeader';
import { AuthVisualShowcase } from '../components/AuthVisualShowcase';

interface RegisterPageProps {
  onNavigate: (route: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#003BE2] flex flex-col overflow-x-hidden">
      
      {/* 1. Background 120px Grid Overlay (Figma: Group 4 49:156) */}
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

      {/* 2. Top Header (Figma: Header_Frame 47:501) */}
      <AuthHeader onNavigate={onNavigate} />

      {/* 3. Main 1440px Centered Canvas Content */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[122px] pb-16 flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Visual Showcase (Figma: Text 47:498 + Group 7 15254:194) */}
        <div className="w-full lg:w-[580px] shrink-0 pt-2 lg:pt-0">
          <AuthVisualShowcase
            title="Sign up and come in"
            subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Column: Register Card (Figma: Register_Frame 47:362) */}
        <div className="w-full max-w-[579px] bg-white rounded-[24px] p-6 sm:p-10 lg:px-[48px] lg:py-[40px] xl:px-[63px] xl:py-[52px] shadow-2xl flex flex-col justify-between shrink-0 min-h-[620px] xl:min-h-[740px]">
          
          <div>
            {/* Step & Heading */}
            <div className="mb-6 xl:mb-8">
              <span className="font-['Satoshi'] font-normal text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28.8px] text-[#003BE2] block">
                Create an Account
              </span>
              <h1 className="font-['Poppins'] font-semibold text-[30px] sm:text-[38px] xl:text-[44px] leading-[36px] sm:leading-[46px] xl:leading-[52.8px] text-[#242528] mt-1">
                Welcome to ByteSpace
              </h1>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-[16px] p-8 text-center space-y-3 my-8">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-['Poppins'] font-semibold text-emerald-900 text-xl">Account Created!</h3>
                <p className="font-['Satoshi'] text-emerald-700 text-sm">
                  Welcome to ByteSpace. Redirecting to home...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-6">
                
                {/* Full Name Field */}
                <div>
                  <label className="block font-['Satoshi'] font-medium text-[14px] leading-[16.8px] text-[#242528] mb-1.5 xl:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jamie Davis"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-[48px] xl:h-[52px] rounded-[12px] border border-[#E5E6E8] px-5 xl:px-6 text-[16px] xl:text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-all bg-white font-['Satoshi']"
                  />
                </div>

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

                {/* Continue CTA (Figma: Auto Layout Horizontal 47:381 - 123x46, right-aligned) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-[123px] h-[44px] xl:h-[46px] rounded-full bg-[#D4FB20] hover:bg-[#c2eb00] text-[#242528] font-['Satoshi'] font-medium text-[16px] xl:text-[18px] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Continue
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Footer Toggle (Figma: Auto Layout Horizontal 47:383) */}
          <div className="pt-6 xl:pt-8 text-center font-['Satoshi'] font-normal text-[15px] xl:text-[16px] leading-[25.6px] text-[#4B4C53]">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('login')}
              className="text-[#003BE2] hover:underline cursor-pointer font-normal"
            >
              Login
            </button>
          </div>

        </div>

      </main>

    </div>
  );
};
