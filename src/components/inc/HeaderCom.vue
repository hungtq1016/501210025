<template>
    <header>
        <div class=" py-3 px-xl-5 fixed-top bg-white shadow-sm">
            <div class="container-fluid container-xl">
                <div class="row align-items-center">
                    <div class="col-lg-3 d-none d-lg-block">
                        <router-link to="/" class="text-decoration-none">
                            <h1 class="m-0 display-5 font-weight-semi-bold"><span
                                    class="text-primary font-weight-bold border rounded px-3 mr-1">E</span>Shopper</h1>
                        </router-link>
                    </div>
                    <SearchCom />
                    <div class="col-lg-3 col-6 text-right d-flex justify-content-end"  v-if="this.getUser.length ==0">
                        <button class="btn btn-danger" @click="confirm()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14"
                                fill="currentColor">
                                <path
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                            <span class="ms-1">(0)</span>
                        </button>
                        <button class="btn btn-outline-secondary ms-2" @click="confirm()">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14"
                                fill="currentColor">
                                <path
                                    d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                            </svg>
                            <span class="ms-1">({{getListCarts.length}})</span>
                        </button>
                    </div>
                    <div class="col-lg-3 col-6 text-right d-flex justify-content-end" v-else>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-danger" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14"
                                fill="currentColor">
                                <path
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                            <span class="ms-1">({{getFollows.length}})</span>
                        </button>
                        <router-link to="/carts" class="btn btn-outline-secondary ms-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14"
                                fill="currentColor">
                                <path
                                    d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                            </svg>
                            <span class="ms-1">({{getListCarts.length}})</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-top bg-light px-xl-5 py-3" style="margin-top: 90px;">
            <div class="container-fluid container-xl">
                <div class="row">
                    <div class="col">
                        <nav class="navbar navbar-expand-lg  navbar-light py-3 py-lg-0 px-0">
                            <router-link to="/" class="text-decoration-none d-block d-lg-none">
                                <h1 class="m-0 display-5 font-weight-semi-bold"><span
                                        class="text-primary font-weight-bold border  px-3 mx-1">E</span> Shopper</h1>
                            </router-link>
                            <button type="button" class="navbar-toggler" data-toggle="collapse"
                                data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav mr-auto py-0">
                                    <router-link to="/" class="nav-item nav-link active">Trang Chủ</router-link>
                                    <router-link to="/products" class="nav-item nav-link">Sản Phẩm</router-link>
                                    <router-link to="/about" class="nav-item nav-link">Thông Tin </router-link>
                                </div>

                                <div class="navbar-nav ml-auto py-0" v-if="getUser.length != 0">
                                    <div class="nav-item nav-link"><b>Xin chào: </b>{{getUser.username}}</div>
                                    <a @click="logout" class="nav-item nav-link">Đăng Xuất</a>
                                </div>
                                <div class="navbar-nav ml-auto py-0" v-else>
                                    <router-link to="/login" class="nav-item nav-link">Đăng Nhập</router-link>
                                    <router-link to="/register" class="nav-item nav-link">Đăng Ký</router-link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <ModalCom class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :array="this.getFollows"/>
</template>

<script>
import swal from 'sweetalert';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import SearchCom from './SearchCom.vue';
import ModalCom from './ModalCom.vue';
export default {
    computed: {
        ...mapGetters(['getUser', 'getListCarts','getFollows']),
    },
    methods: {
        ...mapActions(['getProducts']),
        ...mapMutations(['setUser']),
        logout() {
            this.setUser([])
            this.$router.push('login')
            swal("Thành Công", "Đăng xuất thành công", "success")
        },
        confirm(){
            swal({
                title: "Yêu Cầu",
                text: "Bạn phải đăng nhập để thực hiện chức năng",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willLogin) => {
                (willLogin) ? this.$router.push('/login') :''
            });
        }
    },
    mounted() {
        this.getProducts()
    },
    components: { SearchCom, ModalCom }
}
</script>
