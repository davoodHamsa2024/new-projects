import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    user: {},
    usr: false,
    admin: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.usr = action.payload?.role === "User" ? true : false;
      state.admin = action.payload?.role === "Admin" ? true : false;
    },
    logout: (state) => {
      state.user = {};
      state.usr = false;
      state.admin = false;
    },
    update: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, update } = AuthSlice.actions;
export default AuthSlice.reducer;
