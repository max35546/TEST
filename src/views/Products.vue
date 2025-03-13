<template>
    <div class="container category-section">
        <h2 class="text-primary text-center">📌 產品分類</h2>
        <div class="row">
            <div v-for="category in categories" :key="category.id" class="col-md-2 col-sm-4 col-6 mb-3">
                <div class="category-card" @click="goToCategory(category.name)">
                    <i :class="category.icon" class="category-icon"></i>
                    <p>{{ category.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


export default {
    name: 'ProductCategories',
    data() {
        return {
            categories: [
                { id: 1, name: '手機', icon: 'fas fa-mobile-alt' },
                { id: 2, name: '筆記型電腦', icon: 'fas fa-laptop' },
                { id: 3, name: '家電', icon: 'fas fa-tv' },
                { id: 4, name: '時尚服飾', icon: 'fas fa-tshirt' },
                { id: 5, name: '運動用品', icon: 'fas fa-dumbbell' },
                { id: 6, name: '美妝保養', icon: 'fas fa-spa' },
                { id: 7, name: '食品', icon: 'fas fa-apple-alt' },
                { id: 8, name: '書籍', icon: 'fas fa-book' },
                { id: 9, name: '汽車用品', icon: 'fas fa-car' },
                { id: 10, name: '居家用品', icon: 'fas fa-couch' }
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
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.category-card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-icon {
    font-size: 2.5rem;
    color: #007bff;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}
</style>
