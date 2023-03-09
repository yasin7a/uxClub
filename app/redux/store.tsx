import { configureStore } from "@reduxjs/toolkit";
import modalStateReducer from "./features/modalState/modalStateSlice";

export const store = configureStore({
  reducer: {
    isModalOpen: modalStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
