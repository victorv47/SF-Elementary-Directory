<script setup>
import { ref } from 'vue'
const title = ref('About Us')
</script>

<template>
  <h1 class="title">
    {{ title }}
  </h1>
  <div id="icon">
    <img src="https://raw.githubusercontent.com/victorv47/SF-Elementary-Directory/main/photos/IMG_0609.PNG" />
  </div>
  <h1 class="body">
    Established in 2002, Sam Fisher Elementary School was created with the one goal of providing exceptional education
    for the children in the Towson, Maryland area. We work hard to bring in passionate and motivated instructors who
    relish in our values and dedicate themselves in the enrichment of our students education.
  </h1>
</template>

<style lang="postcss">
.title {
  @apply flex items-center justify-center py-8 text-center text-6xl font-thin text-slate-800;
}
#icon img {
  display: flex;
  height: 350px;
  width: 350px;
  margin: 0 auto;
}
.body {
  @apply flex items-center justify-center px-16 text-center text-2xl font-thin text-slate-800;
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
