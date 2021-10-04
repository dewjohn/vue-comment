import axios from 'axios'

const instancle = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  withCredentials: true
})

const http = {
  get: (url, params = {}) => {
    return new Promise((resolve, reject) => {
      instancle.get(url, { params })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post: (url, data = {}) => {
    return new Promise((resolve, reject) => {
      instancle.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default http
