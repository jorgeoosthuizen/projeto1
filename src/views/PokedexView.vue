<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
    <div class="search mb-3">
      <input
        type="text"
        v-model="searchQuery"
        @input="searchPokemon"
        placeholder="Enter Pokémon name"
        class="form-control"
      />
    </div>
    <div v-if="pokemon !== null" class="mt-3">
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
import { getAuth } from "firebase/auth";
import db from "../firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const auth = getAuth();

const searchQuery = ref("");
const pokemon = ref(null);
const flag = ref(false);
const error = ref(null);
const isFavorite = ref(false);
const isUserLogged = ref(localStorage.getItem("isLogged"));

watchEffect(() => {
  isUserLogged.value = !!auth.currentUser;
  localStorage.setItem("isLogged", isUserLogged.value);
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

// Function to toggle a Pokemon as favorite
const toggleFavorite = async () => {
  const user = auth.currentUser;
  if (!user) {
    console.error("No authenticated user found.");
    return;
  }

  if (pokemon.value) {
    try {
      const pokemonName = pokemon.value.name;
      const userId = user.uid;

      // Query to check if this Pokemon is already a favorite of the current user
      const querySnapshot = await getDocs(
        query(
          collection(db, "favorites"),
          where("user_id", "==", userId),
          where("pokemon_name", "==", pokemonName)
        )
      );

      if (querySnapshot.empty) {
        // If there is no favorite with this name for this user, we add it
        await addDoc(collection(db, "favorites"), {
          user_id: userId,
          pokemon_name: pokemonName,
          pokemon__artwork: pokemon.value.official_artwork,
        });
        console.log("Pokemon added to favorites");
        // Update isFavorite only after the adding operation is successful
        isFavorite.value = true;
      } else {
        // If there is already a favorite with this name for this user, we remove it
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
          console.log("Pokemon removed from favorites");
        });
        // Update isFavorite only after the removing operation is successful
        isFavorite.value = false;
      }
    } catch (error) {
      console.error("Error adding/removing Pokémon to/from favorites:", error);
    }
  } else {
    // If the user is not authenticated, set isFavorite to false
    isFavorite.value = false;
  }
};

// Function to check if a Pokemon is favorite of the current user
const isPokemonFavorite = async (pokemonName) => {
  const user = auth.currentUser;
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
</style>
