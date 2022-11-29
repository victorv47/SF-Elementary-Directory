<script setup>
import { ref } from 'vue'

import NewsFeed from '@/components/NewsFeed.vue'
</script>

<template>
  <div class="wrapper">
    <NewsFeed />
    Home
  </div>
</template>

<style>
.wrapper {
  @apply flex min-h-screen items-center justify-center text-6xl font-thin text-slate-800;
}
</style>
