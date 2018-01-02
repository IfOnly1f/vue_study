import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexTab from '@/views/index/IndexTab'
import Dynamic from '@/views/index/Dynamic'

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'IndexTab',
        component: IndexTab
    },
    {
        path: '/dynamic',
        name: 'Dynamic',
        component: Dynamic
    }
  ]
})
