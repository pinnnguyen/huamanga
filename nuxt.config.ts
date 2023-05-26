export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/index.ts']
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGODB_URI,
    SERVICE_URL: process.env.SERVICE_URL
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vant/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge',
    'nuxt-icon'
  ],
  css: [
    '~/styles/index.css',
    '~/styles/home.css',
    '~/styles/mobile.css',
    '~/styles/swiper.css',
    '~/styles/app.css'
  ]
})
