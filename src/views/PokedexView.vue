<template>
<div class="container-fluid">
  
    <div class="search-container ">
      <input
        type="text"
        v-model="searchQuery"
        @keypress.enter="searchPokemon"
        placeholder="Enter Pokémon name"
        class="form-control"
      />
    </div>
    <h6 class="prompt mt-2">Press enter to search</h6>
    <div v-if="pokemon !== null" class="mt-3 carddiv">
      <div class="card" style="width: 35rem">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              :src="pokemon.official_artwork"
              :alt="pokemon.name"
              class="card-img"
            />
            <h5 class="card-title mt-2 text-center border-bottom p-3">
              {{ pokemon.name }}
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" style="border: none">
                Height: {{ pokemon.height }} m
              </li>
              <li class="list-group-item">Weight: {{ pokemon.weight }} kg</li>
            </ul>
          </div>
          <div class="col-md-8 custom-border-left">
            <div class="card-body">
              <div v-for="stat in pokemon.stats" :key="stat.name" class="mb-2">
                <span>{{ stat.name }}:</span>
                <div class="progress" style="height: 20px; border-radius: 0">
                  <div
                    class="progress-bar bg-success"
                    :style="{ width: calculateStatBarWidth(stat.value) }"
                    role="progressbar"
                    :aria-valuenow="stat.value"
                    aria-valuemin="0"
                    aria-valuemax="255"
                  >
                    <span class="sr-only">{{ stat.value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-foot">
              <ul class="list-inline" v-if="isUserLogged">
                <li class="list-inline-item">
                  <button class="favorite-button" @click="toggleFavorite">
                    {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
                    <span :class="{ yellow: isFavorite }">&#9733;</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="flag" class="mt-3">
      <p>No Pokémon found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { getDocs, query, collection, where, addDoc, deleteDoc } from "firebase/firestore";
import { useAuthStore } from "../store/auth"; // Import the Pinia store for authentication
import db from "../firebase/firebase"; // Import your Firebase configuration

const authStore = useAuthStore(); // Use the Pinia store for authentication

const searchQuery = ref("");
const pokemon = ref(null);
const flag = ref(false);
const error = ref(null);
const isFavorite = ref(false);

// Update the isUserLogged variable with the authentication state from Pinia
const isUserLogged = ref(authStore.isAuthenticated);

// Watch for changes in the authentication state and update isUserLogged as necessary
watchEffect(() => {
  isUserLogged.value = authStore.isAuthenticated;
});

// Function to handle the search for a Pokemon
const searchPokemon = async () => {
  error.value = null;
  if (searchQuery.value.trim() !== "") {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon data");
      }

      const data = await response.json();

      pokemon.value = {
        name: data.name,
        official_artwork: data.sprites.other["official-artwork"].front_default,
        height: data.height,
        weight: data.weight,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      };

      // Check if this Pokemon is a favorite of the current user
      isFavorite.value = await isPokemonFavorite(data.name);

      flag.value = false;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      pokemon.value = null;
      flag.value = true;
      error.value = "Failed to fetch Pokémon data. Please try again.";
    }
  } else {
    pokemon.value = null;
    flag.value = false;
  }
};

// Function to calculate the width of the stat bar
const calculateStatBarWidth = (value) => `${(value / 255) * 100}%`;

const toggleFavorite = async () => {
  const user = authStore.user; // Get the current user from the store
  if (!user) {
    console.error("No authenticated user found.");
    return;
  }

  const pokemonName = pokemon.value?.name;
  if (!pokemonName) {
    console.error("No Pokemon selected.");
    return;
  }

  try {
    const userId = user.uid;

    // Query to check if the Pokemon is already a favorite of the current user
    const querySnapshot = await getDocs(
      query(
        collection(db, "favorites"),
        where("user_id", "==", userId),
        where("pokemon_name", "==", pokemonName)
      )
    );

    if (querySnapshot.empty) {
      // Query to check if the user already has 5 favorites
      const favoritesQuery = query(
        collection(db, "favorites"),
        where("user_id", "==", userId)
      );
      const favoritesSnapshot = await getDocs(favoritesQuery);

      if (favoritesSnapshot.size >= 6) {
        alert("You already have 6 favorites!");
        return;
      }

      // If there is no favorite with this name for this user, we add it
      await addDoc(collection(db, "favorites"), {
        user_id: userId,
        pokemon_name: pokemonName,
        pokemon__artwork: pokemon.value.official_artwork,
      });
      alert("Pokemon added to favorites");

      // Update isFavorite after adding operation
      isFavorite.value = true;
    } else {
      // If the Pokemon is already a favorite, we remove it
      querySnapshot.forEach(async (doc) => {
        try {
          await deleteDoc(doc.ref);
          alert("Pokemon removed from favorites");
          // Update isFavorite after removing operation
          isFavorite.value = false;
        } catch (error) {
          console.error("Error removing Pokémon from favorites:", error);
        }
      });
    }
  } catch (error) {
    console.error("Error toggling Pokémon favorite status:", error);
  }
};





const isPokemonFavorite = async (pokemonName) => {
  const user = authStore.user; // Get the current user from the store
  if (!user) {
    return false;
  }

  try {
    const userId = user.uid;

    const querySnapshot = await getDocs(
      query(
        collection(db, "favorites"),
        where("user_id", "==", userId),
        where("pokemon_name", "==", pokemonName)
      )
    );

    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking if Pokémon is favorite:", error);
    return false;
  }
};
</script>



<style scoped>
ul {
  list-style-type: none;
}

.custom-border-left {
  border-left: 1px solid #ccc;
}

.favorite-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.favorite-button .yellow {
  color: yellow;
}

.search-container {
  width: 15%;
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust as needed */
}

.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carddiv {
  width: 100%;
  display: flex;
  justify-content: center;
}

.prompt{
  font-size: 15px;
}
</style>
