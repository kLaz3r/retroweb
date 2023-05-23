import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        light: "#aaa",
        secondary: "#333",
      },
    },
  },
  plugins: [],
} satisfies Config;
