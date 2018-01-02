import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
Vue.use(Vuex)

const state = {
    count:1,
    dataList:['hello'],
    testList:['a','w','s','d']
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
})
