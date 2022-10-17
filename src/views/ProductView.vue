<template>
    <BreadcrumbCom :target="this.name" v-if="this.$route.params.id" />
    <BreadcrumbCom target="Tất Cả Sản Phẩm" v-else />
    <div class="container-fluid container-xl pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <FilterCom  @changePrice="updatePrice"/>
            <!-- Shop Sidebar End -->
            <!-- Shop Product Start -->
            <GridCom :brand="this.$route.params.id" :price="this.price" :key="this.price"/>
            <!-- Shop Product End -->
        </div>
    </div>
</template>

<script>
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
import FilterCom from "../components/product/FilterCom.vue";
import GridCom from "../components/product/GridCom.vue";
export default {
    data(){
        return{
            price:40000000
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components: { BreadcrumbCom, FilterCom, GridCom },
    methods: {
        updatePrice(val) {
            this.price = val
        }
    }
}
</script>

<style lang="scss" scoped>

</style>