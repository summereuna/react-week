import useCreateComment from "@/hooks/useCreateComment";
import { Comment } from "@/types";
import CommentForm from "@components/Comment/CommentForm";
import CommentList from "@components/Comment/CommentList";
import * as S from "@styles/components/comment/comments.style";

interface CommentsProps {
  todoId: string;
  userId: string;
}

export default function Comments({ todoId, userId }: CommentsProps) {
  const { createComment, isPending, isError } = useCreateComment();

  const onCreateComment = (newComment: Omit<Comment, "id">) => {
    createComment(newComment);
  };

  return (
    <>
      <S.CommentsContainer>
        {/*  */}
        <S.CommentListWrapper>
          <CommentList todoId={todoId} />
        </S.CommentListWrapper>
        {/*  */}
        <CommentForm
          userId={userId}
          todoId={todoId}
          formId={"createCommentForm"}
          isPending={isPending}
          isError={isError}
          onCreateComment={onCreateComment}
        />
      </S.CommentsContainer>
    </>
  );
}
