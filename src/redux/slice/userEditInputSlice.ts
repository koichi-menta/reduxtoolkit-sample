import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../api/user";

// 初期値
const initialState = {
  userEditInput: {
    id: "",
    name: "",
    age: 0,
    hoby: "",
  },
};

// データを管理したい対象1つにつき1つ作成するスライス
export const userEditInputSlice = createSlice({
  name: "userEditInput",
  initialState,
  reducers: {
    // 既に管理してるデータと新しく管理したいデータをなんかできる関数
    userEditInput: (state, action: PayloadAction<User>) => {
      // 今回はユーザーの入力を管理する変数に渡ってきたデータをそのまま格納してる
      state.userEditInput = action.payload;
    },
  },
});

// なんかできる関数をexportして他のコンポーネントで使えるようにする
export const { userEditInput } = userEditInputSlice.actions;

// スライスのデータの塊をexportする(基本は大元のstoreで使う)
export default userEditInputSlice.reducer;
