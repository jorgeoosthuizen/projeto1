<template>
  <div id="app">
    <img src="./assets/background.png" alt="Header Image" class="header-image" />
    <NavbarView />
  </div>
    <router-view/>
</template>

<script>
import NavbarView from './components/NavbarView.vue';
export default {
  name: 'App',
  components: {
    NavbarView,
  },
  data() {
    return {
      headerImage: './assets/background.png'
    };
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  margin-bottom: 30px;
}



</style>
