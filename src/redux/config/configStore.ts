import { configureStore } from "@reduxjs/toolkit";
// import todosSlice from "@redux/slices/todosSlice";
import authSlice from "@redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    // todos: todosSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
