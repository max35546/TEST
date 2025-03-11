<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="placeholder-ad">廣告位置</div>
            </div>
            <div class="carousel-item">
                <div class="placeholder-ad">廣告位置</div>
            </div>
            <div class="carousel-item">
                <div class="placeholder-ad">廣告位置</div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'HomeCarousel',
};
</script>

<style>
.placeholder-ad {
    width: 100%;
    height: 500px;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #555;
}
</style>
