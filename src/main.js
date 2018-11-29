import Vue from 'vue'
import App from './App.vue'
import './assets/css/all.css'
import 'mint-ui/lib/style.css'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'

Vue.use(vueRouter);
import Mint from 'mint-ui';
Vue.use(Mint);

router.push('first');

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
});
