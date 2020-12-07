import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, { key: 'AIzaSyCJxvO_gnW8UdExMJfWMdF7uVY4Ho4VkHI', libraries: ['visualization'] })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  x5GMaps,
  render: h => h(App)
}).$mount('#app')
