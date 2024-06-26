import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xxs': '100px',
        'xs': '380px'
      },
      fontFamily: {
        'inter': ['__Inter_aaf875'],
        'montserrat': ['__Montserrat_b1da2a']
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  darkMode: 'class',
};
export default config;
