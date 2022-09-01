import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default httpClient
