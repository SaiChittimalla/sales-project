import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import axios from 'axios';

// const url = `http://${this.ipAddress}:${this.port}/api/method/login`;

// axios.defaults.baseURL = 'http://192.168.1.177:8000';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const app = createApp(App)
app.use(router)
app.mount('#app')

// sample code



