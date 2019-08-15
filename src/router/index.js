import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Yao from '@/components/Yao'
import Test from '@/components/Test'
import Login from '@/components/Login'
import User from '@/components/User'
import Goods from '@/components/Goods'
import Shoppingcart from '@/components/Shoppingcart'
import Address from '@/components/Address'
import Order from '@/components/Order'
import Cartthree from '@/components/Cartthree'
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
    },
    {
      path: '/l',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/add',
      name: 'Address',
      component: Address
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/cartthree',
      name: 'Cartthree',
      component: Cartthree
    }
  ]
})
