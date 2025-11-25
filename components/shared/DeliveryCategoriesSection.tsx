import DeliveryCategoryCard, {
  type DeliveryCategoryCardProps,
} from "./DeliveryCategoryCard";
import handSvg from "../../src/assets/hand.svg";

// Default category data
const defaultCategories: DeliveryCategoryCardProps[] = [
  {
    title: "Restaurants & Shops Delivery",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    accentColor: "bg-amber-300",
  },
  {
    title: "Pharmacies Delivery",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=400&fit=crop",
    accentColor: "bg-amber-300",
  },
  {
    title: "Local Markets Delivery",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop",
    accentColor: "bg-amber-300",
  },
];

export interface DeliveryCategoriesSectionProps {
  items?: DeliveryCategoryCardProps[];
  headline?: string;
  description?: string;
}

export default function DeliveryCategoriesSection({
  items = defaultCategories,
  headline = "Not just food, we deliver everything",
  description = "From favorite restaurants to local markets, MunchSpace delivers more than orders, we deliver experiences.",
}: DeliveryCategoriesSectionProps) {
  // Extract highlighted word from headline (last word by default)
  const words = headline.split(" ");
  const lastWord = words.pop();
  const headlineStart = words.join(" ");

  return (
    <section className="w-full relative bg-green-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative Half Circle Background - Top Right */}
      <div className="absolute top-1 -right-32 w-60 h-60 opacity-60 bg-amber-100 rounded-full" />
      <img 
        src={handSvg} 
        alt="" 
        className="absolute -right-6 w-60 h-60 object-contain z-10"
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Top Area - Headline & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16 mt-16">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            {headlineStart}{" "}
            <span className="text-primary">{lastWord}</span>
          </h2>

          {/* Description */}
          <p className="max-w-[500px] text-base md:text-lg text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <DeliveryCategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
