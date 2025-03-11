<template>
    <div class="cart">
        <h1>Your Cart</h1>
        <div v-if="cartItems.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <h3>{{ item.name }}</h3>
                <p>${{ item.price }}</p>
                <button @click="removeFromCart(item)">Remove</button>
            </div>
            <p>Total: ${{ totalPrice }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsView',
    props: {
        cartItems: {
            type: Array,
            required: true,
        },
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
        },
    },
    methods: {
        removeFromCart(item) {
            this.$emit('remove-from-cart', item);
        },
    },
};
</script>

<style scoped>
.cart {
    padding: 2rem;
    text-align: center;
}

.cart-item {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}

button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #ff1a1a;
}
</style>