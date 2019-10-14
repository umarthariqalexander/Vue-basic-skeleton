import { SET_ALL_PRODUCTS } from './mutation-types'
import productService from '@/api/product.service'

export const getAllProducts = ({ commit }) => {
  productService
    .getAllProducts()
    .then(response => {
      commit(SET_ALL_PRODUCTS, response.data)
    })
    .catch(error => {
      console.log(error)
    })
}
