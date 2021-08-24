import Vue from 'vue';
import App from './App.vue';
import 'lib-flexible';
import router from './router/index.js';
import './css/home.css';


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
