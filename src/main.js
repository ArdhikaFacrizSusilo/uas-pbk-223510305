// src/main.js

import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router'; // Import the router

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(router); // Use the router

myApp.mount('#app');
