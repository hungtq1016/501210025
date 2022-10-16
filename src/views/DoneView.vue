<template>
        <div class="container py-5">
            <div class="row text-center">
                <h1 class="">Cảm Ơn Đã Mua Hàng</h1>
                <div>
                    {{id}}
                    <router-link to="/" class="btn btn-primary">Mua Thêm</router-link>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props:['id']
    }
</script>

<style lang="scss" scoped>

</style>