import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import doubtReducer from "./Slices/DoubtSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    doubt: doubtReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
