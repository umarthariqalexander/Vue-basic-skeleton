import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: () =>
        import(/* webpackChunkName: "product" */ './views/Product/Product.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () =>
        import(
          /* webpackChunkName: "customer" */ './views/Customer/Customer.vue'
        )
    }
  ]
})
