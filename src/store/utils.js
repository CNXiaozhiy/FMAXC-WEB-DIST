import request from '../scripts/utils/request'

export default {
    namespaced: true,
    actions: {
        async request(context,options){
            const { vc, ...restOptions } = options; // 解构 options，保留除 vc 外的所有属性  
            if (vc) {  
                vc.$store.dispatch('dashboard/loadingChange', true);  
            }
            try {
                const response = await request(restOptions);
                if (vc) {  
                    vc.$store.dispatch('dashboard/loadingChange', false);  
                }  
                return response;
            } catch (error) {  
                if (vc) {  
                    vc.$store.dispatch('dashboard/loadingChange', false);  
                }
                if (error.response) {  
                    return Promise.reject(error.response);
                } else {  
                    return Promise.reject(error);
                }  
            }  
        }
    }
}