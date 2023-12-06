import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./showsSlice";
export const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});
