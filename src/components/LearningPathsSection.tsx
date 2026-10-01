import React from 'react';

interface CategoryCardItem {
  id: string;
  name: string;
  icon: string;
  count?: string;
}

const CATEGORY_CARDS: CategoryCardItem[] = [
  {
    id: 'design',
    name: 'Design',
    icon: '/figma-assets/category_icon_design.svg'
  },
  {
    id: 'development',
    name: 'Development',
    icon: '/figma-assets/category_icon_development.svg'
  },
  {
    id: 'it-software',
    name: 'IT & Software',
    icon: '/figma-assets/category_icon_it_software.svg'
  },
  {
    id: 'business',
    name: 'Business',
    icon: '/figma-assets/category_icon_business.svg'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '/figma-assets/category_icon_marketing.svg'
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: '/figma-assets/category_icon_photography.svg'
  }
];

interface LearningPathsSectionProps {
  onNavigate?: (route: string, param?: string) => void;
  onSelectCategory?: (category: string) => void;
}

export const LearningPathsSection: React.FC<LearningPathsSectionProps> = ({
  onNavigate,
  onSelectCategory
}) => {
  const handleCardClick = (cat: CategoryCardItem) => {
    if (onSelectCategory) {
      onSelectCategory(cat.name);
    } else if (onNavigate) {
      onNavigate('courses', cat.id);
    }
  };

  return (
    <section 
      aria-label="Explore Diverse Learning Paths"
      className="w-full bg-white pt-16 lg:pt-[72px] pb-20 lg:pb-[120px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-[119px]">
        
        {/* Frame 9 (Node 34:684, w=917, h=117) - Section Heading */}
        <div className="max-w-[917px] mx-auto text-center flex flex-col items-center">
          <h2 className="font-heading font-semibold text-[30px] sm:text-[36px] text-[#040819] leading-[38px] sm:leading-[43.2px] tracking-[-0.36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#82868e] leading-[26px] sm:leading-[28.8px] mt-4 sm:mt-5 max-w-[917px]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Frame 10 (Node 34:725, w=1202, h=167) - Categories Cards */}
        <div className="mt-12 lg:mt-[68px] max-w-[1202px] mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 lg:gap-[40px]">
            {CATEGORY_CARDS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCardClick(cat)}
                className="group w-[150px] sm:w-[167px] h-[150px] sm:h-[167px] shrink-0 bg-white rounded-[24px] border border-[#ced0d3] hover:border-[#003be2] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-4 focus:outline-none focus:ring-2 focus:ring-[#003be2]"
              >
                {/* Frame 4 (w=60, h=60, radius=40, bg=#D4FB20) */}
                <div className="w-[54px] sm:w-[60px] h-[54px] sm:h-[60px] rounded-full bg-[#d4fb20] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-7 h-7 sm:w-[30px] sm:h-[30px] text-[#242528] object-contain"
                  />
                </div>

                {/* Category Title (Satoshi, Medium 500, 20px, #242528) */}
                <span className="mt-3 font-sans font-medium text-[17px] sm:text-[20px] text-[#242528] group-hover:text-[#003be2] leading-[24px] text-center tracking-normal transition-colors whitespace-nowrap">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
