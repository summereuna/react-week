import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/config/store";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string; // uuid 문자열 반환
  title: string;
  content: string;
  isDone: boolean;
};

export interface TodosState {
  todoList: Todo[];
}

const initialState: TodosState = {
  todoList: [
    {
      id: "1",
      title: "리액트 공부",
      content: "입문 강의 듣기",
      isDone: true,
    },
    {
      id: "2",
      title: "리액트 공부",
      content: "lv.1 개인 과제 제출",
      isDone: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      const { title, content } = action.payload;
      //concat 메서드 사용해 불변성 지킬 수 있도록 새로운 배열 반환
      return {
        ...state,
        todoList: state.todoList.concat({
          id: uuidv4(),
          title,
          content,
          isDone: false,
        }),
      };
    },

    //생성된 작업 생성자는 리듀서에 제공한 PayloadAction<T> 유형을 기반으로 페이로드 인수를 허용하도록 올바르게 유형화됨
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== id),
      };
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos.todoList;

export default todosSlice.reducer;
