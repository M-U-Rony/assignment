import React from 'react';

const PARTNER_LOGOS = [
  { id: 1, name: 'Logoipsum 1', src: '/figma-assets/partner_logo_1.svg', width: 167, height: 41 },
  { id: 2, name: 'Logoipsum 2', src: '/figma-assets/partner_logo_2.svg', width: 168, height: 41 },
  { id: 3, name: 'Logoipsum 3', src: '/figma-assets/partner_logo_3.svg', width: 170, height: 41 },
  { id: 4, name: 'Logoipsum 4', src: '/figma-assets/partner_logo_4.svg', width: 170, height: 41 },
  { id: 5, name: 'Logoipsum 5', src: '/figma-assets/partner_logo_5.svg', width: 169, height: 42 },
];

export const BrandPartnersSection: React.FC = () => {
  return (
    <section 
      aria-label="Trusted by Leading Companies"
      className="w-full bg-[#f5f5f6] border-y border-[#e5e6e8]/40 overflow-hidden"
    >
      {/* Exact 1440x202 Desktop Layout matching Figma Frame 2 (Node 1:1794) */}
      <div className="w-full max-w-[1440px] mx-auto min-h-[202px] px-4 sm:px-8 md:px-12 lg:px-[154px] py-10 lg:py-[80px] flex items-center justify-center">
        <div className="w-full overflow-x-auto no-scrollbar flex items-center justify-center">
          <div 
            className="flex flex-nowrap items-center justify-between gap-6 sm:gap-10 md:gap-14 lg:gap-[72px] shrink-0 w-full max-w-[1132px]"
          >
            {PARTNER_LOGOS.map((partner) => (
              <div 
                key={partner.id}
                className="flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 opacity-85 hover:opacity-100 cursor-pointer"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-7 sm:h-8 md:h-10 lg:h-[42px] w-auto max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] object-contain select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
