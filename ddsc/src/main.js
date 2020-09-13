import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入scss
import './assets/scss/style.scss'

// 引入精灵图片
import './assets/iconfont/iconfont.css'

// 使用ly-tab
import LyTab from 'ly-tab'
Vue.use(LyTab)

// 使用vant
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Lazyload)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
