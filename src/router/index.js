import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexTab from '@/views/index/IndexTab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexTab',
      component: IndexTab
    }
  ]
})
