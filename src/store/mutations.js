export default {
    addToCart: function (state, payload) {
        //Tim xem da ton tai san pham trong gio hang hay chua
        let item = state.carts.find(i => i.id === payload.product.id)
        if (item) {//Ton tai thi them vao
            item.quantity++;
        } else {//Chua thi tao moi
            state.carts.push({ ...payload.product, quantity: payload.quantity });
        }
        
        localStorage.setItem('carts', JSON.stringify(state.carts))//Hoan thanh xong thi dua vao localStore tren may nguoi dung
    },
    minusItem: function (state, product) {
        let item = state.carts.find(i => i.id === product.id)

        if (item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                state.carts = state.carts.filter(i => i.id !== product.id)
            }
        }

        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    setProducts: function (state,products) {
        state.products = products
    },
    removeFromCart: function (state,product) {
        let item = state.carts.indexOf(product)
        state.carts.splice(item,1)
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    setUser : function(state,user){
        state.user = user
    },
    SET_FAVORITE: function (state,favorites) {
        state.favorites = favorites
    },
    ADD_FAVORITE: function(state,favorite) {
        state.favorites.push(favorite)
    },
    REMOVE_FAVORITE:function(state,id){
        index = state.favorites.findIndex(favorite => favorite.id == id);
        state.favorites.splice(index, 1);
    }
}