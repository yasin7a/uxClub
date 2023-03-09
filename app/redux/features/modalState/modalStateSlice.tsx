import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
type initialStateType = {
  id: string | number | boolean;
};
const initialState: initialStateType = {
  id: false,
};

export const modalSlice = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {
    changeModal: (state, action: PayloadAction<string | number | boolean>) => {
      state.id = action.payload;
    },
  },
});

export const selectModal = (state: RootState) => state.isModalOpen.id;
export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
