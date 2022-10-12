export default {
    addToCart: function (state, product) {
        //Tim xem da ton tai san pham trong gio hang hay chua
        let item = state.carts.find(i => i.id === product.id)
        if (item) {//Ton tai thi them vao
            item.quantity++;
        } else {//Chua thi tao moi
            state.carts.push({ ...product, quantity: 1 });
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
    setFollows: function (state,follows) {
        state.follows = follows
    },
    removeFromCart: function (state,product) {
        let item = state.carts.indexOf(product)
        state.carts.splice(item,1)
        localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    setUser : function(state,user){
        state.user = user
    }
}