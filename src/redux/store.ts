import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/user";
import userEditInputSlice from "./slice/userEditInputSlice";

export const store = configureStore({
  reducer: {
    // RTK Queryで通信を行った時の名前とデータ
    [userApi.reducerPath]: userApi.reducer,
    // reduxで管理するデータの名前とデータを定義
    userEditInput: userEditInputSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Reuduxを使うときに必要なコード
setupListeners(store.dispatch);

// ReduxをTypeScriptで使うときの型定義
export type RootState = ReturnType<typeof store.getState>;
