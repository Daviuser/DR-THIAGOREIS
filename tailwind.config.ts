import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { deep:"#101923", graphite:"#182633", mid:"#263B4B", accent:"#4A9BB8", mist:"#E8EEF2", soft:"#F5F7FA" },
    fontFamily: { sans:["var(--font-sans)","system-ui","sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
