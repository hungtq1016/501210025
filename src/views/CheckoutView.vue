<template>
    <div class="container mb-5">
        <main>
            <div class="py-5 text-center">
                <h2>Thanh Toán</h2>
            </div>
            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Kiểm Tra</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 class="my-0">Hình Thức Thanh Toán</h6>
                                <small class="text-muted"></small>
                            </div>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Tổng Tiền (VNĐ)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Địa Chỉ Giao Hàng</h4>
                    <form class="needs-validation">
                        <!-- <div class="row g-3">
                            <div class="col-12">
                                <label for="name" class="form-label">Họ và Tên*</label>
                                <input type="text" class="form-control" id="name" placeholder="Vui lòng nhập tên"
                                    v-model="name" required="Tên là bắt buộc">
                            </div>
                            <div class="col-12">
                                <label for="phone" class="form-label">Số Điện Thoại*</label>
                                <div class="input-group has-validation">
                                    <input type="text" class="form-control" id="phone"
                                        placeholder="Vui lòng nhập số điện thoại" v-model="phone"
                                        required="Số điện thoại là bắt buộc">
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">Email*</label>
                                <input type="email" class="form-control" id="email" placeholder="you@email.com"
                                    v-model="email" required="Email là bắt buộc">
                            </div>

                            <div class="col-12">
                                <label for="address" class="form-label">Địa Chỉ Giao Hàng*</label>
                                <input type="text" class="form-control" id="address" placeholder="20 Âu Cơ"
                                    v-model="address" required="Địa chỉ là bắt buộc">
                            </div>
                        </div> -->
                        <hr class="my-4">

                        <!-- <div class="row g-5">
                            <div class="col-6">
                                <h4 class="mb-3">Phương Thức Thanh Toán</h4>

                                <div class="my-3">
                                    <div class="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input"
                                            checked required="">
                                        <label class="form-check-label" for="credit">Tiền Mặt</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input"
                                            required="">
                                        <label class="form-check-label" for="debit">Chuyển Khoảng Ngân Hàng</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input"
                                            required="">
                                        <label class="form-check-label" for="paypal">MoMo</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <h4 class="mb-3">Vận Chuyển</h4>

                                <div class="my-3">
                                    <div class="form-check">
                                        <input id="shippingMethod1" name="ship" type="radio" class="form-check-input"
                                            value="1" v-model="aaaaa">
                                        <label class="form-check-label" for="shippingMethod1">Giao Hàng Tận
                                            Nơi</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="shippingMethod2" name="ship" type="radio" class="form-check-input"
                                            value="2" v-model="ships">
                                        <label class="form-check-label" for="shippingMethod2">Tại Cửa Hàng</label>
                                    </div>
                                </div>

                            </div>
                        </div> -->

                        <div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>

                        <hr class="my-4">

                        <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </main>

    </div>
</template>

<script>
export default {
    data() {
        return {
            shipping: String
        }
    },

}
</script>

<style lang="scss" scoped>

</style>