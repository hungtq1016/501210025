<template>
    <div class="container-fluid mb-5" style="background-color: #f1f2f3;">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
            <h1 class="font-weight-semi-bold text-uppercase mb-3">{{target}}</h1>
            <div class="d-inline-flex">
                <p class="m-0"><router-link to="/">Trang Chủ</router-link></p>
                <p class="m-0 px-2" v-if="this.isChild">-</p>
                <p class="m-0" v-if="this.isChild"><router-link to="/products">Sản Phẩm</router-link></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">{{target}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            target:String,
            isChild:Boolean
        }
    }
</script>

<style lang="scss" scoped>

</style>