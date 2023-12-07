import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
   name: "counter",
   initialState: {
      counter: 100,
   },
   reducers: {
      increaseAction(state, action) {
         state.counter = state.counter + action.payload;
      },
      decreaseAction(state, action) {
         state.counter = state.counter - action.payload;
      },
   },
});

export default counter.reducer;
export const { decreaseAction, increaseAction } = counter.actions;
