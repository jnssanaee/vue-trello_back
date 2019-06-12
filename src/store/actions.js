import * as api from '../api'

const actions = { // action은 비동기
    LOGIN ({commit}, {email, password}) { // contenxt객체(종합객체)가 commit, payload가 email, password
        return api.auth.login(email, password) // promise를 리턴한다. api의 auth의 email, password를 전달하는 login함수를 호출한다.
            .then(({accessToken}) => commit('LOGIN', accessToken)) // 로그인에 성공하면 ~ 응답객체중 accessToken을 받아서 LOGIN 변이에 위임한다. accessToken을 전달한다.
    },
    ADD_BOARD(_, {title}) { // 사용하지 않는 값은 _로 선언
        return api.board.create(title)
            .then(data => data.item) // data가 넘어온다. data의 item을 반환한다. (정리하면 actions에서 보드 ID를 넘겨준다.)
    },
    FETCH_BOARDS ({commit}){ //commit 함수는 context객체(종합 객체), FETCH_BOARDS는 보드 목록을 조회
        return api.board.fetch().then(data => {
            commit('SET_BOARDS', data.list) // SET_BOARDS 변이를 호출한다.
        })
    },
    FETCH_BOARD ({commit}, {id}) {
        return api.board.fetch(id).then(data => {
            commit('SET_BOARD', data.item)
        })
    }
}

export default actions