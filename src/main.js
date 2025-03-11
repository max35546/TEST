import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';  // 引入路由

createApp(App)
    .use(router)   // 在創建的 Vue 實例中使用路由
    .mount('#app'); // 然後掛載到 #app 上