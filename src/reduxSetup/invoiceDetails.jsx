import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoiceDetails",
  initialState: {},
  reducers: {
    invoiceDetailsAdded(state, action) {
      return action.payload;
    },
  },
});

export const { invoiceDetailsAdded } = invoiceSlice.actions;
export default invoiceSlice.reducer;
