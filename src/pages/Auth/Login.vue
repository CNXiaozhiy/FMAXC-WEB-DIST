<template>
    <div id="loginPage" v-loading.fullscreen.lock="fullscreenLoading">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <form @submit.prevent="" class="loginForm p-2 p-sm-5">
                <h2 class="title">FmaxCloud</h2>
                <span class="subtitle">欢迎登录Fmaxcloud官网</span>
                <el-form-item label="账号" prop="username" class="el-form-full">
                    <el-input class="input w-100" v-model.lazy="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="el-form-full">
                    <el-input class="input w-100" v-model.lazy="ruleForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item prop="vaptcha" class="el-form-full mt-2">
                    <Vaptcha :passCallback="vpass" ref="vaptchaVc" style="line-height: normal"/>
                </el-form-item>
                <el-form-item prop="NologinType">
                    <el-checkbox class="Nologin" name="type" v-model="ruleForm.NologinType">7天内免登录</el-checkbox>
                </el-form-item>
                <button v-wave class="btn btn-primary" @click="submitForm('ruleForm')" :disabled="loginBtnDisabled">
                    <div class="spinner-border mini text-light me-2" role="status" v-show="loginBtnDisabled"></div>登录</button>
                <hr>
                <button v-wave class="btn btn-info btn-relief" @click="quickLogin('qq')">使用QQ登录快速登录/注册</button>
                <button v-wave class="btn btn-success btn-relief" @click="quickLogin('wx')">使用微信快速登录/注册</button>
                <span class="regspan">没有账号？ <router-link to="/auth/register">前往注册</router-link> 或 <router-link to="/auth/forgot">忘记密码？</router-link></span>
                <span class="retrieve">如果您找不回账号,可以<a href="#">咨询客服</a>协助找回</span>
            </form>
        </el-form>
    </div>
</template>

<script>
import { login } from '../../scripts/auth/'
import _ from 'lodash';
import Vaptcha from "../../components/Vaptcha.vue";

export default {
    name: 'Login',
    data(){
        return {
            fullscreenLoading: false,
            ruleForm: {
                username: '',
                password: '',
                vaptcha: '',

                NologinType: false,
            },
            vaptcha: {
                server: ''
                // token: ''
            },
            loginBtnDisabled: false,
            rules: {
                username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                vaptcha: [
                { required: true, message: '请先完成人机验证', trigger: 'blur' }
                ]
            }
        }
    },
    components: {
        Vaptcha
    },
    async mounted(){
        if (await this.$store.state.userData.pullData(this,false,true) === 1) this.$router.replace({name: 'rDashboardMain'});
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                this.UserLogin();
                } else {
                return false;
                }
            });
        },
        quickLogin(){
            // this.$toastx({
            //     title: '暂不支持',
            //     type: 'warning'
            // })
        },
        vpass(data){
        this.vaptcha.server = data.server;
        // this.vaptcha.token = data.token;
        this.ruleForm.vaptcha = data.token;
        },
        UserLogin(){
            this.loginBtnDisabled = true;
            if (!this.ruleForm.username || !this.ruleForm.password ) {this.$message({
                message: '请填写完整信息',
                type: 'warning'
            });setTimeout(()=>{this.loginBtnDisabled = false;},3000);return;};
            if (!this.vaptcha.server || !this.ruleForm.vaptcha ) {this.$message({
                message: '请先完成人机验证',
                type: 'warning'
            });setTimeout(()=>{this.loginBtnDisabled = false;},3000);return;};
            const original = {
                uname: this.ruleForm.username,
                pwd: this.ruleForm.password,
                verify: {
                sr:this.vaptcha.server,
                tk:this.ruleForm.vaptcha
                },
                // sign: CryptoJS.SHA256(this.ruleForm.username + '@awa' + this.ruleForm.password + 'qwq.' + this.vaptcha.server + '@xzy.' + this.ruleForm.vaptcha + '@maoya..').toString(CryptoJS.enc.Hex)
            };
            (async ()=>{
                if (!await login(this,original)) {
                this.refreshVaptcha();
                this.loginBtnDisabled = false;
            }
            })();
        },
        refreshVaptcha(){
            this.$refs.vaptchaVc.resetVerify();
            this.vaptcha.server = '';
            this.ruleForm.vaptcha = '';
        }
    }
}
</script>

<style lang="less" scoped>
.btn {
    padding: 10px;
}
.loginForm span {
    font-size: 14px;
}
.loginForm {
    display: flex;
    flex-direction: column;
    // padding: 50px;

    .input {
        margin-left: 5px;
        margin-bottom: 5px;
        // width: 300px;
    }
    .title {
        text-align: center;
        margin-bottom: 20px;
    }
    .subtitle {
        text-align: center;
        font-size: 18px;
        margin-bottom: 20px;
    }
    .regspan {
        margin-top: 40px;
        text-align: center;
    }
    .retrieve {
        text-align: center;
        color: #6e6b7b;
    }
    .btn {
        margin-bottom: 8px;
    }
    .Nologin {
        margin-top: 15px;
    }
}
.loginForm .btn:first-of-type {
    margin-top: 20px;
    margin-bottom: 0px;
}

@media screen and (min-width: 576px) {
    .loginForm {
        .input {
            min-width: 300px !important;
        }
    }
}
</style>
