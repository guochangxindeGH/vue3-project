import Mock from 'mockjs'
import MockApi from './mockApi'
import tableAPI from './money'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: '300-600'
})

// Mock.mock('/login', /post|get/i, {
//   'array|1-10': [
//     {
//       'name|+1': [
//         'hello',
//         'mock.js',
//         '!'
//       ]
//     }
//   ]
// })

Mock.mock('/login', /post|get/i, MockApi.login)

// 资金相关
Mock.mock(/\/money\/get/, 'get', tableAPI.getMoneyList)
Mock.mock(/\/money\/remove/, 'get', tableAPI.deleteMoney)
Mock.mock(/\/money\/batchremove/, 'get', tableAPI.batchremoveMoney)
Mock.mock(/\/money\/add/, 'get', tableAPI.createMoney)
Mock.mock(/\/money\/edit/, 'get', tableAPI.updateMoney)
