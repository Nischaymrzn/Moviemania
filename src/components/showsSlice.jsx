import { createSlice } from "@reduxjs/toolkit";

const ticketQty =
  localStorage.getItem("ticketQty") != null
    ? JSON.parse(localStorage.getItem("ticketQty"))
    : 0;
const ticketPrice =
  localStorage.getItem("ticketPrice") != null
    ? JSON.parse(localStorage.getItem("ticketPrice"))
    : 0;

const selectedMovie =
  localStorage.getItem("selectedMovie") != null
    ? JSON.parse(localStorage.getItem("selectedMovie"))
    : [];
const initialState = {
  ticketQty: ticketQty,
  ticketPrice: ticketPrice,
  selectedMovie: selectedMovie,
};

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
