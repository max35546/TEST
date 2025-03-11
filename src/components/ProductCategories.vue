<template>
    <div class="container category-section">
        <h2 class="text-primary">📌 產品分類</h2>
        <div class="row">
            <div v-for="category in categories" :key="category.id" class="col-md-2">
                <div class="category-card" @click="goToCategory(category.name)">
                    <img :src="category.image" class="category-img" alt="分類圖片">
                    <p>{{ category.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCategories',
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
        };
    },
    methods: {
        goToCategory(category) {
            this.$router.push({ path: `/category/${category}` });
        }
    },
};
</script>

<style scoped>
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
</style>
