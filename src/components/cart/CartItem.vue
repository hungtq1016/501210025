<template>
    <tr>
        <td class="d-flex align-items-center">
            <img :src="cart.img" style="width:100px">
            <div> {{cart.name}}</div>
        </td>
        <td class="align-middle">{{formatPrice(cart.price)}} VNĐ</td>
        <td class="align-middle">
            <div class="input-group quantity mx-auto" style="width: 100px;">
                <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-minus" @click="minusItem(this.cart)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" width="10px" height="18px">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                        </svg>

                    </button>
                </div>
                <input type="text" class="form-control form-control-sm bg-secondary text-center" :value=cart.quantity>
                <div class="input-group-btn">
                    <button class="btn btn-sm btn-primary btn-plus" @click="addToCart(this.cart)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" width="10px" height="18px">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                </div>
            </div>
        </td>
        <td class="align-middle">{{formatPrice(cart.price*cart.quantity)}} VNĐ</td>
        <td class="align-middle">
            <button class="btn btn-sm btn-primary" @click="confirmDelete()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" width="18">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </td>
    </tr>
</template>

<script>
import swal from 'sweetalert';
import format from '../../mixin/format';
import { mapMutations } from 'vuex';
export default {
    props: ['cart'],
    mixins: [format],
    methods: {
        ...mapMutations(['minusItem', 'addToCart', 'removeFromCart']),
        confirmDelete() {
            swal({
                title: "Xác Nhận",
                text: "Chắc chắn rằng bạn muốn xóa",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Hoàn thành", {
                            icon: "success",
                        });
                        this.removeFromCart(this.cart)
                    }
                });
        }
    },
}
</script>

<style lang="scss" scoped>

</style>