import { createSlice, configureStore } from "@reduxjs/toolkit";
//in redux inside method we have to also copy the othe state everytime, even we don't have to change anything in them but with the help of reduxjs/toolkit - slice we can only can that state in which we want to make changes.

import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  //reducer is the default key name here.
  reducer: { counter: counterSlice, auth: authSlice },
  //as we are exporting reducers from there component, we don't need to access the reducers from here.
});
//configureStore creates an store, also in convert multiple reducers fn into one. it needs an object

export default store;
