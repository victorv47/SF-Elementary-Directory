<script setup>
import { ref } from 'vue'
const title = ref('About Us')
</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <h1 class="body">
    Established in 2002, Sam Fisher Elementary School was created with the one goal of providing exceptional education
    for the children in the Towson, Maryland area. We work hard to bring in passionate and motivated instructors who
    relish in our values and dedicate themselves in the enrichment of our students education.
  </h1>
</template>

<style>
.title {
  @apply flex items-center justify-center py-8 text-6xl font-thin text-slate-800;
}
.body {
  @apply px-16 text-2xl font-thin text-slate-800;
}
</style>
