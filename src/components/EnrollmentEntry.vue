<script>
import { reactive } from 'vue'

export default {
  name: 'EnrollmentForm',
  setup() {
    const form = reactive({
      Guardian: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      },
      Child: {
        firstName: '',
        lastName: '',
      },
      Address: {
        streetName: '',
        streetNumber: '',
        city: '',
        postcode: '',
      },
    })

    return {
      form,
    }
  },
  methods: {
    handleSubmit() {
      alert('form submitted')
    },
  },
}
</script>

<template>
  <h1 class="flex items-center justify-center py-8 text-6xl font-thin text-slate-800">Enrollment Form</h1>
  <div class="app">
    <form class="enrollment-form" @submit.prevent="handleSubmit">
      <h1>Guardian Information</h1>
      <div class="form">
        <label for="firstName">First Name</label>
        <input id="firstName" v-model="form.Guardian.firstName" type="text" required />
      </div>
      <div class="form">
        <label for="lastName">Last Name</label>
        <input id="lastName" v-model="form.Guardian.lastName" type="text" required />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <input id="email" v-model="form.Guardian.email" type="email" required />
      </div>
      <div class="form">
        <label for="phoneNumber">Phone Number</label>
        <input id="phoneNumber" v-model="form.Guardian.phoneNumber" type="text" required />
      </div>

      <h1>Child Information</h1>
      <div class="form">
        <label for="firstName">First Name</label>
        <input id="firstName" v-model="form.Child.firstName" type="text" required />
      </div>
      <div class="form">
        <label for="lastName">Last Name</label>
        <input id="lastName" v-model="form.Child.lastName" type="text" required />
      </div>

      <h1>Address Information</h1>
      <div class="form">
        <label for="streetName">Street Name</label>
        <input id="streetName" v-model="form.Address.streetName" type="text" required />
      </div>
      <div class="form">
        <label for="streetNumber">Street Number</label>
        <input id="streetNumber" v-model="form.Address.streetNumber" type="text" required />
      </div>
      <div class="form">
        <label for="city">City</label>
        <input id="city" v-model="form.Address.city" type="text" required />
      </div>
      <div class="form">
        <label for="postcode">Postcode</label>
        <input id="postcode" v-model="form.Address.postcode" type="text" required />
      </div>
      <div class="form">
        <button type="submit">Submit</button>
      </div>
    </form>
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
