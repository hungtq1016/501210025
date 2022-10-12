<template>
    <BreadcrumbCom :target="this.product.name" :isChild="true" />
    <div class="container-fluid container-xl">
        <div class="row pt-xl-5 ">
            <div class="col-lg-4">
                <img class="w-100 h-100" :src="product.img" alt="Image">
            </div>
            <div class="col-lg-8 pb-5 pos">
                <h3 class="font-weight-semi-bold">{{product.name}} <span class="badge bg-danger text-white"
                        v-if="product.discount">-{{product.discount}}%</span></h3>
                <div class="d-flex mb-3">
                    <small class="pt-1">({{product.rate}} rating)</small>
                </div>
                <div class="d-flex" v-if="product.discount">
                    <h3 class="font-weight-semi-bold ">{{formatPrice(product.price*(1-product.discount/100))}}VNĐ</h3>
                    <h6 class="text-muted ml-2"><del>{{formatPrice(product.price)}} VNĐ</del></h6>
                </div>
                <h3 class="font-weight-semi-bold mb-4" v-else>{{formatPrice(product.price)}} VNĐ</h3>
                <p class="mb-4">{{product.desc}}.</p>
                <div class="d-flex mb-3">
                    <p class="text-dark font-weight-medium mb-0 me-3">Sizes:</p>
                    <form class="d-flex gap-2">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="size-1" name="size">
                            <label class="custom-control-label" for="size-1">XS</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="size-2" name="size">
                            <label class="custom-control-label" for="size-2">S</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="size-3" name="size">
                            <label class="custom-control-label" for="size-3">M</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="size-4" name="size">
                            <label class="custom-control-label" for="size-4">L</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="size-5" name="size">
                            <label class="custom-control-label" for="size-5">XL</label>
                        </div>
                    </form>
                </div>
                <div class="d-flex mb-4">
                    <p class="text-dark font-weight-medium mb-0 me-3">Colors:</p>
                    <form class="d-flex gap-2">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-1" name="color">
                            <label class="custom-control-label" for="color-1">Black</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-2" name="color">
                            <label class="custom-control-label" for="color-2">White</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-3" name="color">
                            <label class="custom-control-label" for="color-3">Red</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-4" name="color">
                            <label class="custom-control-label" for="color-4">Blue</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="color-5" name="color">
                            <label class="custom-control-label" for="color-5">Green</label>
                        </div>
                    </form>
                </div>
                <div class="d-flex align-items-center mb-4 pt-2" v-if="getUser.length == 0">
                    <button class="btn btn-danger" @click="confirm()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" fill="currentColor">
                            <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                    </button>
                    <button class="btn btn-outline-secondary ms-2" @click="addToCart(this.product)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" fill="currentColor">
                            <path
                                d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                        </svg>
                        <span class="ms-1">Thêm Vào Giỏ Hàng</span>
                    </button>
                </div>
                <div class="d-flex align-items-center mb-4 pt-2" v-else>
                    <button class="btn btn-danger" @click="unFollowProduct(product.id)" v-if="isFollow">
                        xoa
                    </button>
                    <button class="btn btn-danger" @click="followProduct(product.id)" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" fill="currentColor">
                            <path
                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                    </button>
                    <button class="btn btn-outline-secondary ms-2" @click="addToCart(this.product)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="14" fill="currentColor">
                            <path
                                d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                        </svg>
                        <span class="ms-1">Thêm Vào Giỏ Hàng</span>
        
                    </button>
                </div>
                <div class="d-flex pt-2">
                    <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                    <div class="d-inline-flex">
                        <a class="text-dark px-2" href="https://www.facebook.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"
                                fill="#4267B2">
                                <path
                                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                        </a>
                        <a class="text-dark px-2" href="https://twitter.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"
                                fill="#1DA1F2">
                                <path
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                        </a>
                        <a class="text-dark px-2" href="https://www.linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                                fill="#0077b5">
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </a>
                        <a class="text-dark px-2" href="https://www.pinterest.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="20" height="20"
                                fill="#E60023">
                                <path
                                    d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ListItem title="Có Thể Bạn Sẽ Thích" view="date" :isGreater="false" :max="4" />
    </div>
</template>

<script>
import axios from 'axios';
import format from '../mixin/format';
import { mapMutations, mapGetters } from 'vuex';
import { APIURL } from '../constant';
import ListItem from '../components/product/ListItem.vue';
import BreadcrumbCom from '../components/inc/BreadcrumbCom.vue';
import swal from 'sweetalert';

export default {
    components: { BreadcrumbCom, ListItem },
    data() {
        return { product: {}}
    },
    computed: {
        ...mapGetters(['getUser','getFollows']),
        isFollow() {
            for (let i = 0; i < this.getFollows.length; i++) {
                if (this.product.id ===  this.getFollows[i].productId) return i;
            }
            return false;
        }
    },
    async mounted() {
        await axios.get(`${APIURL}/products/${this.$route.params.id}`).then((response) => this.product = response.data);
    },
    mixins: [format],
    methods: {
        ...mapMutations(['addToCart']),
        async followProduct(id) {
                await axios.post(`${APIURL}/follows/`, { productId: id, userId: this.getUser.id });
                swal('Thành Công', 'Đã thêm vào yêu thích', 'success')
            
        },
        async unFollowProduct(id) {
            await axios.delete(`${APIURL}/follows/${this.isFollow}`);
            swal('Ta', 'Đã xoa', 'error')
        },
    }
}
</script>

<style lang="scss" scoped>

</style>