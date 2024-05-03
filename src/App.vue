<template>
  <div id="app">
    <div class="image-container">
    <img src="" alt="Header Image" class="header-image" />
    <NavbarView />
  </div>
    <router-view/>
  </div>
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
      headerImage: 
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
  max-height: 350px;
  margin-bottom: 30px;
  
}

.image-container {
  position: relative;
}

.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
