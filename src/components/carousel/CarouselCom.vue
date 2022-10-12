<template>
    <div class="container-fluid c pt-5">
        <div class="row px-xl-5 pb-3">
            <CarouselItem v-for="item in array" :key="item.id" :value="item" />
        </div>
    </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';
import {APIURL} from '../../constant';
import axios from 'axios';

export default {
    components: { CarouselItem },
    props:{
        dataProp: String
    },
    data() {
        return {
            array: []
        }
    },
    async mounted() {
        await axios.get(`${APIURL}/${this.dataProp}`).then((response) => this.array = response.data);
    },
}
</script>

<style lang="scss" scoped>

</style>