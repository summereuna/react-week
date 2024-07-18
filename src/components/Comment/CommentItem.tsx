import useEditComment from "@/hooks/useEditComment";
import useUser from "@/hooks/useUser";
import { Comment } from "@/types";
import CommentForm from "@components/Comment/CommentForm";
import EditIcon from "@components/EditIcon";
import * as S from "@styles/components/comment/commentItem.style";

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
  const { editMutate, isPending, isError } = useEditComment();

  const onEditComment = (updatedComment: Comment) => {
    editMutate(updatedComment);
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
            userId={userId}
            todoId={todoId}
            commentId={commentId}
            preComment={comment}
            formId={"editCommentForm"}
            onEditComment={onEditComment}
            isEditing={isEditing}
            onEditEnd={onEditEnd}
            isPending={isPending}
            isError={isError}
          />
        </S.CommentContainer>
      )}
    </>
  );
}
