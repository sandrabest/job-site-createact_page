import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Existing color variables
        foreground: "var(--foreground)",
        customBlue: "rgb(238, 244, 255)", // Adding your custom color
      },
    },
  },
  plugins: [],
};

export default config;
