import { useState } from "react";
import { Link } from "react-router-dom";
import VectorLogo from "../../src/assets/Vector.png";
import Button from "../../components/ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Join as a Vendor", href: "#vendor" },
    { name: "Join as a Rider", href: "/JoinAsRider" },
    { name: "About MunchSpace", href: "#about" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block w-full">
        <div className="w-full max-w-[1440px] mx-auto px-10 py-6 bg-neutral-900 rounded-bl-[32px] rounded-br-[32px]">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <img src={VectorLogo} alt="MunchSpace Logo" className="h-14 w-auto" />
            </div>

            <div className="flex justify-start items-center gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-neutral-100 text-base font-medium font-[--font-primary] leading-6 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-neutral-100 text-base font-medium font-[--font-primary] leading-6 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="primary">Download the app</Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden w-full p-1/2">
        <div className="bg-neutral-900 rounded-bl-3xl rounded-br-3xl">
          {/* Mobile Header */}
          <div className="p-6 flex justify-between items-center">
            <img src={VectorLogo} alt="MunchSpace Logo" className="h-11 w-auto" />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-6 h-6 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {!isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="#F5F5F5"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z" fill="#F5F5F5"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="p-6 pt-0">
              <div className="py-4 flex flex-col justify-center items-start gap-5">
                {navLinks.map((link) => (
                  link.href.startsWith('#') ? (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="self-stretch text-right text-neutral-100 text-base font-medium font-['Inter'] leading-6 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="self-stretch text-right text-neutral-100 text-base font-medium font-['Inter'] leading-6 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <Button variant="primary">Download the app</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
