<template>
    <BannerCom />
    <CarouselCom dataProp="brands"/>
    <ListItem title="Thịnh Hành" view="date" :isGreater="false" :max="8"/>
    <EmailCom />
    <ListItem title="Giảm Giá" view="discount" :isGreater="true" :max="8"/>
</template>

<script>
import BannerCom from '../components/inc/BannerCom.vue';
import ListItem from '../components/product/ListItem.vue';
import EmailCom from '../components/inc/EmailCom.vue';
import CarouselCom from '../components/carousel/CarouselCom.vue';
export default {
    components: { BannerCom, ListItem, EmailCom, CarouselCom },
}
</script>

<style lang="scss" scoped>

</style>