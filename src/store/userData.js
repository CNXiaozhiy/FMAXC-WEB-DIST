import { getUserInfo } from '@/scripts/auth'
import pullData from '@/scripts/common/PullData'

export default {
    namespaced: true,
    actions: {
        async UpdateUserInfo(context,vc) {
            const UserInfo = await getUserInfo(vc);
            if (UserInfo.status === 1) {
                context.commit('UpdateUserData',UserInfo);
                return 1;
            } else {
                return -1;
            }
        },
        noticeInit(context) {
            context.commit('noticeInit');
        }
    },
    mutations: {
        UpdateUserData(state,data) {
            state.user.info = data.info;
            state.user.info.updated = new Date();
        },
        noticeInit(state) {
            state.notice.init = true;
        }
    },
    state: {
        user: {
            info: {}
        },
        async pullData(vc,toLoginPage,constraint){
            return await pullData(vc,toLoginPage,constraint);
        },
        notice: {
            init: false
        }
    }
}