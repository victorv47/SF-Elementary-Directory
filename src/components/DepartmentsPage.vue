<script setup>
import { ref } from 'vue'
</script>

<template>
  <h1 class="flex items-center justify-center py-8 text-6xl font-thin text-slate-800">Departments</h1>
  <div class="department">
    <h1 class="h1">Academic Services</h1>
    <h2 class="h2">(410) 875-9875</h2>
  </div>
  <div class="department">
    <h1 class="h1">After School Program</h1>
    <h2 class="h2">(410) 875-9863</h2>
  </div>
  <div class="department">
    <h1 class="h1">Counseling</h1>
    <h2 class="h2">(410) 875-8547</h2>
  </div>
  <div class="department">
    <h1 class="h1">Counseling</h1>
    <h2 class="h2">(410) 875-8547</h2>
  </div>
  <div class="department">
    <h1 class="h1">Human Resources</h1>
    <h2 class="h2">(410) 875-8572</h2>
  </div>
  <div class="department">
    <h1 class="h1">Payroll</h1>
    <h2 class="h2">(410) 875-9580</h2>
  </div>
  <div class="department">
    <h1 class="h1">Risk Management</h1>
    <h2 class="h2">(410) 875-5120</h2>
  </div>
  <div class="department">
    <h1 class="h1">Technology</h1>
    <h2 class="h2">(410) 875-5120</h2>
  </div>
</template>

<style lang="postcss">
.department {
  border: 1px;
  border-style: dashed;
  border-color: black;
  flex: auto;
  font-size: x-large;
  margin: auto;
  width: 900px;
  flex-direction: row;
  contain: content;
}
.h1 {
  text-align: left;
}
.h2 {
  text-align: right;
  margin: 0 auto;
}
</style>
