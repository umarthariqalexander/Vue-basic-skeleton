import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  welcomeMessage: '',
  welcomeBanner: ''
}

export default { namespaced: true, state, mutations, getters, actions }
