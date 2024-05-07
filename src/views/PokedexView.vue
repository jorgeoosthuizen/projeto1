<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
    <div class="search mb-3">
      <input type="text" v-model="searchQuery" @input="searchPokemon" placeholder="Enter Pokémon name"
        class="form-control" />
    </div> 
    <div v-if="pokemon !== null" class="mt-3">
      <div class="card " style="width: 35rem;">
        <div class="row no-gutters ">
          <div class="col-md-4">
            <img :src="pokemon.official_artwork" :alt="pokemon.name" class="card-img" />
            <h5 class="card-title mt-2 text-center border-bottom p-3">{{ pokemon.name }}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" style="border: none">Height: {{ pokemon.height }} m</li>
              <li class="list-group-item">Weight: {{ pokemon.weight }} kg</li>
            </ul>
          </div>
          <div class="col-md-8 custom-border-left">
            <div class="card-body">
              <div v-for="stat in pokemon.stats" :key="stat.name" class="mb-2">
                <span>{{ stat.name }}:</span>
                <div class="progress" style="height: 20px; border-radius: 0;">
                  <div class="progress-bar bg-success" :style="{ width: calculateStatBarWidth(stat.value) }"
                    role="progressbar" :aria-valuenow="stat.value" aria-valuemin="0" aria-valuemax="255">
                    <span class="sr-only">{{ stat.value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="card-link">Card link</a></li>
                <li class="list-inline-item"><a href="#" class="card-link">Another link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="mt-3">No Pokémon found.</p>
    <div class="professor">
      <img src="../assets/professoroak.png" class="oak-img">
    </div>
  </div>
  
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchQuery = ref("");
    const pokemon = ref(null);

    const searchPokemon = async () => {
      if (searchQuery.value.trim() !== "") {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`
          );
          const data = await response.json();

          pokemon.value = {
            name: data.name,
            official_artwork:
              data.sprites.other["official-artwork"].front_default,
            height: data.height,
            weight: data.weight,
            stats: data.stats.map((stat) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            })),
          };
        } catch (error) {
          console.error("Error fetching Pokémon data:", error);
          pokemon.value = null;
        }
      } else {
        pokemon.value = null;
      }
    };
    const calculateStatBarWidth = (value) => `${(value / 255) * 100}%`;

    return {
      searchQuery,
      pokemon,
      searchPokemon,
      calculateStatBarWidth,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.custom-border-left {
  border-left: 1px solid #ccc;
}

.oak-img{
  background-color: transparent
}
</style>
