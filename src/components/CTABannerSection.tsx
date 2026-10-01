import React from 'react';

interface CTABannerSectionProps {
  onNavigate?: (route: string, param?: string) => void;
}

/**
 * CTA Banner Section — Figma Frame 16: "CTA_Frame" (Node 34:1161)
 *
 * Canvas: 1440x488, background #003BE2, grid lines 120px rgba(255,255,255,0.12)
 * Content Frame (34:1170): 964x319 centered at relPos (238, 85)
 *   - Title (34:1171): Poppins SemiBold 44px, line-height 52.8px (120%), color #F5F5F6, max-width 710px
 *   - Description (34:1172): Satoshi Regular 18px, line-height 28.8px (160%), color #F5F5F6, max-width 964px
 *   - Button (34:1173): 172x46px, bg #D4FB20, rounded 24px, text Satoshi Medium 18px #242528
 *
 * 3D Floating Ornaments (Group 6, Node 46:78):
 *   - Exact hard-light composite PNGs matching Figma masks (Lime #D4FB20 and White #F5F5F6)
 */
export const CTABannerSection: React.FC<CTABannerSectionProps> = ({ onNavigate }) => {
  return (
    <section 
      aria-label="Unlock Your Potential as a Creator"
      className="relative w-full bg-[#003be2] bg-grid-hero overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* DESKTOP VIEW (Exact 1440x488 Canvas matching Figma Frame 34:1161)         */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-[1440px] h-[488px] mx-auto overflow-hidden">
        
        {/* 1. 3D Floating Ornaments (Figma: Group 6 Node 46:78) */}
        
        {/* 1.1 Top-Left Lime Coil (Node 34:1206: relPos -118, -162, 385x385) */}
        <img
          src="/cta/cta_coil_top_left_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '-118px',
            top: '-162px',
            width: '385px',
            height: '385px'
          }}
        />

        {/* 1.2 Mid-Left White Zigzag (Node 34:1236: relPos 178, 5, 175x175, rot 180) */}
        <img
          src="/cta/cta_zigzag_mid_left_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '178px',
            top: '5px',
            width: '175px',
            height: '175px'
          }}
        />

        {/* 1.3 Mid-Left White Cone (Node 46:55: relPos -48, 225, 188x188) */}
        <img
          src="/cta/cta_cone_mid_left_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '-48px',
            top: '225px',
            width: '188px',
            height: '188px'
          }}
        />

        {/* 1.4 Bottom-Left Lime Donut (Node 46:67: relPos 20, 299, 342x342) */}
        <img
          src="/cta/cta_donut_bottom_left_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '20px',
            top: '299px',
            width: '342px',
            height: '342px'
          }}
        />

        {/* 1.5 Top-Right Lime Cone (Node 46:61: relPos 1080, 0, 188x188) */}
        <img
          src="/cta/cta_cone_top_right_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '1080px',
            top: '0px',
            width: '188px',
            height: '188px'
          }}
        />

        {/* 1.6 Top-Right White Cylinder (Node 46:73: relPos 1226, 6, 370x370) */}
        <img
          src="/cta/cta_cylinder_top_right_white.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '1226px',
            top: '6px',
            width: '370px',
            height: '370px'
          }}
        />

        {/* 1.7 Bottom-Right Lime Zigzag (Node 34:1221: relPos 1110, 289, 330x330) */}
        <img
          src="/cta/cta_zigzag_bottom_right_lime.png"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            left: '1110px',
            top: '289px',
            width: '330px',
            height: '330px'
          }}
        />

        {/* 2. Centered Content Frame (Figma: Node 34:1170, relPos 238, 85, size 964x319) */}
        <div 
          className="absolute z-20 flex flex-col items-center text-center"
          style={{
            left: '238px',
            top: '85px',
            width: '964px',
            height: '319px'
          }}
        >
          {/* Title: Node 34:1171 (710x106) */}
          <h2 className="font-heading font-semibold text-[44px] text-[#f5f5f6] leading-[52.8px] tracking-[-0.44px] max-w-[710px] text-center">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          {/* Description: Node 34:1172 (964x87, gap: 40px) */}
          <p className="font-sans font-normal text-[18px] text-[#f5f5f6] leading-[28.8px] mt-10 max-w-[964px] text-center">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* Button: Node 34:1173 (172x46, gap: 40px) */}
          <div className="mt-10">
            <button
              type="button"
              onClick={() => onNavigate?.('register')}
              className="w-[172px] h-[46px] bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-sans font-medium text-[18px] leading-[21.6px] rounded-[24px] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              Join as Creator
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET RESPONSIVE VIEW (Screen widths < 1024px)                  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative z-20 px-6 py-16 sm:px-10 sm:py-20 max-w-[720px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] text-[#f5f5f6] leading-[40px] sm:leading-[48px] tracking-[-0.4px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#f5f5f6] leading-[26px] sm:leading-[28.8px] mt-6 max-w-[620px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => onNavigate?.('register')}
            className="px-8 py-3 bg-[#d4fb20] hover:bg-[#cbfc01] text-[#242528] font-sans font-medium text-[16px] sm:text-[18px] rounded-[24px] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};
