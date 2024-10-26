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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffd200",
          "primary-focus": "#e6bc00",
          "primary-content": "#ffffff",
          secondary: "#b2ecff",
          "secondary-focus": "#89d8e6",
          "secondary-content": "#000000",
          accent: "#fbbf24",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          info: "#3abff8",
          success: "#70e587",
          warning: "#ffcc00",
          error: "#ff7171",
        },
      },
    ],
  },
  plugins: [daisyui],
};
