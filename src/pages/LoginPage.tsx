import React, { useState } from 'react';
import { Torus3D, LimeSquiggle, LimePill3D } from '../components/GeometricDecorations';

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

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row bg-[#F8F9FC]">
      
      {/* LEFT COLUMN: BLUE BRANDING */}
      <div className="w-full lg:w-1/2 bg-[#194BFB] bg-grid-pattern p-8 sm:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden text-white min-h-[480px]">
        {/* Floating 3D decorations */}
        <div className="absolute top-10 right-14 pointer-events-none opacity-85">
          <LimeSquiggle className="w-20 h-20" />
        </div>
        <div className="absolute bottom-12 left-10 pointer-events-none opacity-85">
          <Torus3D className="w-20 h-20" />
        </div>
        <div className="absolute top-1/2 right-6 pointer-events-none opacity-80">
          <LimePill3D className="w-16 h-16" />
        </div>

        {/* Top Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer z-10 w-fit"
        >
          <div className="w-8 h-8 rounded-lg bg-[#D4FF00] flex items-center justify-center font-extrabold text-blue-900 text-lg">
            b
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">ByteSpace</span>
        </div>

        {/* Middle Content */}
        <div className="my-auto py-8 max-w-md z-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Sign in with ease
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* Floating Course Preview */}
          <div className="pt-6 relative">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 text-slate-900 max-w-xs">
              <div className="aspect-[16/9] rounded-xl bg-slate-900 overflow-hidden mb-2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80" 
                  alt="Big Data Course"
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-xs font-bold">the Power of Big Data</p>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                <span>17 Lessons • 2 hours 16 mins</span>
                <span className="font-bold text-amber-500">4.5 ★</span>
              </div>
            </div>

            {/* Happy Students widget */}
            <div className="absolute -bottom-4 right-2 bg-white rounded-xl p-2.5 shadow-xl border border-slate-100 flex items-center gap-2">
              <div className="flex -space-x-1">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full object-cover" alt="" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full object-cover" alt="" />
              </div>
              <span className="text-[11px] font-bold text-slate-800">Happy Students 2K+</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <p className="text-xs text-blue-200/80 z-10">© 2023 ByteSpace. All rights reserved.</p>
      </div>

      {/* RIGHT COLUMN: LOGIN FORM */}
      <div className="w-full lg:w-1/2 p-6 sm:p-14 lg:p-20 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Sign In
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Welcome Back
            </h1>
          </div>

          {signedIn ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-2">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-green-900 text-base">Signed In!</h3>
              <p className="text-xs text-green-700">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#194BFB] transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <button type="button" className="text-xs text-[#194BFB] hover:underline">
                    Forgot Password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#194BFB] transition-all"
                />
              </div>

              {/* Sign In CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-slate-900 font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer mt-2"
              >
                Sign In
              </button>

              {/* Or Divider */}
              <div className="relative py-2 flex items-center justify-center">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-xs text-slate-400 absolute">or</span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex items-center justify-center gap-4 pt-1">
                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => { setSignedIn(true); setTimeout(() => onNavigate('home'), 1000); }}
                  className="w-11 h-11 rounded-full border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm font-bold text-sm cursor-pointer"
                  title="Sign in with Facebook"
                >
                  f
                </button>
                {/* Google */}
                <button
                  type="button"
                  onClick={() => { setSignedIn(true); setTimeout(() => onNavigate('home'), 1000); }}
                  className="w-11 h-11 rounded-full border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors shadow-sm font-bold text-sm cursor-pointer"
                  title="Sign in with Google"
                >
                  G
                </button>
              </div>

            </form>
          )}

          {/* Footer toggle */}
          <div className="pt-2 text-center text-xs text-slate-500">
            New user?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-[#194BFB] font-bold hover:underline cursor-pointer"
            >
              Create an account
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
