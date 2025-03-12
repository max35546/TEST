<template>
  <div id="app">
    <Navbar />
    <HomeCarousel />
    <ProductCategories></ProductCategories>
    <HotProducts></HotProducts>
    <FlashSale></FlashSale>
    <router-view :cartItems="cartItems" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script>
import HomeCarousel from './components/HomeCarousel.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
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
    FlashSale
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
}
</style>