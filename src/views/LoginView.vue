<template>
  <form @submit.prevent="login">
    <div class="container">
      <h1>Login</h1>
      <hr>
      <label for="email"><b>Email</b></label>
      <input type="text" v-model="email" placeholder="Enter Email" name="email" id="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" name="psw" id="psw" required>

      <button type="submit" class="registerbtn">Login</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore} from '../store/auth'; 

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore(); 

async function login() {
  try {
    await authStore.login(email.value, password.value); 
    router.push('/');
  } catch (error) {
    console.error('Error logging in:', error.message);
    alert('Login failed. Please check your email and password.');
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box
}


.container {
  width: 40%;
  height: 40%;
  padding: 16px;
}


input[type=text],
input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus,
input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}


hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}


.registerbtn {
  background-color: dodgerblue;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}


a {
  color: dodgerblue;
}
</style>
