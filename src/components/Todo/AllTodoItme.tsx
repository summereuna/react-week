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
      id={id} //문자열
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
