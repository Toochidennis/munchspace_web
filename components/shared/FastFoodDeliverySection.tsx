import { type FC } from "react";

// Asset imports (placeholders - will be replaced with actual images)
import riderBgImage from "../../src/rider-bg.jpg";
import riderImage from "../../src/rider-on-bike.png";
import smartAiIcon from "../../src/Frame 19.jpg";
import allInOneIcon from "../../src/Frame 6.jpg";
import overlayPattern from "../../src/transparent.png";

// Types
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FastFoodDeliverySectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  features?: Feature[];
  riderImage?: string;
  backgroundImage?: string;
  className?: string;
}

// Default features matching the design
const defaultFeatures: Feature[] = [
  {
    icon: smartAiIcon,
    title: "Smart AI Delivery",
    description: "Faster routes. Smarter timing. Always on time.",
  },
  {
    icon: allInOneIcon,
    title: "All-in-One Delivery",
    description: "Your everyday delivery from meals to markets, we bring it all.",
  },
];

// Sub-component: Feature Item
const FeatureItem: FC<{ icon: string; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4 p-6">
      <figure className="w-14 h-14 flex-shrink-0 rounded-full border-2 border-white/30">
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-full h-full object-contain rounded-full"
        />
      </figure>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-white/90 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Sub-component: Section Title
const SectionTitle: FC<{ title: string; highlight: string }> = ({
  title,
  highlight,
}) => {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
      {title}{" "}
      <span className="text-orange-500">{highlight}</span> in town
    </h2>
  );
};

// Main Component
export function FastFoodDeliverySection({
  title = "The Fastest food Delivery",
  highlight = "food Delivery",
  subtitle = "Hot meals, cold drinks, and everything in between, delivered in minutes.",
  features = defaultFeatures,
  riderImage: customRiderImage = riderImage,
  backgroundImage = riderBgImage,
  className = "",
}: FastFoodDeliverySectionProps) {
  return (
    <section
      className={`relative w-full h-[500px] bg-neutral-900 py-11 md:py-20 lg:pt-32 lg:pb-24 xl:pt-40 xl:pb-32 ${className}`}
    >
      {/* Background Image with Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full object-cover object-fit"
        />
        <img
          src={overlayPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Mobile Layout: Single Column */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Text Content */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-4xl font-bold text-white leading-tight">
              The Fastest{" "}
              <span className="text-orange-500">food Delivery</span> in town
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-md mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Rider Image */}
          <figure className="w-full max-w-sm">
            <img
              src={customRiderImage}
              alt="Delivery rider on yellow bike"
              className="w-[200px] h-[200px] object-contain"
            />
          </figure>

          {/* Features */}
          <div className="w-full space-y-4">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Tablet Layout: Two Columns */}
        <div className="hidden lg:hidden md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left: Text + Features */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white leading-tight">
                The Fastest{" "}
                <span className="text-orange-500">food Delivery</span> in town
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                {subtitle}
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Right: Rider Image */}
          <figure className="flex justify-center">
            <img
              src={customRiderImage}
              alt="Delivery rider on yellow bike"
              className="w-full max-w-lg h-auto object-contain"
            />
          </figure>
        </div>

        {/* Desktop Layout: Three Columns */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4 space-y-6 lg:-mt-28 xl:-mt-32">
            <h2 className="text-4xl xl:text-[41px] font-bold text-white leading-tight tracking-wide whitespace-nowrap">
              The Fastest <span className="text-orange-500"><br />food Delivery</span> in town
            </h2>
            <p className="text-lg xl:text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Center Column: Rider Image */}
          <figure className="lg:col-span-4 flex justify-center overflow-visible relative z-20">
            <img
              src={customRiderImage}
              alt="Delivery rider on yellow bike"
              className="w-[180%] max-w-none h-auto object-contain transform lg:-mt-32 xl:-mt-[190px] scale-110"
            />
          </figure>

          {/* Right Column: Features */}
          <div className="lg:col-span-4 space-y-6 lg:-mt-28 xl:-mt-32">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FastFoodDeliverySection;
