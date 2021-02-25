import { postcss } from 'postcss-url'
import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
// const home  = () => import('@/components/home')  // es6 路由懒加载
 // require路由懒加载
const home = resolve => require(['@/components/home.vue'], resolve)
const vuexDemo = resolve => require(['@/components/vuex_demo'], resolve)
const csRuler = resolve => require(['@/components/cs_ruler'], resolve)
const disPicker = resolve => require(['@/components/dis_picker'], resolve)
const vuePickers = resolve => require(['@/components/vue_pickers'], resolve)
const vueDraggable = resolve => require(['@/components/vue_draggable'], resolve)
const transition = resolve => require(['@/components/transition'], resolve)
const download = resolve => require(['@/components/download'], resolve)
const datepicker = resolve => require(['@/components/datepicker'], resolve)
const postcssDemo = resolve => require(['@/components/postcss-pxtorem'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/vuex_demo',
      name: 'vuex_demo',
      component: vuexDemo
    },
    {
      path: '/cs_ruler',
      name: 'cs_ruler',
      component: csRuler
    },
    {
      path: '/dis_picker',
      name: 'dis_picker',
      component: disPicker
    },
    {
      path: '/vue_pickers',
      name: 'vue_pickers',
      component: vuePickers
    },
    {
      path: '/vue_draggable',
      name: 'vue_draggable',
      component: vueDraggable
    },
    {
      path: '/transition',
      name: 'transition',
      component: transition
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: datepicker
    },
    {
      path: '/postcss',
      name: 'postcss',
      component: postcssDemo
    },
  ]
})
