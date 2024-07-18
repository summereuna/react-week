import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import useCreateComment from "@/hooks/useCreateComment";
import { Comment } from "@/types";
import CommentForm from "@components/Comment/CommentForm";
import CommentList from "@components/Comment/CommentList";
import { clearAlert, setAlert } from "@redux/slices/alertSlice";
import * as S from "@styles/components/comment/comments.style";
import { useState } from "react";

interface CommentsProps {
  todoId: string;
  userId: string;
}

export default function Comments({ todoId, userId }: CommentsProps) {
  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector((state) => state.alert["commentForm"]);

  const { createComment } = useCreateComment();

  const [comment, setComment] = useState("");

  const changeNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (alertMessage) {
      dispatch(clearAlert("commentForm"));
    }

    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      dispatch(
        setAlert({
          formId: "commentForm",
          message: "댓글을 1글자 이상 적어 주세요.",
        })
      );
      return;
    }

    const newComment: Omit<Comment, "id"> = {
      userId,
      todoId,
      comment,
    };

    createComment(newComment);

    setComment("");
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
          onChange={changeNewComment}
          onSubmit={handleSubmit}
          value={comment}
          userId={userId}
          alertMessage={alertMessage}
        />
      </S.CommentsContainer>
    </>
  );
}
