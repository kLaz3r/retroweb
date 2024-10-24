import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        display: ["Orbitron", ...fontFamily.sans],
        body: ["Montserrat", ...fontFamily.sans],
      },
      colors: {
        background: "rgba(13, 2, 33, 1)",
        lighterBackground: "rgba(38, 20, 71, 1)",
        text: "rgba(45, 226, 230, 1)",
        secondary: "rgba(255, 56, 100, 1)",
        tertiary: "rgba(255, 108, 17, 1)",
        bodyText: "rgba(175, 222, 224, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
