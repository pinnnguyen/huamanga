export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vant/nuxt',
    'nuxt-swiper',
    '@nuxt/image-edge'
  ],
  css: [
    '~/styles/index.css',
    '~/styles/home.css',
    '~/styles/mobile.css',
    '~/styles/swiper.css',
    '~/styles/app.css'
  ]
})
