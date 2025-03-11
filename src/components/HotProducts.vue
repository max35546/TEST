<template>
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
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {

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