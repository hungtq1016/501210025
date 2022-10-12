<template>
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <div class="col-6 table-responsive mb-5 text-center">
                <h1 class="title">404 Page Not Found</h1>
                <p class="subtitle">Không thể truy cập trang cần tìm. Vui lòng trở lại trang chủ</p>
                <router-link to="/" class="button is-info">Trang Chủ</router-link>
            </div>
            <div class="col-6 table-responsive mb-5">
                <img src="https://thanhbinhpc.com/wp-content/uploads/2019/03/sua-loi-404-tren-may-tinh.1PNG-1-768x461.png" />
            </div>
        </div>
        <TotalPrice :total="getTotal" />
    </div>
</template>

<script >
export default {
    name: 'error'
};
</script>

<style lang="scss" scoped>

</style>