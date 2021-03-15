// initial state
const state = () => ({
  drawer: null
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  toggleDrawer(state, payload) {
    state.drawer = payload ? payload : !state.drawer
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
