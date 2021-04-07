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
    let parts = payload.path.split('/')
    if (!parts[1]) return
    parts[0] = 'home'
    let paths = []
    for (let i = parts.length - 1; i >= 0; i--) {
      paths[i] = parts.join('/')
      parts.pop()
    }
    paths.forEach((path, index) => {
      let parts = path.split('/').slice(0)
      state.breadcrumbs.push({
        text: parts[index][0].toUpperCase() + parts[index].slice(1),
        to: '/' + path.split('/').slice(1).join('/'),
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
