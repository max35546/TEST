import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
// import Category from '../views/Category.vue'; // 新增分類頁面

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart },
    { path: '/about', component: About },
    // { path: '/category/:id', component: Category }, // 新增分類頁面
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
