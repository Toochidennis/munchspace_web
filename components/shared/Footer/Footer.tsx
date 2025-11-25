import SocialIcons from "./SocialIcons";
import FooterColumn from "./FooterColumn";

const linksOfInterest = [
  { label: "Homepage", href: "/" },
  { label: "Join as a Vendor", href: "#vendor" },
  { label: "Join as a Rider", href: "/JoinAsRider" },
  { label: "About MunchSpace", href: "#about" }
];

const locations = [
  "Enugu", "Abuja", "Lagos", "Jos", "Kano", "Warri"
];

const legals = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Compliance", href: "#" }
];

export default function Footer() {
  return (
    <footer className="relative bg-green-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {/* Decorative background */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-neutral-900 rounded-t-3xl lg:rounded-t-[32px] p-6 lg:p-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-7 border-b border-neutral-200/10">
            {/* Links of Interest */}
            <FooterColumn title="Links of interest">
              {linksOfInterest.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-neutral-100 text-base font-normal font-inter hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>

            {/* Locations */}
            <FooterColumn title="Locations">
              {locations.map((location) => (
                <div key={location} className="text-neutral-100 text-base font-normal font-inter">
                  {location}
                </div>
              ))}
            </FooterColumn>

            {/* Legals */}
            <FooterColumn title="Legals">
              {legals.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-neutral-100 text-base font-normal font-inter hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </FooterColumn>

            {/* Customer Service */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold font-inter text-neutral-100 pb-4">
                Customer Service
              </h3>
              
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-inter text-neutral-100/70">Service Hours</p>
                <p className="text-base font-normal font-inter text-neutral-100">
                  Monday - Saturday 8.30AM to 8PM
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-inter text-neutral-100/70">Phone</p>
                <p className="text-base font-normal font-inter text-neutral-100">
                  (08012378000) (0808524000)
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-inter text-neutral-100/70">Email</p>
                <a 
                  href="mailto:support@munchspace.com"
                  className="text-base font-normal font-inter text-neutral-100 underline hover:text-primary transition-colors"
                >
                  support@munchspace.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-28 h-14">
                {/* MunchSpace Logo SVG */}
                <svg width="108" height="56" viewBox="0 0 108 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.76133 6.68605C11.614 6.68605 12.9804 7.13179 13.8604 8.02327C14.7404 8.89188 15.3194 10.0234 15.5973 11.4177L15.0067 11.1091L15.2847 10.5605C15.5626 10.0348 15.991 9.47477 16.57 8.88045C17.1489 8.26328 17.8437 7.74897 18.6542 7.33752C19.4879 6.90321 20.4143 6.68605 21.4332 6.68605C23.1007 6.68605 24.3628 7.04036 25.2197 7.74897C26.0997 8.45757 26.7018 9.40619 27.026 10.5948C27.3503 11.7606 27.5124 13.0635 27.5124 14.5036V23.2812C27.5124 23.8755 27.3155 24.3784 26.9218 24.7898C26.5281 25.1784 26.0302 25.3727 25.4281 25.3727C24.826 25.3727 24.3281 25.1784 23.9344 24.7898C23.5407 24.3784 23.3438 23.8755 23.3438 23.2812V14.5036C23.3438 13.7493 23.2512 13.075 23.0659 12.4806C22.8807 11.8635 22.5449 11.372 22.0585 11.0063C21.5722 10.6405 20.8774 10.4577 19.9743 10.4577C19.0942 10.4577 18.3416 10.6405 17.7163 11.0063C17.091 11.372 16.6163 11.8635 16.292 12.4806C15.991 13.075 15.8405 13.7493 15.8405 14.5036V23.2812C15.8405 23.8755 15.6436 24.3784 15.2499 24.7898C14.8562 25.1784 14.3583 25.3727 13.7562 25.3727C13.1541 25.3727 12.6562 25.1784 12.2625 24.7898C11.8688 24.3784 11.6719 23.8755 11.6719 23.2812V14.5036C11.6719 13.7493 11.5793 13.075 11.394 12.4806C11.2087 11.8635 10.8729 11.372 10.3866 11.0063C9.90028 10.6405 9.20553 10.4577 8.30234 10.4577C7.42232 10.4577 6.66966 10.6405 6.04438 11.0063C5.4191 11.372 4.94435 11.8635 4.62013 12.4806C4.31907 13.075 4.16854 13.7493 4.16854 14.5036V23.2812C4.16854 23.8755 3.97169 24.3784 3.578 24.7898C3.1843 25.1784 2.68639 25.3727 2.08427 25.3727C1.48215 25.3727 0.984239 25.1784 0.590543 24.7898C0.196848 24.3784 0 23.8755 0 23.2812V9.12047C0 8.52615 0.196848 8.0347 0.590543 7.6461C0.984239 7.23465 1.48215 7.02893 2.08427 7.02893C2.68639 7.02893 3.1843 7.23465 3.578 7.6461C3.97169 8.0347 4.16854 8.52615 4.16854 9.12047V10.5948L3.64747 10.492C3.8559 10.1034 4.14538 9.69192 4.51592 9.25762C4.88646 8.80045 5.33805 8.37757 5.8707 7.98898C6.40334 7.60039 6.99389 7.2918 7.64233 7.06322C8.29076 6.81178 8.9971 6.68605 9.76133 6.68605Z" fill="white"/>
                  <path d="M35.3209 10.6392C34.9176 14.838 35.1933 16.5478 36.7634 18.1603C37.2822 18.6367 37.6951 19.2202 37.9741 19.8717C38.2531 20.5232 38.3919 21.2279 38.3812 21.9383C38.3709 22.8353 38.3212 23.7454 38.2496 24.6681C38.2197 25.0539 37.8683 25.3383 37.4833 25.2656C35.9215 24.9709 34.6589 24.3243 33.6956 23.3252C32.3525 21.908 31.6809 19.9879 31.6809 17.565V8.85581C31.6809 8.26155 31.8779 7.77008 32.2715 7.38151C32.6652 6.97011 33.1631 6.76441 33.7652 6.76441C34.7991 6.76441 35.6087 7.6428 35.5111 8.6588L35.3209 10.6392Z" fill="#E76A39"/>
                  <path d="M45.4719 6.76441C46.074 6.76442 46.5719 6.9701 46.9656 7.38151C47.3592 7.77008 47.5561 8.26155 47.5562 8.85581V17.565C47.5562 19.9879 46.8729 21.908 45.5065 23.3252C44.5733 24.2931 43.3592 24.93 41.8642 25.2368C41.4768 25.3162 41.1194 25.0309 41.0894 24.6415C41.0189 23.7279 40.9702 22.8267 40.9601 21.9383C40.9493 21.2279 41.0882 20.5232 41.3671 19.8717C41.6461 19.2202 42.059 18.6367 42.5779 18.1603C44.1479 16.5478 44.4236 14.838 44.0203 10.6392L43.8203 8.55647C43.728 7.59535 44.4938 6.76441 45.4719 6.76441Z" fill="#E76A39"/>
                </svg>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-base font-medium font-inter text-neutral-100">
              © 2022 <span className="text-primary">MunchSpace</span> | All Rights Reserved
            </p>

            {/* Social Icons */}
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
