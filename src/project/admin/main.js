import Vue from 'vue'
import App from '@/components/App.vue'
// import App from '../../components/App'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'

Vue.config.productionTip = false;
Vue.use(YDUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
