import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  token: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginLocal(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logoutLocal(state, action) {
      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const {loginLocal, logoutLocal} = userSlice.actions
export default userSlice.reducer
