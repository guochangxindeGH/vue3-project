const state = {
  accountName: '',
  accountPasswd: '',
  rememberPasswd: false,
  // 是否已经登陆
  loginState: false
}

/**
 * 设置一些状态
 * 只能传递第二个参数
 */
const mutations = {
  setAccountName (state, name) {
    state.accountName = name
  },
  setAccountPasswd (state, passwd) {
    state.accountPasswd = passwd
  },
  setRememberPasswd (state, remember) {
    state.rememberPasswd = remember
  },
  setLoginState (state, loginState) {
    state.loginState = loginState
  }
}

/**
 * 获取当前登陆状态
 */
const getters = {
  getLoginState (state) {
    return state.accountName
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('counter_add')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
