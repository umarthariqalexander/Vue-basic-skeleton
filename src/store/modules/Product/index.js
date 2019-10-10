const actions = {
  showWelcomeMessage({ commit }) {
    console.log('About Action setWelcomeMessage')
    commit('setWelcomeMessage')
  }
}

export default { actions }
