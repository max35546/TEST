<template>
    <div class="container flash-sale mt-4">
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
</template>

<script>
export default {
    name: 'FlashSale',
    data() {
        return {
            flashSaleProducts: [
                { id: 1, name: '無線耳機', originalPrice: 3990, salePrice: 1990, image: 'https://via.placeholder.com/200' },
                { id: 2, name: '智慧手錶', originalPrice: 5990, salePrice: 2990, image: 'https://via.placeholder.com/200' }
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
.sale-card {
    border: 2px solid red;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
}

.sale-card:hover {
    transform: scale(1.05);
}
</style>