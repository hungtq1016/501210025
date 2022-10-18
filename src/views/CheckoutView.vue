<template>
    <div class="container mb-5">
        <main>
            <div class="py-5 text-center">
              <h2>Thanh Toán</h2>
            </div>
            <div class="row g-5">
              <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-primary">Tổng Quan</span>
                  <span class="badge bg-primary rounded-pill">{{this.getTotalCarts}}</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Phương Thức Thanh Toán</h6>
                      <small class="text-muted">{{cart.payment}}</small>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 class="my-0">Phương Thức Vận Chuyển</h6>
                      <small class="text-muted">{{cart.shipping}}</small>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Tổng Tiền (VNĐ)</span>
                    <strong>0 VNĐ</strong>
                  </li>
                </ul>
              </div>
              <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Thông Tin Thanh Toán</h4>
                <form class="needs-validation">
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="fullName" class="form-label">Họ và Tên <span class="text-muted">*</span></label>
                      <input type="text" class="form-control" id="fullName" placeholder="Nhập tên..."  required
                      :class="{'border-success':isDone(this.cart.name),'border-danger':isDone(!this.cart.name)}" v-model="cart.name">
                      <div class="invalid-feedback" :class="{'d-block':isDone(!this.cart.name)}">
                        Vui lòng điền đầy đủ thông tin.
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="email" class="form-label">Email <span class="text-muted">*</span></label>
                      <input type="email" class="form-control" id="email" placeholder="Nhập email..."  required
                      :class="{'border-success':isDone(this.cart.email),'border-danger':isDone(!this.cart.email)}" v-model="cart.email">
                      <div class="invalid-feedback" :class="{'d-block':isDone(!this.cart.email)}">
                        Vui lòng điền đầy đủ thông tin.
                      </div>
                    </div>
                    <div class="col-12">
                        <label for="phone" class="form-label">Số Điện Thoại <span class="text-muted">*</span></label>
                        <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại..." 
                        required :class="{'border-success':isDone(this.cart.phone),'border-danger':isDone(!this.cart.phone)}" v-model="cart.phone">
                        <div class="invalid-feedback" :class="{'d-block':isDone(!this.cart.phone)}">
                            Vui lòng điền đầy đủ thông tin.
                          </div>
                      </div>
                    <div class="col-12">
                      <label for="address" class="form-label">Địa Chỉ <span class="text-muted">*</span></label>
                      <input type="text" class="form-control" id="address" placeholder="Nhập địa chỉ..." required
                      :class="{'border-success':isDone(this.cart.address),'border-danger':isDone(!this.cart.address)}" v-model="cart.address">
                      <div class="invalid-feedback" :class="{'d-block':isDone(!this.cart.address)}">
                        Vui lòng điền đầy đủ thông tin.
                      </div>
                    </div>
                  </div>
                  <hr class="my-4">
                  <div class="row">
                    <div class="col-sm-6">
                        <h4 class="mb-3">Hình thức thanh toán</h4>
                        <div class="my-3">
                          <div class="form-check">
                            <input id="payment1" name="paymentMethod" type="radio" class="form-check-input" value="Tiền Mặt" v-model="cart.payment" checked>
                            <label class="form-check-label" for="payment1">Tiền Mặt</label>
                          </div>
                          <div class="form-check">
                            <input id="payment2" name="paymentMethod" type="radio" class="form-check-input" value="Thanh Toán Ngân Hàng" v-model="cart.payment">
                            <label class="form-check-label" for="payment2">Thanh Toán Ngân Hàng</label>
                          </div>
                          <div class="form-check">
                            <input id="payment3" name="paymentMethod" type="radio" class="form-check-input" value="Momo" v-model="cart.payment">
                            <label class="form-check-label" for="payment3">Momo</label>
                          </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <h4 class="mb-3">Hình thức vận chuyển</h4>
                        <div class="my-3">
                          <div class="form-check">
                            <input id="shipping1" name="shippingMethod" type="radio" class="form-check-input" value="Giao Hàng Tận Nơi" v-model="cart.shipping" checked>
                            <label class="form-check-label" for="shipping1">Giao Hàng Tận Nơi</label>
                          </div>
                          <div class="form-check">
                            <input id="shipping2" name="shippingMethod" type="radio" class="form-check-input" value="Nhận Tại Cửa Hàng" v-model="cart.shipping">
                            <label class="form-check-label" for="shipping2">Nhận Tại Cửa Hàng</label>
                          </div>
                        </div>
                    </div>
                  </div>
                  <hr class="my-4">
        
                  <button class="w-100 btn btn-primary btn-lg" type="submit" @click.prevent="checkOut()">Hoàn Thành</button>
                </form>
              </div>
            </div>
          </main>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { APIURL } from '../constant'
import { v4 as uuidv4 } from 'uuid';
import format from '../mixin/format';
import swal from 'sweetalert';

export default {
    data() {
        return {
            
            cart:{
                id:uuidv4(),
                phone:'',
                name:'',
                address:'',
                email:'',
                shipping: 'Giao Hàng Tận Nơi',
                payment:'Tiền Mặt',
                createAt:'',
                total:0
            },
            
        }
    },
    methods:{
        isDone(value){
            if (value) {
                return true
            } else {
                return false
            }
        },
        isShippment(){
            if (this.cart.shipping == 'Giao Hàng Tận Nơi') {
                return 1.05
            }else{
                return 1
            }
        },
        async checkOut(){
            this.cart.createAt = new Date().toISOString().split('T')[0]
            this.cart.total = this.getTotalPrice * this.isShippment()
            let check = await axios.post(`${APIURL}/carts/`,this.cart)
            if (check) {
                this.getListCarts.forEach(async i=>{
                    await axios.post(`${APIURL}/orders/`,{
                        id: uuidv4(),
                        cartId : this.cart.id,
                        productId : i.id,
                        qtyInCart : i.quantity,
                        total: i.quantity * i.price
                    })
                })
                swal('Thành Công','Thanh toán thành công','success')
                this.$router.push({ name: 'done', query:{id:this.cart.id}}) 
            }else{
                swal('Thất Bại','Không thể thanh toán','error')
            }
        }
    },
    mounted(){
        this.cart.name = this.getUser.username;
        this.cart.phone = this.getUser.phone;
        this.cart.email = this.getUser.email;
        
    },
    computed:{
        ...mapGetters(['getUser','getTotalCarts','getListCarts','getTotalPrice']),
    }

}
</script>

<style lang="scss" scoped>

</style>