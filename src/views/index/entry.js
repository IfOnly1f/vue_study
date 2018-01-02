import Home from './Home';
import Vue from 'vue';
import router from '@/router/index.js';
import store from '@/store/index/index.js'

new Vue({
    router,
    store,
    render:h=> h(Home)
}).$mount('#app')
