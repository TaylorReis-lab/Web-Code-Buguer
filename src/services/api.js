import axios from 'axios'

const apiCodeBuguer = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBuguer.interceptors.request.use(
  async config => {
    const userData = await localStorage.getItem('codebuguer:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default apiCodeBuguer
