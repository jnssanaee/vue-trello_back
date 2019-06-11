# vue-trello

> ES6, vue.js, vuex, axios

<br>

## 디렉토리 및 역할

```sh
│─ index.html
│─ main.js : 엔트리 포인트 (진입점)
├─ api
│   │    index.js
│─ router
│      index.js : 라우팅 관련 로직
│─ App.vue : 루트 컴포넌트
│─ components 
│   ├─ AddBoard.vue : (create board 클릭 시) Modal
│   ├─ Board.vue : 보드
│   ├─ Card.vue : 상세 레이어
│   ├─ Home.vue : 메인
│   ├─ Login.vue : 로그인
│   ├─ Modal.vue : (board 클릭 시) Modal
│   ├─ Navbar.vue : 상단네비게이션
│   ├─ NotFound.vue : 404 에러
│─ store
│   ├─ index.js : 각 객체들을 모아 store 객체를 만드는 역할
│   ├─ actions.js : 액션
│   ├─ getters.js : getter
│   ├─ mutations.js : 변이
│   ├─ state.js : 상태


```

<br>


## vue
> vue-router는 기본이 해시 모드이다. 해시를 제거하기 위해선 history모드로 선언!  

> template태그 내 마크업 시 div를 한번 감싸줘야 한다.  

> : (콜론)으로 선언 시  변수로 받을 수 있다. ex) { path: '/b/:bid', component: Board }  

> router 프로그래밍 방식 네비게이션   
>> 선언적 방식 &lt;router-link :to="..."&gt;  
>> 프로그래밍 방식 router.push(...)

> computed 속성은 종속 대상을 따라 저장(캐싱)된다. 이 속성은 종속된 대상이 변경될 때만 함수를 실행한다.  

> 변이 : Vuex 저장소에서 실제로 상태를 변경하는 유일한 방법은 변이하는 것이다. 변이는 무조건 동기적이어야 한다. commit()을 사용한다.  

> 액션 : 비동기를 담당한다. dispatch()를 사용한다.  

> getter는 저장소의 계산된 속성으로 생각하면 된다. getter의 결과는 종속성에 따라 캐쉬되고, 일부 종속성이 변경된 경우만 다시 재계산된다.  
  getter는 첫번째 인자로 상태를 받는다.

<br>

## npm
> --save : --production 빌드 시 해당 플러그인 포함

> --save-dev : --production 빌드 시 해당 플러그인 포함X

<br>

## git
> 브랜치 생성 : git branch &lt;branch이름&gt;

> 브랜치 이동 : git checkout &lt;branch이름&gt;

> 브랜치 생성 및 이동 : git checkout -b &lt;branch이름&gt;

<br>

## 용어
> 미들웨어 : OS에서 제공하는 않는 서비스를 어플리케이션에 제공하는 다목적 소프트웨어

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
