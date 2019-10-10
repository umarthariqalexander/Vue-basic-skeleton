import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
import Customer from './modules/Customer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Product,
    Customer
  },
  strict: process.env.NODE_ENV !== 'production'
})
