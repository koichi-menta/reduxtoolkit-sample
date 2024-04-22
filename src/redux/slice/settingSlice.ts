import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ReserveInput = {
  reserver: string;
  dateOfUse: string;
  remarks: string;
};

const initialState = {
  reserve: {
    reserver: "",
    dateOfUse: "",
    remarks: "",
  },
};

export const reserveSlice = createSlice({
  name: "reserveInput",
  initialState,
  reducers: {
    reserveInput: (state, action: PayloadAction<ReserveInput>) => {
      state.reserve = action.payload;
    },
  },
});

export const { reserveInput } = reserveSlice.actions;

export const selectCount = (state: RootState) => state.counter.reserve;

export default reserveSlice.reducer;
