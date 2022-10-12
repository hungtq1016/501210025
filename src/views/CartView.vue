<template>
    <BreadcrumbCom target="Giỏ Hàng"/>
    <div class="container-fluid pt-5" v-if="getListCarts.length>0">
        <div class="row px-xl-5">
            <div class="col-12 table-responsive mb-5">
                <table class="table table-bordered text-center mb-0">
                    <thead class="bg-secondary text-dark">
                        <tr>
                            <th>Sản Phẩm</th>
                            <th>Đơn Giá</th>
                            <th>Số Lượng</th>
                            <th style="width:300px">Thành Tiền</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">"
                        <CartItem v-for="item in getListCarts" :key="item.id" :cart="item"/>
                    </tbody>
                </table>
            </div>
        </div>
        <TotalPrice :total="getListCarts.reduce((a, b) => a + (b.price * b.quantity), 0)"/>
    </div>
    <div class="container-fluid pt-5">
        <h1 class="text-center">Chưa có hàng trong giỏ</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from "../components/cart/CartItem.vue";
import TotalPrice from "../components/cart/TotalPrice.vue";
import BreadcrumbCom from "../components/inc/BreadcrumbCom.vue";

    export default {
    components: { CartItem, TotalPrice, BreadcrumbCom },
    computed:{
        ...mapGetters(['getListCarts']),
    },
}
</script>

<style lang="scss" scoped>

</style>