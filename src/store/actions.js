import axios from "axios"
import swal from "sweetalert";
import { APIURL } from "../constant";

export default{
    async getProducts({commit}){
        await axios.get(`${APIURL}/products`)
        .then((response) => commit('setProducts',response.data))
    },
    async getFavorites({commit},userId){
        await axios.get(`${APIURL}/users/${userId}?_embed=follows`)
        .then((response) => commit('SET_FAVORITE',response.data.follows))
    },
    async addFavorite({commit},payload) {
        await axios.post(`${APIURL}/follows/`, { productId: payload.productId, userId: payload.userId })
        .then((response) => commit("ADD_FAVORITE", response.data))
        swal('Thành Công', 'Đã thêm vào yêu thích', 'success');
    },
    async removeFavorite({commit},payload) {
        await axios.delete(`${APIURL}/follows/`+payload.id)
        .then(() => { commit('REMOVE_FAVORITE', payload.id); })
        swal('Thành Công', 'Đã xóa khỏi danh sách yêu thích', 'error');
    },
}