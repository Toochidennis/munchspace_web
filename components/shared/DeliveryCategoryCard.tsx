import { ArrowRight } from "lucide-react";
import { OrangeArc, GreyArcTop, GreenArc } from "./CategoryAccentShapes";

export interface DeliveryCategoryCardProps {
  title: string;
  image: string;
  accentColor: string;
  description?: string;
  ctaLabel?: string;
  onClick?: () => void;
}

export default function DeliveryCategoryCard({
  title,
  image,
  description,
  ctaLabel = "Order Now",
  onClick,
}: DeliveryCategoryCardProps) {
  return (
    <div className="flex flex-col items-center space-y-6 md:space-y-8">
      {/* Circular Image Container with Decorative SVG Arcs */}
      <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
        {/* Decorative SVG Accent Shapes - positioned around image */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <GreenArc accentColor="#3C7E41" />
          <GreyArcTop />
          <OrangeArc accentColor="#E76A39" />
        </div>

        {/* Product Image - centered and slightly overlapping decorative shapes */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <img
            src={image}
            alt={title}
            className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 text-center max-w-[280px] leading-tight">
        {title}
      </h3>

      {/* Optional Description */}
      {description && (
        <p className="text-sm md:text-base text-neutral-600 text-center max-w-[260px]">
          {description}
        </p>
      )}

      {/* CTA Button */}
      <button
        onClick={onClick}
        className="flex items-center gap-2 text-munchspace-green hover:text-green-700 font-semibold text-base md:text-lg transition-all duration-200 group"
      >
        <span>{ctaLabel}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
