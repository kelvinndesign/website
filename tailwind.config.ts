import { withRouter } from "next/router";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      'white': '#F8F8FB',
      'grey': '#474747',
      'blue': '#2D1FEA',
    },
  },

  plugins: [],
};
export default config;
