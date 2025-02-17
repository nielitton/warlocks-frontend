import { API_URL } from "@/environments/environments"
import axios from "axios"

const api = axios.create({
    baseURL: API_URL,
})

export function setAuthToken(token: string | null) {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete api.defaults.headers.common['Authorization']
    }
}

export { api }

