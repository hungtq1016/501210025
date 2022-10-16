export default {
  productQty: (state) => (product) => {
    const item = state.carts.find(i => i.id === product.id)
    return (item) ? item.quantity : null;
  },
  getListCarts: state => state.carts,
  getTotalCarts: state => state.carts.length,
  getTotalItem: state => {
    let total = 0
    state.carts.forEach(i =>{
      total+=i.quantity
    })
    return total
  },
  getTotalPrice: state => {
    let total = 0
    state.carts.forEach(i =>{
      total+= i.price * i.quantity
    })
    return total
  },
  getUser: state => state.user,
  getProducts : state => state.products,
  getFavorites : state => state.favorites
}