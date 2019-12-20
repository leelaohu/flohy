import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMarkShow:false
  },
  mutations: {
    openMark(state){
      state.isMarkShow = true
    },
    closeMark(state){
      state.isMarkShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
