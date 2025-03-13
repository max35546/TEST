import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
import RegisterModal from '../views/RegisterModal.vue'; // 導入 Register 組件

const routes = [
  { path: '/', component: Home, meta: { showMainLayout: true } },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  {
    path: '/register',
    name: 'RegisterModal', // 更新路由名稱
    component: RegisterModal,
    meta: { showMainLayout: false }, // 設定 meta，避免顯示主佈局
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
