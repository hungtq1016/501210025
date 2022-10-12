import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TopView.vue'),
      meta: {
        title: 'Trang Chủ'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductView.vue'),
      meta: {
        title: 'Tất Cả Sản Phẩm'
      }
    },
    {
      path: '/carts',
      name: 'carts',
      component: () => import('../views/CartView.vue'),
      meta: {
        title: 'Giỏ Hàng'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Thông Tin Thêm'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Đăng Nhập'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        title: 'Đăng Ký'
      }
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('../views/ProductDetail.vue'),
      meta: {
        title: 'Sản Phẩm'
      }
    },
    {
      path: '/brand/:id',
      name: 'brand',
      component: () => import('../views/ProductView.vue'),
      props: true ,
      meta: {
        title: 'Thương Hiệu'
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'erroe',
      component: () => import('../views/ErrorView.vue'),
      meta: {
        title: '404 Not Found'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = 'EShopper  | ' + to.meta.title
  next()
})
export default router
