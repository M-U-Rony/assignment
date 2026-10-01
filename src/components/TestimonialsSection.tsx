import React from 'react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/figma-assets/0577f0e9b7fca2f32639871454da0de95f951709_ellipse.png',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: '2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/figma-assets/63c4be83222c85e6c852819bc5d4b24a87a87fb6_ellipse.png',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: '3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/figma-assets/728c3b1d33fe647a46f9bf668322f8c1d94ed937_ellipse.png',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

/**
 * Testimonials Section — Figma Frame 17: "Testimonials_Frame" (Node 34:1175)
 *
 * Canvas: 1440x784, background #FAFAFA
 * Ambient Glows: Node 34:1314 (Ellipse 11), 34:1311 (Ellipse 12), 34:1313 (Ellipse 8)
 * Header (34:1177): 1200x145, gap: 43px
 *   - Title: Poppins SemiBold 44px, line-height 52.8px (120%), color #000000
 *   - Description: Satoshi Regular 18px, line-height 28.8px (160%), color #4F4F4F
 * Cards Row (34:1182): 1204x436, gap: 41px, 3 white cards (374px wide, radius 24px)
 *   - Avatar: 80x80px rounded-full
 *   - Name: Poppins SemiBold 20px
 *   - Role: Satoshi Regular 18px, color #003BE2
 *   - Quote: Satoshi Regular 18px, line-height 28.8px, color #4F4F4F
 */
export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      aria-label="Community Testimonials"
      className="relative w-full bg-[#FAFAFA] overflow-hidden py-16 lg:py-[90px]"
    >
      {/* Ambient background glows matching Figma Node 34:1314, 34:1311, 34:1313 */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="relative w-full max-w-[1440px] h-full mx-auto">
          {/* 1. Top-Right Lime/Yellow Glow (Ellipse 11 Node 34:1314: relPos 842, -241, 1137x1137) */}
          <div 
            style={{
              position: 'absolute',
              left: '842px',
              top: '-241px',
              width: '1137px',
              height: '1137px',
              borderRadius: '9999px',
              background: 'radial-gradient(circle, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.10) 53%, rgba(203, 252, 1, 0.02) 75%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />

          {/* 2. Top-Center Lime/Yellow Glow (Ellipse 12 Node 34:1311: relPos 395, -138, 672x672) */}
          <div 
            style={{
              position: 'absolute',
              left: '395px',
              top: '-138px',
              width: '672px',
              height: '672px',
              borderRadius: '9999px',
              background: 'radial-gradient(circle, rgba(203, 252, 1, 0.55) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.03) 75%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />

          {/* 3. Left Blue Glow (Ellipse 8 Node 34:1313: relPos -442, 149, 1137x1137) */}
          <div 
            style={{
              position: 'absolute',
              left: '-442px',
              top: '149px',
              width: '1137px',
              height: '1137px',
              borderRadius: '9999px',
              background: 'radial-gradient(circle, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.015) 75%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1204px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header Block (Node 34:1177: 1200x145, gap: 43px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-heading font-semibold text-[32px] sm:text-[40px] lg:text-[44px] text-black leading-[40px] sm:leading-[48px] lg:leading-[52.8px] tracking-tight">
              Discover What Our <br className="hidden sm:inline" />Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#4f4f4f] leading-[26px] sm:leading-[28.8px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Cards Row (Node 34:1182: 1204x436, gap: 41px) */}
        <div className="mt-12 lg:mt-[72px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[41px]">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 sm:p-7 lg:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-100/70"
            >
              <div>
                {/* 80x80 Avatar */}
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div className="mt-6">
                  <h3 className="font-heading font-semibold text-[20px] text-black leading-[24px]">
                    {item.name}
                  </h3>
                  <p className="font-sans font-normal text-[18px] text-[#003be2] leading-[28.8px]">
                    {item.role}
                  </p>
                </div>

                {/* Quote */}
                <p className="font-sans font-normal text-[16px] lg:text-[18px] text-[#4f4f4f] leading-[26px] lg:leading-[28.8px] mt-6">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
