/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        // MunchSpace Brand Colors
        primary: {
          DEFAULT: '#E76A39',
          hover: '#d45a29',
          light: '#ff8a5c',
        },
        secondary: {
          DEFAULT: '#171717',
          light: '#262626',
        },
        munchspace: {
          orange: '#E76A39',
          red: '#EF4444',
          green: '#16A34A',
          blue: '#3B82F6',
          yellow: '#F59E0B',
        },
        
        // Existing Variables (Keep for compatibility)
        fg: "var(--color-fg)",
        "fg-muted": "var(--color-fg-muted)",
        "fg-subtle": "var(--color-fg-subtle)",

        bg: "var(--color-bg)",
        "bg-muted": "var(--color-bg-muted)",
        "bg-subtle": "var(--color-bg-subtle)",

        accent: "var(--color-accent)",
        "accent-on": "var(--color-accent-on)",
        "accent-bg": "var(--color-accent-bg)",
      },

      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      opacity: {
        low: "var(--opacity-low)",
        md: "var(--opacity-md)",
        high: "var(--opacity-high)",
      },

      boxShadow: {
        token: "var(--shadow-default)",
      },

      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        body: "var(--font-size-body)",
        h6: "var(--font-size-h6)",
        h5: "var(--font-size-h5)",
        h4: "var(--font-size-h4)",
        h3: "var(--font-size-h3)",
        h2: "var(--font-size-h2)",
        h1: "var(--font-size-h1)",
      },

      lineHeight: {
        heading: "var(--line-height-heading)",
        body: "var(--line-height-body)",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      // ============================================================
      // 📌 ENHANCED TYPOGRAPHY BASED ON FIGMA TOKENS
      // ============================================================
      addComponents({
        ".h1": {
          fontSize: "var(--font-size-h1)",
          lineHeight: "var(--line-height-heading)",
          fontWeight: "700",
        },
        ".h2": {
          fontSize: "var(--font-size-h2)",
          lineHeight: "var(--line-height-heading)",
          fontWeight: "600",
        },
        ".h3": {
          fontSize: "var(--font-size-h3)",
          fontWeight: "600",
        },
        ".h4": {
          fontSize: "var(--font-size-h4)",
          fontWeight: "600",
        },
        ".h5": {
          fontSize: "var(--font-size-h5)",
        },
        ".h6": {
          fontSize: "var(--font-size-h6)",
          fontWeight: "600",
        },
        ".body-1": {
          fontSize: "var(--font-size-body)",
          lineHeight: "var(--line-height-body)",
        },
        ".body-2": {
          fontSize: "var(--font-size-sm)",
          lineHeight: "var(--line-height-body)",
        },
        ".caption": {
          fontSize: "var(--font-size-xs)",
          opacity: "0.8",
        },
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--space-md)",
          paddingRight: "var(--space-md)",
          maxWidth: "100%",

          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },

        /* Wider landing-page container */
        ".container-lg": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--space-lg)",
          paddingRight: "var(--space-lg)",
          maxWidth: "1400px",
        },

        /* Compact form container */
        ".container-sm": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--space-sm)",
          paddingRight: "var(--space-sm)",
          maxWidth: "600px",
        },

        /* Section padding helpers */
        ".section": {
          paddingTop: "var(--space-xl)",
          paddingBottom: "var(--space-xl)",
        },
        ".section-lg": {
          paddingTop: "calc(var(--space-xl) * 1.5)",
          paddingBottom: "calc(var(--space-xl) * 1.5)",
        },
        ".section-sm": {
          paddingTop: "var(--space-lg)",
          paddingBottom: "var(--space-lg)",
        },
      });

      // ============================================================
      // 📌 BUTTON COMPONENTS — AUTO-THEMED (LIGHT + DARK)
      // ============================================================
      addComponents({
        ".btn-primary": {
          backgroundColor: "var(--color-accent-bg)",
          color: "var(--color-accent-on)",
          padding: "12px 20px",
          borderRadius: "var(--radius-lg)",
          fontWeight: "600",
          transition: "all .2s ease",
        },
        ".btn-primary:hover": {
          opacity: ".9",
        },

        ".btn-secondary": {
          border: "1px solid var(--color-accent-bg)",
          color: "var(--color-accent-bg)",
          padding: "12px 20px",
          borderRadius: "var(--radius-lg)",
          fontWeight: "600",
        },
        ".btn-secondary:hover": {
          backgroundColor: "var(--color-accent-bg)",
          color: "var(--color-accent-on)",
        },
      });

      // ============================================================
      // 📌 CARD COMPONENT
      // ============================================================
      addComponents({
        ".card": {
          backgroundColor: "var(--color-bg-muted)",
          padding: "var(--space-md)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-default)",
        },
      });

      // ============================================================
      // 📌 UTILITIES
      // ============================================================
      addUtilities({
        ".shadow-token": {
          boxShadow: "var(--shadow-default)",
        },

        ".radius-sm": { borderRadius: "var(--radius-sm)" },
        ".radius-lg": { borderRadius: "var(--radius-lg)" },
        ".radius-xl": { borderRadius: "var(--radius-xl)" },
      });
    }),
  ],
};
