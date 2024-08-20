<template>
    <div id="registerPage" v-loading.fullscreen.lock="fullscreenLoading">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <form @submit.prevent="" class="registerForm p-2 p-sm-5">
                <h2 class="title">FmaxCloud</h2>
                <span class="subtitle">注册一个Fmc账号</span>
                <el-form-item label="账号" prop="username" class="el-form-full">
                    <el-input class="input w-100" v-model.lazy="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="el-form-full">
                    <el-input class="input w-100" v-model.lazy="ruleForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="confirmPassword" class="el-form-full">
                    <el-input class="input w-100" v-model.lazy="ruleForm.confirmPassword" show-password></el-input>
                </el-form-item>
                <el-form-item prop="vaptcha" class="el-form-full">
                    <Vaptcha :passCallback="vpass" ref="vaptchaVc" style="line-height: normal"/>
                </el-form-item>
                <el-form-item prop="termsType">
                    <el-checkbox class="terms" name="type" v-model="ruleForm.termsType">我已阅读并接受 <a href="#">服务条款</a></el-checkbox>
                </el-form-item>
                
                <button v-wave class="btn btn-primary" @click="submitForm('ruleForm')" :disabled="regBtnDisabled">
                    <div class="spinner-border mini text-light me-2" role="status" v-show="regBtnDisabled"></div>立即注册</button>
                <hr>
                <button v-wave class="btn btn-info btn-relief" @click="qtReg('qq')" >使用QQ登录快速登录/注册</button>
                <button v-wave class="btn btn-success btn-relief" @click="qtReg('wx')" >使用微信快速登录/注册</button>
                <span class="regspan">已有账号？ <router-link to="/auth/login">前往登录</router-link> 或 <router-link to="/auth/forgot">忘记密码？</router-link></span>
                <span class="retrieve">如果您找不回账号,可以<a href="#">咨询客服</a>协助找回</span>
            </form>
        </el-form>
    </div>
</template>

<script>
import { reg } from '../../scripts/auth'
import _ from 'lodash';
import Vaptcha from "../../components/Vaptcha.vue";

export default {
    name: 'Regiser',
    data(){
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var termsCheck = (rule, value, callback) => {
            if (!value){
                callback(new Error('请勾选服务协议'));
            } else {
                callback();
            }
        }
        return {
            fullscreenLoading: false,
            ruleForm: {
                username: '',
                password: '',
                vaptcha: '',

                confirmPassword: '',
                termsType: false
            },
            vaptcha: {
                server: ''
                // token: ''
            },
            regBtnDisabled: false,
            rules: {
                username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                confirmPassword: [
                { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                vaptcha: [
                { required: true, message: '请先完成人机验证', trigger: 'blur' }
                ],
                termsType: [
                { validator: termsCheck, message: '请勾选服务协议', trigger: 'change' }
                ]
            }
        }
    },
    components: {
        Vaptcha
    },
    mounted(){
        (async ()=> {
            if (await this.$store.state.userData.pullData(this,false,true) === 1) this.$router.replace({name: 'rDashboardMain'});
        })();
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                this.UserRegister();
                } else {
                return false;
                }
            });
        },
        qtReg(){
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
        UserRegister(){
            this.regBtnDisabled = true;
            if (!this.ruleForm.username || !this.ruleForm.password ) {this.$message({
                message: '请填写完整信息',
                type: 'warning'
            });setTimeout(()=>{this.regBtnDisabled = false;},3000);return;};
            if (!this.vaptcha.server || !this.ruleForm.vaptcha ) {this.$message({
                message: '请先完成人机验证',
                type: 'warning'
            });setTimeout(()=>{this.regBtnDisabled = false;},3000);return;};
            const original = {
                uname: this.ruleForm.username,
                nickname: this.ruleForm.username,
                pwd: this.ruleForm.password,
                verify: {
                sr:this.vaptcha.server,
                tk:this.ruleForm.vaptcha
                },
                // sign: CryptoJS.SHA256(this.ruleForm.username + '@awa' + this.ruleForm.password + 'qwq.' + this.vaptcha.server + '@xzy.' + this.ruleForm.vaptcha + '@maoya..').toString(CryptoJS.enc.Hex)
            };
            (async ()=>{
                if (!await reg(this,original)){
                    this.refreshVaptcha();
                    this.regBtnDisabled = false;
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
.registerForm span {
    font-size: 14px;
}
.registerForm {
    display: flex;
    flex-direction: column;

    .input {
        margin-left: 5px;
        margin-bottom: 5px;
        width: 300px;
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
    
}
.registerForm .btn:first-of-type {
    margin-top: 20px;
    margin-bottom: 0px;
}

@media screen and (min-width: 576px) {
    .registerForm {
        .input {
            min-width: 300px !important;
        }
    }
}
</style>
