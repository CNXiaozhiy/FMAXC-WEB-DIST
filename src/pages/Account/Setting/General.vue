<template>
  <div class="card" id="AccountSettingGeneral">
    <div class="appearance">
        <el-tooltip class="item" content="点我更改头像" placement="top">
            <div @click="changePhoto">
                <el-avatar @click="changePhoto" :size="120" :src="userInfo.userphoto" class="user-photo"></el-avatar>
            </div>
        </el-tooltip>
        <input type="file" ref="file" style="display: none;" v-on:change="handleFileUpload($event)">
        <div class="identity-info">
            <span class="nickname font-weight-bolder">用户昵称： {{ userInfo.nickname }}</span>
            <span class="username">用户ID： {{ userInfo.username }}</span>
        </div>
    </div>
    <hr>
    <div class="edit-appearance">
        <label class="font-weight-bolder mb-2 text-primary">修改昵称：</label>
        <el-input id="editUname" v-model="editUname" placeholder="请输入您的新昵称"></el-input>
        
        <hr>
        <div class="submit">
            <button class="btn btn-success" @click="modificationInfo">确认修改</button>
        </div>
    </div>
    <hr>
    <div>
        <span class="text-danger">Tips: 更新不及时请刷新页面</span>
    </div>

  </div>
</template>

<script>
import { modification } from '@/scripts/auth';
export default {
    name: 'General',
    data() {
        return {
            editUname: ''
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userData.user.info;
        }
    },
    async mounted() {
    },
    methods: {
        changePhoto() {
            console.log('更改头像');
            this.$refs.file.click()
        },
        // 获取文件
        handleFileUpload(event){
            event.preventDefault();
            let formData = new FormData()
            let file = this.$refs.file.files[0]
            formData.append('file',file)
            this.onUpload(formData)
        },
        // 上传文件
        onUpload (formData) {
            // axios.postForm('/api/v1/upload', {
            // file: formData // FileList will be unwrapped as sepate fields
            // });
            this.$store.dispatch('utils/request',{
                vc: this,
                method: 'post',
                url: '/user/modification/avatar',
                // url: '/upload',
                ignore: true, // 不自动配置 strifty data 和 请求头
                data: formData,
            })
            .then(res => {
                if (res.data.status === 1) {
                    this.$message.success('上传成功');
                    this.$store.state.userData.pullData(this,false,true);
                }
            })
        },
        modificationInfo() {
            if (this.editUname === '') {
                return;
            }
            this.$confirm('确认修改昵称？此操作不可逆', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '确认',
                cancelButtonText: '取消'
                })
            .then(() => {
                modification(this,{
                    nickname: this.editUname
                })
                .then(
                    this.$store.state.userData.pullData(this,false,true),
                )
            })
            
        }
    }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 10px;
}
#AccountSettingGeneral {
    .appearance {
        display: flex;
    }
    .user-photo {
        // height: 120px;
        border-radius: 50%;
        cursor: pointer;
    }
    .identity-info {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .nickname {
            font-size: 20px;
        }
    }
    .edit-appearance {
        display: flex;
        flex-direction: column;
        // margin-top: 20px;

        .submit {
            align-self: flex-end;
        }
    }
}
</style>