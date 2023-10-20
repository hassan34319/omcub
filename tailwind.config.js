const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          800: "#f15d2a",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
