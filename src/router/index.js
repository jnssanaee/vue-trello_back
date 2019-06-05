
import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = {
  template: '<div>로그인</div>'
}
const NotFound = {
  template: '<div>NotFound</div>'
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ] 
  // component는 Vue.extend()를 통해 만들어진 컴포넌트 옵션 객체
})

export default router