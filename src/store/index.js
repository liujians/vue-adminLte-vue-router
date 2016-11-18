// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as state from "./state"

Vue.use(Vuex)

// const state = {
// 	test:"testMsg"
// }
export default new Vuex.Store({
  state,
})
