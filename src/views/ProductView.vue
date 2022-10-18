<template>
    <BreadcrumbCom :target="this.data" v-if="this.$route.params.id" />
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
import axios from 'axios';
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";
import FilterCom from "../components/product/FilterCom.vue";
import GridCom from "../components/product/GridCom.vue";
import { APIURL } from '../constant';
export default {
    data(){
        return{
            price:40000000,
            data:null,
            id:this.$route.params.id
        }
    },
    props: {
        name: {
            required: true
        }
    },
    async mounted()
    {
        await axios.get(`${APIURL}/brands/${this.id}`).then(response=>{
            this.data = response.data.name
        })
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