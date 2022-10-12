<template>
    <div class="col-lg-6 col-6 text-left position-relative">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    width="24" height="24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" fill="white" />
                </svg>
            </span>
            <input type="text" class="form-control" placeholder="Tìm kiếm sản phẩm tại đây" aria-label="Username"
                aria-describedby="basic-addon1" v-model="search">
        </div>
        <div class="position-absolute search-result w-100">
            <div class=" bg-white border" v-if="search.length>0">
                <SearchItem v-for="item in searchList.slice(0,8)" :key='item.id' :product="item" />
            </div>
        </div>
    </div>
</template>

<script>
import SearchItem from './SearchItem.vue';
export default {
    components: { SearchItem },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        searchList() {
            return this.products.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },


}
</script>

<style lang="scss" scoped>

</style>