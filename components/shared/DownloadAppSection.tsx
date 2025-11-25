import OrangeHeroCard from "./OrangeHeroCard";
import { FaApple } from 'react-icons/fa';
import phoneMock from "../../src/assets/Group 10.png";
import packshot from "../../src/assets/package.png";
import dessert from "../../src/assets/cake.png";

export default function DownloadAppSection() {
  return (
    <section aria-labelledby="download-app" className="w-full">
      {/* Mobile view: simple orange card */}
      <div 
        className="md:hidden relative overflow-visible rounded-t-[32px] bg-[#E86828] text-white px-3"
        style={{
          paddingTop: "var(--space-xl, 3rem)",
          paddingBottom: "var(--space-xl, 3rem)",
        }}
      >
        <div className="max-w-full mx-auto">
          <div className="mx-auto -mt-56 w-[200px] xs:w-[220px] sm:w-[260px]">
            <img
              src={phoneMock}
              alt="App screenshot on phone"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div style={{ marginTop: "var(--space-lg, 2rem)" }}>
            <h2
              id="download-app"
              className="text-[26px] sm:text-[28px] font-bold text-white text-center tracking-wide"
              style={{ lineHeight: 1.18 }}
            >
              Download our app
              <br />
              and start ordering.
            </h2>
          </div>

          <div style={{ marginTop: "var(--space-md, 1.5rem)" }}>
            <div className="flex flex-row gap-3 justify-center items-center">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl shadow-lg hover:brightness-95 transition flex-1 max-w-[48%]"
              >
                <FaApple className="w-6 h-6 text-white flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[9px] opacity-80 leading-tight">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl shadow-lg hover:brightness-95 transition flex-1 max-w-[48%]"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M3 2L17 12L3 22V2Z" fill="#00A0FF"/>
                  <path d="M17 12L11 7L11 17L17 12Z" fill="#34A853"/>
                  <path d="M11 7L3 2L11 12V7Z" fill="#FBBC05"/>
                  <path d="M11 17L3 22L11 12V17Z" fill="#EA4335"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] opacity-80 leading-tight">Get it on</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view: original layout with OrangeHeroCard */}
      <div className="hidden md:block">
        <div className="w-full px-0">
          <div className="relative">
            <OrangeHeroCard>
              <div className="relative w-full">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <div className="hidden md:block w-full h-full" />
                  </div>

                  <div className="flex-1 flex flex-col justify-start items-start text-white pt-10 lg:pt-14 md:-ml-20 lg:-ml-14">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-[1.05] mb-4 max-w-2xl tracking-wide">
                      Download our app <br />and start ordering.
                    </h2>

                    <div className="flex flex-row gap-4 mt-8">
                      <a
                        href="#"
                        className="inline-flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl shadow-lg hover:brightness-95 transition"
                        aria-label="Download on the App Store"
                      >
                        <FaApple className="w-6 h-6 text-white" />
                        <div className="text-left">
                          <div className="text-xs opacity-80">Download on the</div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </a>

                      <a
                        href="#"
                        className="inline-flex items-center gap-3 bg-black text-white px-4 py-3 rounded-xl shadow-lg hover:brightness-95 transition"
                        aria-label="Get it on Google Play"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M3 2L17 12L3 22V2Z" fill="#00A0FF"/>
                          <path d="M17 12L11 7L11 17L17 12Z" fill="#34A853"/>
                          <path d="M11 7L3 2L11 12V7Z" fill="#FBBC05"/>
                          <path d="M11 17L3 22L11 12V17Z" fill="#EA4335"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-xs opacity-80">Get it on</div>
                          <div className="text-sm font-semibold">Google Play</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="absolute left-2 top-6 hidden md:block">
                  <div className="w-8 h-8 bg-white/10 rounded-full" />
                </div>
              </div>
            </OrangeHeroCard>

            <div className="absolute -top-14 right-12 lg:right-20 z-50 pointer-events-none">
              <div className="w-40 h-40 overflow-hidden">
                <img src={packshot} alt="food packaging packshot" className="w-full h-full object-top object-contain" />
              </div>
            </div>

            <div className="absolute -bottom-14 right-12 lg:right-20 z-40 pointer-events-none">
              <img src={dessert} alt="dessert illustration" className="w-56 h-56 object-contain drop-shadow-lg" />
            </div>

            <div className="absolute -top-[155px] left-12 lg:left-20 z-50 pointer-events-none">
              <div className="w-[320px] lg:w-[380px]">
                <div className="w-full h-[700px] flex items-start justify-center">
                  <img src={phoneMock} alt="MunchSpace app on phone" className="w-full h-full object-contain object-top drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
