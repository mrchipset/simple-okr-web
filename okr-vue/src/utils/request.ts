import axios from "axios";
import { ElMessage, ElLoading } from "element-plus";

const service = axios.create({
    // define the service base url
    baseURL: process.env.VUE_APP_BASE_API,
    // timeout
    timeout: 5000,
    headers: {'Content-Type': 'application/json;charset=utf-8'}
})

console.log(process.env.VUE_APP_BASE_API);

let loading:any;
let requestCount:number = 0;



// Request Interceptor
service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})


// Response Interceptor
service.interceptors.response.use(res => {
        const code = res.status || 200;
        console.log(code)
        if(code == 200){
            return Promise.resolve(res.data)
        }else{
            ElMessage.error('error request')
            return Promise.reject(res.data)
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service;