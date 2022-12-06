<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Departments' }">Departments</RouterLink>
      <RouterLink :to="{ name: 'AboutUs' }">About Us</RouterLink>
      <RouterLink :to="{ name: 'EnrollmentEntry' }">Enroll Here</RouterLink>
      <RouterLink v-if="isAuthenticated" :to="{ name: 'Employees' }" href="#">Employee Directory</RouterLink>
      <RouterLink v-if="isAuthenticated" :to="{ name: 'Enrollment' }" href="#">Enrollment Forms</RouterLink>
      <button v-if="isAuthenticated" @click="logout">Logout</button>
      <div v-else>
        <RouterLink :to="{ name: 'Login' }" href="#" class="login">Login</RouterLink>
      </div>
    </div>
  </nav>
  <div>
    <RouterLink :to="{ name: 'Home' }">
      <span class="brand-title"
        ><img
          class="h-20 w-20"
          src="https://raw.githubusercontent.com/victorv47/SF-Elementary-Directory/main/photos/IMG_0609.PNG"
        /><span class="brand-title"></span>{{ brand }}</span
      >
    </RouterLink>
  </div>
</template>

<style lang="postcss">
nav {
  display: flex;
  background: rgb(22 101 52);
  color: white;
  height: 40px;
  .wrapper {
    @apply container flex w-full items-center justify-evenly;
    margin: 0 auto;
    & button {
      width: 100px;
      margin-top: 0px;
      padding: 5px;
      height: 100%;
      border-radius: 0px;
      border: 0px;
      color: white;
    }
    & div {
      width: 100px;
      padding: 7px;
      margin-top: 0px;
      height: 100%;
      border-radius: 0px;
      background: rgb(20 83 45);
      border: 0px;
      color: white;
      text-align: center;
    }
  }
}

div {
  .brand {
    &-title {
      @apply flex justify-center bg-slate-100 py-6 px-4 text-6xl font-bold text-green-900;
    }
  }
}
</style>
