import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({ // Vuex 라이브러리의 Store 클래스 함수
    state: {
        isAddBoard: false,
        boards: [] // 모든 board 목록을 담고 있는 상태
    },
    mutations: {
        SET_IS_ADD_BOARD(state, toggle) {
            state.isAddBoard = toggle
        },
        SET_BOARDS(state, boards){
            state.boards = boards
        }
    },
    actions: {
        ADD_BOARD(_, {title}) { // 사용하지 않는 값은 _로 선언
            return api.board.create(title)
        },
        FETCH_BOARDS ({commit}){ //commit는 context객체(종합 객체)
            return api.board.fetch().then(data => {
                commit('SET_BOARDS', data.list)
            })
        } 
    }
}) 

export default store