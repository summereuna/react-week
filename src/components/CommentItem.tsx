// import Button from "@components/Button";
import useGetTodoComments from "@/hooks/useGetTodoComments";
import { Comment } from "@/types";
import * as S from "@styles/components/comment/commentItem.style";
import EditIcon from "@components/EditIcon";

interface CommentItemProps {
  todoId: string;
}

export default function CommentItem({ todoId }: CommentItemProps) {
  const { todoComments } = useGetTodoComments(todoId);
  const isData = !!todoComments;
  return (
    <>
      <S.Title>댓글 {isData ? todoComments.length : `0`}</S.Title>
      <S.UlComments>
        {todoComments?.map((item: Comment) => (
          <S.LiComments key={item.id}>
            <S.CommentContainer>
              <S.Avatar>{/* <S.AvatarImg alt={`avatar`} /> */}</S.Avatar>
              <S.TextContainer>
                <S.TextareaWrapper>
                  <S.TextUserId>{item.userId}</S.TextUserId>
                  <S.TextContent>{item.comment}</S.TextContent>
                </S.TextareaWrapper>
              </S.TextContainer>
              <EditIcon />
            </S.CommentContainer>
          </S.LiComments>
        ))}
      </S.UlComments>
    </>
  );
}
