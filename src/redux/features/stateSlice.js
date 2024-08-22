import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  siteLogo: "",
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroupType: (state, action) => {
      state.group = action.payload;
    },
    setSiteLogo: (state, action) => {
      state.siteLogo = action.payload;
    },
  },
});

export const { setGroupType,setSiteLogo } = stateSlice.actions;

export default stateSlice.reducer;
