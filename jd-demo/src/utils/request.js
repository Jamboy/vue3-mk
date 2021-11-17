/*
 * @Description: 网络请求
 * @Author: Jamboy
 * @Date: 2021-11-17 09:40:14
 * @LastEditTime: 2021-11-17 17:02:56
 */

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }
    ).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
