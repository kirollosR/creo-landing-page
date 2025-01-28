import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins to Tailwind
      },
      scale: {
        '200': '2',
        '250': '2.5',
        '300': '3',
      },
      colors: {
        primeColor: "#1263B0",
        whiteColor: "#FFFFFF",
        secondColor: "#E96759",
        greyColor: "#D9D9D9",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
