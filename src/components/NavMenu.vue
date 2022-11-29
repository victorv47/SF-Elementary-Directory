<template>
  <nav>
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'AboutUs' }">About Us</RouterLink>
    <RouterLink :to="{ name: 'Departments' }">Departments</RouterLink>
    <RouterLink :to="{ name: 'Employees' }">Employee Directory</RouterLink>
    <RouterLink :to="{ name: 'Enrollment' }">Enrollment Forms</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
