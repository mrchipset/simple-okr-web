<template>
  <div class="container">
    <el-card class="card">
        <template v-slot:header>
            <img alt="Vue logo" src="../assets/logo.png" width="64" height="64"/>
            <br>
            <span>Simple OKR</span>
        </template>

        <el-radio-group id="nav-btn-grp" v-model="nav">
            <el-radio-button border class="radio-login" label="login">Login</el-radio-button>
            <el-radio-button border class="radio-register" label="register">Register</el-radio-button >
        </el-radio-group>
        <div class="form-div">
            <!-- show login form-->
            <el-form v-show="nav=='login'" :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="120px" class="login-ruleform">
                <el-form-item label="Username" prop="username">
                    <el-input type="text" 
                        v-model="loginForm.username" 
                        placeholder="Please Input Username"
                        autocomplete="on"
                        autofocus="off"
                        />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password"
                        v-model="loginForm.password"
                        placeholder="Please Input Password"
                        autocomplete="off"
                        autofocus="off"
                        />
                </el-form-item>
                <el-form-item class="submit-btn">
                    <el-button v-on:click="login" type="primary">Login</el-button>
                </el-form-item>
            </el-form>
            <!-- show register form-->
            <el-form v-show="nav=='register'" :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="120px" class="login-ruleform">
                <p>Register</p>
                <el-form-item label="Username" prop="username">
                    <el-input type="text" 
                        v-model="loginForm.username" 
                        placeholder="Please Input Username"
                        autocomplete="on"
                        autofocus="off"
                        />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password"
                        v-model="loginForm.password"
                        placeholder="Please Input Password"
                        autocomplete="off"
                        autofocus="off"
                        />
                </el-form-item>
                <el-form-item class="submit-btn">
                    <el-button v-on:click="Register" type="primary">Register</el-button>
                </el-form-item>
            </el-form>
        </div>
        
    </el-card>
  </div>
</template>

<script lang="ts">
import { /*Options,*/ Vue } from "vue-class-component";

// @Options({
//   components: {
//   },
// })

interface LoginForm {
    username: string,
    password: string
}

export default class Login extends Vue {
    private login() : void {
        console.log('Login clicked.')
    }

    data() {
        return {
            loginForm: {
                username: "",
                password: ""
            } as LoginForm,
            nav: "login" as string,
            rules: {
            username: [
                {
                    required: true,
                    message: 'Please input Activity name',
                    trigger: 'blur',
                },
                {
                    min: 3,
                    max: 5,
                    message: 'Length should be 3 to 5',
                    trigger: 'blur',
                },
            ],
            password: [
                {
                    required: true,
                    message: 'Please input Activity name',
                    trigger: 'blur',
                }
            ]
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
.card {
    min-width: 480px;
    max-width: 40%;
    margin-right: 20px;
    margin-left: 20px;
    transition: all .5s;
}

.card:hover {
    margin-top: -5px;
}

.container {
    width: 100%;
    display: flex;
    justify-content:center;
}


.el-radio-group {
    width: 100%;
    min-width: 100px;
    max-width: 200px;
    margin: 0px;
    margin-bottom: 20px;
    .radio-login {
        min-width: 50px;
        border: 5px;
    }

    .radio-register {
        min-width: 50px;
        border: 5px;
    }
}

.submit-btn {
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>
