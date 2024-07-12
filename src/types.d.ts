export interface Todo {
  id: string; //나중에 uuid로???
  title: string;
  content: string;
  isDone: boolean;
}

export interface User {
  id: string;
  password: string;
  nickname?: string;
}
