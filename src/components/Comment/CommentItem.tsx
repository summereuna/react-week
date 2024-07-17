import useEditComment from "@/hooks/useEditComment";
import CommentForm from "@components/Comment/CommentForm";
import EditIcon from "@components/EditIcon";
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
    setUpdatedComment(e.target.value);
  };

  const [alertContent, setAlertContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("댓글 수정 폼 submit");
    if (!comment.trim()) {
      setAlertContent(`댓글은 1글자 이상 적어 주세요.`);
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
          <EditIcon onEditStart={onEditStart} />
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
            alertContent={alertContent}
          />
        </S.CommentContainer>
      )}
    </>
  );
}
