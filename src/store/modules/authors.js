import axios from 'axios'

// initial state
const state = () => ({
  authors: []
})

// getters
const getters = {}

// actions
const actions = {
  async fetchAuthors(context) {
    context.commit('setAuthors', await (await axios.get('/authors')).data)
  }
}

// mutations
const mutations = {
  setAuthors(state, payload) {
    state.authors = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
