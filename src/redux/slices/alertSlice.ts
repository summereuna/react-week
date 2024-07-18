import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//formId 별 고유 식별자 사용한 상태 관리
//인덱스 시그니처
export type AlertState = {
  [key: string]: string;
};

const initialState: AlertState = {};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (
      state,
      action: PayloadAction<{ formId: string; message: string }>
    ) => {
      const { formId, message } = action.payload;
      state[formId] = message; //동적 프로퍼티 사용하여 객체에 동적으로 속성 추가
    },
    clearAlert: (state, action: PayloadAction<string>) => {
      const formId = action.payload;
      state[formId] = "";
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
