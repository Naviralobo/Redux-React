// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // reducer: counterSlice.reducer, //here we have only one reducer or reducer can take in an object
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
