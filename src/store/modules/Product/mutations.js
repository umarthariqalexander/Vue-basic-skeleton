import { SET_ALL_PRODUCTS } from './mutation-types'

export default {
  [SET_ALL_PRODUCTS]: (state, newAllProducts = []) => {
    state.allProducts = newAllProducts
  }
}
