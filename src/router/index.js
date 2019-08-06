import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Yao from '@/components/Yao'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [
        {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/yao',
      name: 'Yao',
      component: Yao
    },
    {
      path: '/t',
      name: 'Test',
      component: Test
    }
  ]
})
