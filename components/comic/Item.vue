<script setup lang="ts">
type Props = {
  slug: string
  name: string
  thumbnail: string
  review: string
  follow: number
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="`/topic/${slug}`"
    :title="name"
    class="comic-item"
  >
    <div class="cover">
      <img
        :src="thumbnail"
        lazy="loaded"
      >
      <div class="mask">
        {{ follow }} người theo dõi
      </div>
    </div>
    <div class="title">
      {{ name }}
    </div>
    <div class="desc">
      {{ review ? review : '...' }}
    </div>
  </NuxtLink>
</template>
