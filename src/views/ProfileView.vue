<template>
  <div class="profile">
    <!-- Profile content -->
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth"; // Importe o store do Pinia para autenticação

const router = useRouter();
const authStore = useAuthStore(); // Use o store do Pinia para autenticação

async function logout() {
  try {
    // Chame a ação de logout do store do Pinia
    await authStore.clearUser();
    await router.push("/");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
}
</script>
