import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        innerContainer: "954px",
      },
      maxWidth: {
        innerContainer: "954px",
      },
      minWidth: {
        innerContainer: "954px",
      },
      colors: {
        blooper: "#0B2ACC",
        purps: "#7BA0FF",
        grayish: "#F5F5F5",
        figureGray: "#D9D9D9",
        almostDark: "#4B4B4B",
        prettyDark: "#1D1D20",
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
        blockquote: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      lineHeight: {
        body: "26px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
