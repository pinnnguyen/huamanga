<script setup lang="ts">
const { data: homeData } = useFetch('/api/home')

</script>

<template>
  <div v-for="hData in homeData" :key="hData.name" class="find-item item-0">
    <div class="comic-module-one">
      <h3 class="title">
        {{ hData.name }}
      </h3>
      <ComicBox :comics="hData.comics" />
      <div class="btn-box">
        <div>
          Xem thêm
        </div>
        <div>
          Làm mới
        </div>
      </div>
    </div>
  </div>
</template>
