import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.axios的拦截器

  // 3.发送真正的网络请求
  return instance(config)
}

export function request1(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    method:'post',
    baseURL: 'http://127.0.0.1:3007/api',
    timeout: 5000
  })

  // 2.axios的拦截器

  // 3.发送真正的网络请求
  return instance(config)
}