<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid align-items-center justify-content-center">
      <div class="row">
        <div class="col-3">
            <router-link to="/"> Pokedex</router-link>
        </div>
        <div class="col-3">
            <router-link to="/about">Maps</router-link>
        </div>
        <div class="col-3">
            <router-link to="/registo">Register</router-link>
        </div>
        <div class="col-3">
            <router-link to="/registo">Login</router-link>
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
  background-color: rgba(0, 0, 0, 0.5);
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
