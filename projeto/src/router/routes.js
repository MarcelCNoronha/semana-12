import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import Cart from "../views/Cart.vue"

export const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Cart
    }
  ]
})