import Vue from 'vue'
import router from './router'
import './assets/style.css'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App) // 루트 컴포넌트 설정
})
