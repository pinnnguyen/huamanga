<template>
  <div class="head-banner">
    <slot name="thumbnail" />
    <div class="mask">
      <div class="base-info">
        <p class="title">
          <slot name="name" />
        </p>
        <p class="info">
          <slot name="view" />
          <span />
          <slot name="comment" />
          <span />
          <slot name="follow" />
        </p>
      </div>
      <div class="follow-button ">
        Đọc ngay
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
