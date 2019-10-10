import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const state = {
  welcomeMessage: ''
}

export default { namespaced: true, state, mutations, getters, actions }
