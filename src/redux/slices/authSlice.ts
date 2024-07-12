import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
  accessToken?: string | undefined;
};

const accessToken = localStorage.getItem("accessToken");

const initialState: AuthState = {
  isLoggedIn: !!accessToken,
  accessToken: accessToken!,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const accessToken = action.payload;
      state.isLoggedIn = true;
      state.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = undefined;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
