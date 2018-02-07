const state = {
  fatherTotle: 0,
  childTotle: 1000
}

const mutations = {
  giveToFather(state, payload) {
    state.fatherTotle = +state.fatherTotle + +payload;
    state.childTotle = +state.childTotle - +payload;
  },
  earnMoney(state, payload) {
    state.fatherTotle += payload;
  }
}
const getters = {

}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
