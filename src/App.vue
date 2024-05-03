<template>
  <div id="app">
    <NavbarView />
  </div>
  <router-view />
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
export default {
  name: "App",
  components: {
    NavbarView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.container {
    width: 100%; /* Set container width */
    height: 119px; /* Set container height */
    background-image: url('./assets/07-Early-Evening.png'); /* Set background image */
    background-size:cover; /* Cover the entire container */
    background-position-y: -548px; /* Center the background image */
    background-repeat:repeat; /* Prevent background from repeating */
}
</style>
