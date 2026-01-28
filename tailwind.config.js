/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#1f2328",
        muted: "#5b6068",
        blush: {
          50: "#fff4f8",
          100: "#ffe6ef",
          200: "#ffcadd",
          300: "#ff9fc1",
          400: "#ff79aa",
          500: "#f35c96",
        },
        lilac: {
          50: "#f8f4ff",
          100: "#efe5ff",
          200: "#dccbff",
          300: "#c1a6ff",
          400: "#a47cff",
          500: "#8b5cf6",
        },
        stonegray: "#f0f1f4",
        slategray: "#d5d8de",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(31, 35, 40, 0.35)",
        card: "0 16px 40px -32px rgba(31, 35, 40, 0.4)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top, rgba(255, 121, 170, 0.2), transparent 55%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.18), transparent 55%)",
      },
    },
  },
  plugins: [],
};
