// tailwind.config.js
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}", "public/**/*.html"],
  theme: {
    extend: {
      colors: {
        ih: {
          bg: "#020617",           // page background
          panel: "#02091f",        // main panel
          card: "#020d2c",         // inner cards
          border: "#1d2b4a",
          text: "#e5f0ff",
          textMuted: "#7b8bb2",
          cyan: "#38bdf8",
          cyanSoft: "#0ea5e9",
          purple: "#a855f7",
          accent: "#22c55e"
              cream: {
          50: `#fcfcf9`,
          100: `#fffffd`,
        },
        gray: {
          200: `#f5f5f5`,
          300: `#a7a9a9`,
          400: `#777c7c`,
        },
        slate: {
          500: `#626c71`,
          900: `#13343b`,
        },
        brown: {
          600: `#5e5240`,
        },
        charcoal: {
          700: `#1f2121`,
          800: `#262828`,
        },
        teal: {
          300: `#32b8c6`,
          400: `#2da6b2`,
          500: `#21808d`,
          600: `#1d7480`,
          700: `#1a6873`,
        },
        emerald: {
          400: `#10b981`,
          500: `#059669`,
          600: `#047857`,
          700: `#065f46`,
        },
        orange: {
          500: `#f97316`,
        },
        red: {
          600: `#dc2626`,
        },
      },
      fontFamily: {
        sans: [`FKGroteskNeue`, `Geist`, `Inter`, `sans-serif`],
      },        cream: {
          50: `#fcfcf9`,
          100: `#fffffd`,
        },
        gray: {
          200: `#f5f5f5`,
          300: `#a7a9a9`,
          400: `#777c7c`,
        },
        slate: {
          500: `#626c71`,
          900: `#13343b`,
        },
        brown: {
          600: `#5e5240`,
        },
        charcoal: {
          700: `#1f2121`,
          800: `#262828`,
        },
        teal: {
          300: `#32b8c6`,
          400: `#2da6b2`,
          500: `#21808d`,
          600: `#1d7480`,
          700: `#1a6873`,
        },
        emerald: {
          400: `#10b981`,
          500: `#059669`,
          600: `#047857`,
          700: `#065f46`,
        },
        orange: {
          500: `#f97316`,
        },
        red: {
          600: `#dc2626`,
        },
      },
      fontFamily: {
        sans: [`FKGroteskNeue`, `Geist`, `Inter`, `sans-serif`],
      },
      
        },
      },
      boxShadow: {
        ihPanel: "0 0 60px rgba(15, 23, 42, 0.9)",
        ihCard: "0 0 30px rgba(37, 99, 235, 0.35)",
      },
      borderRadius: {
        ih: "28px",
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    `src/**/*.{js,jsx,ts,tsx}`,
    `public/**/*.html`,
  ],
  theme: {
    extend: {
      colors: {

    },
  },
  plugins: [],
}
