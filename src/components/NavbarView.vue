<template>
  <nav class="navbar">
    <div class="container-fluid">
      <!-- Left content -->
      <div class="d-flex flex-grow-1 justify-content-start gap-3">
        <div>
          <button type="button" class="btn     btn-lg" data-mdb-ripple-color="#000000"> <router-link to="/home">Home</router-link><i class="fas fa-download ms-1"></i></button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark    btn-lg" data-mdb-ripple-color="#000000"> <router-link to="/pokedex">Pokedex</router-link> <i class="fas fa-download ms-1"></i></button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark    btn-lg" data-mdb-ripple-color="#000000"> <router-link to="/maps">Maps</router-link> <i class="fas fa-download ms-1"></i></button>
        </div>
      </div>
      <!-- Right content -->
      <div class="d-flex justify-content-end gap-3">
        <div>
          <button type="button" class="btn btn-outline-dark    btn-lg" data-mdb-ripple-color="#000000"> <router-link to="/register">Register</router-link> <i class="fas fa-download ms-1"></i></button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark    btn-lg" data-mdb-ripple-color="#000000"> <router-link to="/login">Login</router-link> <i class="fas fa-download ms-1"></i></button>
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
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.2);
}

.navbar a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  color: #ffffff;
}

#btnHome{
  background-color: transparent;
}
</style>
