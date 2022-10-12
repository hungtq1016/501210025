<template>
    <div>
        <div class="card product-item border mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img class="img-fluid w-100" :src="product.img" alt="">
            </div>
            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">{{product.name}}</h6>
                <div class="d-flex justify-content-center" v-if="product.discount">
                    <h5>{{formatPrice(product.price*(1-product.discount/100))}} VNĐ</h5>
                    <h6 class="text-muted ml-2 "><del>{{formatPrice(product.price)}} VNĐ</del></h6>
                </div>
                <div class="d-flex justify-content-center" v-else>
                    <h6>{{formatPrice(product.price)}} VNĐ</h6>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <router-link :to="{name: 'product-detail', params: {id : product.id}}" class="btn btn-sm text-dark p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" width="20" height="15">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Chi tiết
                </router-link>
                <button class="btn btn-sm text-dark p-0" @click="addToCart(this.product)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" width="20" height="15">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Thêm
                </button>
            </div>
            <span class="badge bg-danger text-white position-absolute rounded-pill" style="top:12px;left: 8px;"
                v-if="product.discount">-{{product.discount}}%</span>
        </div>
    </div>
</template>

<script>
import format from '../../mixin/format';
import { mapMutations } from 'vuex';
export default {
    props: ['product'],
    mixins: [format],
    methods: {
        ...mapMutations(['addToCart'])
    }
}
</script>

<style lang="scss" scoped>

</style>