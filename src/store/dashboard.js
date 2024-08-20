export default {
    namespaced: true,
    actions: {
        loadingChange(context,values) {
            context.commit('LOADINGCHANGE',values)
        }
    },
    mutations: {
        LOADINGCHANGE(state,values) {
            state.loading = values;
        }
    },
    state: {
        loading: false
    }
}