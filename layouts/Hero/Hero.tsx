import { MapPin, ArrowRight, Apple, PlayCircle } from "lucide-react";
import DownloadAppSection from "../../components/shared/DownloadAppSection";
import DeliveryCategoriesSection from "../../components/shared/DeliveryCategoriesSection";
import FastFoodDeliverySection from "../../components/shared/FastFoodDeliverySection";
import profileImg from "../../src/assets/profile.png";
import phoneImg from "../../src/assets/HeroComponent.svg";

export default function Hero() {
  return (
    <>
    <section className="w-full relative min-h-[calc(100vh-10rem)] bg-green-50 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-gray-300 opacity-10 rounded-full blur-3xl" />

      {/* Mobile Background Hero Image - Top Right Faded */}
      <div className="absolute -top-[35px] right-[-160px] w-[80%] h-[55%] lg:hidden opacity-25 pointer-events-none">
        <img 
          src={phoneImg} 
          alt="MunchSpace App" 
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full md:py-12">
        {/* Content wrapper aligned with Navbar */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-22rem)]">
            {/* Left Content */}
            <div className="relative z-10 space-y-8 md:space-y-8 -mt-16 md:mt-0">
            {/* Large Orange Circle Behind Hero Text */}
            <div className="absolute -top-0 md:-top-6 -left-16 md:-left-16 w-[140px] md:w-[200px] h-[140px] md:h-[200px] bg-orange-400 opacity-20 rounded-full -z-10" />
            
            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-[49px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold text-neutral-900 leading-[1.2] tracking-normal">
                Fastest <span className="text-primary">Food</span>
              </h1>
              <h1 className="text-[49px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-extrabold leading-[1.2] tracking-normal">
                <span className="text-primary">Delivery</span> <span className="text-neutral-900">& <br />More</span>
              </h1>
            </div>

            {/* Description with Avatar */}
            <div className="flex items-start gap-2.5 md:gap-3 max-w-lg">
              <img 
                src={profileImg} 
                alt="Customer" 
                className="w-12 h-12 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 mt-0.5 md:mt-1"
              />
              <p className="text-[15px] md:text-base text-neutral-600 leading-relaxed">
                When you are too tired to <br></br>cook...Munchspace got you covered.
              </p>
            </div>

            {/* Location Search Bar */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-1 flex items-center gap-1 max-w-xl">
              <div className="flex-1 flex items-center gap-3 px-6 py-3.5">
                <MapPin className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Enter your address to explore..."
                  className="flex-1 bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400 text-sm md:placeholder:after:content-['_nearby_spots']"
                />
              </div>
              <button className="bg-munchspace-green hover:bg-green-600 text-white px-5 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2.5 transition-all duration-200 shadow-sm">
                <span className="text-sm hidden md:inline">Explore Restaurants</span>
                <ArrowRight className="w-5 h-5 text-white md:hidden -rotate-45" strokeWidth={2.5} />
                <ArrowRight className="w-5 h-5 text-white hidden md:block" strokeWidth={2.5} />
              </button>
            </div>

            {/* Customer Rating Card */}
           
              
          </div>

          {/* Right Image Section - Hidden on Mobile */}
          <div className="relative h-full hidden lg:flex items-center justify-center py-12 lg:py-0">
            
            {/* Phone Mockup Container with SVG decorations circling around */}
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              
              {/* Green curved line - Top left, behind hair area */}
              <div className="absolute top-28 -left8 pointer-events-none z-0 rotate-[-10deg]">
                <svg width="200" height="179" viewBox="0 0 186 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M69.5977 60.2808C101.527 31.0104 138.705 11.033 177.789 0.219086C180.983 -0.664239 184.288 1.20861 185.172 4.40216C186.055 7.59579 184.182 10.9011 180.989 11.7848C143.69 22.1046 108.205 41.1673 77.7067 69.1263C47.208 97.0854 25.1396 130.783 11.624 167.046C10.4667 170.151 7.01142 171.73 3.90643 170.573C0.801545 169.416 -0.777583 165.961 0.379375 162.856C14.5422 124.857 37.6686 89.5511 69.5977 60.2808Z" fill="#16A34A"/>
                </svg>
              </div>

              {/* Grey curved line - Right side */}
              <div className="absolute top-1/2 -right-9 -translate-y-1/2 pointer-events-none z-0">
                <svg width="88" height="236" viewBox="0 0 88 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M63.2872 111.081C50.5582 71.7128 29.1022 37.6216 1.75462 10.2398C-0.586987 7.89521 -0.584839 4.09612 1.75958 1.75443C4.10407 -0.58713 7.90321 -0.584866 10.2449 1.75939C38.9019 30.4523 61.3792 66.1746 74.7052 107.389C88.0312 148.604 90.7227 190.723 84.2889 230.762C83.763 234.034 80.6843 236.26 77.4127 235.734C74.1411 235.208 71.9152 232.13 72.4409 228.858C78.5807 190.649 76.0162 150.449 63.2872 111.081Z" fill="#1E1E1E" fill-opacity="0.08"/>
                </svg>
              </div>

              {/* Orange curved line - Bottom Left */}
              <div className="absolute bottom-4 left-4 pointer-events-none z-0 rotate-[41deg]">
                <svg width="246" height="56" viewBox="0 0 246 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M126.83 53.8591C83.8189 58.9851 41.971 53.5017 3.92496 39.4657C0.816379 38.3186 -0.774058 34.8684 0.372819 31.7597C1.51985 28.651 4.97007 27.0607 8.07887 28.2076C44.3864 41.6022 84.3256 46.8398 125.41 41.9434C166.494 37.0471 204.083 22.5697 236.226 1.01732C238.978 -0.828084 242.706 -0.0931793 244.551 2.6589C246.396 5.41102 245.661 9.13837 242.909 10.9839C209.228 33.5683 169.841 48.7331 126.83 53.8591Z" fill="#E76A39"/>
                </svg>
              </div>

              {/* Phone Image */}
              <img 
                src={phoneImg} 
                alt="MunchSpace App" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              />
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Decorative Shapes Container - Hidden on mobile, visible on desktop */}
    <div className="relative bg-green-50 hidden md:block">
      <div className="absolute top-12 -right-10 z-10">
        <div className="relative">
          <div className="w-20 h-20 bg-amber-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-[45px] -translate-y-[28px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#3C7E41"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Orange Hero Card Section */}
    <section className="relative bg-green-50 pt-16 md:pt-48 lg:pt-56 pb-12 md:pb-16">
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Download App Section (uses OrangeHeroCard wrapper) */}
            <DownloadAppSection />
        </div>
      </div>
    </section>

    {/* Delivery Categories Section */}
    <section className="relative bg-green-50 py-16 md:py-20 lg:py-24">
      <DeliveryCategoriesSection />
    </section>

    {/* Fast Food Delivery Section */}
    <FastFoodDeliverySection />
    </>
  );
}
