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
import { useAuthStore} from '../store/auth'; // Importe o store do Pinia

const email = ref('');
const password = ref('');
const router = useRouter();
const authStore = useAuthStore(); // Use o store do Pinia

async function login() {
  try {
    await authStore.login(email.value, password.value); // Chame a ação de login no store do Pinia
    router.push('/'); // Redirecione após o login
  } catch (error) {
    console.error('Error logging in:', error.message);
    alert('Login failed. Please check your email and password.');
  }
}
</script>

<style scoped>
/* Seu estilo aqui */
</style>
