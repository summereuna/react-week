// import Button from "@components/Button";
import * as S from "@styles/components/comment/commentItem.style";

export default function CommentItem() {
  const comments = [
    {
      id: "2f1d",
      userId: "eueu",
      todoId: "0f7f",
      comment:
        "열공열공열공열공열공열공열공열공열공열공\n열공열공열공열\n공열공열공열\n공열공열공열공열공열공열공열공열공열공열공열공",
    },
    {
      id: "es24",
      userId: "summereuna",
      todoId: "0f7f",
      comment:
        "아아테스트아아테스트아아테스트아아테스트아\n\n\n\n아테스트아아테스트아아테스트아아테스트아아테스트아아테스트아아테스트아아테스트아아테스트아아테스트",
    },
  ];
  return (
    <S.UlComments>
      {comments.map((item) => (
        <S.LiComments key={item.id}>
          <S.CommentContainer>
            <S.Avatar></S.Avatar>
            <S.TextContainer>
              <S.TextareaWrapper>
                <S.TextUserId>{item.userId}</S.TextUserId>
                <S.TextContent>{item.comment}</S.TextContent>
              </S.TextareaWrapper>
              {/* <Button>수정</Button>
              <Button>등록</Button> */}
            </S.TextContainer>
          </S.CommentContainer>
        </S.LiComments>
      ))}
    </S.UlComments>
  );
}
