/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: "30px",
      },
      colors: {
        "light-grey": "#F4F4F4",
        "dark-red": "#B00005",
        yellow: "#FAEC70",
      },
      dropShadow: {
        "shadow-title": "1px 1px 1px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
