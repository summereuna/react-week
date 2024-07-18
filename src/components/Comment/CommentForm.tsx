import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import { Comment } from "@/types";
import AlertText from "@components/AlertText";
import Button from "@components/Button";
import { clearAlert, setAlert } from "@redux/slices/alertSlice";
import * as S from "@styles/components/comment/commentForm.style";
import { useEffect, useState } from "react";

interface CommentForm {
  userId: string;
  todoId: string;
  commentId?: string;
  preComment?: string;
  isEditing?: boolean;
  onEditEnd?: () => void;
  formId: string;
  isPending: boolean;
  isError: boolean;
  onCreateComment?: (newComment: Omit<Comment, "id">) => void;
  onEditComment?: (updatedComment: Comment) => void;
}
export default function CommentForm({
  userId,
  todoId,
  commentId,
  preComment,
  isEditing,
  onEditEnd,
  formId,
  isPending,
  isError,
  onCreateComment,
  onEditComment,
}: CommentForm) {
  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector((state) => state.alert[formId]);

  const [comment, setComment] = useState("");

  const changeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (alertMessage) {
      dispatch(clearAlert(formId));
    }

    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      dispatch(
        setAlert({
          formId: formId,
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

    if (!isEditing) {
      onCreateComment?.(newComment);
    } else {
      //업데이트
      const updatedComment = {
        id: commentId!,
        userId,
        todoId,
        comment,
      };
      onEditComment?.(updatedComment);
      onEditEnd!(); // 그러고 나서 에디팅 종료 함수 실행
    }

    setComment("");
  };

  useEffect(() => {
    if (isEditing && preComment) {
      setComment(preComment);
    }
  }, [isEditing, preComment]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Avatar>{/* <S.AvatarImg alt={`avatar`} /> */}</S.Avatar>

      <S.FormContainer>
        <S.TextareaWrapper>
          <S.Textarea
            onChange={changeComment}
            value={comment}
            placeholder="댓글을 입력하세요. (최대 200글자)"
            maxLength={200}
            minLength={1}
          />
          <AlertText>{alertMessage}</AlertText>
          {isError && (
            <AlertText>{"오류가 발생했습니다. 다시 시도해 주세요!"}</AlertText>
          )}
          <S.UserIdText>{userId}</S.UserIdText>
        </S.TextareaWrapper>
        <S.ButtonWrapper>
          <Button type="submit" disabled={isPending}>
            등록
          </Button>
          {isEditing ? (
            <Button
              type="button"
              buttonTheme="btnDelete"
              onClick={onEditEnd}
              disabled={isPending}
            >
              취소
            </Button>
          ) : null}
        </S.ButtonWrapper>
      </S.FormContainer>
    </S.Form>
  );
}
