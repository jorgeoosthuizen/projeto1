<template>
  <nav>
    <div class="container align-items-center">
      <div class="row ">
        <div class="col-4">
          <div class="img-container img-thumbnail">
          <img 
              src="https://cdn.dribbble.com/userupload/3875671/file/original-e7509c33cfcda0d2f3a6f6892f7b85fb.png?resize=400x0"
               alt="pokedex">
              </div>
          <router-link to="/">
            Pokedex</router-link>
            <h6>Pesquisa na nossa database com mais de 1000 pokemons registados!</h6>
        </div>
        <div class="col-4">
          <div class="img-container img-thumbnail">
          <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu1EQYUMUJoANVNaIFc3AVLnKyZsq4w-zLfwQO0C5BQ&s"
               alt="pokedex">
              </div>
          <router-link to="/about">Maps</router-link>
          <h6>Pesquisa na nossa database com mais de 1000 pokemons registados!</h6>
        </div>
        <div class="col-4">
          <div class="img-container img-thumbnail">
          <img 
              src="https://www.giantbomb.com/a/uploads/original/10/102442/2515676-926527-fr_lg_wb_pok_mon_trainers.png"
               alt="pokedex">
              </div>
          <router-link to="/registo">Register</router-link>
          <h6>Pesquisa na nossa database com mais de 1000 pokemons registados!</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarView',
}
</script>


<style scoped>

a {
    color: #010101;
    text-decoration: none;
}

img{
  width: 70%;
}

.img-container{
  width:100%;
  height: 70%;
  object-fit: contain;
}

</style>