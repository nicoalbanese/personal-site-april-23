/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
    "./components/**/*.{js,ts,jsx,tsx, mdx}",
    "./app/**/*.{js,ts,jsx,tsx, mdx}",
  ],
  theme: {
    // colors: {
    //   primary: "#FFFFFF",
    //   "bg-white": "#FFFFFF",
    //   primaryDark: "",
    //   link: "text-sky-600",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
