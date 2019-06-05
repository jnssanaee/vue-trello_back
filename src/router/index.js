
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Home from '../components/Login.vue'
import Home from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ] 
  // component는 Vue.extend()를 통해 만들어진 컴포넌트 옵션 객체
})

export default router