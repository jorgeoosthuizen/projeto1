<template>
  <div class="profile">
    <!-- Profile content -->
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();



async function logout() {
  // Emitir um evento 'authChanged' com o novo estado de autenticação
  localStorage.setItem('isLogged', 'false');
  emitAuthChanged(false);

  await router.push("/");
}

// Função para emitir um evento 'authChanged' com o novo estado de autenticação
function emitAuthChanged(newValue) {
  const event = new CustomEvent("authChanged", {
    detail: newValue,
  });
  window.dispatchEvent(event);
}
</script>
