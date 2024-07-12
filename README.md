# 📝 컴포넌트 구현하기

- React 주특기 주차 Lv.4 과제
- 정은화
- [배포한 사이트: vercel](react-todo-list-five-tau.vercel.app)

## 📌 과제 개요

### 목표
- 로그인/회원가입 기능 추가하기
    - 지금까지 배운 내용을 활용하여 나만의 React App 을 만들어봅시다.
    - 레벨 4에서는 로그인, 회원가입 기능을 만들고 5에서 원하는 추가기능을 붙여 볼 거에요!

### 과제 조건

- 로그인, 회원가입 페이지를 각각 구현합니다.
- 아이디와 비밀번호가 모두 입력되지 않으면, API 요청을 보내지 않도록 합니다.
- 서버의 에러를 `alert` 또는 직접 만든 모달 등을 통해 유저에게 표시합니다.
    - id가 중복된 경우
    - 존재하지 않는 아이디를 입력한 경우
    - 비밀번호가 잘못된 경우
- JWT의 유효시간이 만료된 경우, 유저에게 재로그인을 할 것을 표시합니다.
- 로그인을 하지 않은 경우에는 `로그인/회원가입` 페이지만 접근 가능합니다.
- 로그인을 이미 한 경우 `로그인/회원가입` 페이지는 접근 할 수 없습니다.
- 로그아웃 기능을 구현합니다.


### 📝 내 구현 방식
- Todo data 서버 사이드 전역 상태 관리: TanStackQuery, axios, json-server
- Auth, User data 클라이언트 사이드 전역 상태 관리: Redux Tool Kit, axios, JWT, Local Storage, `https://moneyfulpublicpolicy.co.kr` api
- 과제 조건에서는 로그인을 하지 않은 경우에는 `로그인/회원가입` 페이지만 접근 가능하다고 제시되어 있는데, 만든 웹 앱 조건 상 메인 화면은 보여도 될 것 같아서 일단 퍼블릭 페이지로 만들었다. 대신, 로그인하지 않은 채, 다른 페이지로 이동하려고 할 때, 로그인을 할 수 있도록 모달 알람을 띄운 후 로그인 페이지로 navigate 했다.

## ✍️ 질문에 대한 답변
#### 1. 특정 유저 (예: 비로그인 유저)의 페이지 접근을 제한하기 위한 전략이나 방식은 무엇이었나요?
- HOC(Higher Oder Component) 방식을 사용하여 페이지 접근을 제한했다.
- 서버에서 응답받은 유저의 상태 정보(isLoggedIn)를 리액트 컴포넌트의 인자로 받아 Public 또는 Private 컴포넌트로 설정한 후, 다른 페이지 컴포넌트를 반환했다. (고차함수 사용)
#### 2. API 요청과 같은 비동기 작업 중 발생할 수 있는 에러에 대비해 에러 핸들링을 구현하셨나요? 구현했다면, 어떠한 방법을 사용하셨나요?
- TanStackQuery와 axios를 사용하여 api 요청을 보냈다.
- 예) data mutate 시 TanStackQuery의 onError 옵션을 사용하여 error객체를 받아와 message를 출력하는 방식을 사용했다.
#### 3. Redux toolkit의 Thunk 미들웨어를 활용하였나요? 활용했다면, thunk가 필요한 이유를 설명해 주세요.
- TanStackQuery와 axios를 사용하여 모든 비동기 작업을 처리했기 때문에 Thunk는 사용하지 않았다.
#### 4. JWT 토큰은 무엇인가요?
- 토큰이란, 클라이언트에서 보관하는 암호화 또는 인코딩된 인증 정보를 의미합니다. 서버의 상태를 유지하지 않고도 클라이언트의 인증 상태를 확인할 수 있게 해준다.
- JWT는 토큰 기반 인증 방식에서 사용되는 특별한 토큰이다.
- 세션처럼 서버에서 사용자의 인증 정보를 보관할 필요가 없기 때문에 서버 부담을 줄여주는 인증 수단이다.
- 웹에서 인증 수단으로 사용되는 토큰은 주로 JWT (Json Web Token)을 이용한다.
  - 국제 인터넷 표준 인증 규격 중 하나이다.
  - 인코딩된 토큰을 누구나 복호화하여 payload를 볼 수 있다.
  - 정보(payload)를 토큰화할 때 signature에 secret key가 필요하고, secret key는 복호화가 아니라 토큰이 유효한 지를 검증하는 데 사용된다.