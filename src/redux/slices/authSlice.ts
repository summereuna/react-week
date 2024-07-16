import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
  user: {
    id: string;
    nickname: string;
    avatar: string | null;
  };
};

//초기값 설정
//쿠키로 해도되고 로컬스토리지에 저장된 USER_ID로 해도 되고
//토큰의 만료 시간이 끝나지 않은 경우 + 로컬 스토리지에 해당 아이디 저장되어 있다면 앱 새고해도 로그인 상태를 유지
const userId = localStorage.getItem("USER_ID");

const initialState: AuthState = {
  isLoggedIn: !!userId, //로컬스토리지에 있는 유저 아이디 불리언 값으로 체크
  user: {
    id: userId!,
    nickname: "익명",
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: AuthState["user"] }>) => {
      state.isLoggedIn = true;
      const user = action.payload.user;
      state.user = user;
      localStorage.setItem("USER_ID", user.id);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = initialState.user;
      localStorage.removeItem("USER_ID");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
