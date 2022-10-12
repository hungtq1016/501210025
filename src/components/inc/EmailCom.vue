<template>
    <div class="container-fluid  py-5" style="background-color: #f1f2f3;">
        <div class="row justify-content-md-center py-5 px-xl-5">
            <div class="col-md-6 col-12 py-2">
                <div class="text-center mb-2 pb-2">
                    <h1 class="px-5 mb-3">Nhận Thông Tin Khuyến Mãi</h1>
                    <p>Liên hệ ngay để nhận thông tin ưu đãi cực hấp dẫn</p>
                </div>
                <form @submit.prevent="submit">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control py-3" placeholder="Nhập thông tin tại đây" aria-label="Recipient's username"
                        v-model="form.email" required  aria-describedby="button-addon2">
                        <button class="btn btn-outline-primary px-4" type="submit" id="button-addon2">Xác Nhận</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
</template>

<script>
import swal from 'sweetalert';
import axios from "axios";
import {APIURL} from '../../constant';
    export default {
        data(){
            return{
                form:{email:""}
            }
        },
        methods: {
            async submit() {
                await axios.post(`${APIURL}/emails`, this.form);
                swal("Thành Công", "Cảm ơn bạn đã đăng ký", "success");
                this.form.email = null;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>