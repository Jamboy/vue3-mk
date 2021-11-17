/*
 * @Description: 网络请求
 * @Author: Jamboy
 * @Date: 2021-11-17 09:40:14
 * @LastEditTime: 2021-11-17 10:03:58
 */

import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
