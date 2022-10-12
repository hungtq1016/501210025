import axios from "axios"
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
}