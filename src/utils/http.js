import axios from 'axios'
import {
  message
} from 'ant-design-vue'
import store from '../store'
// import { getToken } from '@/utils/auth'

// axios.defaults.baseURL = 'http://hp.suoluomei.cn/index.php'  //正式
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers = {
        // 'Authorization': 'Token ' + getToken() // 携带权限参数
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    message.alert({
      title: '提示',
      message: '网络请求失败，请刷新重试'
    })
    return Promise.reject(error)
  }
)

export default service
export const baseURL = process.env.BASE_API
