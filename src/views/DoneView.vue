<template>
    <div class="container py-5" style="min-height: 600px;">
        <div class="row text-center">
            <h1 class="">Cảm Ơn Đã Mua Hàng</h1>
            <div class="py-2">Mã đơn hàng: <span class="px-4 py-2" style="background-color: #f1f2f3; cursor: copy;" @click="copyURL(this.id)">{{ id }}</span></div>
            <div class="py-2">Nếu bạn chọn phương thức momo hoặc chuyển khoản vui lòng ghi nội dung là mã đơn
                hàng trên đây</div>
            <div>
                <router-link to="/" class="btn btn-primary">Mua Thêm</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            id: ''
        }
    },
    mounted() {
        this.id = this.init()
    },

    methods: {
        init() {
            return this.$route.query.id
        },
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
            } catch ($e) {
                console.log(e);
            }
        }
    }

}
</script>

<style lang="scss" scoped>

</style>