import { Link } from "react-router-dom";
import * as S from "@styles/components/todo/todoItem.style";
import { rightIcon } from "@shared/icons";
import { CSIconS } from "@styles/components/icon.style";
import { Todo } from "@/types";

export default function AllTodoItem({
  id,
  userId,
  title,
  content,
  isDone,
}: Todo) {
  return (
    <S.TodoWrapper
      id={id} // div 요소의 id 속성은 문자열이어야 함 > 걍 다 문자열로 통일 ^^~~ 혹시 나중에 서버 바꿔서 uuid 쓸거 생각하면
      $isDone={`${isDone ? "done" : "working"}`}
    >
      <S.TodoContentContainer>
        <S.UserName>{userId} 님</S.UserName>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
        <Link to={`/todos/${id}`}>
          <S.LinkToDetailPageText>
            <CSIconS>{rightIcon}</CSIconS>
            <span>상세페이지</span>
          </S.LinkToDetailPageText>
        </Link>
      </S.TodoContentContainer>
    </S.TodoWrapper>
  );
}
