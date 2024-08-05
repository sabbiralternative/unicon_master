import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import stateReducer from "./features/stateSlice";
export const store = configureStore({
  reducer: {
    state: stateReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
