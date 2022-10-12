<template>
    <div class="col-lg-2 col-md-4 pb-1">
        <div class="cat-item d-flex flex-column border mb-4 align-items-center">
            <p class="text-right"> Sản phẩm</p>
            <router-link :to="{name: 'brand', params: {id : value.id}, props: { name: this.value.name }}"
                class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" :src="value.url" alt="brand" style="max-width: 200px;">
            </router-link>
            <h5 class="font-weight-semi-bold m-0">{{value.name}}</h5>
        </div>
    </div>
</template>

<script>
    export default {
        props:['value']
    }
</script>

<style lang="scss" scoped>

</style>