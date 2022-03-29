const vuexData = JSON.parse(localStorage.getItem('vuex')) == null ? {} : JSON.parse(localStorage.getItem('vuex'))
const state = {
  // 当前选择的系统索引
  systemIndex: vuexData.sysIndex == null ? 0 : vuexData.sysIndex,
  systemID: vuexData.systemID == null ? '' : vuexData.systemID,
  systemName: vuexData.systemName == null ? '' : vuexData.systemName,
  systemType: vuexData.systemType == null ? '' : vuexData.systemType,
  memberName: vuexData.memberName == null ? '' : vuexData.memberName,
  detailTag: vuexData.detailTag == null ? 0 : vuexData.detailTag
}

/*
mutations 内部必须是同步方法
 */
const mutations = {
  /**
   * 修改当前首页的系统
   */
  changeSystem (state, sysIndex) {
    state.systemIndex = sysIndex
  },
  changeSystemID (state, systemID) {
    state.systemID = systemID
  },
  changeSystemName (state, systemName) {
    state.systemName = systemName
  },
  changeMemberName (state, memberName) {
    state.memberName = memberName
  },
  changeSystemType (state, systemType) {
    state.systemType = systemType
  },
  changeDetailTag (state, detailTag) {
    state.detailTag = detailTag
  }
}

/*
actions 是 mutations 的异步方法扩展
 */
const actions = {
  /*
  这里可以是异步修改 state
   */
  actionChangeSystem (context, sysIndex) {
    context.commit('changeSystem', sysIndex)
  },
  actionChangeSystemID (context, sysIndex) {
    context.commit('changeSystemID', sysIndex)
  },
  actionChangeMemberName (context, sysIndex) {
    context.commit('changeMemberName', sysIndex)
  },
  actionChangeSystemName (context, sysIndex) {
    context.commit('changeSystemName', sysIndex)
  },
  actionChangeSystemType (context, sysIndex) {
    context.commit('changeSystemType', sysIndex)
  },
  actionChangeDetailTag (context, sysIndex) {
    context.commit('changeDetailTag', sysIndex)
  }
}

const getters = {
  /*
  这里是对state的计算方法
   */
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
