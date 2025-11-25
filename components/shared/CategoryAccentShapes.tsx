// SVG accent shapes for delivery category cards
// These shapes create decorative circular arcs around product images

export interface AccentShapesProps {
  accentColor?: string;
}

// Green arc - Top-left (10 o'clock to 7 o'clock)
export function GreenArc({ accentColor = "#3C7E41" }: AccentShapesProps) {
  return (
    <svg 
      width="107" 
      height="99" 
      viewBox="0 0 107 99" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-5 left-8 -translate-x-6 -translate-y-3"
    >
      <path 
        d="M40.0106 34.654C58.366 17.827 79.7391 6.34238 102.208 0.125626C104.044 -0.382185 105.944 0.694487 106.452 2.53041C106.96 4.36636 105.883 6.26654 104.047 6.77453C82.6052 12.7072 62.2055 23.666 44.6723 39.7392C27.1391 55.8124 14.4524 75.1848 6.68254 96.0316C6.01724 97.8166 4.03085 98.7244 2.24585 98.0592C0.460899 97.3939 -0.446913 95.4075 0.218201 93.6225C8.36014 71.7776 21.6551 51.481 40.0106 34.654Z" 
        fill={accentColor}
      />
    </svg>
  );
}

// Grey thin arc - Right side (2 o'clock to 4 o'clock)
export function GreyArcTop() {
  return (
    <svg 
      width="51" 
      height="136" 
      viewBox="0 0 51 136" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-8 right-6 translate-x-[16px] -translate-y-[1px] rotate-[0.4deg]"
    >
      <path 
        d="M36.3831 63.8582C29.0654 41.2262 16.7307 21.6277 1.00905 5.8864C-0.337095 4.53856 -0.33586 2.35453 1.01191 1.00833C2.35971 -0.337792 4.54377 -0.336491 5.88997 1.01118C22.3644 17.5062 35.2862 38.0424 42.9471 61.7359C50.6079 85.4294 52.1553 109.643 48.4566 132.661C48.1542 134.542 46.3843 135.821 44.5036 135.519C42.6228 135.217 41.3431 133.447 41.6454 131.566C45.175 109.6 43.7007 86.4903 36.3831 63.8582Z" 
        fill="#1E1E1E" 
        fillOpacity="0.08"
      />
    </svg>
  );
}

// Orange arc - Bottom (5 o'clock to 7 o'clock)
export function OrangeArc({ accentColor = "#E76A39" }: AccentShapesProps) {
  return (
    <svg 
      width="142" 
      height="33" 
      viewBox="0 0 142 33" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-2 left-16 -translate-x-2 translate-y-2 rotate-[10deg]"
    >
      <path 
        d="M72.9118 30.9626C48.1855 33.9094 24.1279 30.7571 2.25594 22.6881C0.468875 22.0286 -0.445439 20.0452 0.21388 18.258C0.873286 16.4709 2.85676 15.5566 4.64395 16.2159C25.5165 23.9163 48.4769 26.9273 72.0954 24.1125C95.7139 21.2976 117.324 12.9749 135.802 0.584763C137.384 -0.476126 139.527 -0.0536413 140.588 1.52848C141.649 3.11062 141.226 5.25341 139.644 6.31439C120.281 19.2978 97.638 28.0157 72.9118 30.9626Z" 
        fill={accentColor}
      />
    </svg>
  );
}

// Dashed circle stroke - centered behind image
export function DashedCircle() {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 240 240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0"
    >
      <circle 
        cx="120" 
        cy="120" 
        r="115" 
        stroke="black" 
        strokeOpacity="0.06" 
        strokeWidth="2" 
        strokeDasharray="12 12"
      />
    </svg>
  );
}

// All accent shapes combined
export function CategoryAccentShapes({ accentColor }: AccentShapesProps) {
  return (
    <>
      <DashedCircle />
      <OrangeArc accentColor={accentColor} />
      <GreyArcTop />
      <GreenArc />
    </>
  );
}
