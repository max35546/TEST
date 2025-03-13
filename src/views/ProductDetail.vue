<template>
    <div class="container">
      <h2 class="text-primary text-center">📌 商品詳情</h2>
      <div v-if="product" class="row">
        <!-- 商品圖片區域 -->
        <div class="col-md-6">
          <div class="product-image-card">
            <img :src="product.image" alt="product.name" class="img-fluid product-image" />
          </div>
        </div>
  
        <!-- 商品資訊區域 -->
        <div class="col-md-6">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="text-muted">{{ product.category }}</p>
          <p>{{ product.description }}</p>
          <p class="product-price">{{ formatPrice(product.price) }}</p>
          
          <!-- 立即購買與加入購物車按鈕 -->
          <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-danger btn-lg mx-2">立即購買</button>
            <button class="btn btn-primary btn-lg mx-2">加入購物車</button>
          </div>
        </div>
      </div>
  
      <!-- 商品特色與留言評分區 -->
      <div class="row mt-5">
        <div class="col-12">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" id="features-tab" data-bs-toggle="pill" href="#features">商品特色</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="reviews-tab" data-bs-toggle="pill" href="#reviews">留言與評分</a>
            </li>
          </ul>
          
          <!-- 內容切換區 -->
          <div class="tab-content mt-3">
            <!-- 商品特色 -->
            <div class="tab-pane fade show active" id="features">
              <p>這是商品的詳細特色描述，您可以根據需要添加更多內容來介紹商品的獨特賣點。</p>
            </div>
            
            <!-- 留言與評分 -->
            <div class="tab-pane fade" id="reviews">
              <p>此處顯示顧客的留言與評分，您可以在此區域展示客戶的評論和評分等資訊。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    props: ['id'],
    data() {
      return {
        product: null,
        products: [
          { id: 1, name: 'Apple iPhone 12', category: '手機', price: 30000, image: 'path-to-image', description: '蘋果最新款智慧型手機，擁有強大的性能。' },
          { id: 2, name: 'MacBook Pro', category: '筆記型電腦', price: 50000, image: 'path-to-image', description: '高效能筆記型電腦，適合專業人士使用。' },
          {id: 4, name: '運動鞋', category: '鞋類', price: 1500, image: 'path-to-image', description: '舒適透氣的運動鞋，適合日常運動使用。' },
          // 其他產品...
        ],
      };
    },
    created() {
      const productId = parseInt(this.$route.params.id);
      this.product = this.products.find(p => p.id === productId);
    },
    methods: {
      formatPrice(price) {
        return `NT$ ${price.toLocaleString()}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .product-image-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: auto;
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
  }
  
  .product-image {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
  
  /* 商品名稱樣式 */
  .product-name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* 商品價格 */
  .product-price {
    font-size: 1.5rem;
    color: #ff5733;
    margin-top: 15px;
  }
  
 
  .d-flex {
    display: flex;
    justify-content: center;
  }
  
  .btn-lg {
    padding: 12px 24px;
  }
  
  .mx-2 {
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .btn-danger {
    background-color: #e74c3c;
    border-color: #e74c3c;
  }
  
  .btn-danger:hover {
    background-color: #c0392b;
    border-color: #c0392b;
  }
  
  .btn-primary {
    background-color: #3498db;
    border-color: #3498db;
  }
  
  .btn-primary:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  
  .text-muted {
    font-size: 1rem;
    color: #7f8c8d;
  }
  
  p {
    font-size: 1.1rem;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  /* 產品特色與留言評分區 */
  .nav-pills .nav-link {
    border-radius: 20px;
    padding: 10px 20px;
  }
  
  .nav-pills .nav-link.active {
    background-color: #3498db;
    color: white;
  }
  
  .tab-content {
    margin-top: 20px;
  }
  
  .tab-pane {
    font-size: 1.1rem;
    color: #2c3e50;
  }
  </style>
  