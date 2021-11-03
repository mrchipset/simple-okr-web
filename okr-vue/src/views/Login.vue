<template>
  <div class="container"> 
        <el-card class="card">
            <template v-slot:header>
                <img alt="Vue logo" src="../assets/logo.png" width="64" height="64"/>
                <br>
                <span>Simple OKR</span>
            </template>
            
            <div class="form-div">
                <transition name='custom-animated-class'
                     enter-active-class="animate__animated animate__flipInX"
                    leave-active-class="animate__animated animate__flipOutY"
                     mode="out-in"
                      :duration="{ enter: 300, leave:500}" >
                <!-- show login form-->
                <el-form v-if="nav=='login'" :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="120px" class="login-ruleform">
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
                    <el-form-item>
                        <el-link @click="nav='register'" class="small-font">Still haven't an account yet? Register one --></el-link>
                    </el-form-item>
                    <el-form-item label-width="0px">
                        <el-checkbox v-model="loginForm.eula" class="small-font">Agree to simple app end user license</el-checkbox>
                    </el-form-item>
                    <el-button v-on:click="login" type="primary" :disabled="!loginForm.eula">Login</el-button>
                </el-form>
                <!-- show register form-->
                <el-form v-else :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="160px" class="login-ruleform">
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
                    <el-form-item label="Confirm Password" prop="password_confirm">
                        <el-input type="password"
                            v-model="loginForm.passwordConfirm"
                            placeholder="Please Input Password Again"
                            autocomplete="off"
                            autofocus="off"
                            />
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input type="email"
                            v-model="loginForm.email"
                            placeholder="Please Input Your Email"
                            autocomplete="on"
                            autofocus="off"
                            />
                    </el-form-item>
                    <el-form-item label="Phone" prop="phone">
                        <el-input type="email"
                            v-model="loginForm.phone"
                            placeholder="Please Input Your Phone"
                            autocomplete="on"
                            autofocus="off"
                            />
                    </el-form-item>
                    <el-form-item>
                        <el-link @click="nav='login'" class="small-font">Already have an account? Login --></el-link>
                    </el-form-item>

                    <el-form-item label-width="0px">
                        <el-checkbox v-model="loginForm.eula" class="small-font">Agree to simple app end user license</el-checkbox>
                    </el-form-item>
                    <el-button v-on:click="Register" type="primary" :disabled="!loginForm.eula">Register</el-button>
                </el-form>
                </transition>

            </div>
        </el-card>
  </div>
</template>

<script lang="ts">
import { /*Options,*/ Vue } from "vue-class-component";
import 'animate.css';
// @Options({
//   components: {
//   },
// })

interface LoginForm {
    username: string,
    password: string,
    eula: boolean
}

interface RegisterForm extends LoginForm {
    email: string,
    phone: string
    passwordConfirm: string
}

export default class Login extends Vue {
    private login() : void {
        console.log('Login clicked.')
    }

    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                eula: false,
                email: "",
                phone: "",
                passwordConfirm: ""
            } as RegisterForm,
            nav: "login" as string,
            rules: {
            username: [
                {
                    required: true,
                    message: 'Please input User name',
                    trigger: 'blur',
                },
                {
                    min: 4,
                    max: 16,
                    message: 'Length should be 4 to 16',
                    trigger: 'blur',
                },
            ],
            password: [
                {
                    required: true,
                    message: 'Please input password',
                    trigger: 'blur',
                },
                {
                    min: 8,
                    max: 16,
                    message: 'Length should be 8 to 16',
                    trigger: 'blur',
                },
            ],
            password_confirm: [
                {
                    required: true,
                    message: 'Please input your password again',
                    trigger: 'blur',
                },
                // TODO add a rule to check whether password is match
            ],
            phone: [
                {
                    required: true,
                    message: 'Please input your phone number',
                    trigger: 'blur',
                },
                // TODO add a rule to check whether phone is valid
            ],
            email: [
                {
                    required: true,
                    message: 'Please input your email',
                    trigger: 'blur',
                },
                // TODO add a rule to check whether emial is valid
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
    // transition: all .5s;
}

.card:hover {
    margin-top: -5px;
}

.container {
    width: 100%;
    display: flex;
    justify-content:center;
}

.small-font {
    font-size: 9px;
    /deep/ .el-checkbox__label {
        font-size: 9px;
        font-weight: bold;
        line-height: 24px;
    }
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


</style>
