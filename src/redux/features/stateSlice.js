import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroupType: (state, action) => {
      state.group = action.payload;
    },
  },
});

export const { setGroupType } = stateSlice.actions;

export default stateSlice.reducer;
