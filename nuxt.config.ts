import { defineNuxtConfig } from "nuxt/config";
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {},
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});
