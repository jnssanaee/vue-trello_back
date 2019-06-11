const getters = { // getter는 저장소의 계산된 속성으로 생각하면 된다. getter의 결과는 종속성에 따라 캐쉬되고, 일부 종속성이 변경된 경우만 다시 재계산된다. getter는 첫번째 인자로 상태를 받는다.
    isAuth(state) {
        return !!state.token // token값의 유무로 불린값을 반환환다.
    }
}

export default getters