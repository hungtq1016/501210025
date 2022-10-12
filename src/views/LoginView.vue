<template>
    <div class="bg-light">
        <div class="container " style="padding: 150px 0;">
            <div class="row justify-content-center">
                <div class="col-6 p-4 border bg-white">
                    <form @submit.prevent="submit">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" v-model="form.email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                v-model="form.password">
                        </div>

                        <input type="submit" class="btn btn-primary" value="Xác Nhận"
                            v-if="form.password !='' && form.username !=''" />
                        <input type="submit" class="btn btn-primary" value="Xác Nhận" v-else disabled />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { APIURL } from '../constant';
import swal from 'sweetalert';
import { mapMutations,mapActions } from 'vuex';
export default {
    data() {
        return {
            form: { email: "", password: "" },
        }
    },

    methods: {
        async submit() {
            const login = await axios.post(`${APIURL}/login`, this.form).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    swal("Thất Bại", error.response.data, "error");
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    swal("Thất Bại", error.response.data, "error");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    swal("Thất Bại", error.response.data, "error");
                }
            });
            if (login) {
                this.setUser(login.data.user)
                swal("Thành Công", "Đăng Nhập Thành Công", "success");
                this.getFollows(login.data.user.id)

                this.$router.push('/');
            }
        },
        ...mapMutations(['setUser']),
        ...mapActions(['getFollows'])
    },

}
</script>

<style lang="scss" scoped>

</style>