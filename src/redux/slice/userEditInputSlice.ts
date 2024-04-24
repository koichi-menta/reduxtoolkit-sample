import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../api/user";

const initialState = {
  userEditInput: {
    id: "",
    name: "",
    age: 0,
    hoby: "",
  },
};

export const userEditInputSlice = createSlice({
  name: "userEditInput",
  initialState,
  reducers: {
    userEditInput: (state, action: PayloadAction<User>) => {
      state.userEditInput = action.payload;
    },
  },
});

export const { userEditInput } = userEditInputSlice.actions;

export const selectCount = (state: RootState) =>
  state.userEditInput.userEditInput;

export default userEditInputSlice.reducer;
