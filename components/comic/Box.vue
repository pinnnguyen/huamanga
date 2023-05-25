<script setup lang="ts">
import { Comic } from '~/types/Comic'

defineProps<{
  comics: Comic[]
}>()
</script>

<template>
  <div class="comic-box">
    <ComicItem
      v-for="comic in comics"
      :key="comic._id"
      :name="comic.name"
      :thumbnail="comic.thumbnail"
      :review="comic.review"
      :slug="comic.slug"
      :follow="comic.follow"
    />
  </div>
</template>
