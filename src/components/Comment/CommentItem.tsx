import { useAppDispatch, useAppSelector } from "@/hooks/rtkHooks";
import useEditComment from "@/hooks/useEditComment";
import useUser from "@/hooks/useUser";
import CommentForm from "@components/Comment/CommentForm";
import EditIcon from "@components/EditIcon";
import { clearAlert, setAlert } from "@redux/slices/alertSlice";
import * as S from "@styles/components/comment/commentItem.style";
import { useEffect, useState } from "react";

interface CommentItemProps {
  commentId: string;
  todoId: string;
  userId: string;
  comment: string;
  isEditing: boolean;
  onEditStart: () => void;
  onEditEnd: () => void;
}
export default function CommentItem({
  commentId,
  todoId,
  userId,
  comment,
  isEditing,
  onEditStart,
  onEditEnd,
}: CommentItemProps) {
  const { id: myId } = useUser();
  const dispatch = useAppDispatch();
  const alertMessage = useAppSelector(
    (state) => state.alert["editCommentForm"]
  );

  //패치하는 로직 여기서 구현
  const { editMutate } = useEditComment();

  const [updatedComment, setUpdatedComment] = useState(
    isEditing ? comment : ""
  );

  useEffect(() => {
    if (isEditing) {
      setUpdatedComment(comment);
    }
  }, [isEditing, comment]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (alertMessage) {
      dispatch(clearAlert("editCommentForm"));
    }

    console.log(e.target.value);
    setUpdatedComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!updatedComment.trim()) {
      dispatch(
        setAlert({
          formId: "editCommentForm",
          message: "댓글을 1글자 이상 적어 주세요.",
        })
      );
      return;
    }

    const newUpdatedComment = {
      id: commentId,
      userId,
      todoId,
      comment: updatedComment,
    };

    //에디팅 중인 경우, 폼에서 새로 작성한 댓글 비동기 통신 보내기
    if (isEditing) {
      editMutate(newUpdatedComment);
    }

    //그러고 나서 에디팅 종료 함수 실행
    onEditEnd();

    setUpdatedComment("");
  };

  return (
    <>
      {!isEditing && (
        <S.CommentContainer>
          <S.Avatar>{/* <S.AvatarImg alt={`avatar`} /> */}</S.Avatar>
          <S.TextContainer>
            <S.TextareaWrapper>
              <S.TextUserId>{userId}</S.TextUserId>
              <S.TextContent>{comment}</S.TextContent>
            </S.TextareaWrapper>
          </S.TextContainer>
          {userId === myId && (
            <EditIcon onEditStart={onEditStart} commentId={commentId} />
          )}
          {/* 모달 메뉴 열고 수정 선택해야 에디팅 시작하기 때문에 더 내려주기 */}
        </S.CommentContainer>
      )}
      {isEditing && (
        <S.CommentContainer>
          <CommentForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            value={updatedComment}
            userId={userId}
            isEditing={isEditing}
            onEditEnd={onEditEnd}
            alertMessage={alertMessage}
          />
        </S.CommentContainer>
      )}
    </>
  );
}
