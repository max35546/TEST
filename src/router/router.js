import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
import RegisterModal from '../views/RegisterModal.vue'; // 導入 Register 組件
import CategoryPage from '../views/CategoryPage.vue'; // 新增 CategoryPage 組件
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  { path: '/', component: Home, meta: { showMainLayout: true } },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  
  // 產品詳情頁面，動態路由接受 id
  {  path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },

  // 註冊頁面
  {
    path: '/register',
    name: 'RegisterModal',
    component: RegisterModal,
    meta: { showMainLayout: false },
  },
  
  // 根據 categoryName 顯示分類頁面
  {
    path: '/category/:categoryName',  // 動態路由，根據 categoryName 顯示產品分類頁面
    name: 'CategoryPage',
    component: CategoryPage,
    props: true,  // 將 categoryName 傳遞給 CategoryPage 作為 prop
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
