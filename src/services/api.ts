import { API_URL } from "@/environments/environments"
import axios from "axios"
import { getCookie } from "cookies-next"

const api = axios.create({
    baseURL: API_URL,
})

export { api }

const token = getCookie('token')

if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}