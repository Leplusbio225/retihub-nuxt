// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/ui", "nuxt-vue3-google-signin"],

  vite: {
    plugins: [tailwindcss()],
  },

  googleSignIn: {
    clientId: 'CLIENT ID OBTAINED FROM GOOGLE API CONSOLE',
  },
});