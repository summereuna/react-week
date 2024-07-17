import Button from "@components/Button";
import * as S from "@styles/components/comment/commentForm.style";

interface CommentForm {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  value: string;
  userId: string;
  alertContent?: string;
  isEditing?: boolean;
  onEditEnd?: () => void;
}
export default function CommentForm({
  onChange,
  onSubmit,
  value,
  userId,
  alertContent,
  isEditing,
  onEditEnd,
}: CommentForm) {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Avatar>{/* <S.AvatarImg alt={`avatar`} /> */}</S.Avatar>

      <S.FormContainer>
        <S.TextareaWrapper>
          <S.Textarea
            onChange={onChange}
            value={value}
            placeholder="댓글을 입력하세요. (최대 200글자)"
            maxLength={200}
            minLength={1}
          />
          <p>{alertContent}</p>
          <S.UserIdText>{userId}</S.UserIdText>
        </S.TextareaWrapper>
        <S.ButtonWrapper>
          <Button type="submit">등록</Button>
          {isEditing ? (
            <Button type="button" buttonTheme="btnDelete" onClick={onEditEnd}>
              취소
            </Button>
          ) : null}
        </S.ButtonWrapper>
      </S.FormContainer>
    </S.Form>
  );
}
