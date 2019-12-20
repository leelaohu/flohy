import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUi from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.use(MintUi,VueAwesomeSwiper)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
