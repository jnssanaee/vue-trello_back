# vue-trello

> ES6, vue.js, vuex, axios

<br>

## 디렉토리 및 역할

```sh
├─src
│  ├─router
│  │      index.js : 라우팅 관련 로직
│  │      02-문서.md
│  └─images
│          이미지
│          이미지
│─App.vue : 루트 컴포넌트
│─components 
│  ├─Board.vue : 보드
│  ├─Card.vue : 상세 레이어
│  ├─Home.vue : 메인
│  ├─Login.vue : 로그인
│  ├─Navbar.vue : 상단네비게이션
│  ├─NotFound.vue : 404 에러

│─main.js : 엔트리 포인트 (진입점)
```

<br>


## vue
> vue-router는 기본이 해시 모드이다. 해시를 제거하기 위해선 history모드로 선언!  

> template태그 내 마크업 시 div를 한번 감싸줘야 한다.  

> : (콜론)으로 선언 시  변수로 받을 수 있다. ex) { path: '/b/:bid', component: Board }  

> router 프로그래밍 방식 네비게이션   
>> 선언적 방식 &lt;router-link :to="..."&gt;  
>> 프로그래밍 방식 router.push(...)

## npm
> --save : --production 빌드 시 해당 플러그인 포함

> --save-dev : --production 빌드 시 해당 플러그인 포함X

<br>

## git
> 브랜치 생성 : git branch &lt;branch name&gt;

> 브랜치 이동 : git checkout &lt;branch&gt;

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
