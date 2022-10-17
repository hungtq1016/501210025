<template>
    <div class="container-fluid py-5">
        <carousel :items-to-show="5" :autoplay="4000">
            <CarouselItem v-for="item in array" :key="item.id" :value="item" />
            <template #addons>
                <Navigation />
            </template>
        </carousel>
    </div>
    
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import {APIURL} from '../../constant';
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel,Navigation} from 'vue3-carousel'

export default {
    components: {CarouselItem,Carousel,Navigation},
    props:{
        dataProp: String
    },
    data() {
        return {
            array: []
        }
    },
    async mounted() {
        await axios.get(`${APIURL}/${this.dataProp}?_embed=products`).then((response) => this.array = response.data);
    },
}
</script>

<style lang="scss" scoped>

</style>