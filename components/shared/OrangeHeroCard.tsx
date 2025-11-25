import { ReactNode } from "react";

interface OrangeHeroCardProps {
  children: ReactNode;
  className?: string;
  topRight?: ReactNode;
}

export default function OrangeHeroCard({ children, className = "", topRight }: OrangeHeroCardProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Diagonal Top Edge - Using clip-path */}
      <div 
        className="relative bg-primary h-[400px] rounded-[50px] overflow-hidden"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)"
        }}
      >
          {/* Decorative Semi-Circle - Top Right (clipped by the card's clip-path so only a half/arc shows) */}
          <div className="absolute -top-16 right-12 md:right-20 w-40 h-40 md:w-52 md:h-52 bg-orange-700 rounded-full opacity-60 z-0 transform translate-x-6 -translate-y-6" />

          {/* Content Wrapper */}
          <div className="relative z-10 px-6 md:px-10 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
            {children}
          </div>
      </div>

      {/* Render topRight outside the clipped area so it's not hidden by clip-path/overflow */}
      {topRight && (
          <div className="absolute -top-16 right-12 md:right-20 z-50 pointer-events-none">
          {topRight}
        </div>
      )}
    </div>
  );
}
