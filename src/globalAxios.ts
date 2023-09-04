import axios from 'axios'

// Set the base URL or other default settings
axios.defaults.baseURL = 'https://api.spotify.com/v1'

// 添加请求拦截器
axios.interceptors.request.use(
  async function (config) {
    // 在发送请求之前做些什么
    return config
  },
  async function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axios.interceptors.response.use(
  async function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  async function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default axios
