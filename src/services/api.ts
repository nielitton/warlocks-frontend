import { API_URL } from "@/environments/environments"
import axios from "axios"

const api = axios.create({
    baseURL: API_URL,
})

export { api }

