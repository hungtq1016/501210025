<template>
    <div class="col-lg-3 col-md-12">
        <!-- Price Start -->
        <div class="border-bottom mb-4 pb-4">
            <h5 class="font-weight-semi-bold mb-4">Lọc theo giá</h5>
            <form>
                <label for="customRange1" class="form-label">Từ: 1.000.000 VNĐ - {{formatPrice(currentPrice)}} VNĐ</label>
                <input type="range" class="form-range" id="customRange1" min="1000000" max="100000000" step="1000000" 
                v-model="currentPrice" @change="changePrice()">
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <span class="badge border font-weight-normal text-dark">1.000.000 VNĐ</span>
                    <span class="badge border font-weight-normal text-dark">100.000.000 VNĐ</span>   
                </div>
            </form>
        </div>
        <!-- Price End -->
        
        <!-- Color Start -->
        <div class="border-bottom mb-4 pb-4">
            <h5 class="font-weight-semi-bold mb-4">Filter by color</h5>
            <form>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" checked="" id="color-all">
                    <label class="custom-control-label" for="price-all">All Color</label>
                    <span class="badge border font-weight-normal">1000</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="color-1">
                    <label class="custom-control-label" for="color-1">Black</label>
                    <span class="badge border font-weight-normal">150</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="color-2">
                    <label class="custom-control-label" for="color-2">White</label>
                    <span class="badge border font-weight-normal">295</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="color-3">
                    <label class="custom-control-label" for="color-3">Red</label>
                    <span class="badge border font-weight-normal">246</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="color-4">
                    <label class="custom-control-label" for="color-4">Blue</label>
                    <span class="badge border font-weight-normal">145</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input type="checkbox" class="custom-control-input" id="color-5">
                    <label class="custom-control-label" for="color-5">Green</label>
                    <span class="badge border font-weight-normal">168</span>
                </div>
            </form>
        </div>
        <!-- Color End -->

        <!-- Size Start -->
        <div class="mb-5">
            <h5 class="font-weight-semi-bold mb-4">Filter by size</h5>
            <form>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" checked="" id="size-all">
                    <label class="custom-control-label" for="size-all">All Size</label>
                    <span class="badge border font-weight-normal">1000</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="size-1">
                    <label class="custom-control-label" for="size-1">XS</label>
                    <span class="badge border font-weight-normal">150</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="size-2">
                    <label class="custom-control-label" for="size-2">S</label>
                    <span class="badge border font-weight-normal">295</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="size-3">
                    <label class="custom-control-label" for="size-3">M</label>
                    <span class="badge border font-weight-normal">246</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" class="custom-control-input" id="size-4">
                    <label class="custom-control-label" for="size-4">L</label>
                    <span class="badge border font-weight-normal">145</span>
                </div>
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input type="checkbox" class="custom-control-input" id="size-5">
                    <label class="custom-control-label" for="size-5">XL</label>
                    <span class="badge border font-weight-normal">168</span>
                </div>
            </form>
        </div>
        <!-- Size End -->
    </div>
</template>

<script>
import format from '../../mixin/format';

    export default {
        mixins: [format],
        data(){
            return{
                currentPrice:40000000
            }
        },
        methods: {
            changePrice() {
                this.$emit('changePrice', this.currentPrice);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>