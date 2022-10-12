import axios from "axios"
import swal from "sweetalert";
import { APIURL } from "../constant";

export default{
    async getProducts({commit}){
        await axios.get(`${APIURL}/products`)
        .then((response) => {commit('setProducts',response.data)})
    },
    async getFollows({commit},id){
        await axios.get(`http://localhost:3000/users/${id}?_embed=follows`)
        .then((response) => {commit('setFollows',response.data.follows)})
    },
    async addFavorite({state},payload) {
        await axios.post(`${APIURL}/follows/`, { productId: payload.productId, userId: payload.userId })
        .then((response) => state.follows.push(response.data))
        swal('Thành Công', 'Đã thêm vào yêu thích', 'success');
        this.getFollows(payload.userId)
        
    },
    async removeFavorite({state},payload) {
        await axios.delete(`${APIURL}/follows/`+payload.id)
        .then((response) => {let abc =state.follows.splice(payload,1)})
        swal('Thành Công', 'Đã xóa khỏi danh sách yêu thích', 'error');
        this.getFollows(payload.userId)
    }
}