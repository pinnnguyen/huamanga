<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide">
      <div>
        <img
          data-src="https://f2.kkmh.com/image/230512/HAHzSU4tg.png-t.w1280.webp.h"
          vw="718"
          data-v-204f3716=""
          src="https://f2.kkmh.com/image/230512/HAHzSU4tg.png-t.w1280.webp.h"
        >
      </div>
    </SwiperSlide>
  </Swiper>
</template>
