<template>
    <div class="flash-sale mt-4 container">
        <h2 class="text-danger text-center">⏳ 限時搶購</h2>
        <div class="row">
            <div v-for="product in flashSaleProducts" :key="product.id" class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card sale-card h-100">
                    <img :src="product.image" class="card-img-top" alt="商品圖片">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">{{ product.name }}</h5>
                        <p class="text-muted"><del>${{ product.originalPrice.toLocaleString() }}</del></p>
                        <p class="text-danger font-weight-bold">${{ product.salePrice.toLocaleString() }}</p>
                        <button class="btn btn-warning mt-auto w-100" @click="addToCart(product)">立即搶購</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlashSale',
    data() {
        return {
            flashSaleProducts: [
                { id: 1, name: '無線耳機', originalPrice: 3990, salePrice: 1990, image: 'https://via.placeholder.com/300' },
                { id: 2, name: '智慧手錶', originalPrice: 5990, salePrice: 2990, image: 'https://via.placeholder.com/300' }

            ]
        };
    },
    methods: {
        addToCart(product) {
            this.$emit('add-to-cart', product);
        }
    }
};
</script>

<style scoped>
.flash-sale {
    padding: 2rem 0;
}

.sale-card {
    border: 2px solid red;
    border-radius: 12px;
    box-shadow: 3px 3px 15px rgba(255, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s;
    overflow: hidden;
}

.sale-card:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 20px rgba(255, 0, 0, 0.3);
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