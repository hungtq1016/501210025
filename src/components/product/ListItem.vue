<template>
    <div class="bg-light">
        <div class="container-fluid  container-xl pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">{{title}}</span></h2>
        </div>
        <div class="row px-xl-5 pb-3">
            <ProductItem v-for="product in array" :key="product.id" :product="product" class="col-lg-3 col-md-6 col-sm-12 pb-1"/>
        </div>
    </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import {APIURL} from '../../constant';
import axios from 'axios';

export default {
    props: {
        isGreater: Boolean,
        title: String,
        view: String,
        max: Number
    },
    data() {
        return {array:[]};
    },
    async mounted(){
        (this.isGreater == true ) ?
        await axios.get(`${APIURL}/products?_sort=${this.view}&_order=asc&_limit=${this.max}`).then((response) => this.array = response.data) :
        await axios.get(`${APIURL}/products?_sort=${this.view}&_order=desc&_limit=${this.max}`).then((response) => this.array = response.data)
    },
    components: { ProductItem }
}
</script>

<style lang="scss" scoped>

</style>