<template>
  <div class="container">
    <h2 class="text-primary text-center">📌 {{ categoryName }} 產品</h2>

    <div class="row">
      <!-- 顯示本館熱銷TOP5 -->
      <div class="col-12">
        <h3 class="text-center">📈 本館熱銷TOP5</h3>
        <div class="row">
          <div v-for="product in topSalesProducts" :key="product.id" class="col-md-2 col-sm-4 col-6 mb-3">
            <div class="product-card" @click="goToProductDetail(product.id)">
              <img :src="product.image" alt="product.name" class="product-image" />
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ formatPrice(product.price) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 顯示本週新降價折 -->
      <div class="col-12 mt-5">
        <h3 class="text-center">💸 本週新降價折</h3>
        <div class="row">
          <div v-for="product in discountedProducts" :key="product.id" class="col-md-2 col-sm-4 col-6 mb-3">
            <div class="product-card" @click="goToProductDetail(product.id)">
              <img :src="product.image" alt="product.name" class="product-image" />
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ formatPrice(product.price) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 顯示品牌A/B/C -->
      <div class="col-12 mt-5">
        <div class="row">
          <div v-for="product in brandProducts" :key="product.id" class="col-md-2 col-sm-4 col-6 mb-3">
            <div class="product-card" @click="goToProductDetail(product.id)">
              <img :src="product.image" alt="product.name" class="product-image" />
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ formatPrice(product.price) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Apple iPhone 12', category: '手機', price: 30000, sales: 200, releaseDate: '2025-03-01', image: 'path-to-image', description: '蘋果最新款智慧型手機，擁有強大的性能。', brand: 'Apple' },
        { id: 2, name: 'MacBook Pro', category: '筆記型電腦', price: 50000, sales: 150, releaseDate: '2025-03-05', image: 'path-to-image', description: '高效能筆記型電腦，適合專業人士使用。', brand: 'Apple' },
        { id: 3, name: '時尚衣物', category: '時尚服飾', price: 1500, sales: 300, releaseDate: '2025-03-03', image: 'path-to-image', description: '最新流行時尚衣物，輕鬆搭配，舒適穿著。', brand: 'Brand A' },
        { id: 4, name: '運動鞋', category: '運動用品', price: 3500, sales: 120, releaseDate: '2025-03-07', image: 'path-to-image', description: '舒適透氣運動鞋，適合各種運動場合。', brand: 'Brand B' },
        { id: 5, name: '智慧手錶', category: '家電', price: 6000, sales: 100, releaseDate: '2025-03-01', image: 'path-to-image', description: '智能健康監測手錶，輕鬆掌握身體狀況。', brand: 'Brand C' },
      ],
    };
  },
  computed: {
    topSalesProducts() {
      return this.products
        .filter(product => product.category === this.categoryName)
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 5);
    },
    discountedProducts() {
      return this.products.filter(product => {
        return product.category === this.categoryName && product.price < 4000;
      });
    },
    brandProducts() {
      return this.products.filter(product => ['Apple', 'Brand A', 'Brand B'].includes(product.brand));
    },
  },
  methods: {
    formatPrice(price) {
      return `NT$ ${price.toLocaleString()}`;
    },
    goToProductDetail(productId) {
  this.$router.push({ name: 'ProductDetail', params: { id: productId } });
},
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.product-price {
  font-size: 1rem;
  color: #007bff;
}

h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
}
</style>
