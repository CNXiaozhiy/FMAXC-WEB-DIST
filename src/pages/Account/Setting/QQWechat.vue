<template>
  <div id="AccountSettingQQWechat">
    <div class="card bind-qq">
        <span class="title font-weight-bolder">绑定 QQ</span>
        <hr>
        <div class="qq-info">
            <div class="photo">
                <el-avatar :size="50" :src="qqinfo.photo"></el-avatar>
            </div>
            <div class="infos">
                <span class="qq">QQ: {{ qqinfo.qq }}</span>
                <span class="nickname">用户名: {{ qqinfo.nickname }}</span>
            </div>
        </div>
        <hr>
        <div class="auth">
            <div class="affirm" v-show="!affirm">
                <el-input v-model="bind_qid" placeholder="请输入要绑定的QQ号" :disabled="get.bind"></el-input>
                <button class="btn" @click="verifyStart" :class="get.bind ? 'btn-danger' : 'btn-success'" :disabled="qqinfo.qq === '正在拉取'">{{ get.bind ? '解除绑定' : '开始验证'}}</button>
            </div>
            <transition name="el-fade-in-linear">
                <div class="bind" v-show="affirm">
                    <span class="status">绑定状态： 
                        <span :class="bind_status_class">{{ bind_status }}</span>
                    </span>
                    <span class="help font-weight-bolder">
                        请在
                        <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=AeLPHrzg-B7ajsmlx6TYvvhPi1lQK4dV&jump_from=webapi&authKey=01CIqwcseG9Mw8hoA0xmgQUUQKYlsJGaW2xXKpIaFF8FiLOxlvFftdMZ9w3UxK2l">官方群</a>
                        或
                        <a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=4q9Z5bqepCbTEkMNFuO_eNW5RB20taHZ&jump_from=webapi&authKey=dOOlmHwM+bW73BFNmogszo8CxprOkB/0LNcIi9Fl/eiKBObnUB8LyO/gOiaV+Xut">闲聊群</a>
                        中发送 ".bind-qq"
                    </span>
                </div>
            </transition>
        </div>

    </div>
    <div class="card bind-wechat">
        <span class="title font-weight-bolder">绑定 微信</span>
        <hr>
        <span class="text-danger text-center">- 暂不支持 -</span>
        <!-- <img src="cqCode" alt="二维码" style="height: 100px; width: 100px;"> -->
        <hr>
        <button class="btn btn-success" disabled>开始验证</button>
    </div>
  </div>
</template>

<script>
import { bind_qq } from '@/scripts/auth';
import { unbind_qq } from '@/scripts/auth';

export default {
    name: 'QQWechat',
    data() {
        return {    
            affirm: false,
            bind_qid: '',
            bind_status: '待验证',
            bind_status_class: 'text-danger',
            qqinfo: {
                qq: '正在拉取',
                photo: '',
                nickname: '正在拉取'
            },
            get: {
                Interval: '',
                bind: false
            }
        }
    },
    computed: {
        userinfo() {
            this.$store.state.userData.user.info;
        }
    },
    async mounted() {
        this.get.Interval = setInterval(this.refresh,2000);
    },
    methods: {
        async refresh() {
            this.$store.state.userData.pullData(this);
            const qid = this.$store.state.userData.user.info.qid;
            if (qid) {
                clearInterval(this.get.Interval);
                this.bind_status = '已绑定';
                this.bind_status_class = 'text-success';
                this.get.bind = true;
                this.get.Interval = '';
                this.$store.dispatch('utils/request',{
                    vc:this,
                    method: 'get',
                    url :'https://api.usuuu.com/qq/' + qid
                })
                .then(
                    response => {
                        this.qqinfo.qq = response.data.data.qq
                        this.qqinfo.photo = response.data.data.avatar
                        this.qqinfo.nickname = response.data.data.name
                    }
                )
            } else {
                if (this.qqinfo.qq === '正在拉取') {
                    this.qqinfo.qq = '未绑定'
                    this.qqinfo.photo = ''
                    this.qqinfo.nickname = '未绑定'
                }
            }
        },
        async verifyStart() {
            if (this.get.bind) {
                this.$confirm('确认解除绑定？此操作不可逆', '确认信息', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确认',
                    cancelButtonText: '取消'
                    })
                    .then(() => {
                        unbind_qq(this);
                    })
                return;
            }
            if (!this.bind_qid && !this.get.bind) return;
            const creatd = await bind_qq(this,{
                qid: this.bind_qid
            });
            if (!creatd) {return;}
            this.affirm = true;

        },
        async verifyStatus() {

        }
    }
}
</script>

<style lang="less" scoped>
.btn {
  padding: 10px;
}
#AccountSettingQQWechat {
    display: flex;

    .qq-info {
        display: flex;
        min-width: 300px;
        // flex-direction: row;

        .title {
            margin: 10px;
        }
    }

    .bind-wechat {
        margin-left: 20px;
        min-width: 300px;
    }

    .infos {
        margin-left: 20px;
    }
    .infos > * {
        display: block;
    }
    .infos .qq {
        font-size: 18px;
    }

    .auth {

        .affirm .btn {
            margin-top: 10px;
            width: 100%;
        }
        .bind {
            display: flex;
            flex-direction: column;
            padding: 10px;
            .status {
                font-size: 18px;
            }
            .help {
                margin-top: 10px;
                font-size: 14px;
            }
        }
    }
}
</style>