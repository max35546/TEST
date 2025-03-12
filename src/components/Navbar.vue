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
                        <router-link to="/products" class="nav-link">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link">Cart</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-link nav-link" @click="openLoginModal">會員登入</button>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">加入會員</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- LoginModal 弹窗组件 -->
    <LoginModal ref="loginModal" />
</template>

<script>
import LoginModal from './LoginModal.vue';

export default {
    name: 'ShoppingNavbar',
    components: {
        LoginModal
    },
    methods: {
        openLoginModal() {
            this.$refs.loginModal.show();
        }
    }
};
</script>

<style scoped>
.navbar-nav {
    display: flex;
    align-items: center;
}

.navbar-toggler {
    border: none;
}

.navbar-collapse {
    justify-content: flex-end;
}

.nav-link {
    padding: 0.5rem 1rem;
}

.btn-link {
    padding: 0.5rem 1rem;
    text-align: left;
}
</style>