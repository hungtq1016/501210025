<template>
    <div class="row px-xl-5 justify-content-end">
        <div class="col-lg-4">
            <div class="card border-secondary mb-5">
                <div class="card-header bg-secondary border-0">
                    <h4 class="font-weight-semi-bold m-0">Thanh Toán</h4>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between mb-3 pt-1">
                        <h6 class="font-weight-medium">Tạm Tính</h6>
                        <h6 class="font-weight-medium">{{formatPrice(total)}} VNĐ</h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="font-weight-medium">Giao Hàng (5%)</h6>
                        <h6 class="font-weight-medium">{{formatPrice(total*0.05)}} VNĐ</h6>
                    </div>
                </div>
                <div class="card-footer border-secondary bg-transparent">
                    <div class="d-flex justify-content-between mt-2">
                        <h5 class="font-weight-bold">Tổng Cộng</h5>
                        <h5 class="font-weight-bold">{{formatPrice(total*1.05)}} VNĐ</h5>
                    </div>
                    <button class="btn btn-block btn-primary my-3 py-3">Tiến Hành Thanh Toán</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import format from '../../mixin/format';
    export default {
        mixins: [format],
        props:{
            total:Number
        }
    }
</script>

<style lang="scss" scoped>

</style>