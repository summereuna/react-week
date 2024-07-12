import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
  accessToken?: string | undefined;
  user: {
    id: string;
    nickname: string;
    avatar: string | null;
  };
};

const accessToken = localStorage.getItem("accessToken");
const userId = localStorage.getItem("userId"); //일단 얘도 추가 로그인 안풀리게

const initialState: AuthState = {
  isLoggedIn: !!accessToken, //원래는 이니셜로 false 주는게 맞는데 로컬에 토큰 남아있는 경우 로그인 유지 위해 ㅇㅇ
  accessToken: accessToken!, //undefined 인데 마찬가지로
  user: {
    id: userId!, //얘도
    nickname: "익명", //얘네 둘은 나중에
    avatar: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ accessToken: string; user: AuthState["user"] }>
    ) => {
      const accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
      state.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
      const user = action.payload.user;
      state.user = user;
      localStorage.setItem("userId", user.id);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = undefined;
      localStorage.removeItem("accessToken");
      state.user = initialState.user;
      localStorage.removeItem("userId");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
