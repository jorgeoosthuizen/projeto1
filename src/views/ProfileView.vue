<template>
  <div class="container-fluid mt-4">
    <button @click="getAllUsers" class="btn btn-primary">Get All Users</button>
    <div v-if="User.length > 0" class="Users">
      <div v-for="user in User" :key="user.id" class="user">
        <p>ID: {{ user.id }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Created At: {{ user.createdAt }}</p>
      </div>
    </div>
    <div v-else>
      <p>No User Data</p>
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const User = ref([]);
const error = ref('');

const getAllUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users', {
      headers: {
        'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT'
      }
    });

    const data = response.data;

    User.value = data.map(user => ({
      id: user.user_id,
      email: user.email,
      createdAt: user.createdAt
    }));

  } catch (err) {
    error.value = 'Falha ao carregar User';
  }
};
</script>

<style scoped>
.container-fluid {
  padding: 20px;
}

.Users {
  margin-top: 20px;
}

.user {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.custom-card {
  width: 100px;
}

.custom-card .card-img-top {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}

.profile-image-container {
  width: 200px;
  height: 200px;
  background-image: url(../assets/icons/pokemon-trainer.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
