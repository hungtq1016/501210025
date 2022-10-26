<template>
    <div class="row pt-xl-5">
        <div class="col-md-6">
            <h4 class="mb-4">{{dataComment.length}} đánh giá.</h4>
            <div class="media mb-4 border p-2 rounded" v-for="comment in dataComment" :key="comment.id">
                <div class="row">
                    <img src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-avatar-icon-png-image_695765.jpg"
                        alt="Image" class="img-fluid mr-3 mt-1 rounded-circle" style="width: 100px;">
                    <div class="col">
                        <h6>{{comment.user}}<small> - <i>{{comment.date}}</i></small></h6>
                        <star-rating :star-size="20" :show-rating="false" :rating="comment.rating" :read-only="true"/>
                    </div>
                </div>
                <div class="media-body">
                    <p>{{comment.content}}</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4 class="mb-4">Bình luận</h4>
            <div class="d-flex my-3 align-items-center">
                <p class="mb-0 me-2">Đánh giá: </p>
                <star-rating :star-size="20" :show-rating="false" @update:rating="rating = $event" :rating="5"/>
            </div>
            <form @submit.prevent="postComment">
                <div class="form-group">
                    <label for="message">Bình luận của bạn *</label>
                    <textarea id="message" rows="4" class="form-control" style="resize: none;" v-model="comment"></textarea>
                </div>
                <div class="form-group my-2" style="text-align: right;">
                    <input type="submit" value="Đăng" class="btn btn-primary px-3 ms-auto" v-if="this.user"/>
                    <input disabled value="Đăng"  class="btn btn-primary px-3 ms-auto" v-else>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {APIURL} from '../../constant';
import swal from 'sweetalert';
export default {
    components: {
        StarRating
    },
    data() {
        return {
            rating: 5,
            comment:null,
            dataComment:[],
            totalRate:0
        }
    },
    methods:{
        async postComment(){
            if (this.comment == null) {
                swal("Thất bại","Vui lòng nhập bình luận","error")
                return false
            }
            const comment = {
                id: uuidv4(),
                productId: parseInt(this.$route.params.id),
                user:this.user,
                content: this.comment,
                rating:this.rating,
                date: new Date().toISOString().split('T')[0]
            }
            await axios.post(`${APIURL}/comments`,comment)
            swal('Thành Công','Đăng bình luận thành công','success')
            await axios.get(`${APIURL}/products/${this.$route.params.id}?_embed=comments`).then((response) => this.dataComment = response.data.comments);
        },
    },
    async mounted(){
        await axios.get(`${APIURL}/products/${this.$route.params.id}?_embed=comments`).then((response) => this.dataComment = response.data.comments);
        this.dataComment.forEach(element => {
            this.totalRate +=element.rating
        });
    },
    props: ['user'],
}
</script>

<style lang="scss" scoped>

</style>