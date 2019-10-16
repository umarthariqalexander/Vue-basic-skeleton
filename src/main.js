import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Blue from '@blibli/dls'
import '@blibli/dls/dist/blue.min.css'
import '@/assets/scss/main.scss'

Vue.use(Blue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
