// axios 요청 들어가는 모든 모듈

import api from "@axios/api";
import { Todo } from "@redux/slices/todosSlice";

// GET TodoList 조회
export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>(`/todoList`);
  return response.data;
};

export const fetchTodoById = async (id: string): Promise<Todo> => {
  const response = await api.get<Todo>(`/todoList/${id}`);
  return response.data;
};

// POST Todo 더하기
// id는 서버에서 받아옴
export const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await api.post<Todo>(`/todoList`, newTodo);
  return response.data;
};

// DELETE Todo 지우기
export const deleteTodo = async (id: string): Promise<void> => {
  await api.delete(`/todoList/${id}`);
};

// PATCH Todo 업데이트하기
export const editTodo = async (updatedTodo: Todo): Promise<Todo> => {
  const response = await api.patch<Todo>(
    `/todoList/${updatedTodo.id}`,
    updatedTodo
  );
  return response.data;
};

// PATCH isDone toggle 업데이트하기
export const toggleTodo = async (id: string): Promise<Todo> => {
  const currentTodo = await fetchTodoById(id);
  const updatedTodo = { ...currentTodo, isDone: !currentTodo.isDone };
  const response = await api.patch<Todo>(`/todoList/${id}`, updatedTodo);
  return response.data;
};

// const id = action.payload;
// const findTodo = state.todoList.find((todo) => todo.id === id);
// return {
//   ...state,
//   todo: findTodo!, //예외 처리는 나중에
// };
