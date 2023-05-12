import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from "./App.vue";
import Router from "./Router";

const app = createApp(App);
app.use(createPinia());
app.use(Router);
app.mount('#app');
