<script setup>
import { ref } from 'vue'
import slides from '@/components/NewsFeed.vue'
</script>

<template>
  <p v-if="loading">Loading...</p>
  <slides />
  <div class="wrapper">Home</div>
</template>

<style>
.wrapper {
  @apply flex min-h-screen items-center justify-center text-6xl font-thin text-slate-800;
}
</style>
