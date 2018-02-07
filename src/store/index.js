import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a,
  }
})
