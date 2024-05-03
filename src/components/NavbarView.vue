<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="d-flex justify-content-start align-items-center">
        <img class="logo" src="../assets/pokebaselogo.png" alt="pokebaselogo" />
      </div>
      <div class="d-flex flex-grow-1 gap-5">
        <div>
          <router-link to="/" class="text-decoration-none">
            <i class="icon-pokeball"></i>Home
          </router-link>
        </div>
        <div>
          <router-link to="/pokedex" class="text-decoration-none">
            <i class="icon-pokedex"></i>Pokedex
          </router-link>
        </div>
        <div>
          <router-link to="/maps" class="text-decoration-none">
            <i class="icon-pokemap"></i>Maps
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-end gap-3">
        <div>
          <router-link to="/registo" class="text-decoration-none"
            ><i class="icon-trainer"></i>Register</router-link
          >
        </div>
        <div>
          <router-link to="/login" class="text-decoration-none"
            ><i class="icon-trainer2"></i>Login</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarView",
};
</script>

<style scoped>
.navbar {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background-image: url("../assets/06-Late-Afternoon.png");
  background-size: cover;
  background-position: center;
  background-position-y: -595px;
  background-repeat: no-repeat;
  margin-bottom:20px;
}

.navbar a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 3px;
}

.navbar a.router-link-exact-active {
  color: #ffffff;
}

.logo {
  width: 50%;
}

.img {
  width: 30px;
  height: 30px;
  margin: 3px;
}

.icon-pokedex {
  background-image: url("../assets/icons/pokedex.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
}
.icon-pokeball {
  background-image: url("../assets/icons/pokeball.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
}
.icon-pokemap {
  background-image: url("../assets/icons/pokemap.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
}
.icon-trainer {
  background-image: url("../assets/icons/egg.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
}
.icon-trainer2 {
  background-image: url("../assets/icons/pokemon-trainer.png");
  background-size: contain;
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>
