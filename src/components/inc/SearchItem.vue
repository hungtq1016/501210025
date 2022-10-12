<template>

    <router-link :to="{name: 'product-detail', params: {id : product.id}}">
        <div class="dropdown-item" style="padding:10px 8px; color: inherit;">
        {{product.name}}
        </div>
    </router-link>

</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss" scoped>

</style>