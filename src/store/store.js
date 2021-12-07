import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: (state) => {
      return state.categories.length
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done)
    },
    activeTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length
    },
  },
  modules: {},
})
