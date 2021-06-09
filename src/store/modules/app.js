// initial state
const state = () => ({
  drawer: null,
  breadcrumbs: []
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  toggleDrawer(state, payload) {
    state.drawer = payload ? payload : !state.drawer
  },
  pushBreadcrumbs(state, payload) {
    state.breadcrumbs = []
    const parts = payload.to.path !== '/' ? payload.to.path.split('/') : ['']
    parts.forEach((part, index) => {
      if (part && !isNaN(part)) parts[index] = parts[index - 1] + '/' + part
    })
    parts.forEach((part) => {
      const resolved = payload.router.resolve('/' + part).resolved
      state.breadcrumbs.push({
        text:
          resolved.name +
          ('id' in resolved.params ? ' №' + resolved.params.id : ''),
        to: resolved,
        exact: true
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
