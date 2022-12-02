<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
  <nav style="height: 30px width:100%">
    <div>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Departments' }">Departments</RouterLink>
      <RouterLink :to="{ name: 'AboutUs' }">About Us</RouterLink>
    </div>
    <div class="menu">
      <div v-if="isAuthenticated">
        <RouterLink :to="{ name: 'Employees' }" href="#">Employee Directory</RouterLink>
        <RouterLink :to="{ name: 'Enrollment' }" href="#">Enrollment Forms</RouterLink>
        <button v-if="isAuthenticated" class="menu-logout" @click="logout">Logout</button>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
      </div>
    </div>
    <p v-show="isAuthenticated" style="text-align: right">
      Welcome back
      <strong
        ><i>{{ user?.email }}</i></strong
      >
    </p>
  </nav>
  <div>
    <RouterLink :to="{ name: 'Home' }">
      <span class="brand-title"><span class="brand-title"></span>{{ brand }}</span>
    </RouterLink>
  </div>
</template>

<style lang="postcss">
nav {
  @apply flex justify-center space-x-4 bg-green-900 text-slate-100;
  & div {
    @apply space-x-6;
    & .router-link-active {
      @apply bg-slate-100 px-1 py-2 text-green-900;
    }
    .menu {
      @apply flex;
      &-login {
        @apply bg-green-500 px-1 py-0 hover:bg-green-800;
      }
      &-logout {
        @apply bg-red-500 px-1 py-0 hover:bg-red-800;
      }
    }
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
