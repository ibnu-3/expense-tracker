import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://effective-engine-r4vx4vgwv99435x6p-5173.app.github.dev",
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
})
export default axiosInstance