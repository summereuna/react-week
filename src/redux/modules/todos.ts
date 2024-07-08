// Actions
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";

// Action Creators
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = (id) => {
  return {
    type: UPDATE_TODO,
    payload: id,
  };
};

const initialState = {
  todoList: [
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
  ],
};

// Reducer
export default function todos(state = initialState, action) {
  switch (action.type) {
    //Unexpected lexical declaration in case block.eslintno-case-declarations 오류
    //중괄호로 감싸면 됨
    case ADD_TODO: {
      const { title, content } = action.payload;
      const newTodo = { id: Date.now(), title, content, isDone: false };
      return {
        ...state,
        todoList: [...state.todoList, newTodo],
      };
    }

    case DELETE_TODO: {
      const id = action.payload;
      const newToDoList = state.todoList.filter((todo) => todo.id !== id);
      return {
        ...state,
        todoList: newToDoList,
      };
    }

    case UPDATE_TODO: {
      const id = action.payload;
      const updateIsDoneTodo = state.todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return {
        ...state,
        todoList: updateIsDoneTodo,
      };
    }

    default:
      return state;
  }
}
