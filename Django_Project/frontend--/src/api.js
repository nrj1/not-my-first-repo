 import axios from "axios"
 import { ACCESS_TOKEN } from "./constants"

 const apiUrl = "https://50368a2d-4b87-41a3-ac5e-fd58befe3e2d-dev.e1-us-east-azure.choreoapis.dev/django-react-project/backend/v1"

 const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
 })

 api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
 )

 export default api