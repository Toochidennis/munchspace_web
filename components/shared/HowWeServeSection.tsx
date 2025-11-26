import panImage from "../../src/pan.png";
import browseOrderImage from "../../src/Browse & order.png";
import wePickPackImage from "../../src/We Pick & Pack.png";
import weDeliverImage from "../../src/We Deliver to you.png";
import womanImage from "../../src/woman.png";
import cartoonColorfulImage from "../../src/cartoon-colorful.png";
import topStandImage from "../../src/top-stand.png";
import orangeSideBgImage from "../../src/orange-side-bg.png";
import lineImage from "../../src/line.png";
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
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20 lg:mb-24">
          How we <span className="text-orange-500">Serve</span> you
        </h2>

        {/* Service Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-20 md:mb-28 lg:mb-30">
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
        <div className="relative bg-orange-500 rounded-[48px] overflow-hidden max-w-[1233px] h-[420px] mx-auto">
          {/* Orange Side Background */}
          <div className="absolute top-[5px] right-[3px] h-full w-[580px] z-0" style={{ transform: 'rotate(1deg)', transformOrigin: 'right center' }}>
            <img
              src={orangeSideBgImage}
              alt="Background decoration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dashed Line Image - positioned within orange section */}
          <div className="absolute top-[197.5px] left-[490.5px] w-[283px] h-[121.52px] opacity-100 z-30 pointer-events-none">
            <img
              src={lineImage}
              alt="Dashed line decoration"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative z-10">
            {/* Left Side - Text Content */}
            <div className="p-8 md:p-10 lg:p-12 pt-12 md:pt-16 lg:pt-1 space-y-8">
              <div className="w-[604px] h-[124px]">
                <h3 className="text-[48px] font-semibold text-white leading-[130%] tracking-[0%]" style={{ fontFamily: 'Rubik' }}>
                  First Delivery is Free. Download our app now.
                </h3>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black text-white rounded-lg border-2 border-white/20 hover:brightness-95 transition w-[134px] h-[45px] p-[10px]"
                    aria-label="Download on the App Store"
                  >
                    <svg className="w-5 h-8 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] opacity-80 leading-tight">Download on the</div>
                      <div className="text-xs font-semibold leading-tight">App Store</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-black text-white rounded-lg border-2 border-white/20 hover:brightness-95 transition w-[134px] h-[45px] p-[10px]"
                    aria-label="Get it on Google Play"
                  >
                    <svg className="w-5 h-8 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 2L17 12L3 22V2Z" fill="#00A0FF"/>
                      <path d="M17 12L11 7L11 17L17 12Z" fill="#34A853"/>
                      <path d="M11 7L3 2L11 12V7Z" fill="#FBBC05"/>
                      <path d="M11 17L3 22L11 12V17Z" fill="#EA4335"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] opacity-80 leading-tight">Download on the</div>
                      <div className="text-xs font-semibold leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>

                {/* T&C Text */}
                <div className="flex items-center gap-[10px] w-[108px] h-[24px] opacity-80">
                  <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-6"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  <span className="text-white text-sm">T&C apply</span>
                </div>
              </div>
            </div>
            

            {/* Right Side - Image */}
            <div className="absolute top-[-13px] left-[495px] w-[690px] h-[460px] opacity-100">
              {/* Top Stand Background Image */}
              <div className="absolute top-[-60.87px] left-[105.64px] w-[580.58px] h-[580.58px] opacity-110 z-10" style={{ transform: 'rotate(4.12deg)' }}>
                <img
                  src={topStandImage}
                  alt="Background decoration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Woman with Phone */}
              <div className="absolute inset-0 flex items-end justify-center lg:justify-end z-20">
                <img
                  src={womanImage}
                  alt="Woman with phone"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>

          {/* Cartoon Colorful Image - positioned relative to the banner card */}
          <div className="absolute top-[311.79px] left-[1056.62px] w-[105.82px] h-[105.82px] opacity-80 z-30" style={{ transform: 'rotate(10.12deg)' }}>
            <img
              src={cartoonColorfulImage}
              alt="Cartoon decoration"
              className="w-full h-full object-contain"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
