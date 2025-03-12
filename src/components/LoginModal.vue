<template>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">會員登入</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="handleLogin">
                        <div class="form-group">
                            <label for="username">帳號</label>
                            <input type="text" id="username" v-model="username" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label for="password">密碼</label>
                            <input type="password" id="password" v-model="password" class="form-control" required />
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">登入</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'; // 确保已正确导入 bootstrap

export default {
    name: 'LoginModal',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        show() {
            const modal = new Modal(document.getElementById('loginModal'));
            modal.show();
        },
        hide() {
            const modal = new Modal(document.getElementById('loginModal'));
            modal.hide();
        },
        handleLogin() {
            console.log('登入中:', this.username, this.password);
            this.hide();
        },
    },
};
</script>

<style scoped>
.modal-body {
    padding: 20px;
}
</style>