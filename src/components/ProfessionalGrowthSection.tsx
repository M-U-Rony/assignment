import React from 'react';
import { Star } from 'lucide-react';

interface ProfessionalGrowthSectionProps {
  onNavigate?: (route: string, param?: string) => void;
}

export const ProfessionalGrowthSection: React.FC<ProfessionalGrowthSectionProps> = ({
  onNavigate
}) => {
  return (
    <section 
      aria-label="Professional Growth and Course Creation"
      className="relative w-full bg-white overflow-hidden py-16 lg:py-[100px]"
    >
      {/* Ambient background glows matching Figma Group 5 & Ellipse 12 */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#003be2]/5 blur-[120px]"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-[#d4fb20]/15 blur-[140px]"
      />
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -right-40 w-[600px] h-[600px] rounded-full bg-[#003be2]/5 blur-[140px]"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-[121px] flex flex-col gap-20 lg:gap-[100px]">
        
        {/* =========================================================
            ROW 1: Frame 13 (Node 34:1157, w=1258, h=552)
            "Your Path to Professional Growth Starts Here!"
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Block (w=580) */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-[580px]">
            <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#242528] leading-[40px] sm:leading-[48px] lg:leading-[52.8px] tracking-[-0.44px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4b4c53] leading-[26px] sm:leading-[28.8px] mt-5">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics (12K Students, 70+ Courses, 16 Creators) */}
            <div className="mt-8 sm:mt-10 pt-6 flex items-center gap-8 sm:gap-12 lg:gap-[50px] border-t border-[#ced0d3]/40">
              <div className="flex flex-col">
                <span className="font-heading font-medium text-[30px] sm:text-[36px] text-[#003be2] leading-[44px]">
                  12K
                </span>
                <span className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4b4c53] mt-1 leading-[28.8px]">
                  Students
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-medium text-[30px] sm:text-[36px] text-[#003be2] leading-[44px]">
                  70+
                </span>
                <span className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4b4c53] mt-1 leading-[28.8px]">
                  Courses
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-medium text-[30px] sm:text-[36px] text-[#003be2] leading-[44px]">
                  16
                </span>
                <span className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4b4c53] mt-1 leading-[28.8px]">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (Frame 11, w=621, h=552) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end">
            
            {/* Desktop exact 621x552 matching Figma Frame 11 (Node 34:1155) */}
            <div className="hidden lg:block relative w-[621px] h-[552px] shrink-0">
              
              {/* 1. 3D Lime Zigzag Ornament (Node 34:981: relPos 406, 67, size 215x215) */}
              <img
                src="/cta/cta_zigzag_bottom_right_lime.png"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none select-none z-0"
                style={{
                  left: '406px',
                  top: '67px',
                  width: '215px',
                  height: '215px'
                }}
              />

              {/* 2. Course Card Preview (Node 34:1055: relPos 0, 0, size 373x384, z-index 10) */}
              <div 
                onClick={() => onNavigate?.('courses')}
                className="absolute z-10 w-[373px] h-[384px] bg-white rounded-[24px] p-4 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                style={{
                  left: '0px',
                  top: '0px'
                }}
              >
                {/* Thumbnail (341x195) */}
                <div className="relative w-[341px] h-[195px] rounded-[16px] overflow-hidden bg-slate-100">
                  <img
                    src="/figma-assets/93ad9f9e6bdb3c7f3c478820624ee19ad7320072_frame.png"
                    alt="Learn Figma from Basic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-sans font-medium text-[#4f4f4f]">
                    <span className="bg-[#f6f6f6]/95 backdrop-blur-sm px-2.5 py-1.5 rounded-[12px]">17 Lessons</span>
                    <span className="bg-[#f6f6f6]/95 backdrop-blur-sm px-2.5 py-1.5 rounded-[12px]">2 hours 16 mins</span>
                    <span className="bg-[#f6f6f6]/95 backdrop-blur-sm px-2.5 py-1.5 rounded-[12px]">59 Comments</span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="mt-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-semibold text-[18px] text-black leading-snug">
                        Learn Figma from Basic
                      </h3>
                      <p className="font-sans font-normal text-[12px] text-[#4f4f4f] mt-0.5">
                        by purepearl studio
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="font-sans font-medium text-[15px] text-[#4f4f4f]">4.5</span>
                      <Star className="w-4 h-4 fill-[#d4fb20] text-[#d4fb20]" />
                    </div>
                  </div>

                  {/* Level + Avatars */}
                  <div className="flex items-center justify-between mt-3.5">
                    <span className="px-3 py-1 rounded-full bg-[#f5f5f6] text-[#4b4c53] font-sans font-medium text-[11px] flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#4b4c53]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 17h4v4H2v-4zm6-6h4v10H8V11zm6-6h4v16h-4V5zm6-4h4v20h-4V1z"/>
                      </svg>
                      Beginner
                    </span>
                    
                    {/* Avatar stack */}
                    <div className="flex items-center -space-x-2">
                      <img src="/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src="/figma-assets/3fe559181733e0fb69226caee836e40092facb44_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src="/figma-assets/0577f0e9b7fca2f32639871454da0de95f951709_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <img src="/figma-assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                      <div className="w-8 h-8 rounded-full bg-black text-white text-[10px] font-sans font-medium flex items-center justify-center border-2 border-white">
                        26+
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading font-semibold text-[18px] text-[#300b6a]">$25</span>
                    <span className="font-sans font-normal text-[12px] text-[#4f4f4f]">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* 3. Main Portrait: Student (Node 34:971: relPos 0, 12, size 577x540, z-index 20) */}
              <div 
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  left: '0px',
                  top: '12px',
                  width: '577px',
                  height: '540px'
                }}
              >
                <img
                  src="/figma-assets/29a52a24e51266edcd7d57d73392ee5fc4833220_image.png"
                  alt="Student with laptop"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 4. Learning Progress Card (Node 34:1031: relPos 345, 213, size 232x138, z-index 30) */}
              <div 
                className="absolute z-30 w-[232px] h-[138px] bg-white rounded-[24px] p-5 shadow-2xl border border-slate-100"
                style={{
                  left: '345px',
                  top: '213px'
                }}
              >
                <span className="font-sans font-medium text-[14px] text-[#242528] block">
                  Learning Progress
                </span>
                <span className="font-heading font-semibold text-[48px] text-[#242528] leading-[58px] block mt-1">
                  55%
                </span>
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-[#f6f6f6] mt-2 overflow-hidden">
                  <div className="h-full bg-[#d4fb20] rounded-full w-[56%]" />
                </div>
              </div>

            </div>

            {/* Mobile & Tablet Responsive Fallback */}
            <div className="block lg:hidden relative w-full max-w-[420px] mx-auto min-h-[480px]">
              <div className="relative z-10 w-full rounded-[24px] overflow-hidden">
                <img
                  src="/figma-assets/29a52a24e51266edcd7d57d73392ee5fc4833220_image.png"
                  alt="Student with laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute right-0 top-1/4 z-20 w-[190px] bg-white rounded-[20px] p-4 shadow-xl border border-slate-100">
                <span className="font-sans font-medium text-[13px] text-[#242528] block">Learning Progress</span>
                <span className="font-heading font-semibold text-[36px] text-[#242528] block mt-1">55%</span>
                <div className="w-full h-2 rounded-full bg-[#f6f6f6] mt-2 overflow-hidden">
                  <div className="h-full bg-[#d4fb20] rounded-full w-[56%]" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================
            ROW 2: Frame 14 (Node 34:1158, w=1200, h=596)
            "Create & Manage Courses Easily."
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center justify-between">
          
          {/* Left Visual Composition (Frame 12, w=541, h=596) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative w-full flex items-center justify-center lg:justify-start">
            
            {/* Desktop exact 541x596 matching Figma Frame 12 (Node 34:1156) */}
            <div className="hidden lg:block relative w-[541px] h-[596px] shrink-0">
              
              {/* 1. 3D Lime Coil Ornament (Node 34:1006: relPos 305, 114, size 215x215) */}
              <img
                src="/cta/cta_coil_top_left_lime.png"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none select-none z-0"
                style={{
                  left: '305px',
                  top: '114px',
                  width: '215px',
                  height: '215px'
                }}
              />

              {/* 2. Main Portrait: Creator (Node 34:1011: relPos 28, 0, size 435x596) */}
              <div 
                className="absolute z-10 pointer-events-none select-none"
                style={{
                  left: '28px',
                  top: '0px',
                  width: '435px',
                  height: '596px'
                }}
              >
                <img
                  src="/figma-assets/0d6596fb1df66aaf843ee85722f439fada233946_image.png"
                  alt="Creator with laptop"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 3. Total Revenue Card (Node 34:987: relPos 0, 44, size 232x119) */}
              <div 
                className="absolute z-20 w-[232px] h-[119px] bg-[#003be2] text-white rounded-[24px] p-4 shadow-2xl flex flex-col justify-between"
                style={{
                  left: '0px',
                  top: '44px'
                }}
              >
                <div className="flex items-center justify-between text-[#f5f5f6]">
                  <span className="font-sans font-medium text-[15px]">Total Revenue</span>
                  <span className="font-sans font-normal text-[10px] opacity-80">July 1-28</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-heading font-semibold text-[24px] text-[#f5f5f6]">
                    $120.29
                  </span>
                  <span className="px-2 py-0.5 rounded-[12px] bg-[#cbfc01] text-[#242528] font-sans font-bold text-[10px]">
                    +12$
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-white mt-1 overflow-hidden">
                  <div className="h-full bg-[#d4fb20] rounded-full w-[56%]" />
                </div>
              </div>

              {/* 4. Year to Date Card (Node 34:998: relPos 0, 194, size 134x135) */}
              <div 
                className="absolute z-20 w-[134px] h-[135px] bg-[#003be2] text-white rounded-[24px] p-4 shadow-2xl flex flex-col justify-between"
                style={{
                  left: '0px',
                  top: '194px'
                }}
              >
                <div className="text-[#f5f5f6]">
                  <span className="font-sans font-medium text-[14px] block leading-tight">Year to Date</span>
                  <span className="font-sans font-normal text-[10px] opacity-80 block mt-0.5">2023</span>
                </div>
                <span className="font-heading font-semibold text-[19px] text-[#f5f5f6] block">
                  $1,200.38
                </span>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-[12px] bg-[#cbfc01] text-[#242528] font-sans font-bold text-[10px]">
                    +12$
                  </span>
                </div>
              </div>

              {/* 5. Happy Students Card (Node 34:1038: relPos 283, 413, size 258x123) */}
              <div 
                className="absolute z-20 w-[258px] h-[123px] bg-white rounded-[24px] p-4 shadow-2xl border border-slate-100 flex flex-col justify-between"
                style={{
                  left: '283px',
                  top: '413px'
                }}
              >
                <div>
                  <span className="font-sans font-medium text-[16px] text-[#242528] block">
                    Happy Students
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="font-sans font-normal text-[11px] text-[#82868e]">4.5 (240)</span>
                    <Star className="w-3.5 h-3.5 fill-[#d4fb20] text-[#d4fb20]" />
                  </div>
                </div>

                {/* 7 Avatars + 2K+ counter */}
                <div className="flex items-center -space-x-2 mt-1">
                  <img src="/figma-assets/9ef8cb329b949267cc8214b6727067c4a13af4b4_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/83fb3e04056cc892636460bee5791aa3f243854c_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/f3cf29a8fed39589ceb38423e65b26b8d6c93123_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/5824acacb3b76175bc84084ec18597109498f96d_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/7fdccc783264eedc4fb989984eecbc4058a219f2_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="/figma-assets/1e078348a54489bfd231d82fe1944770883c8d80_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-[#d4fb20] text-[#242528] text-[11px] font-sans font-bold flex items-center justify-center border-2 border-white shrink-0">
                    2K+
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile & Tablet Fallback */}
            <div className="block lg:hidden relative w-full max-w-[380px] mx-auto min-h-[460px]">
              <div className="relative z-10 w-full rounded-[24px] overflow-hidden">
                <img
                  src="/figma-assets/0d6596fb1df66aaf843ee85722f439fada233946_image.png"
                  alt="Creator with laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

          {/* Right Text Block (w=580) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center max-w-[580px]">
            <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-[#242528] leading-[40px] sm:leading-[48px] lg:leading-[52.8px] tracking-[-0.44px]">
              Create & Manage Courses Easily.
            </h2>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4b4c53] leading-[26px] sm:leading-[28px] mt-5">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  {/* Google Material Symbol check_circle in #003BE2 */}
                  <div className="w-6 h-6 rounded-full bg-[#003be2] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-[16px] sm:text-[18px] text-[#242528] leading-[21.6px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
