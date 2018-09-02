import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import {
  store
} from './store/store'
import VueRouter from 'vue-router'
import Routes from "./routes"
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(VueRouter)
const Router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.http.interceptors.push((request, next) => {
  if(localStorage._token != undefined){
    request.headers.set('x-auth', localStorage._token)
    request.headers.set('Accept', 'application/json')
  }
  next()
})
Vue.config.productionTip = false

new Vue({
  store: store,
  router: Router,
  render: h => h(App)
}).$mount('#app')