import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeBetValues: null,
  showComponent: false,
  position: { top: 0, left: 0 },
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setShowComponent: (state, action) => {
      state.showComponent = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setPlaceBetValues: (state, action) => {
      state.placeBetValues = action.payload;
    },
  },
});

export const { setShowComponent, setPosition, setPlaceBetValues } =
  eventSlice.actions;

export default eventSlice.reducer;
