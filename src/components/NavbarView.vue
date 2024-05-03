<template>
  <nav class="navbar">
    <div class="container-fluid">
        <!-- Left content -->
        <div class="d-flex flex-grow-1 justify-content-start gap-3">
          <div>
            <router-link to="/home">Home</router-link>
          </div>
          <div>
            <router-link to="/pokedex">Pokedex</router-link>
          </div>
          <div>
            <router-link to="/maps">Maps</router-link>
          </div>
        </div>
        <!-- Right content -->
        <div class="d-flex justify-content-end gap-3">
          <div>
            <router-link to="/registo">Register</router-link>
          </div>
          <div>
            <router-link to="/login">Login</router-link>
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

</style>