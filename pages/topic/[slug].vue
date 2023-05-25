<script setup lang="ts">
import { Comic } from '~/types/Comic'

const route = useRoute()
const slug = route.params.slug
const { data: comic } = useFetch(`/api/comic/${slug}`)
</script>

<template>
  <div class="topicDetail">
    <div class="page-head">
      <NuxtLink to="/">
        <i class="btns-back" />
      </NuxtLink>
      <span
        class="title"
      >
        {{ comic.name }}
      </span>
    </div>
    <PageHead>
      <template #thumbnail>
        <img class="h-[258px] object-cover" :src="comic.thumbnail">
      </template>
      <template #name>
        {{ comic.name }}
      </template>
      <template #view>
        {{ comic.view }}
      </template>
      <template #comment>
        {{ comic.comment }}
      </template>
      <template #follow>
        {{ comic.follow }}
      </template>
    </PageHead>
    <TopicDescription>
      <template #genres>
        <span v-for="gen in comic.genres" :key="gen">
          {{ gen }}
        </span>
      </template>
      <template #dess>
        {{ comic.review }}
      </template>
    </TopicDescription>
    <TopicChapters />
    <TopicChapterList />
    <TopicRecommend />
    <TopicReadContinue />
    <div class="add-desktop" />
  </div>
</template>
<script setup>
</script>
