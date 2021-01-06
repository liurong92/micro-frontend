import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vueApp',
    entry: '//localhost:8083',
    container: '#container',
    activeRule: '/app-vue',
  }
]);

setDefaultMountApp('/app-vue');
// 启动 qiankun
new Vue({
  router,
  mounted() {
    // 启动
    start()
  },
  render: h => h(App)
}).$mount('#app')
