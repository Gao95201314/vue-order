// 整个前端项目的入口js文件。
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Mint);
// Vue.use(ElementUI);
// 引入mockjs，！！！上线时要删除
// import './mockData';

// 去除vue开发时的浏览器提示。
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  store,
  components: {
    App: App
  },
  template: '<App/>'
});
