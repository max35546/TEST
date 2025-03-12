<template>
    <div class="hot-products mt-4 container">
        <h2 class="text-success text-center">🔥 今日熱賣商品</h2>
        <div class="row">
            <div v-for="product in hotProducts" :key="product.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card hot-card h-100">
                    <img :src="product.image" class="card-img-top" alt="商品圖片">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">{{ product.name }}</h5>
                        <p class="card-text text-danger font-weight-bold">${{ product.price.toLocaleString() }}</p>
                        <button class="btn btn-success mt-auto w-100" @click="addToCart(product)">加入購物車</button>
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
                { id: 1, name: 'iPhone 15 Pro', price: 34900, image: 'https://via.placeholder.com/300' },
                { id: 2, name: 'MacBook Air M3', price: 45900, image: 'https://via.placeholder.com/300' },
                { id: 3, name: 'PS5 遊戲機', price: 15900, image: 'https://via.placeholder.com/300' },
                { id: 4, name: 'AirPods Pro 2', price: 6990, image: 'https://via.placeholder.com/300' }
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
.hot-products {
    padding: 2rem 0;
}

.hot-card {
    border: 2px solid green;
    border-radius: 12px;
    box-shadow: 3px 3px 15px rgba(0, 128, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s;
    overflow: hidden;
}

.hot-card:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 20px rgba(0, 128, 0, 0.3);
}

.card-img-top {
    height: 250px;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.card-body {
    text-align: center;
}

.card-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}
</style>