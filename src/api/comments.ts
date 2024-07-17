import api from "@axios/api";
import { Comment } from "@/types";

//GET 각 투두 아이디별 코멘트 조회하기
export const fetchTodoComments = async (todoId: string) => {
  const response = await api.get(`/comments?todoId=${todoId}`);
  return response.data;
};

// POST Comment 생성
// id는 서버에서 받아옴
export const addComment = async (newComment: Omit<Comment, "id">) => {
  const response = await api.post(`/comments`, newComment);
  return response.data;
};

// DELETE Comment 지우기
export const deleteComment = async (id: string) => {
  await api.delete(`/comments/${id}`);
};

// PATCH Comment 업데이트하기
export const editComment = async (updatedComment: Comment) => {
  const response = await api.patch(
    `/comments/${updatedComment.id}`,
    updatedComment
  );
  return response.data;
};
