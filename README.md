# 📝 투두 리스트

- React 주특기 주차 Lv.5 과제
- 정은화
- [배포한 사이트: vercel](https://react-todo-list-five-tau.vercel.app)

## 📌 과제 개요

### 목표

- 레벨 4 과제에 살을 붙여, 나만의 React App 을 만들어봅시다.
  - 주제는 반드시 Todo List가 아니여도 됩니다. 본문과 댓글을 가진 구조의 웹 서비스면 OK!

### 👍 Checklist : 과제 진행 간 고민해야 하는 부분

- 상태관리 ( 유지 / 초기화 ) 가 잘 되어있나요?
- 각 컴포넌트의 재사용성이 높나요?
- 예외처리가 미흡한 부분은 없나요?

### ⚙️ features : 구현해야 할 기능

- **(1) 공통**
  - UI 구현하기
  - API 명세서 작성하기
- **(2) 본문 (ex: 할일) CRUD 구현**
  - 본문 리스트 조회 하기
  - 본문 조회 하기
  - 본문 추가 하기
  - 본문 삭제 하기
  - 본문 수정 하기
- **(3) 배포**
  - json-server 서버 배포
  - 리액트 프로젝트 배포 (S3, vercel 등 자유)

### 📌 Requirement : 과제에 요구되는 사항

- **(1) UI/UX**
  - 창의적인 UI/UX로 과제를 만드세요.
  - 예시에 없어도 만들고 싶은 기능이 있다면 **OK!**
- **(2) 필수 요구 사항**
  - **동적 라우팅을 사용**하세요.
  - 1개 이상의 `Custom Hook`을 구현하세요.
  - **Form에 유효성 검증 기능을 적용**하세요. _유효성 검증이란, 아래의 예시들을 의미합니다._
    - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
    - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
  - 버튼 **컴포넌트 1개로 모든 버튼을 구현**하세요. 모든 스타일과 기능을 버튼을 구현할 수 있는 **만능 버튼**을 만들어보는 것 입니다.
  - `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
  - 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
  - `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다.
- (3) API 명세서 (프로젝트 완료 후 작성)
  프로젝트가 완료되었다면, 간이 API 서버에서 어떤 API를 사용하였는지 명세서를 작성해주세요.

### 🏃 Challenge: 도전해볼만한 키워드를 드립니다. 검색을 통해 각 키워드들이 어떤 기능인지 찾아보고 도전해보세요. (필수 ❌)

- **Infinite Scroll 또는 Pagination**
  - 할일 또는 댓글이 양이 많을 때, 모든 데이터를 한번에 불러오는 것이 아니라 스크롤이 가장 아래에 도달할때마다 부분적으로 데이터를 Fetching 하도록 구현해봅니다.
- **Form Help Text**
  - Form의 유효성을 체크하고, 유효성을 체크 하지 못했을 때 사용자에게 유효성을 체크 하지 못한 이유에 대해서 안내하는 기능을 구현해봅니다.

### 📝 구현 방식

사용자 인증/인가 (JWT 관리: LocalStorage => Cookie로 변경)

#### 1. TodoList/Comments data

- 서버 사이드 전역 상태 관리:
  - axios
  - json-server
  - TanStackQuery

#### 2. User data

- 클라이언트 사이드 전역 상태 관리 및 로컬 스토리지에서 관리:
  - axios
  - `https://moneyfulpublicpolicy.co.kr` api
  - Local Storage
  - Redux Tool Kit

#### 3. 인증을 위한 JWT 토큰 (accessToken만 있음)

- 쿠키에서 관리:
  - axios
  - `https://moneyfulpublicpolicy.co.kr` api
  - cookie

#### 4. 배포

- json-server => 무료 사용 가능해서 glitch로 json 배포
- vercel 배포

#### 5. 구현

- 투두 CRUD
- 투두 별 상세페이지 댓글 CRUD

#### 6. API 설계

- `api = 배포한 json 서버`
- `authApi = https://moneyfulpublicpolicy.co.kr`

| 구분    | 기능                     | URL                      | Method | request                                                                                                                                       | response                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------ | :----------------------- | :----------------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth    | 회원가입                 | authApi/register         | POST   | {<br/>"id": "유저 아이디",<br/> "password": "유저 비밀번호",<br/>"nickname": "유저 닉네임"<br/>}                                              | **status: 201 Created**<br/>{<br/>"message": "회원가입 완료",<br/>"success": true<br/>}</br></br>**status: 401 Unauthorized**<br/>{<br/>"message": "아이디, 비밀번호, 닉네임은 필수값입니다."<br/>}</br></br>**status: 409 Conflict**<br/>{<br/>"message": "이미 존재하는 유저 id입니다."<br/>}                                                                                                                                                                                                                                                                                                                 |
| Auth    | 로그인                   | authApi/login            | POST   | {<br/>"id": "유저 아이디",<br/>"password": "유저 비밀번호"<br/>}                                                                              | **status: 200 OK**<br/>{<br/>"accessToken": "억세스 토큰",<br/>"userId": "유저 아이디",<br/>"success": true,<br/>"avatar": null,<br/>"nickname": "닉네임"(기본값 "익명"으로 설정)<br/>}</br></br>**status: 401 Unauthorized**<br/>{<br/>"message": "id는 4글자 이상의 문자열이어야 합니다."<br/>}</br></br>**status: 401 Unauthorized**<br/>{<br/>"message": "존재하지 않는 유저입니다."<br/>}</br></br>**status: 401 Unauthorized**<br/>{<br/>"message": "password는 4글자 이상의 문자열이어야 합니다."<br/>}</br></br>**status: 401 Unauthorized**<br/>{<br/>"message": "비밀번호가 일치하지 않습니다."<br/>} |
| Auth    | 유저 조회                | authApi/user             | GET    | {Authorization: Bearer 억세스토큰}                                                                                                            | **status: 200 OK**<br/>{<br/>"id": "유저 아이디",<br/>"nickname": "닉네임"<br/>"avatar": null,<br/>"success": true,}</br></br>**status: 401 Unauthorized(토큰 없는 경우)**<br/>{<br/>"message": "헤더에 authorization 정보가 존재하지 않습니다."<br/>}</br>                                                                                                                                                                                                                                                                                                                                                                     |
| Todo    | 전체 투두 조회           | /api/todoList            | GET    | -                                                                                                                                             | {<br/> "todoList": [<br/>{<br/>"id": "투두 아이디",<br/>"userId": "유저 아이디",<br/>"title": "제목",<br/>"content": "내용",<br/>"isDone": 불리언 값<br/>},<br/>{<br/>"id": "투두 아이디",<br/>"userId": "유저 아이디",<br/>"title": "제목",<br/>"content": "내용",<br/>"isDone": 불리언 값<br/>},<br/>...<br/>]                                                                                                                                                                                                                                                                                                |
| Todo    | 투두 상세 조회           | /api/todoList/:id        | GET    | {id: id}                                                                                                                                      | {<br/>"id": "투두 아이디",<br/>"userId": "유저 아이디",<br/>"title": "제목",<br/>"content": "내용",<br/>"isDone": 불리언 값<br/>}                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Todo    | 투두 생성                | /api/todoList/:id        | POST   | {<br/>"id": "투두 아이디"(자동 생성),<br/>"userId": "유저 아이디",<br/>"title": "제목",<br/>"content": "내용",<br/>"isDone": false (초기값 false)<br/>} |
| Todo    | 투두 삭제                | /api/todoList/:id        | DELETE | {id: id}                                                                                                                                      |
| Todo    | 투두 수정                | /api/todoList/:id        | PATCH  | {<br/>...currentTodo,<br/>"title": "수정한 제목",<br/>"content": "수정한 내용",<br/>}                                                         |
| Todo    | 투두 수정(isDone 토글)   | /api/todoList/:id        | PATCH  | {<br/>...currentTodo,<br/>"isDone": !currentTodo.isDone<br/>}                                                                                   |
| Comment | 투두 별 댓글 리스트 조회 | /api/comments?todoId=:id | GET    | {id: id}                                                                                                                                      | [<br/>{<br/>"id": "댓글 아이디",<br/>"userId": "유저 아이디",<br/>"todoId": "동일한 투두 아이디",<br/>"comment": "댓글"<br/>},<br/>{<br/>"id": "댓글 아이디",<br/>"userId": "유저 아이디",<br/>"todoId": "동일한 투두 아이디",<br/>"comment": "댓글"<br/>},<br/>]                                                                                                                                                                                                                                                                                                                                               |
| Comment | 댓글 생성                | /api/comments            | POST   | {<br/>"id": "댓글 아이디"(자동 생성),<br/>"userId": "유저 아이디",<br/>"todoId": "투두 아이디",<br/>"comment": "댓글"<br/>}                   |
| Comment | 댓글 삭제                | /api/comments/:id        | DELETE | {id: id}                                                                                                                                      |
| Comment | 댓글 수정                | /api/comments/:id        | PATCH  | {<br/>...currentComment,<br/>"comment": "수정한 댓글"<br/>}                                                                                   |

## ✍️ 질문에 대한 답변

#### 1. Custom Hook을 구현하실 때 어떤 기능을 위해 사용하셨나요? 또한 Custom Hook을 사용함으로써 어떤 이점을 얻으셨나요?
1. 리액트 포탈 사용을 위한 modal 훅 생성
  - 이점: 필요한 곳에서 빠르고 간편하게 호출 가능
2. 비동기 처리 로직 분리를 위해 mutate, query 훅 생성
  - 이점: 컴포넌트 내부 로직 복잡성 감소 및 가독성 향상
  - 단점: 파일양 증가

#### 2. API 서버의 URL을 .env 파일을 사용하여 숨기는 이유는 무엇일까요?
- 보안

#### 3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?
- 서버 상태 관리: 서버에서 받아오는 TodoList, Comments의 경우 TanStackQuery으로 관리
- 클라이언트 상태 관리: Error, Modal 등은 useState 및 리덕스 툴킷으로 관리