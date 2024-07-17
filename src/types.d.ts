export interface Todo {
  id: string; //나중에 uuid로???
  userId: string;
  title: string;
  content: string;
  isDone: boolean;
  comments?: string[];
}

export interface User {
  id: string;
  password: string;
  nickname?: string;
}

export interface Comment {
  id: string;
  userId: string;
  todoId: string;
  comment: string;
}
