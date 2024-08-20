import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import dashboard from './dashboard'
import utils from './utils'
import userData from './userData'

export default new Vuex.Store({
    modules:{
        dashboard,
        utils,
        userData
    }
})