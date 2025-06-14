// =================  tailwind.config.cjs  =================
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2563eb" }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
