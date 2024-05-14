import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the Vue app instance, use router, and mount the app to the '#app' element
createApp(App).use(router).mount('#app');

