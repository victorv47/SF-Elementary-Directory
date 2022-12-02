<script setup>
import { ref } from 'vue'
const title = ref('About Us')
</script>

<template>
  <main class="wrapper">
    <h1 class="title">{{ title }}</h1>
  </main>
</template>

<style>
.title {
  @apply flex min-h-screen items-center justify-center text-6xl font-thin text-slate-800;
}
</style>
