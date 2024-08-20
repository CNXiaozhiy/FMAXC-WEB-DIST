import _ from 'lodash'
import { Message } from 'element-ui';
import Vue from 'vue';

export default async function pullData(vc,toLoginPage = false,constraint = false) {
    const timeDifference = new Date() - vc.$store.state.userData.user.info.updated;
    if (timeDifference > 10000 || !timeDifference || constraint){
        let msg;
        if (!vc.$store.state.userData.notice.init){
            msg = Vue.prototype.$toastx({type:'info',title: '拉取数据中，请稍等'},{
                timeout: false
            });
            // msg = Message.warning({
            //     message: '拉取数据中，请稍等',
            //     showClose: true,
            //     duration: 0,
            // });
        }
        
        const status = await vc.$store.dispatch('userData/UpdateUserInfo',vc);
        
        if (msg !== undefined) setTimeout(()=>{
            vc.$toast.dismiss(msg)
        },500);

        if (toLoginPage && status === -1){
            // msg.close();
            // Vue.prototype.$toast.dismiss(msg);
            // 前往登录页面
            setTimeout(()=>{
                Vue.prototype.$toastx({
                    type: 'warning',
                    title: '您还未登录，正在跳转至登录页面',
                    timeout: 2000
                })
            },500);
            vc.$router.replace({name: 'r-auth-login'});
            return status;
        }

        if (status === 1 && !vc.$store.state.userData.notice.init){
            setTimeout(()=>{
                vc.$toastx({type:'success',title: '欢迎您！尊敬的 '+ vc.$store.state.userData.user.info.nickname},{
                    timeout: 2000
                })
            },1000)
        }
        if (!vc.$store.state.userData.notice.init){
            vc.$store.dispatch('userData/noticeInit');
        }

        return status;
    }
    return 1;
}