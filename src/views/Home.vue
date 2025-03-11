<template>
    <div class="home container">
        <!-- 產品分類 -->
        <div class="category-section">
            <h2 class="text-primary">產品分類</h2>
            <div class="row">
                <div v-for="category in categories" :key="category.id" class="col-md-2">
                    <div class="category-card" @click="goToCategory(category.name)">
                        <img :src="category.image" class="category-img" alt="分類圖片">
                        <p>{{ category.name }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 限時搶購 -->
        <div class="flash-sale mt-4">
            <h2 class="text-danger">⏳ 限時搶購</h2>
            <div class="row">
                <div v-for="product in flashSaleProducts" :key="product.id" class="col-md-3">
                    <div class="card sale-card">
                        <img :src="product.image" class="card-img-top" alt="商品圖片">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="text-muted"><del>${{ product.originalPrice }}</del></p>
                            <p class="text-danger font-weight-bold">${{ product.salePrice }}</p>
                            <button class="btn btn-warning w-100" @click="addToCart(product)">立即搶購</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 今日熱賣商品 -->
        <div class="hot-products mt-4">
            <h2 class="text-success">🔥 今日熱賣商品</h2>
            <div class="row">
                <div v-for="product in hotProducts" :key="product.id" class="col-md-3">
                    <div class="card hot-card">
                        <img :src="product.image" class="card-img-top" alt="商品圖片">
                        <div class="card-body">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <p class="card-text text-danger">${{ product.price }}</p>
                            <button class="btn btn-success w-100" @click="addToCart(product)">加入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            categories: [
                { id: 1, name: '手機', image: 'https://via.placeholder.com/100' },
                { id: 2, name: '筆記型電腦', image: 'https://via.placeholder.com/100' },
                { id: 3, name: '家電', image: 'https://via.placeholder.com/100' },
                { id: 4, name: '時尚服飾', image: 'https://via.placeholder.com/100' },
                { id: 5, name: '運動用品', image: 'https://via.placeholder.com/100' },
                { id: 6, name: '美妝保養', image: 'https://via.placeholder.com/100' },
                { id: 7, name: '食品', image: 'https://via.placeholder.com/100' },
                { id: 8, name: '書籍', image: 'https://via.placeholder.com/100' },
                { id: 9, name: '汽車用品', image: 'https://via.placeholder.com/100' },
                { id: 10, name: '居家用品', image: 'https://via.placeholder.com/100' }
            ],
            flashSaleProducts: [
                { id: 1, name: '無線耳機', originalPrice: 3990, salePrice: 1990, image: 'https://via.placeholder.com/200' },
                { id: 2, name: '智慧手錶', originalPrice: 5990, salePrice: 2990, image: 'https://via.placeholder.com/200' },
                { id: 3, name: '藍牙音響', originalPrice: 4990, salePrice: 2490, image: 'https://via.placeholder.com/200' },
                { id: 4, name: '掃地機器人', originalPrice: 8990, salePrice: 4990, image: 'https://via.placeholder.com/200' }
            ],
            hotProducts: [
                { id: 1, name: 'iPhone 15 Pro', price: 34900, image: 'https://via.placeholder.com/200' },
                { id: 2, name: 'MacBook Air M3', price: 45900, image: 'https://via.placeholder.com/200' },
                { id: 3, name: 'PS5 遊戲機', price: 15900, image: 'https://via.placeholder.com/200' },
                { id: 4, name: 'AirPods Pro 2', price: 6990, image: 'https://via.placeholder.com/200' }
            ],
        };
    },
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product);
        },
        goToCategory(category) {
            this.$router.push({ path: `/category/${category}` });
        }
    },
};
</script>

<style scoped>
.home {
    padding: 2rem;
    text-align: center;
}

.category-section {
    margin-bottom: 2rem;
}

.category-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
}

.category-card:hover {
    transform: scale(1.05);
}

.category-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 0.5rem;
}

/* 限時搶購 */
.sale-card {
    border: 2px solid red;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(255, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
}

.sale-card:hover {
    transform: scale(1.05);
}

/* 今日熱賣 */
.hot-card {
    border: 2px solid green;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 255, 0, 0.2);
    transition: transform 0.2s ease-in-out;
}

.hot-card:hover {
    transform: scale(1.05);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>