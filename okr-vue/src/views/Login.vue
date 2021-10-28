<template>
  <div class="container">
    <el-card class="card">
        <img alt="Vue logo" src="../assets/logo.png" />
        <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="120px" class="login-ruleform">
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
                <el-button v-on:click="login" type="primary">Login</el-button>
            </el-form-item>
        </el-form>
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

<style scoped>
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
</style>
