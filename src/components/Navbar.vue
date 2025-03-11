<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">Shopping Website</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    name: 'ShoppingNavbar',
};
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}

.navbar-brand .navbar-logo {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
}

.navbar-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar-item {
    margin-left: 1rem;
}

.navbar-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.navbar-link:hover {
    text-decoration: underline;
}
</style>