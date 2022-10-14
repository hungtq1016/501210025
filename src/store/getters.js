export default {
  productQty: (state) => (product) => {
    const item = state.carts.find(i => i.id === product.id)
    return (item) ? item.quantity : null;
  },
  getListCarts: state => state.carts,
  getUser: state => state.user,
  getProducts : state => state.products,
  getFavorites : state => state.favorites
}