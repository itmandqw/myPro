// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import './public/rem'

import CsRuler from 'cs-ruler'

Vue.use(Mint)
Vue.use(CsRuler)
Vue.config.productionTip = false

require('./mock/mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
