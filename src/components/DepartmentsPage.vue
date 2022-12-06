<script setup>
import { ref } from 'vue'
</script>

<template>
  <h1 class="flex items-center justify-center py-8 text-6xl font-thin text-slate-800">Departments</h1>
  <div class="department">
    <div class="form">
      <label for="firstName">First Name</label>
    </div>
    <div class="form">
      <label for="lastName">Last Name</label>
    </div>
    <div class="form">
      <label for="email">Email</label>
    </div>
    <div class="form">
      <label for="phoneNumber">Phone Number</label>
    </div>

    <h1>Child Information</h1>
    <div class="form">
      <label for="firstName">First Name</label>
    </div>
    <div class="form">
      <label for="lastName">Last Name</label>
    </div>

    <h1>Address Information</h1>
    <div class="form">
      <label for="streetName">Street Name</label>
    </div>
    <div class="form">
      <label for="streetNumber">Street Number</label>
    </div>
    <div class="form">
      <label for="city">City</label>
    </div>
    <div class="form">
      <label for="postcode">Postcode</label>
    </div>
  </div>
</template>

<style lang="postcss">
.app {
  text-align: center;
  font-size: large;
}
.enrollment-form {
  margin: 5px auto;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  padding-bottom: 10px;
  width: 100%;
  text-align: left;
}
label {
  display: block;
  font-weight: bold;
}

input {
  padding: 10px;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: 0;
  background: #f8edcf;
}

button {
  margin-top: 30px;
  background: rgb(20 83 45);
  padding: 10px;
  width: 100%;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  outline: 0;
}
</style>
