/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffd200",
          light: "#ffdb4d",
          dark: "#e6bc00",
        },
        secondary: {
          DEFAULT: "#b2ecff",
          light: "#d1f4ff",
          dark: "#89d8e6",
        },
        background: {
          DEFAULT: "#f2f2f2",
          obj: "#f9f9f9",
          footer: "#1a1a1a",
        },
        success: {
          DEFAULT: "#70e587",
          light: "#98f5a7",
          dark: "#58c570",
        },
        error: {
          DEFAULT: "#ff7171",
          light: "#ffa2a2",
          dark: "#e65252",
        },
      },
    },
  },
  plugins: [daisyui],
};
