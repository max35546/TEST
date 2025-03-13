<template>
  <div class="container">
    <!-- 產品詳情標題 -->
    <div class="row mb-4">
      <h2 class="col-12 text-center">{{ product.name }}</h2>
    </div>

    <div class="row">
      <!-- 產品圖片區塊 -->
      <div class="col-md-6 mb-4">
        <div class="product-image">
          <img :src="product.mainImage" alt="product.name" class="img-fluid main-image" />
        </div>
        <!-- 縮圖展示區域 -->
        <div class="thumbnail-images mt-3">
          <div class="row">
            <div class="col-3" v-for="(image, index) in product.thumbnailImages" :key="index">
              <img :src="image" alt="product.name" class="img-fluid thumbnail" @click="changeMainImage(image)" />
            </div>
          </div>
        </div>
      </div>

      <!-- 產品基本資訊區塊 -->
      <div class="col-md-6">
        <div class="product-info">
          <h3 class="price">NT$ {{ product.price.toLocaleString() }}</h3>
          <p class="text-muted">{{ product.brand }} - {{ product.category }}</p>
          
          <!-- 產品數量選擇 -->
          <div class="quantity-selector">
            <label for="quantity">數量：</label>
            <input type="number" id="quantity" v-model="quantity" min="1" max="10" class="form-control" />
          </div>

          <!-- 加入購物車按鈕 -->
          <button class="btn btn-primary mt-3" @click="addToCart">加入購物車</button>

          <!-- 評價區塊 -->
          <div class="mt-3">
            <p><strong>評價：</strong>⭐⭐⭐⭐☆ (20 評價)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 產品描述區塊 -->
    <div class="row mt-5">
      <div class="col-12">
        <h4>產品描述</h4>
        <p>{{ product.description }}</p>
        <h5>規格：</h5>
        <ul>
          <li>尺寸：{{ product.specifications.size }}</li>
          <li>顏色：{{ product.specifications.color }}</li>
          <li>重量：{{ product.specifications.weight }}</li>
        </ul>
      </div>
    </div>

    <!-- 相關產品區塊 -->
    <div class="row mt-5">
      <div class="col-12">
        <h4>相關產品</h4>
        <div class="row">
          <div class="col-md-2 col-sm-4 col-6 mb-3" v-for="relatedProduct in relatedProducts" :key="relatedProduct.id">
            <div class="card product-card">
              <img :src="relatedProduct.image" alt="relatedProduct.name" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ relatedProduct.name }}</h5>
                <p class="card-text">NT$ {{ relatedProduct.price.toLocaleString() }}</p>
                <button class="btn btn-outline-primary">立即購買</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分類篩選區域 -->
    <div class="category-filters mt-5">
      <h4>分類選擇</h4>
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-secondary w-100" @click="goToCategory('fashion-clothing')">時尚衣物</button>
        </div>
        <div class="col-md-3">
          <button class="btn btn-secondary w-100" @click="goToCategory('fashion-accessories')">時尚配件</button>
        </div>
        <div class="col-md-3">
          <button class="btn btn-secondary w-100" @click="goToCategory('footwear')">鞋類</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailPage',
  data() {
    return {
      product: {
        id: 12761252,
        name: 'Apple iPhone 12',
        price: 30000,
        category: '手機',
        brand: 'Apple',
        mainImage: 'path-to-main-image', // 主要圖片
        thumbnailImages: [ // 縮圖
          'path-to-thumbnail1',
          'path-to-thumbnail2',
          'path-to-thumbnail3',
        ],
        description: 'Apple iPhone 12 是最新款的智慧型手機，擁有強大的性能和優美的設計。',
        specifications: {
          size: '6.1吋',
          color: '黑色',
          weight: '164g',
        },
      },
      quantity: 1, // 默認數量
      relatedProducts: [
        { id: 1, name: 'Apple iPhone 11', price: 25000, image: 'path-to-image' },
        { id: 2, name: 'Apple iPhone 13', price: 35000, image: 'path-to-image' },
        // 其他相關產品
      ],
    };
  },
  methods: {
    changeMainImage(image) {
      this.product.mainImage = image;
    },
    addToCart() {
      // 處理加入購物車邏輯
      alert(`${this.product.name} 已加入購物車，數量：${this.quantity}`);
    },
    goToCategory(category) {
      this.$router.push({ path: `/category/${category}` });
    },
  },
};
</script>

<style scoped>
.product-image .main-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.thumbnail-images .thumbnail {
  width: 100%;
  height: auto;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.thumbnail-images .thumbnail:hover {
  border-color: #007bff;
}

.price {
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
}

.quantity-selector {
  margin-top: 10px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.1rem;
}

.card-text {
  color: #007bff;
  font-size: 1rem;
}

.card-body button {
  width: 100%;
}

.category-filters .btn {
  margin-bottom: 10px;
}

.category-filters .btn:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
