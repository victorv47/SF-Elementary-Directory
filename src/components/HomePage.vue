<script setup>
import slides from '@/components/NewsFeed.vue'
</script>

<template>
  <p v-if="loading">Loading...</p>
  <slides />
  <div class="title">Ready to Enroll Your Child?</div>
  <router-link class="router" :to="{ path: 'EnrollmentEntry' }"><button>Click Here to Enroll</button></router-link>
</template>

<style lang="postcss">
.title {
  @apply flex items-center justify-center py-8 text-6xl font-thin text-slate-800;
}
.router {
  display: flex;
  flex-direction: column;
  align-items: center;
  & button {
    font-size: large;
    margin-top: 10px;
    height: 60px;
    width: 200px;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    outline: 0;
    background: rgb(20 83 45);
  }
}
</style>
