<template>
    <div class="container">
        <h1 class="my-4 text-center">註冊會員</h1>

        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <input type="text" id="name" class="form-control" v-model="user.name" required />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" class="form-control" v-model="user.email" required />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">密碼</label>
                <input type="password" id="password" class="form-control" v-model="user.password" required />
            </div>

            <div class="mb-3">
                <label for="confirmPassword" class="form-label">確認密碼</label>
                <input type="password" id="confirmPassword" class="form-control" v-model="user.confirmPassword"
                    required />
            </div>

            <button type="submit" class="btn btn-primary w-100">註冊</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
});

// 註冊函式
const register = () => {
    if (user.value.password !== user.value.confirmPassword) {
        alert('密碼和確認密碼不一致！');
        return;
    }

    // 假設你有一個 API 用來處理註冊
    fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: user.value.name,
            email: user.value.email,
            password: user.value.password,
        }),
    })
        .then((res) => {
            if (res.ok) {
                alert('註冊成功！');
                // 進行其他操作，如跳轉頁面
            } else {
                alert('註冊失敗！');
            }
        })
        .catch((err) => {
            alert('發生錯誤: ' + err.message);
        });
};
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
}

button {
    margin-top: 20px;
}
</style>