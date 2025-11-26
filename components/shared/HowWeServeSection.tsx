import panImage from "../../src/pan.png";
import browseOrderImage from "../../src/Browse & order.png";
import wePickPackImage from "../../src/We Pick & Pack.png";
import weDeliverImage from "../../src/We Deliver to you.png";
import { OrangeArc, GreyArcTop, GreenArc } from "./CategoryAccentShapes";

export default function HowWeServeSection() {
  const services = [
    {
      id: 1,
      title: "Browse & Order",
      description:
        "Discover your favorite Restaurants/ restaurants, meals, groceries, and place your order in seconds.",
      image: browseOrderImage,
    },
    {
      id: 2,
      title: "We Pick & Pack",
      description:
        "Our trusted partners and smart system prepare your order with care.",
      image: wePickPackImage,
    },
    {
      id: 3,
      title: "We Deliver to You",
      description:
        "Riders deliver right to your door. Fresh, fast, and always on time.",
      image: weDeliverImage,
    },
  ];

  return (
    <section className="relative w-full bg-white pt-20 md:pt-32 lg:pt-25 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      {/* Top Left Pan Decoration */}
      <div className="absolute top-[92px] left-8 w-[130px] h-[130px] -translate-x-[30px] z-10">
        <img
          src={panImage}
          alt="Pan decoration"
          className="w-full h-full object-contain -rotate-[1deg]"
        />
      </div>

      {/* Top Right Green & Yellow Circles Decoration */}
      <div className="absolute top-28 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 translate-x-1/3 z-10">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full opacity-30" />
          <div className="absolute bottom-0 right-8 w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-40" />
        </div>
        {/* Replace with actual decoration image */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 lg:mb-24">
          How we <span className="text-orange-500">Serve</span> you
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-20 md:mb-28 lg:mb-32">
          {services.map((service) => (
            <div key={service.id} className="flex justify-center">
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
                      src={service.image}
                      alt={service.title}
                      className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover shadow-xl"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 text-center max-w-[280px] leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 text-center max-w-[260px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Promo Banner */}
        <div className="relative bg-orange-500 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                First Delivery is{" "}
                <span className="block mt-2 text-white font-extrabold">
                  Free.
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-white/90">
                Download our app now.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* App Store Placeholder */}
                <div className="w-40 h-14 bg-black/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">App Store</span>
                </div>
                {/* Play Store Placeholder */}
                <div className="w-40 h-14 bg-black/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">Play Store</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              {/* Woman with Phone Placeholder */}
              <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
                <div className="w-64 h-96 md:w-80 md:h-[500px] bg-orange-400/30 rounded-t-full flex items-center justify-center">
                  <span className="text-white text-sm">Woman Image</span>
                </div>
              </div>

              {/* Balloon Decorations */}
              <div className="absolute top-8 left-8 w-20 h-24 bg-yellow-300/40 rounded-full">
                {/* Balloon placeholder */}
              </div>
              <div className="absolute top-20 right-12 w-16 h-20 bg-red-400/40 rounded-full">
                {/* Balloon placeholder */}
              </div>
              <div className="absolute bottom-32 left-12 w-12 h-16 bg-blue-400/40 rounded-full">
                {/* Balloon placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
