import Home from './Home';
import Vue from 'vue';
import router from '@/router/index.js';

new Vue({
    router,
    render:h=> h(Home)
}).$mount('#app')
