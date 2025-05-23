import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({
    baseURL:`${apiURL}`,
    headers:{
        'Content-Type': 'application/json',
    }
})

export default apiClient