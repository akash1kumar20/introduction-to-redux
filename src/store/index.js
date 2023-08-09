import { createSlice, configureStore } from "@reduxjs/toolkit";
//in redux inside method we have to also copy the othe state everytime, even we don't have to change anything in them but with the help of reduxjs/toolkit - slice we can only can that state in which we want to make changes.
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //inside methods of reducers we can mutate the state, but it's not a good practice.
    increment(state) {
      state.counter++;
      //redux used another tool - imgur, which dedcuted the above like code and help to not manipulate the state, instead of replace the old state with the new one.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    reset(state) {
      state.counter = state.counter - state.counter;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
      //this is just change the previous value, if it's true it change it to the false, else vice-versa.
    },
  },
});
//createSlice wants an object as a argument.
//for states which are not realted to each other we can create the different slices.
//every slice needs a name, which works as the identifier of that slice.
//second it need initial state. which tells that what are the value of the things in the starting.
//third it need reducers - basically different kinds of action/methods.

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
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  //reducer is the default key name here.
});
//configureStore creates an store, also in convert multiple reducers fn into one. it needs an object
export const counterActions = counterSlice.actions;
//exporting our actions also with the store.
export const authActions = authSlice.actions;
export default store;
