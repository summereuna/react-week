//한 라우트 안에서 중첩된 구조를 가지게 하는게 중첩 라우트
//예) 사용자 대시 보드에 A,B,C섹션 있는 경우 각 섹션 별 다른 경로 설정 가능

import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <>
      <div>DashBoardLayout</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
