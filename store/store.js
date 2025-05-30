import { configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/authService";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
});

export default store;
