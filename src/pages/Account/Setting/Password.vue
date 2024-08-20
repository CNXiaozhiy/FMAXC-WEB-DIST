<template>
    <div id="AccountSettingPassword">
      <div class="card">
        <span class="title">修改密码</span>
        <hr>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  >
          <form @submit.prevent="" class="ChangeForm">
            <el-form-item label="原密码" prop="oldPassword">
                <el-input class="input" v-model.lazy="ruleForm.oldPassword" show-password></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input class="input" v-model.lazy="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="confirmPassword">
                <el-input class="input" v-model.lazy="ruleForm.confirmPassword" show-password></el-input>
            </el-form-item>

            <hr>
            <button class="btn btn-success" @click="submitForm('ruleForm')" :disabled="doBtnDisabled">
              <div class="spinner-border mini text-light me-2" role="status" v-show="doBtnDisabled"></div>修改密码</button>
          </form>
        </el-form>
      </div>
      <div class="card mt-3 mb-3">
        <span class="title">管理令牌</span>
        <hr>
        <span class="text-danger font-weight-bolder text-center">暂未开放</span>
      </div>
      
    </div>
  </template>
  
  <script>
  import { modification_password } from '@/scripts/auth';
  export default {
    name: 'Password',
    data() {
      var validatePass2 = (rule, value, callback) => {
          if (value === '') {
              callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.password) {
              callback(new Error('两次输入密码不一致!'));
          } else {
              callback();
          }
      };

      return {
        input: {

        },
        ruleForm: {
          oldPassword: '',
          password: '',
          confirmPassword: '',
        },
        rules: {
          oldPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
          ],
          password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          confirmPassword: [
          { validator: validatePass2, trigger: 'blur' }
          ],
        },
        doBtnDisabled: false,
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
            if (valid) {
              this.ChangeStart();
            } else {
            return false;
            }
        });
      },
      ChangeStart() {
        this.$confirm('确认修改密码？', '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then (() => {
          this.doBtnDisabled = true;
          modification_password(this,{
            old_pwd: this.ruleForm.oldPassword,
            new_pwd: this.ruleForm.password
          })
          .then(() => {
            this.doBtnDisabled = false;
          })
        })
      }
    }
  }
  </script>
  
<style lang="less" scoped>
.btn {
  padding: 10px;
}
#AccountSettingPassword {

  display: flex;
  flex-direction: column;
  .card .title{
    font-weight: bolder;
    font-size: 18px;
  }

  .card form:last-child{
    display: flex;
    flex-direction: column;
    .btn {
      align-self: flex-end;
    }
  }
}

.mini {
  height: 15px;
  width: 15px;
}
</style>