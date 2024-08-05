import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import stateReducer from "./features/stateSlice";
//dsfsdfsdf
export const store = configureStore({
  reducer: {
    state: stateReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
