import axios from 'axios'

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('access_token')
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'