import React from 'react';

interface AuthVisualShowcaseProps {
  title: string;
  subtitle: string;
}

export const AuthVisualShowcase: React.FC<AuthVisualShowcaseProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col select-none">
      {/* 1. Header Text (Figma: Text 47:498 / 49:244) */}
      <div className="max-w-[475px] mb-5 xl:mb-8">
        <h2 className="font-['Poppins'] font-semibold text-[20px] leading-[24px] text-[#F5F5F6] mb-2 xl:mb-3">
          {title}
        </h2>
        <p className="font-['Satoshi'] font-normal text-[16px] xl:text-[18px] leading-[25px] xl:leading-[28.8px] text-[#F5F5F6]/90">
          {subtitle}
        </p>
      </div>

      {/* 2. Visual Cluster (Figma: Group 7 15254:194 / Group 8 15254:195) */}
      <div className="relative w-[560px] h-[520px] xl:h-[590px] mx-auto lg:mx-0 scale-[0.82] lg:scale-[0.85] xl:scale-100 origin-top-left">
        
        {/* Back Course Card: The Power of Big Data (Figma: Course_Card_1 49:63 / 49:282) */}
        <div 
          className="absolute left-[111px] top-0 w-[373px] h-[384px] bg-white rounded-[20px] p-4 shadow-xl border border-white/20 z-10 flex flex-col justify-between"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Card Media with floating tag pills */}
          <div className="relative w-[341px] h-[195px] rounded-[16px] overflow-hidden bg-slate-900 shrink-0">
            <img 
              src="/figma-assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11_frame.png" 
              alt="The Power of Big Data"
              className="w-full h-full object-cover"
            />
            {/* Tag Pills */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#242528] text-[12px] font-['Satoshi'] font-medium">
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                17 Lessons
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                2 hours 16 mins
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                59 Comments
              </span>
            </div>
          </div>

          {/* Card Info */}
          <div className="pt-2 flex flex-col justify-between flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-['Poppins'] font-semibold text-[20px] leading-[26px] text-[#242528]">
                  the Power of Big Data
                </h3>
                <p className="font-['Satoshi'] text-[12px] text-[#82868E] mt-0.5">
                  by purepearl studio
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0 pt-0.5">
                <span className="font-['Satoshi'] font-medium text-[18px] text-[#242528]">4.5</span>
                <span className="text-[#FFB800] text-[18px]">★</span>
              </div>
            </div>

            {/* Level & Enrolled Avatars */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-[12px] font-['Satoshi'] font-medium">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 18h2v-4H4v4zm5 0h2V9H9v9zm5 0h2V4h-2v14zm5 0h2v-8h-2v8z" />
                </svg>
                <span>Beginner</span>
              </div>

              {/* Overlapping student avatar circles */}
              <div className="flex items-center -space-x-2">
                <img src="/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/3fe559181733e0fb69226caee836e40092facb44_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/0577f0e9b7fca2f32639871454da0de95f951709_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#003BE2] text-white text-[10px] font-bold flex items-center justify-center">
                  26+
                </div>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-1 pt-2 border-t border-slate-100">
              <span className="font-['Poppins'] font-semibold text-[20px] text-[#242528]">$25</span>
              <span className="font-['Satoshi'] text-[12px] text-[#82868E]">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Front Course Card: Build Digital Asset (Figma: Course_Card_1 49:32 / 49:251) */}
        <div 
          className="absolute left-0 top-[89px] w-[373px] h-[384px] bg-white rounded-[20px] p-4 shadow-2xl border border-white/40 z-20 flex flex-col justify-between"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Card Media with floating tag pills */}
          <div className="relative w-[341px] h-[195px] rounded-[16px] overflow-hidden bg-slate-900 shrink-0">
            <img 
              src="/figma-assets/c88264191d691ba3300ad4f82a942429bb912fa5_frame.png" 
              alt="Build Digital Asset"
              className="w-full h-full object-cover"
            />
            {/* Tag Pills */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[#242528] text-[12px] font-['Satoshi'] font-medium">
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                17 Lessons
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                2 hours 16 mins
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm">
                59 Comments
              </span>
            </div>
          </div>

          {/* Card Info */}
          <div className="pt-2 flex flex-col justify-between flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-['Poppins'] font-semibold text-[20px] leading-[26px] text-[#242528]">
                  Build Digital Asset
                </h3>
                <p className="font-['Satoshi'] text-[12px] text-[#82868E] mt-0.5">
                  by purepearl studio
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0 pt-0.5">
                <span className="font-['Satoshi'] font-medium text-[18px] text-[#242528]">4.5</span>
                <span className="text-[#FFB800] text-[18px]">★</span>
              </div>
            </div>

            {/* Level & Enrolled Avatars */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-[12px] font-['Satoshi'] font-medium">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 18h2v-4H4v4zm5 0h2V9H9v9zm5 0h2V4h-2v14zm5 0h2v-8h-2v8z" />
                </svg>
                <span>Beginner</span>
              </div>

              {/* Overlapping student avatar circles */}
              <div className="flex items-center -space-x-2">
                <img src="/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/3fe559181733e0fb69226caee836e40092facb44_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/0577f0e9b7fca2f32639871454da0de95f951709_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="/figma-assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f_ellipse.png" alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#003BE2] text-white text-[10px] font-bold flex items-center justify-center">
                  26+
                </div>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-1 pt-2 border-t border-slate-100">
              <span className="font-['Poppins'] font-semibold text-[20px] text-[#242528]">$25</span>
              <span className="font-['Satoshi'] text-[12px] text-[#82868E]">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Happy Students Floating Badge (Figma: Auto Layout Vertical 49:132 / 49:313) */}
        <div 
          className="absolute left-[226px] top-[435px] w-[258px] h-[123px] bg-white rounded-[16px] p-4 shadow-2xl border border-slate-100 z-30 flex flex-col justify-between"
          style={{ transform: 'translateZ(0)' }}
        >
          <div>
            <div className="font-['Satoshi'] font-medium text-[16px] text-[#242528]">
              Happy Students
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-['Satoshi'] font-normal text-[10px] text-[#82868E]">
                4.5 (240)
              </span>
              <span className="text-[#FFB800] text-[12px]">★</span>
            </div>
          </div>

          {/* 7 Student Avatars + 2K+ (Figma: 49:138 / 49:319) */}
          <div className="flex items-center -space-x-2 pt-1">
            <img src="/figma-assets/9ef8cb329b949267cc8214b6727067c4a13af4b4_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/83fb3e04056cc892636460bee5791aa3f243854c_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/f3cf29a8fed39589ceb38423e65b26b8d6c93123_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/5824acacb3b76175bc84084ec18597109498f96d_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/7fdccc783264eedc4fb989984eecbc4058a219f2_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/figma-assets/1e078348a54489bfd231d82fe1944770883c8d80_ellipse.png" alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#003BE2] text-white text-[11px] font-['Satoshi'] font-bold flex items-center justify-center">
              2K+
            </div>
          </div>
        </div>

        {/* 3D FLOATING ORNAMENTS (Figma: Cone 49:185, Cone 49:190, Frame 49:180) */}
        {/* Top-left Lime Cone (146x146) */}
        <div className="absolute left-[29px] top-[15px] w-[146px] h-[146px] pointer-events-none z-25 drop-shadow-xl animate-float-slow">
          <img 
            src="/auth/auth_cone_top_lime.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom-left Lime Cone (188x188) */}
        <div className="absolute -left-[25px] top-[397px] w-[188px] h-[188px] pointer-events-none z-25 drop-shadow-2xl animate-float-medium">
          <img 
            src="/auth/auth_cone_bottom_lime.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mid-right White 3D Shape (175x175) */}
        <div className="absolute left-[348px] top-[321px] w-[175px] h-[175px] pointer-events-none z-25 drop-shadow-xl animate-float-reverse">
          <img 
            src="/auth/auth_shape_white_rot180.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};
