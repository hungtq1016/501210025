<template>
    <BreadcrumbCom :target="this.name" v-if="this.$route.params.id" />
    <BreadcrumbCom target="Tất Cả Sản Phẩm" v-else />
    <div class="container-fluid container-xl pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <FilterCom />
            <!-- Shop Sidebar End -->
            <!-- Shop Product Start -->
            <GridCom :brand="this.$route.params.id" />
            <!-- Shop Product End -->
        </div>
    </div>
</template>

<script>
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
import FilterCom from "../components/product/FilterCom.vue";
import GridCom from "../components/product/GridCom.vue";
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components: { BreadcrumbCom, FilterCom, GridCom },

}
</script>

<style lang="scss" scoped>

</style>