<template>
  <HeaderCom/>
  <main>
    <RouterView :key="$route.path"/>
  </main>
  <FooterCom/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderCom from './components/inc/HeaderCom.vue';
import FooterCom from './components/inc/FooterCom.vue';

</script>
<style scoped>
</style>
