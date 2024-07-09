// Actions
const ADD_TODO = "todos/ADD_TODO" as const;
const DELETE_TODO = "todos/DELETE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록

interface AddTodoParams {
  title: string;
  content: string;
}
// Action Creators
export const addTodo = ({ title, content }: AddTodoParams) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      title,
      content,
      isDone: false,
    },
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다.
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toggleTodo>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type Todo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};
// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];

// 초기상태를 선언합니다.
const initialState: TodosState = [
  {
    id: 1,
    title: "리액트 공부",
    content: "입문 강의 듣기",
    isDone: true,
  },
  {
    id: 2,
    title: "리액트 공부",
    content: "lv.1 개인 과제 제출",
    isDone: false,
  },
];

// Reducer
// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.

const todos = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title, content, isDone } = action.payload;
      //concat 메서드 사용해 불변성 지킬 수 있도록 새로운 배열 반환
      return state.concat({
        id,
        title,
        content,
        isDone,
      });
    }

    case DELETE_TODO: {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    }

    case TOGGLE_TODO: {
      const id = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    }

    default:
      return state;
  }
};

export default todos;
