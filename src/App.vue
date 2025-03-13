<template>
  <div id="app">
    <Navbar />

    <!-- 使用 v-show 而不是 v-if，避免影響排版 -->
    <div v-show="$route.meta.showMainLayout">
      <HomeCarousel />
      <ProductCategories />
      <HotProducts />
      <FlashSale />
    </div>

    <!-- 使用 router-view 顯示其他頁面內容 -->
    <router-view :cartItems="cartItems" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script>
import HomeCarousel from './components/HomeCarousel.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar.vue';
import ProductCategories from './components/ProductCategories.vue';
import HotProducts from './components/HotProducts.vue';
import FlashSale from './components/FlashSale.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomeCarousel,
    ProductCategories,
    HotProducts,
    FlashSale,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 56px; /* 確保頁面不會被 Navbar 遮住 */
}

.router-view {
  /* 確保 router-view 渲染的內容不會導致佈局問題 */
  display: block;
}
</style>
