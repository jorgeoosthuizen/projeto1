<template>
  <div>
    <input type="text" v-model="searchQuery" @input="searchPokemon" placeholder="Enter Pokémon name">
    <div v-if="pokemon">
      <img :src="pokemon.sprite" :alt="pokemon.name">
      <h2>{{ pokemon.name }}</h2>
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
      <h3>Stats:</h3>
      <ul>
        <li v-for="stat in pokemon.stats" :key="stat.name">{{ stat.name }}: {{ stat.value }}</li>
      </ul>
    </div>
    <p v-else>No Pokémon found.</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const searchQuery = ref('');
    const pokemon = ref(null);

    const searchPokemon = async () => {
      if (searchQuery.value.trim() !== '') {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);
          const data = await response.json();
          pokemon.value = {
            name: data.name,
            sprite: data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            stats: data.stats.map(stat => ({ name: stat.stat.name, value: stat.base_stat }))
          };
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
          pokemon.value = null;
        }
      } else {
        pokemon.value = null;
      }
    };

    return {
      searchQuery,
      pokemon,
      searchPokemon
    };
  }
};
</script>


<style scoped>

ul {
  list-style-type: none;
}

</style>