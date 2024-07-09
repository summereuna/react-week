import * as S from "@styles/components/layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <S.Header className="header">
        <S.Logo to="/">My Todo List</S.Logo>
        <span>React</span>
      </S.Header>
      <S.Main className="main">{children}</S.Main>
    </S.Layout>
  );
}
