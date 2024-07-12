import { rightIcon } from "@shared/icons";
import * as S from "@styles/components/card.style";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  goTo: string;
  path: string;
  onClick: () => void;
}

export default function Card({
  title,
  content,
  goTo,
  path,
  onClick,
}: CardProps) {
  return (
    <S.CardContainer onClick={onClick}>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardContent>{content}</S.CardContent>
      <Link to={`${path}`}>
        <S.LinkWrapper>
          <S.Icon>{rightIcon}</S.Icon>
          <S.Text>{goTo}</S.Text>
        </S.LinkWrapper>
      </Link>
    </S.CardContainer>
  );
}
