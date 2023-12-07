import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./showsSlice";
import invoiceReducer from "./invoiceDetails";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    invoiceDetails: invoiceReducer,
  },
});
