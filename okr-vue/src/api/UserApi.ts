import  request  from "@/utils/request";

class UserApi {
    public async Login(username: string, password: string) : Promise<boolean>
    {
        let isLogin = true;
        const res = await request.post('/user/login', 
        {
            "username" : username,
            "password" : password
        }).then(res => {
            console.log(res)
            isLogin = true
        }).catch(err => {
            console.log(err)
            isLogin = false
        })
        return isLogin
    }
}

export const userApi = new UserApi;