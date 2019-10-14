import * as actions from './actions'
import mutations from './mutations'

const state = {
  allProducts: []
}

export default { namespaced: true, actions, mutations, state }
