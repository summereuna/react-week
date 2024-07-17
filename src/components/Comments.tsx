import Button from "@components/Button";
import CommentItem from "@components/CommentItem";
import * as S from "@styles/components/comment/comments.style";

export default function Comments() {
  return (
    <S.CommentsContainer>
      <S.Title>댓글 0</S.Title>
      {/*  */}
      <S.CommentListWrapper>
        <CommentItem />
      </S.CommentListWrapper>
      {/*  */}
      <S.Form>
        <S.Avatar></S.Avatar>
        <S.FormContainer>
          <S.TextareaWrapper>
            <S.Textarea
              placeholder="댓글을 입력하세요. (최대 200글자)"
              maxLength={200}
            />
            <S.UserIdText>userId</S.UserIdText>
          </S.TextareaWrapper>
          <Button>등록</Button>
        </S.FormContainer>
      </S.Form>
    </S.CommentsContainer>
  );
}
