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

const ShowLoading = () => {
    if (requestCount === 0 && !loading) {
        loading = ElLoading.service({
            text: 'The content is running, patience...',
            background: 'rgba(0, 0, 0, 0.7)',
            spinner: 'el-icon-loading'
        })
    }
    requestCount++;
}

const HideLoading = () => {
    requestCount--
    if (requestCount == 0) {
        loading.close()
    }
}


// Request Interceptor
service.interceptors.request.use(config => {
    ShowLoading()
    return config
}, error => {
    HideLoading()
    console.log(error)
    Promise.reject(error)
})


// Response Interceptor
service.interceptors.response.use(res => {
        HideLoading()
        // 未设置状态码则默认成功状态
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
        HideLoading()
        console.log(error)
        return Promise.reject(error)
    }
)

export default service;