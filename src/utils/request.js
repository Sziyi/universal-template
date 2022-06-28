// 导入axios
// 创建axios实例
// 创建请求拦截器
// 创建响应拦截器
// 统一传参方式   处理get请求方式下一就可以使用data方式传参
// 全局loading加载
// 处理路由切换接口重复请求
// 导出axios实例对象

// 导入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'

import md5 from 'md5'
// loading
import loading from './loading'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 打开loading加载
    loading.open()
    // 调用接口要穿的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    // TODO将token 通过请求头发送给后台

    return config
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 关闭loading加载
    loading.close()
    const { success, data, message } = response.data
    // TODO全局响应处理
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
    // TODO token过期状态
  },
  (error) => {
    // 关闭loading加载
    loading.close()
    // 响应失败进行信息提示
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)
// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'post') {
    options.params = options.data || {}
  }
  return service(options)
}

// 获取icode
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

// 导出axios实例对象
export default request
