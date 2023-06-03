import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/userDetailSlice";

export const store = configureStore({
  reducer: {
    app: todoReducer,
  },
});
