<template>
    <slide>
        <div class="cat-item d-flex flex-column  mb-4 align-items-center">
            <p class="text-right">{{this.value.products.length}} Sản phẩm</p>
            <router-link :to="{name: 'brand', params: {id : value.id}, props: { name: this.value.name }}"
                class="cat-img position-relative overflow-hidden mb-3">
                <img class="img-fluid" :src="value.url" alt="brand" style="max-width: 200px;">
            </router-link>
            <h5 class="font-weight-semi-bold m-0">{{value.name}}</h5>
        </div>
    </slide>
</template>

<script>
import { Slide } from 'vue3-carousel'

export default {
    components: { Slide },
    props: ['value']
}
</script>

<style lang="scss" scoped>

</style>