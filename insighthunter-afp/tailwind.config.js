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
          accent: "#22c55e",
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
