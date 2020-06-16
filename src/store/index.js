import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function emptyToy() { return { data: { code: '', name: '', stock: '', price: ''}, id: null } }

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: false,
    currentToy: emptyToy(),
    loading: false
  },
  mutations: {
    SET_TOYS(state, data) { state.toys = data },
    DISPLAY_TOY_FORM(state) { state.showForm = true },
    HIDE_TOY_FORM(state) { state.showForm = false },
    SET_LOADING(state) { state.loading = true },
    UNSET_LOADING(state) { state.loading = false },
    UPDATE_CODE(state, code) { state.currentToy.data.code = code },
    UPDATE_NAME(state, name) { state.currentToy.data.name = name },
    UPDATE_STOCK(state, stock) { state.currentToy.data.stock = stock },
    UPDATE_PRICE(state, price) { state.currentToy.data.price = price },
    SET_CURRENT_TOY(state, toy) {state.currentToy = toy },
    SET_EMPTY_TOY(state) {
      state.currentToy.id = null;
      const base = emptyToy()
      Object.keys(base.data).forEach(key => {
        state.currentToy.data[key] = base.data[key]
      })
    }
  },
  actions: {
    setToys({commit}) {
      commit('SET_LOADING')
      axios.get('https://us-central1-ottoklaus-ec49c.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_TOYS', response.data)
        commit('SET_EMPTY_TOY')
      }).finally(() => {
        commit('UNSET_LOADING')
      }) 
    },
    displayToyForm({commit}) { commit('DISPLAY_TOY_FORM') },
    cancelForm({commit}) { 
      commit('HIDE_TOY_FORM')
      commit('SET_EMPTY_TOY') 
    },
    hideToyForm({commit}) { commit('HIDE_TOY_FORM') },
    updateCode({commit}, code) { commit('UPDATE_CODE', code) },
    updateName({commit}, name) { commit('UPDATE_NAME', name) },
    updateStock({commit}, stock) { commit('UPDATE_STOCK', stock) },
    updatePrice({commit}, price) { commit('UPDATE_PRICE', price) },
    postToy({dispatch, state}) {
      axios.post('https://us-central1-ottoklaus-ec49c.cloudfunctions.net/toys/toy', state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    },
    deleteToy({dispatch}, id) {
      axios.delete(`https://us-central1-ottoklaus-ec49c.cloudfunctions.net/toys/toy/${id}`)
      .then(() => {
        dispatch('setToys')
      })
    },
    setCurrentToy({commit}, id) {
      axios.get(`https://us-central1-ottoklaus-ec49c.cloudfunctions.net/toys/toy/${id}`)
      .then((response) => {
        commit('SET_CURRENT_TOY', response.data)
      })
    },
    updateToy({dispatch, state}, id) {
      axios.put(`https://us-central1-ottoklaus-ec49c.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    },
  },
  modules: {
  }
})