import { createSlice } from "@reduxjs/toolkit";
const authInitialState = {
  isAuthenticated: false,
};
//creating 2nd slice
const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    isLogin(state) {
      state.isAuthenticated = true;
    },
    isLogout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;

//exporting the reducers of the auth slice
export default authSlice.reducers;
//we have to export with the slice name, not with the file name
