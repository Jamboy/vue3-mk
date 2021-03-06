/*
 * @Description:
 * @Author: Jamboy
 * @Date: 2021-09-13 13:51:39
 * @LastEditTime: 2021-11-22 14:35:58
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "shop" */ '../views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, form, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "shop" */ '../views/home/Home.vue'),
    beforeEnter (to, form, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/orderConfirm/:shopId',
    name: 'OrderConfirm',
    component: () => import(/* webpackChunkName: "orderConfirm" */ '../views/orderConfirm/OrderConfirm.vue')
  }
  // route level code-split ting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  (isLogin || to.name === 'Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
