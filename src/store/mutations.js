import {setAuthInHeader} from '../api'

const mutations = { // 변이
    LOGIN(state, token){
        if (!token) return; // token 정보 없을 시 그냥 리턴
        state.token = token
        localStorage.setItem('token', token)
        setAuthInHeader(token) // api에 requestHeader를 추가한다.
    },
    LOGOUT(state){
        state.token = null // state의 token 값을 null로 초기화한다.
        delete localStorage.token // localStorage의 token값을 삭제한다.
        setAuthInHeader(null) // api의 요청헤더를 null로 초기화한다.
    },
    SET_IS_ADD_BOARD(state, toggle) {
        state.isAddBoard = toggle
    },
    SET_BOARDS(state, boards){
        state.boards = boards
    },
    SET_BOARD (state, board){ // board는 actions FETCH_BOARD의 data.item이 전달된거다.
        state.board = board
    }

}

export default mutations