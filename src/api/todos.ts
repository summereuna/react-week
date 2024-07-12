import api from "@axios/api";
import { Todo } from "@/types";

// GET TodoList 조회
export const fetchTodos = async () => {
  const response = await api.get(`/todoList`);
  return response.data;
};

export const fetchTodoById = async (id: string) => {
  const response = await api.get(`/todoList/${id}`);
  return response.data;
};

// POST Todo 더하기
// id는 서버에서 받아옴
export const addTodo = async (newTodo: Omit<Todo, "id">) => {
  const response = await api.post(`/todoList`, newTodo);
  return response.data;
};

// DELETE Todo 지우기
export const deleteTodo = async (id: string) => {
  await api.delete(`/todoList/${id}`);
};

// PATCH isDone toggle 업데이트하기
export const toggleTodo = async (id: string) => {
  const currentTodo = await fetchTodoById(id);
  const updatedTodo = { ...currentTodo, isDone: !currentTodo.isDone };
  const response = await api.patch(`/todoList/${id}`, updatedTodo);
  return response.data;
};

// PATCH Todo 업데이트하기
export const editTodo = async (updatedTodo: Todo) => {
  const response = await api.patch(`/todoList/${updatedTodo.id}`, updatedTodo);
  return response.data;
};
