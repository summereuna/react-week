// import Button from "@components/Button";
import useGetTodoComments from "@/hooks/useGetTodoComments";
import { Comment } from "@/types";
import * as S from "@styles/components/comment/commentList.style";
import CommentItem from "@components/Comment/CommentItem";
import { useState } from "react";

interface CommentListProps {
  todoId: string;
}

export default function CommentList({ todoId }: CommentListProps) {
  //투두에 달린 댓글 전체 리스트
  const { todoComments } = useGetTodoComments(todoId);

  // 현재 수정 중인 댓글 id 확인용 상태
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // 에디팅 모드 시작하는 함수
  const handleEditStart = (commentId: string) => {
    setEditingCommentId(commentId);
  };

  // 에디팅 모드 종료하는 함수
  const handleEditEnd = () => {
    setEditingCommentId(null); //댓글 id값 비우기
  };

  return (
    <>
      <S.Title>댓글 {todoComments?.length ?? `0`}</S.Title>
      <S.UlComments>
        {todoComments?.map((item: Comment) => (
          <S.LiComments key={item.id}>
            <CommentItem
              commentId={item.id}
              userId={item.userId}
              comment={item.comment}
              todoId={item.todoId}
              isEditing={editingCommentId === item.id} //아이디값 동일한 CommentItem 컴포넌트에 대해 에디팅 진행
              onEditStart={() => handleEditStart(item.id)} //에디팅 시작하는 함수 밑으로 내려주기
              onEditEnd={handleEditEnd} //에디팅 종료하는 함수 밑으로 내려주기
            />
          </S.LiComments>
        ))}
      </S.UlComments>
    </>
  );
}
