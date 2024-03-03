import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  darkMode: ["class"],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1600px",
      },
    },

    screens: {
      xxs: '324px',
      xs: '356px',
      sm: '400px',
      smd: '532px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1800px',
    },

    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config