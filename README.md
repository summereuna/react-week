# 📝 컴포넌트 구현하기

- React 주특기 주차 Lv.3 과제
- 정은화
- [배포한 사이트: vercel](https://lv3-lemon.vercel.app/)

## 📌 과제 개요

### 목표
- 컴포넌트 재사용성 높이기
- 모달 구현하기
- 드롭다운 모달로 구현하기

### 과제 조건
#### 1. Modal

- 모달 2개를 구현합니다.
    - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
    - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
    - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 합니다. (위에서 만든 버튼을 재사용하는 것도 좋아요.)

#### 2. Button

- 총 6개 형태의 버튼을 구현합니다. (예시 페이지에서 확인)
    - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용하여 구현하세요.
    - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요.

#### 3. Input

- 총 2개의 input을 구현합니다.
    - 일반형식의 input
    - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
    - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 `{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시해보세요.

#### 4. Select
- select를 구현합니다.
    - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됩니다.
    - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.


## ✍️ 질문에 대한 답변
#### 1. 모달을 구현할 때 `react-portal`을 사용 하셨나요? `react-portal`이 무엇이고 어떻게 작동하는지 설명해 주세요.
- createPortal을 사용하면 일부 자식을 DOM의 다른 부분으로 렌더링할 수 있다. 그래서 모달을 구현할 때 유용하다.
   - `index.html`의 `id="root"`인 div의 형제 노드로 `id="portal"`을 만들어 사용했다.
#### 2. 다양한 형태의 버튼을 만들 때, 공통된 스타일 요소와 각각의 특별한 스타일 요소를 어떤 방법으로 styled-component에 적용하셨나요?
- styled-component의 theme 를 사용하여 적용했다.
#### 3. 숫자 입력 필드에서 사용자가 입력한 콤마가 포함된 금액과 콤마가 제거된 실제 금액 값을 각각 어떻게 관리하셨나요? 이를 위해 여러 상태를 사용하셨나요, 아니면 단일 상태를 통해 처리하셨나요?
- 단일 state 사용
- [`Number.prototype.toLocaleString()`]([https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)) 메서드를 사용하여 사용자 인풋 값을 언어별(한국)로 표현한 문자열로 반환하는 방식을 사용하여 세 자리 수마다 `,`를 찍었다.
#### 4. `overflow: hidden`이 적용된 부모 요소에도 영향을 받지 않고 옵션이 제대로 표시되게 하는 방법은 무엇인가요?
- 드롭다운 컴포넌트를 리액트 포탈을 사용하여 모달로 구현한다.