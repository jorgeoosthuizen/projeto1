<template>
  <div id="app">
    <NavbarView />
    <router-view class="routerview"/>
    <FooterView/>
  </div>
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
import FooterView from "./components/FooterView.vue";
export default {
  name: "App",
  components: {
    NavbarView,
    FooterView
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
  width: 100%;
  height: 100%;
}

.routerview{
  min-height: 100vh;
}


</style>
