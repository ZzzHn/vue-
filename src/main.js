import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源
import './assets/css/base.css';
import './assets/js/font';
// import './assets/js/jquery-1.7.2';
// import $ from  'jquery';
// window.$=$;


//路由引入
import router from './plugins/router.config'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
