import useCreateComment from "@/hooks/useCreateComment";
import useModal from "@/hooks/useModal";
import { Comment } from "@/types";
import Button from "@components/Button";
import CommentItem from "@components/CommentItem";
import Error from "@components/Error";
import Loading from "@components/Loading";
import ModalAlert from "@components/Modal/ModalAlert";
import ModalLayout from "@components/Modal/ModalLayout";
import ModalPortal from "@components/Modal/ModalPortal";
import * as S from "@styles/components/comment/comments.style";
import { useState } from "react";

interface CommentsProps {
  todoId: string;
  userId: string;
}

export default function Comments({ todoId, userId }: CommentsProps) {
  const { createComment, isPending, isError } = useCreateComment();
  const { isVisible, openModal, closeModal } = useModal();
  const [alertContent, setAlertContent] = useState("");

  const [comment, setComment] = useState("");

  const changeNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setAlertContent(`댓글은 1글자 이상 적어 주세요.`);
      openModal();
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
          {isPending && (
            <Loading
              message={`댓글을 가져오는 중이에요!\n조금만 기다려 주세요!`}
            />
          )}
          {isError && (
            <Error message={`오류가 발생했어요.\n다시 시도해 주세요!`} />
          )}
          <CommentItem todoId={todoId} />
        </S.CommentListWrapper>
        {/*  */}
        <S.Form onSubmit={handleSubmit}>
          <S.Avatar></S.Avatar>
          <S.FormContainer>
            <S.TextareaWrapper>
              <S.Textarea
                onChange={changeNewComment}
                value={comment}
                placeholder="댓글을 입력하세요. (최대 200글자)"
                maxLength={200}
              />
              <S.UserIdText>{userId}</S.UserIdText>
            </S.TextareaWrapper>
            <Button type="submit">등록</Button>
          </S.FormContainer>
        </S.Form>
      </S.CommentsContainer>

      {isVisible && (
        <ModalPortal>
          <ModalLayout onClose={closeModal}>
            <ModalAlert onClose={closeModal} content={alertContent} />
          </ModalLayout>
        </ModalPortal>
      )}
    </>
  );
}
