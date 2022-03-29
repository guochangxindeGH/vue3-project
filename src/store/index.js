import { createStore } from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

/**
 * 参数说明
 * 1、目录，也就是当前目录
 * 2、是否包含子目录中的文件
 * 3、引入的文件的匹配表达式
 */
const files = require.context('./storeModules', false, /\.js$/)
const modules = {}

/**
  * 作用：扫描storeModules目录下面所有的store文件，然后统一加入到vuex中
  */
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// export default new Vuex.Store({
//   modules,
//   plugins: [createPersistedState({
//     reducer(state) {
//       return {
//         // 只保存某些store
//         account: state.account,
//         sysIndex: state.homeStore.systemIndex,
//         systemID: state.homeStore.systemID,
//         systemName: state.homeStore.systemName,
//         memberName: state.homeStore.memberName,
//         syslogStore: state.syslogStore,
//         attrStore: state.attrStore,
//       };
//     },
//   })],
//   strict: process.env.NODE_ENV !== 'production',
// });
