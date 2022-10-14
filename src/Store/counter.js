import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // state.counter++ is valid here but since payload is used the below one is used
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload; //before action.amount-->action.payload as payload is the default arg of dispatched function in component
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
