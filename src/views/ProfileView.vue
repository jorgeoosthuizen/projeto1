<template>
    <div class="profile">
      <!-- Profile content -->
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';


const router = useRouter();

const isLogged = ref();


watch(isLogged, newValue => {
  localStorage.setItem('isLogged', newValue ? 'true' : 'false');
});


async function logout() {

  isLogged.value = false;
  
  localStorage.setItem('isLogged', 'false');

  

  await router.push('/');
  location.reload()
}


  </script>
  