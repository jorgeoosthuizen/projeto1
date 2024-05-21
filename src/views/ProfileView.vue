<template>
  <div class="container-fluid">
    <div class="row">
      
      <div class="col-md-2 px-5"> 
        <div class="profile-image-container rounded-circle border border-primary"></div>
      </div>
      
      <div class="col-md-5">
        <div class="middle-column">
          <div class="row">
            <div class="col-3">
              <h3>Your team:</h3> 
            </div>
          </div>
          <div class="row row-cols-md-6 g-1 "> 
            <div v-for="favorite in favorites" :key="favorite.pokemonName" class="col">
              <div class="card custom-card mb-4">
                <img :src="favorite.pokemonArtwork" class="card-img-top img-fluid" alt="Pokemon Image" />
                <div class="card-body text-center p-2">
                  <h6 class="card-title mb-0">{{ favorite.pokemonName }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h6>You can change your team by removing/adding favorites in the pokedex search!</h6>
      </div>
    </div>
  </div>
</template>




<script setup>
import { useAuthStore } from "../store/auth"; 
import { ref,  onMounted } from 'vue';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/firebase';


const favorites = ref([]);



onMounted(async () => {
  favorites.value = await getFavorites();
});

const getFavorites = async () => {
  const authStore = useAuthStore();
  const favorites = ref([]);

  try {
    const userId = authStore.user ? authStore.user.uid : null; // Get current user ID

    if (!userId) {
      throw new Error('No authenticated user found.');
    }

    // Query for current user's favorites
    const q = query(collection(db, 'favorites'), where('user_id', '==', userId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const favorite = {
        pokemonName: data.pokemon_name,
        pokemonArtwork: data.pokemon__artwork
      };
      favorites.value.push(favorite); 
    });
  } catch (error) {
    console.error('Error getting favorites:', error.message);
  }

  return favorites.value; 
};

</script>

<style scoped>

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