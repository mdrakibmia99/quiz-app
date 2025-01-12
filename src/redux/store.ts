import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./features/quiz/quizSlice";
import { quizApi } from "./api/quiz/quizApi";

export const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(quizApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

