export default defineNuxtConfig({
  modules: ["nuxt-particles", "@vueuse/nuxt", "@pinia/nuxt"],
  css: [ "~/assets/css/main.css" ],
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  nitro: {
    preset: 'vercel',
  },
    build: {
    transpile: ['lib'], // Replace 'lib' with the actual package name if different
  },
  vite: {
    optimizeDeps: {
      include: ['lib'], // Replace 'lib' with the actual package name
    },
  },
  // image: {
  //     dir: "assets"
  // }
})