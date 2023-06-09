import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import searchReducer from "./features/searchSlice";
import consultationReducer from "./features/consultationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    consultation: consultationReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
