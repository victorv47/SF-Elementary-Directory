<script setup>
import { ref } from 'vue'
const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'AboutUs' }">About Us</RouterLink>
    <RouterLink :to="{ name: 'Departments' }">Departments</RouterLink>
    <RouterLink :to="{ name: 'Employees' }">Employee Directory</RouterLink>
    <RouterLink :to="{ name: 'Enrollment' }">Enrollment Forms</RouterLink>
  </nav>
  <div>
    <RouterLink :to="{ name: 'Home' }">
      <span class="brand-title"><span class="brand-title"></span>{{ brand }}</span>
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-6 bg-green-900 text-slate-100;
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
div {
  .brand {
    &-title {
      @apply flex h-32 justify-center bg-slate-100 py-6 text-6xl font-bold text-green-900;
    }
  }
}
</style>
