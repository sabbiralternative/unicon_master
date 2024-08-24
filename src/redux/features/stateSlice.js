import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  showLoginModal: false,
  showRegisterModal: false,
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
    setShowRegisterModal: (state, action) => {
      state.showRegisterModal = action.payload;
      state.showLoginModal = false;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
      state.showRegisterModal = false;
    },
  },
});

export const {
  setGroupType,
  setSiteLogo,
  setShowLoginModal,
  setShowRegisterModal,
} = stateSlice.actions;

export default stateSlice.reducer;
