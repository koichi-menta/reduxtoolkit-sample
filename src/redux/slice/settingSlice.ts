import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  setting: {
    companyName: "",
  },
};

export const counterSlice = createSlice({
  name: "settingInput",
  initialState,
  reducers: {
    settingInput: (state, action) => {
      if (action.payload.name === "companyName") {
        state.setting.companyName = action.payload.value;
      }
    },
  },
});

export const { settingInput } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.setting;

export default counterSlice.reducer;
