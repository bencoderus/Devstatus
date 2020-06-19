import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import VueRouter from 'vue-router'
import routes from './router'
import VueProgressBar from 'vue-progressbar'
import wb from './registerServiceWorker'
import './filters'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.prototype.$workbox = wb

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.prototype.$loader = Nprogress
Vue.config.productionTip = true

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
