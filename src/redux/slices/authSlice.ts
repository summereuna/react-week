import { getCookie } from "@/utils/cookie";
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
//토큰의 만료 시간이 끝나지 않은 경우 앱 새고해도 로그인 상태를 유지
const token = getCookie("accessToken"); //쿠키에 있는 accessToken으로 체크(1시간 유효)
const userId = localStorage.getItem("USER_ID");

const initialState: AuthState = {
  isLoggedIn: !!token, //boolean 값으로 가져오기
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
