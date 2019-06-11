import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({ // Vuex 라이브러리의 Store 클래스 함수
    state,
    getters,
    mutations,
    actions
}) 

const { token } = localStorage // 브라우저 구동 시 localStorage에서 token값을 불러온다.
store.commit('LOGIN', token) // token값으로 로그인 처리를 한다.

export default store

/* 

정리

1. token state를 추가한다. 
2. token정보를 이용해서 로그인여부를 확인하는 isAuth 게터를 추가한다.
3. localStorage와 http 요청헤더를 세팅하는 LOGIN 변이와 그 반대일을 하는 LOGOUT변이를 추가한다.
4. api 콜을 하는 LOGIN 액션을 만든다. 
5. 어플리케이션(브라우저) 구동 시 localStorage에서 token정보를 읽어와 로그인 처리를 하는 로직을 추가한다.

*/