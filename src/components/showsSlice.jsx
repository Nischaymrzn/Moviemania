import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    showsAdded(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { showsAdded } = showsSlice.actions;
export default showsSlice.reducer;
